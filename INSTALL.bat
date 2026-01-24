@echo off
setlocal enabledelayedexpansion

cls
color 0A

echo.
echo ================================================================================
echo.
echo                    HEALTH SCHEDULER AI - AUTOMATIC INSTALLER
echo.
echo ================================================================================
echo.

REM Define installation path
set "installPath=%USERPROFILE%\health-scheduler-ai"
set "zipPath=%TEMP%\health-scheduler-ai.zip"
set "extractPath=%TEMP%\health-scheduler-extract"

REM Step 1: Create installation folder
echo [1/6] Creating installation folder...
if not exist "%installPath%" mkdir "%installPath%"
echo [OK] Folder created at: %installPath%
echo.

REM Step 2: Download project from GitHub
echo [2/6] Downloading project from GitHub...
powershell -Command "try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object System.Net.WebClient).DownloadFile('https://github.com/lucasandre16112000-png/health-scheduler-ai/archive/refs/heads/main.zip', '%zipPath%'); Write-Host '[OK] Project downloaded' } catch { Write-Host '[ERROR] Download failed'; exit 1 }"
if errorlevel 1 goto error_download
echo.

REM Step 3: Extract files using native Windows extraction
echo [3/6] Extracting files...
if exist "%extractPath%" rmdir /s /q "%extractPath%" >nul 2>&1
mkdir "%extractPath%"
cd /d "%extractPath%"
powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::ExtractToDirectory('%zipPath%', '%extractPath%')" >nul 2>&1
if errorlevel 1 goto error_extract
echo [OK] Files extracted
echo.

REM Step 4: Copy to installation folder
echo [4/6] Copying files to installation folder...
cd /d "%extractPath%\health-scheduler-ai-main"
xcopy . "%installPath%" /E /I /Y /Q >nul 2>&1
cd /d "%installPath%"
echo [OK] Files copied
echo.

REM Step 5: Install dependencies
echo [5/6] Installing dependencies (this may take 3-5 minutes)...
call npm install --no-optional >nul 2>&1
if errorlevel 1 goto error_install
echo [OK] Dependencies installed
echo.

REM Step 6: Start servers
echo.
echo ================================================================================
echo.
echo                    READY! Starting servers...
echo.
echo                    Frontend: http://localhost:3002
echo                    Backend:  http://localhost:5000
echo                    Press Ctrl+C to stop
echo.
echo ================================================================================
echo.

timeout /t 2 /nobreak >nul

start http://localhost:3002

call npm run dev

echo.
echo [INFO] Servers stopped
echo.
pause
exit /b 0

:error_download
echo.
echo [ERROR] Failed to download project
echo Check your internet connection
echo.
pause
exit /b 1

:error_extract
echo.
echo [ERROR] Failed to extract files
echo Try running as Administrator
echo.
pause
exit /b 1

:error_install
echo.
echo [ERROR] Failed to install dependencies
echo Check if Node.js is installed
echo Run: node --version
echo.
pause
exit /b 1
