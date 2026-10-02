@echo off
title TekstilCari Sunucusu
cd /d "%~dp0"

echo ======================================================================
echo   TEKSTILCARI - COK KULLANICILI CARI TAKIP SUNUCUSU
echo ======================================================================
echo.
echo [*] Python kontrol ediliyor...

where python >nul 2>&1
if %errorlevel% neq 0 (
    where py >nul 2>&1
    if %errorlevel% neq 0 (
        echo [HATA] Bilgisayarinizda Python bulunamadi!
        echo Lutfen Python kurunuz: https://www.python.org
        echo.
        pause
        exit /b 1
    )
    set PY_CMD=py
) else (
    set PY_CMD=python
)

echo [*] Yerel sunucu port 8085 uzerinde baslatiliyor...
echo [*] Tarayici otomatik acilacak: http://localhost:8085
echo.

start "" "http://localhost:8085"
%PY_CMD% server.py

if %errorlevel% neq 0 (
    echo.
    echo [!] Sunucu durduruldu veya bir hata olustu.
    pause
)
