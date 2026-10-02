# ☁️ TekstilCari - Ücretsiz 7/24 Bulut Sunucu Kurulum Rehberi

Bu rehber sayesinde programınızı **Render.com** veya **Railway.app** gibi ücretsiz bulut sunucularına 3 dakikada yükleyebilir; **kendi bilgisayarınız kapalıyken bile** tüm ofis ekibinizin, atölyenizin, muhasebenizin ve ihracat sorumlularınızın internet olan her yerden (bilgisayar veya cep telefonuyla) 7/24 sisteme bağlanmasını sağlayabilirsiniz.

---

## 🌟 Yöntem 1: Render.com ile 7/24 Ücretsiz Canlıya Alma (Önerilen)

Render.com, kredi kartı istemeyen, tamamen ücretsiz ve otomatik SSL (https://) sertifikası veren dünyanın en popüler bulut platformlarından biridir.

### Adım 1: Dosyaları GitHub'a Yükleme
1. [GitHub.com](https://github.com)'a girip ücretsiz bir hesap açın (zaten varsa giriş yapın).
2. Sağ üstteki **"+"** ikonuna basıp **"New repository"** deyin.
3. Bir isim verin (Örn: `tekstil-cari-takip`) ve **"Create repository"** butonuna basın.
4. Bu klasördeki (`C:\Users\user\.gemini\antigravity-ide\scratch\muteahhit_cari_takip\`) tüm dosyaları GitHub sayfanıza sürükleyip bırakarak yükleyin (Upload files) ve **"Commit changes"** deyin.

### Adım 2: Render.com'a Bağlama (Tek Tıkla Dağıtım)
1. [Render.com](https://render.com) adresine gidin ve **"GET STARTED FOR FREE"** diyerek GitHub hesabınızla giriş yapın.
2. Açılan kontrol panelinde **"New +"** butonuna basıp **"Web Service"** seçeneğini seçin.
3. GitHub reponuzu (`tekstil-cari-takip`) listeden seçip **"Connect"** deyin.
4. Karşınıza gelen ayarlar sayfasında:
   - **Name:** Şirketiniz veya programınız için bir isim (Örn: `tekstil-cari-takip`)
   - **Runtime:** `Python 3`
   - **Build Command:** *(Boş bırakın)*
   - **Start Command:** `python server.py`
   - **Instance Type:** `Free` (Ücretsiz)
5. En alttaki **"Create Web Service"** butonuna basın!

### Adım 3: Tebrikler, Sisteminiz 7/24 Canlıda!
Yaklaşık 60 saniye içinde Render projenizi derler ve size kalıcı bir internet adresi verir:
👉 **`https://tekstil-cari-takip.onrender.com`**

Bu linki ofisteki arkadaşlarınıza, atölye şefinize ve muhasebecinize gönderebilirsiniz. Kim nereden girerse girsin (ofisten, evden, cep telefonundan) tüm müşteri sipariş, kumaş sevkiyat ve dövizli tahsilat kayıtları ortak bulut veritabanında anlık olarak eşitlenir!

---

## ⚡ Yöntem 2: Cloudflare Tunnel ile Anında İnternete Açma (GitHub Gerektirmez)

Eğer GitHub ile uğraşmak istemiyorsanız ve kendi bilgisayarınız açıkken şantiyedeki telefonların veya dışarıdaki kişilerin anında bağlanmasını istiyorsanız:

1. Ücretsiz [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) aracını indirin.
2. Terminal / Komut Satırından tek bir komut çalıştırın:
   ```bash
   cloudflared tunnel --url http://localhost:8085
   ```
3. Size hemen şifreli ücretsiz bir adres verir:
   `https://...trycloudflare.com`
4. Bu linki dilediğiniz herkese iletebilirsiniz.

---

## 🛠️ Hazırlanan Bulut Dosyaları Listesi
Bu klasörde bulut dağıtımı için gerekli tüm yapılandırmalar önceden hazırlanmıştır:
- **`Dockerfile`**: Docker destekleyen tüm sunucularda (Render, Railway, Fly.io) tam uyumlu çalışma imajı.
- **`render.yaml`**: Render.com Blueprint otomatik kurulum dosyası.
- **`Procfile`**: Web sunucu başlatma tanımı (`web: python server.py`).
- **`requirements.txt`**: Python bağımlılık dosyası.
- **`server.py`**: Bulut ortamlarındaki dinamik `PORT` değişkenlerini otomatik algılayan optimize sunucu.
