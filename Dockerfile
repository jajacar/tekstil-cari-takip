# Hafif ve Hızlı Python 3.12 Alpine İmajı
FROM python:3.12-alpine

# Çalışma dizini
WORKDIR /app

# Uygulama dosyalarını kopyala
COPY . /app

# Python tamponlamasını kapat
ENV PYTHONUNBUFFERED=1

# Uygulamayı başlat (Bulutun atadığı $PORT ortam değişkenini otomatik dinler)
CMD ["python", "server.py"]
