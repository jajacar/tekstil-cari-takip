@echo off
chcp 65001 >nul
title TekstilCari - 7/24 Bulut Dagitim Yardimcisi
cls
echo ===================================================================
echo   ☁️  TEKSTILCARI - 7/24 BULUT SUNUCU VE GITHUB HAZIRLAYICI
echo ===================================================================
echo.
echo Bu betik, tum TekstilCari dosyalarini GitHub ve Render.com bulut
echo sunucusuna tek tikla yuklemeniz icin hazirlar.
echo.
echo 1) Git depolamasi hazirlaniyor ve guncellemeler kaydediliyor...
git init
git add .
git commit -m "Render bulut deploy duzeltmeleri - Free plan ve port uyumlulugu"
echo.
echo ===================================================================
echo   DOSYALAR HAZIRLANDI!
echo ===================================================================
echo.
echo Eger daha once GitHub'a yuklediyseniz, sadece su komutla guncelleyin:
echo    git push
echo.
echo Eger ilk defa yukluyorsaniz:
echo 1. https://github.com/new adresinden 'tekstil-cari-takip' adinda repo acin.
echo 2. Ekranda cikan 'git remote add origin https://github.com/.../tekstil-cari-takip.git'
echo    ve 'git push -u origin main' komutunu calistirin.
echo 3. https://render.com adresinde 'Manual Deploy' > 'Clear build cache & deploy' deyin.
echo.
echo 60 saniye sonra sisteminiz 7/24 ucretsiz canliya gececektir!
echo.
pause
