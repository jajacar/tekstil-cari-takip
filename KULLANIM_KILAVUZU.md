# 🧵 TekstilCari - Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip Sistemi

Tekstil üreticileri, fason atölyeleri, ihracatçılar ve toptancılar için özel olarak tasarlanmış; kumaş, konfeksiyon, sipariş sevkiyatlarını, dövizli ve TL tahsilatlarını kuruşu kuruşuna takip eden modern ve canlı cari yönetim platformu.

---

## 🚀 Programı Başlatma & Ofis İçi Paylaşım

1. Klasördeki **`TekstilCari_Baslat.bat`** dosyasına çift tıklayın.
2. Tarayıcınızda otomatik olarak açılır: **`http://localhost:8085`**
3. **Ofisteki diğer bilgisayarlar, tabletler ve telefonlar:**
   - Aynı Wi-Fi / Yerel ağa bağlı herhangi bir cihazın tarayıcısına sunucu ekranında yazan yerel adresi (Örn: `http://192.168.1.xxx:8085`) yazarak anında bağlanabilirsiniz.
   - Program içindeki üst menüde bulunan **`[ 🌐 Ofisle Paylaş ]`** butonuna basarak bağlantı linkini ve QR kod benzeri paylaşım adresini kopyalayabilirsiniz.

---

## 🌟 Temel Özellikler & Modüller

### 1. 🌍 Çoklu Döviz & Müşteri Portföyü
- Müşterilerinizin cari hesaplarını kendi çalışma para birimlerine göre açabilirsiniz: **TL (₺)**, **USD ($)**, **EUR (€)**, **GBP (£)**.
- Her müşterinin sayfasında toplam sevk edilen mal bedeli, yapılan tahsilat ve kalan net bakiye kendi para biriminde ve canlı TCMB kuruyla hesaplanır.

### 2. 📦 Mal Satışı & Sevkiyat Girişi (İrsaliyeli)
- Ürün Adı (Örn: *Pamuk Baskılı T-Shirt, Gabardin Kargo Pantolon, Denim Kumaş...*),
- Miktar ve Birim (*Adet, Metre, Kg, Top, Düzine, Çift*),
- Birim Fiyat ve Toplam Tutar,
- İrsaliye No, Teslimat Notu ve Parti/Lot açıklaması.

### 3. 💵 Tahsilat & Ödeme Girişi
- Banka Havalesi / EFT / Swift,
- Nakit Kasa Girişi,
- Vadeli Müşteri Çeki / Senet,
- Kredi Kartı / Mail Order.
- Referans numarası ve açıklama ekleyerek bakiye anında düşürülür.

### 4. 🏦 TCMB Canlı Döviz Kurları & Hızlı Hesap Makinesi
- Sağ üst köşede Türkiye Cumhuriyet Merkez Bankası'ndan (TCMB) her 5 dakikada bir otomatik güncellenen canlı alış ve satış kurları gösterilir.
- **Hızlı Sipariş Kur Çevirici:** Döviz cinsinden mal satış bedelini güncel TCMB kuruyla tek tıkla Türk Lirası'na veya diğer kurlara çevirebilirsiniz.

### 5. 🖨️ Resmi Müşteri Cari Ekstresi (PDF & Yazıcı)
- İstediğiniz müşterinin ekstresine girip **`[ 🖨️ Ekstre Yazdır / PDF ]`** butonuna basarak:
  - Şirketinizin anteti,
  - Müşteri vergi/iletişim bilgileri,
  - Tarih sıralı detaylı sevkiyat ve tahsilat dökümü,
  - İki taraflı resmi Kaşe / İmza onay kutucuklarıyla profesyonel döküm alabilirsiniz.

### 6. 📊 Excel & Veritabanı Yedekleme
- **Excel / CSV Dışa Aktar:** Tüm müşteri listesini ve bakiyelerini tek tıkla Excel formatında indirebilirsiniz.
- **Tam JSON Yedek:** Veritabanınızın anlık yedeğini alabilir veya başka bir bilgisayara tek tıkla geri yükleyebilirsiniz.

### 7. ⚡ Çok Kullanıcılı Canlı Senkronizasyon (SQLite)
- Ortak SQLite veritabanı sayesinde ofisteki biri fatura/tahsilat girdiğinde, diğer kullanıcıların ekranı sayfayı yenilemeye gerek kalmadan **canlı** olarak güncellenir.

### 8. ☁️ 7/24 Ücretsiz Bulut Sunucu (Render.com / Railway)
- Programı ofis dışından (evden, seyahatte, cep telefonundan) her an erişilebilir kılmak için bulut dosyaları (`Dockerfile`, `render.yaml`, `Procfile`) hazır durumdadır.
- Klasördeki **`BULUT_KURULUM_REHBERI.md`** dosyasını takip ederek 3 dakikada ücretsiz `https://firmaniz.onrender.com` adresini aktif edebilirsiniz.

---

## 📁 Klasör Dosya Yapısı

| Dosya | Açıklama |
| :--- | :--- |
| **`TekstilCari_Baslat.bat`** | Tek tıkla programı ve yerel sunucuyu başlatan çalıştırma dosyası. |
| **`server.py`** | Çok kullanıcılı, TCMB kur entegrasyonlu Python yerel sunucusu. |
| **`tekstil_veritabani.db`** | Tüm müşteri, sevkiyat ve tahsilat kayıtlarını saklayan SQLite veritabanı. |
| **`index.html`** | Modern, duyarlı ve Türkçe arayüz sayfası. |
| **`app.js`** | Hesaplama, döviz çevrim, ekstre ve senkronizasyon mantığı. |
| **`style.css`** | 4 farklı renk teması ve yüksek kontrastlı modern tasarım stilleri. |
| **`TekstilCari_Buluta_Hazirla.bat`** | GitHub ve Render.com buluta yükleme yardımcısı. |
| **`BULUT_KURULUM_REHBERI.md`** | Adım adım 7/24 ücretsiz bulut kurulum kılavuzu. |
