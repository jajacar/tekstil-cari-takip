#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TekstilCari - Çok Kullanıcılı Ağ Sunucusu ve Gerçek Zamanlı Veritabanı
Python standart kütüphaneleri (sqlite3, http.server, json, socket) ile çalışır.
Hiçbir ek kuruluma ihtiyaç duymaz!
"""

import http.server
import socketserver
import json
import os
import sys
import time
import socket
import sqlite3
import threading
import webbrowser
import hashlib
import secrets
from urllib.parse import urlparse, parse_qs

import urllib.request
import xml.etree.ElementTree as ET

# Windows Konsol Karakter Kodlaması Düzeltmesi
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

PORT = int(os.environ.get("PORT", 8085))
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tekstil_veritabani.db")
# Geriye dönük uyumluluk: Eğer eski santiye_veritabani.db varsa onu da tanı
if not os.path.exists(DB_FILE):
    old_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), "santiye_veritabani.db")
    if os.path.exists(old_db):
        DB_FILE = old_db

# Yerel IP Adresini Otomatik Tespit Et
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.5)
        # Hedefe bağlanmadan yerel arayüz IP'sini alır
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        try:
            return socket.gethostbyname(socket.gethostname())
        except Exception:
            return "127.0.0.1"

# TCMB (Türkiye Cumhuriyet Merkez Bankası) Canlı Kur Önbelleği
tcmb_cache = {
    "last_fetch": 0,
    "data": None
}

def fetch_tcmb_rates(force=False):
    now = time.time()
    # 5 dakikada bir (300 sn) otomatik yenile, zorlanmadıysa önbellekten sun
    if not force and tcmb_cache["data"] and (now - tcmb_cache["last_fetch"] < 300):
        return tcmb_cache["data"]

    try:
        req = urllib.request.Request(
            'https://www.tcmb.gov.tr/kurlar/today.xml',
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        with urllib.request.urlopen(req, timeout=6) as resp:
            xml_data = resp.read()

        root = ET.fromstring(xml_data)
        bulten_no = root.attrib.get('Bulten_No', '-')
        tarih = root.attrib.get('Tarih', time.strftime('%d.%m.%Y'))
        date_str = root.attrib.get('Date', time.strftime('%m/%d/%Y'))

        def parse_rate(val):
            try:
                if not val or not val.strip():
                    return None
                return float(val.strip().replace(',', '.'))
            except Exception:
                return None

        rates = {}
        for c in root.findall('Currency'):
            code = c.get('CurrencyCode')
            if code in ['USD', 'EUR', 'GBP']:
                fb = parse_rate(c.findtext('ForexBuying'))
                fs = parse_rate(c.findtext('ForexSelling'))
                bb = parse_rate(c.findtext('BanknoteBuying')) or fb
                bs = parse_rate(c.findtext('BanknoteSelling')) or fs

                rates[code] = {
                    'code': code,
                    'name': c.findtext('Isim', code),
                    'forexBuying': fb,
                    'forexSelling': fs,
                    'banknoteBuying': bb,
                    'banknoteSelling': bs
                }

        result = {
            "success": True,
            "source": "Türkiye Cumhuriyet Merkez Bankası (TCMB)",
            "date": tarih,
            "dateEn": date_str,
            "bultenNo": bulten_no,
            "rates": rates,
            "updatedAt": time.strftime('%H:%M:%S'),
            "timestamp": int(now * 1000)
        }
        tcmb_cache["last_fetch"] = now
        tcmb_cache["data"] = result
        return result
    except Exception as e:
        # İnternet bağlantısı kesilirse veya TCMB meşgulse önbellek veya güvenli varsayılan kur
        if tcmb_cache["data"]:
            return tcmb_cache["data"]

        return {
            "success": False,
            "error": str(e),
            "source": "Çevrimdışı / Tahmini Kur",
            "date": time.strftime('%d.%m.%Y'),
            "rates": {
                "USD": {"code": "USD", "name": "ABD DOLARI", "forexBuying": 48.9466, "forexSelling": 49.0348, "banknoteBuying": 48.9124, "banknoteSelling": 49.1084},
                "EUR": {"code": "EUR", "name": "EURO", "forexBuying": 55.2967, "forexSelling": 55.3963, "banknoteBuying": 55.2579, "banknoteSelling": 55.4794},
                "GBP": {"code": "GBP", "name": "İNGİLİZ STERLİNİ", "forexBuying": 64.5000, "forexSelling": 64.8000, "banknoteBuying": 64.4000, "banknoteSelling": 64.9500}
            },
            "updatedAt": time.strftime('%H:%M:%S'),
            "timestamp": int(now * 1000)
        }

# Kimlik Doğrulama & Oturum Yönetimi Yardımcıları
def hash_password(password, salt=None):
    if not salt:
        salt = secrets.token_hex(16)
    pw_hash = hashlib.sha256((password + salt).encode("utf-8")).hexdigest()
    return pw_hash, salt

def verify_password(password, stored_hash, salt):
    if not stored_hash or not salt:
        return False
    pw_hash = hashlib.sha256((password + salt).encode("utf-8")).hexdigest()
    return pw_hash == stored_hash

def verify_session(token):
    if not token:
        return None
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        now_ms = int(time.time() * 1000)
        cursor.execute("SELECT username, expires_at FROM auth_sessions WHERE token = ?", (token,))
        row = cursor.fetchone()
        conn.close()
        if row and row[1] > now_ms:
            return row[0]
    except Exception:
        pass
    return None

def create_session(username):
    token = secrets.token_urlsafe(32)
    now_ms = int(time.time() * 1000)
    # 30 gün geçerli oturum
    expires_at = now_ms + (30 * 24 * 3600 * 1000)
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT OR REPLACE INTO auth_sessions (token, username, created_at, expires_at) VALUES (?, ?, ?, ?)",
        (token, username, now_ms, expires_at)
    )
    conn.commit()
    conn.close()
    return token

def delete_session(token):
    if not token:
        return
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM auth_sessions WHERE token = ?", (token,))
        conn.commit()
        conn.close()
    except Exception:
        pass

# SQLite Veritabanı Başlatma & Tablolar
def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Kullanıcılar tablosu (Kimlik Doğrulama)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS auth_users (
            username TEXT PRIMARY KEY,
            password_hash TEXT,
            salt TEXT,
            role TEXT DEFAULT 'admin',
            updated_at INTEGER
        )
    """)

    # Oturumlar tablosu
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS auth_sessions (
            token TEXT PRIMARY KEY,
            username TEXT,
            created_at INTEGER,
            expires_at INTEGER
        )
    """)

    # Varsayılan admin kullanıcısı kontrolü (Kullanıcı: admin, Şifre: tekstil2026)
    cursor.execute("SELECT username FROM auth_users WHERE username = 'admin'")
    if not cursor.fetchone():
        pw_hash, salt = hash_password("tekstil2026")
        cursor.execute(
            "INSERT INTO auth_users (username, password_hash, salt, role, updated_at) VALUES (?, ?, ?, ?, ?)",
            ("admin", pw_hash, salt, "admin", int(time.time() * 1000))
        )
        conn.commit()

    # Anahtar-Değer tablosu (JSON veri deposu)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS system_store (
            key TEXT PRIMARY KEY,
            value TEXT,
            updated_at INTEGER
        )
    """)

    # Başlangıç verisi kontrolü
    cursor.execute("SELECT value FROM system_store WHERE key = 'santiye_data'")
    row = cursor.fetchone()
    if not row:
        initial_data = {
            "projects": [
                {
                    "id": "proj_1",
                    "name": "1. Proje - Kuzey Konakları A Blok",
                    "notes": "4 Katlı Konut Projesi (Merkez Mah. 120 Ada 4 Parsel)"
                },
                {
                    "id": "proj_2",
                    "name": "2. Proje - Yıldız Plaza İş Merkezi",
                    "notes": "Ticari İş Merkezi ve Dükkanlar (Sanayi Cad.)"
                }
            ],
            "contractors": [
                {
                    "id": "c_kalipci_mahmut",
                    "projectId": "proj_1",
                    "name": "Kalıpçı Mahmut Usta",
                    "role": "Kalıp & Demir",
                    "phone": "0532 444 11 22",
                    "startDate": "2026-04-15",
                    "initialAgreement": 450000,
                    "notes": "Temel ve 4 normal kat kalıp/demir işçiliği götürü anlaşma.",
                    "transactions": [
                        {
                            "id": "tx_km_1",
                            "type": "PAYMENT",
                            "date": "2026-04-20",
                            "amount": 80000,
                            "method": "Banka Havalesi / EFT",
                            "ref": "Garanti EFT #9281",
                            "description": "Temel demir bağlama ve kalıp başlangıç avansı"
                        },
                        {
                            "id": "tx_km_2",
                            "type": "PAYMENT",
                            "date": "2026-05-12",
                            "amount": 100000,
                            "method": "Banka Havalesi / EFT",
                            "ref": "İş Bankası #4012",
                            "description": "1. ve 2. Kat tabliye beton dökümü sonrası ara hakediş ödemesi"
                        },
                        {
                            "id": "tx_km_3",
                            "type": "HAKEDIS",
                            "date": "2026-05-25",
                            "amount": 35000,
                            "method": "-",
                            "ref": "Metraj Farkı",
                            "description": "İlave bahçe istinat perdesi kalıp ve demir işçiliği (70 m²)"
                        },
                        {
                            "id": "tx_km_4",
                            "type": "PAYMENT",
                            "date": "2026-06-05",
                            "amount": 60000,
                            "method": "Elden Nakit",
                            "ref": "Kasa Makbuzu #114",
                            "description": "3. Kat tavan kalıbı sökümü sonrası elden nakit ödeme"
                        }
                    ]
                },
                {
                    "id": "c_boyaci_ahmet",
                    "projectId": "proj_1",
                    "name": "Boyacı Ahmet & Ekibi",
                    "role": "Boya & Badana",
                    "phone": "0535 777 88 99",
                    "startDate": "2026-06-01",
                    "initialAgreement": 180000,
                    "notes": "Tüm daireler 2 kat alçı + 2 kat silikonlu iç cephe boyası.",
                    "transactions": [
                        {
                            "id": "tx_ba_1",
                            "type": "PAYMENT",
                            "date": "2026-06-02",
                            "amount": 40000,
                            "method": "Banka Havalesi / EFT",
                            "ref": "Ziraat EFT #1082",
                            "description": "İş başlangıcı malzeme taşıma ve alçı astar avansı"
                        },
                        {
                            "id": "tx_ba_2",
                            "type": "PAYMENT",
                            "date": "2026-06-20",
                            "amount": 60000,
                            "method": "Elden Nakit",
                            "ref": "Kasa Fişi #203",
                            "description": "1. ve 2. kat dairelerin astar teslim ödemesi"
                        }
                    ]
                },
                {
                    "id": "c_duvarci_hasan",
                    "projectId": "proj_2",
                    "name": "Duvarcı Hasan Usta",
                    "role": "Duvar & Gazbeton",
                    "phone": "0542 333 22 11",
                    "startDate": "2026-05-01",
                    "initialAgreement": 220000,
                    "notes": "Dış cephe bims ve iç bölme gazbeton duvar örme işçiliği.",
                    "transactions": [
                        {
                            "id": "tx_dh_1",
                            "type": "PAYMENT",
                            "date": "2026-05-05",
                            "amount": 50000,
                            "method": "Banka Havalesi / EFT",
                            "ref": "Akbank EFT #7741",
                            "description": "Şantiye başlangıç avansı"
                        },
                        {
                            "id": "tx_dh_2",
                            "type": "PAYMENT",
                            "date": "2026-05-28",
                            "amount": 90000,
                            "method": "Çek / Senet",
                            "ref": "Çek No: 88491 (Vade: 30 Gün)",
                            "description": "Kaba duvarların tamamlanması 2. etap ödemesi"
                        },
                        {
                            "id": "tx_dh_3",
                            "type": "PAYMENT",
                            "date": "2026-06-15",
                            "amount": 80000,
                            "method": "Banka Havalesi / EFT",
                            "ref": "Akbank EFT #8990",
                            "description": "Duvar işçiliği kesin hesap kapanış ödemesi (Hesap kapandı)"
                        }
                    ]
                }
            ]
        }
        cursor.execute(
            "INSERT INTO system_store (key, value, updated_at) VALUES (?, ?, ?)",
            ("santiye_data", json.dumps(initial_data, ensure_ascii=False), int(time.time() * 1000))
        )
        conn.commit()
    conn.close()

# Veritabanından Veri Okuma
def get_db_data():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT value, updated_at FROM system_store WHERE key IN ('tekstil_data', 'santiye_data') ORDER BY (CASE WHEN key = 'tekstil_data' THEN 1 ELSE 2 END) LIMIT 1")
    row = cursor.fetchone()
    conn.close()
    if row:
        try:
            data = json.loads(row[0])
            data["lastModified"] = row[1]
            if "settings" not in data:
                data["settings"] = {}
            if "customers" not in data:
                data["customers"] = []
            return data
        except Exception:
            pass
    return {"customers": [], "projects": [], "contractors": [], "settings": {}, "lastModified": 0}

# Veritabanına Veri Kaydetme (Atomik Güncelleme)
def save_db_data(payload):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    now_ms = int(time.time() * 1000)
    data_dict = {
        "customers": payload.get("customers", []),
        "projects": payload.get("projects", []),
        "contractors": payload.get("contractors", []),
        "settings": payload.get("settings", {})
    }
    data_str = json.dumps(data_dict, ensure_ascii=False)

    # Birincil anahtar tekstil_data
    cursor.execute("""
        INSERT INTO system_store (key, value, updated_at) 
        VALUES ('tekstil_data', ?, ?)
        ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at
    """, (data_str, now_ms))
    # Geriye dönük uyumluluk için santiye_data anahtarını da güncelle
    cursor.execute("""
        INSERT INTO system_store (key, value, updated_at) 
        VALUES ('santiye_data', ?, ?)
        ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at
    """, (data_str, now_ms))
    conn.commit()
    conn.close()
    return now_ms

# HTTP İstek Yöneticisi
class TekstilHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)

    def get_auth_token(self):
        auth_hdr = self.headers.get("Authorization", "")
        if auth_hdr.startswith("Bearer "):
            return auth_hdr[7:].strip()
        parsed = urlparse(self.path)
        qs = parse_qs(parsed.query)
        if "token" in qs and qs["token"]:
            return qs["token"][0]
        return None

    def end_headers(self):
        # CORS & Cache Başlıkları (Diğer bilgisayarlar ve telefonların rahatça bağlanması için)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)

        # API: Oturum Durumu Kontrolü
        if parsed.path == "/api/auth/verify":
            token = self.get_auth_token()
            user = verify_session(token)
            res = {"authenticated": user is not None, "username": user}
            body = json.dumps(res).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        
        # API: Tüm veriyi ve son güncelleme zamanını getir (Yetki Korumalı)
        if parsed.path == "/api/data":
            token = self.get_auth_token()
            user = verify_session(token)
            if not user:
                self.send_response(401)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                err = json.dumps({"error": "Oturum süresi doldu veya yetkisiz erişim. Lütfen giriş yapınız.", "authRequired": True}).encode("utf-8")
                self.send_header("Content-Length", str(len(err)))
                self.end_headers()
                self.wfile.write(err)
                return

            data = get_db_data()
            body = json.dumps(data, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        # API: Canlı heartbeat kontrolü (Sadece son güncelleme zamanını döner, süper hızlı)
        if parsed.path == "/api/status":
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("SELECT updated_at FROM system_store WHERE key IN ('tekstil_data', 'santiye_data') ORDER BY updated_at DESC LIMIT 1")
            row = cursor.fetchone()
            conn.close()
            last_mod = row[0] if row else 0
            
            body = json.dumps({"status": "ok", "lastModified": last_mod}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        # API: Sunucu Ağ Bilgisi
        if parsed.path == "/api/network":
            local_ip = get_local_ip()
            body = json.dumps({
                "localIp": local_ip,
                "port": PORT,
                "lanUrl": f"http://{local_ip}:{PORT}"
            }).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        # API: TCMB Canlı Kurlar
        if parsed.path == "/api/rates":
            force = "force=1" in self.path
            rates_data = fetch_tcmb_rates(force=force)
            body = json.dumps(rates_data, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        # API: Bulut ve Sağlık Kontrolü (Render, Railway, AWS Healthcheck)
        if parsed.path in ["/healthz", "/health", "/ping"]:
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.send_header("Content-Length", "2")
            self.end_headers()
            self.wfile.write(b"OK")
            return

        # Normal statik dosya sunumu (index.html, style.css, app.js)
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)

        # API: Giriş Yap (Kullanıcı Adı & Şifre)
        if parsed.path == "/api/auth/login":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            try:
                creds = json.loads(post_data.decode("utf-8"))
                uname = (creds.get("username") or "").strip()
                pword = (creds.get("password") or "").strip()
                
                conn = sqlite3.connect(DB_FILE)
                cursor = conn.cursor()
                cursor.execute("SELECT password_hash, salt, role FROM auth_users WHERE username = ?", (uname,))
                row = cursor.fetchone()
                conn.close()

                if row and verify_password(pword, row[0], row[1]):
                    token = create_session(uname)
                    res = json.dumps({"success": True, "token": token, "username": uname, "role": row[2]}).encode("utf-8")
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.send_header("Content-Length", str(len(res)))
                    self.end_headers()
                    self.wfile.write(res)
                else:
                    self.send_response(401)
                    err = json.dumps({"success": False, "error": "Kullanıcı adı veya şifre hatalı!"}).encode("utf-8")
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.send_header("Content-Length", str(len(err)))
                    self.end_headers()
                    self.wfile.write(err)
            except Exception as e:
                self.send_response(400)
                err = json.dumps({"success": False, "error": str(e)}).encode("utf-8")
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(err)))
                self.end_headers()
                self.wfile.write(err)
            return

        # API: Çıkış Yap (Oturumu Sonlandır)
        if parsed.path == "/api/auth/logout":
            token = self.get_auth_token()
            if token:
                delete_session(token)
            res = json.dumps({"success": True}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(res)))
            self.end_headers()
            self.wfile.write(res)
            return

        # API: Şifre Değiştir
        if parsed.path == "/api/auth/change-password":
            token = self.get_auth_token()
            uname = verify_session(token)
            if not uname:
                self.send_response(401)
                err = json.dumps({"success": False, "error": "Yetkisiz işlem. Lütfen giriş yapınız."}).encode("utf-8")
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(err)))
                self.end_headers()
                self.wfile.write(err)
                return

            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            try:
                req = json.loads(post_data.decode("utf-8"))
                old_pw = (req.get("oldPassword") or "").strip()
                new_pw = (req.get("newPassword") or "").strip()
                if len(new_pw) < 4:
                    raise ValueError("Yeni şifre en az 4 karakter olmalıdır.")

                conn = sqlite3.connect(DB_FILE)
                cursor = conn.cursor()
                cursor.execute("SELECT password_hash, salt FROM auth_users WHERE username = ?", (uname,))
                row = cursor.fetchone()
                
                if row and verify_password(old_pw, row[0], row[1]):
                    new_hash, new_salt = hash_password(new_pw)
                    cursor.execute("UPDATE auth_users SET password_hash = ?, salt = ?, updated_at = ? WHERE username = ?",
                                   (new_hash, new_salt, int(time.time() * 1000), uname))
                    conn.commit()
                    conn.close()
                    res = json.dumps({"success": True, "message": "Şifreniz başarıyla değiştirildi."}).encode("utf-8")
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.send_header("Content-Length", str(len(res)))
                    self.end_headers()
                    self.wfile.write(res)
                else:
                    conn.close()
                    self.send_response(400)
                    err = json.dumps({"success": False, "error": "Mevcut şifreniz hatalı!"}).encode("utf-8")
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.send_header("Content-Length", str(len(err)))
                    self.end_headers()
                    self.wfile.write(err)
            except Exception as e:
                self.send_response(400)
                err = json.dumps({"success": False, "error": str(e)}).encode("utf-8")
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(err)))
                self.end_headers()
                self.wfile.write(err)
            return

        # API: Veri Senkronizasyonu (Yetki Korumalı)
        if parsed.path == "/api/sync":
            token = self.get_auth_token()
            user = verify_session(token)
            if not user:
                self.send_response(401)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                err = json.dumps({"error": "Oturum süresi doldu veya yetkisiz erişim. Lütfen giriş yapınız.", "authRequired": True}).encode("utf-8")
                self.send_header("Content-Length", str(len(err)))
                self.end_headers()
                self.wfile.write(err)
                return

            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode("utf-8"))
                new_timestamp = save_db_data(payload)
                res_body = json.dumps({"success": True, "lastModified": new_timestamp}).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(res_body)))
                self.end_headers()
                self.wfile.write(res_body)
            except Exception as e:
                self.send_response(400)
                err_body = json.dumps({"error": str(e)}).encode("utf-8")
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(err_body)))
                self.end_headers()
                self.wfile.write(err_body)
            return

        self.send_response(404)
        self.end_headers()

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

def main():
    init_db()
    local_ip = get_local_ip()

    print("\n" + "=" * 65)
    print("  [+] TekstilCari - Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip")
    print("=" * 65)
    print(f"  * Veritabanı (Ortak SQLite): {os.path.basename(DB_FILE)}")
    print(f"  * Bu Bilgisayardan Giriş:   http://localhost:{PORT}")
    print(f"  * Ofisteki Arkadaşlar İçin: http://{local_ip}:{PORT}")
    print(f"  * TCMB Canlı Döviz Servisi: http://localhost:{PORT}/api/rates")
    print(f"  * Bulut Sağlık Kontrolü:    http://localhost:{PORT}/healthz")
    print("=" * 65)
    print("  * Çok İş Parçacıklı (Multi-threaded) Ağ Sunucusu Aktif.")
    print("  (Render.com ve tüm bulut ortamlarında kesintisiz yanıt verir!)\n")

    # Tarayıcıyı otomatik aç (Yerel ortamda)
    def auto_open_browser():
        time.sleep(0.8)
        try:
            webbrowser.open(f"http://localhost:{PORT}")
        except Exception:
            pass

    threading.Thread(target=auto_open_browser, daemon=True).start()

    # Tüm arayüzlerden dinle (0.0.0.0)
    with ThreadedHTTPServer(("0.0.0.0", PORT), TekstilHTTPRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nSunucu kapatılıyor...")
            httpd.server_close()

if __name__ == "__main__":
    main()
