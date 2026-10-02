@echo off
title TekstilCari Masaustu Kisayolu
cd /d "%~dp0"

echo ======================================================================
echo   TEKSTILCARI - MASAUSTU KISAYOLU OLUSTURULUYOR
echo ======================================================================
echo.

set SCRIPT="%TEMP%\CreateShortcut_%RANDOM%.vbs"
echo Set oWS = WScript.CreateObject("WScript.Shell") > %SCRIPT%
echo sLinkFile = oWS.SpecialFolders("Desktop") ^& "\TekstilCari.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "%~dp0TekstilCari_Baslat.bat" >> %SCRIPT%
echo oLink.WorkingDirectory = "%~dp0" >> %SCRIPT%
echo oLink.Description = "TekstilCari Musteri Siparis ve Cari Takip" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%

cscript //nologo %SCRIPT%
del %SCRIPT% >nul 2>&1

echo [OK] Masaustunuze 'TekstilCari' kisayolu basariyla eklendi!
echo Artik masaustunuzdeki TekstilCari simgesine cift tiklayarak baslatabilirsiniz.
echo.
pause
