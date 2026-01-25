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
echo [1/7] Creating installation folder...
if not exist "%installPath%" mkdir "%installPath%"
echo [OK] Folder created at: %installPath%
echo.

REM Step 2: Download project from GitHub
echo [2/7] Downloading project from GitHub...
powershell -Command "try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object System.Net.WebClient).DownloadFile('https://github.com/lucasandre16112000-png/health-scheduler-ai/archive/refs/heads/main.zip', '%zipPath%'); Write-Host '[OK] Project downloaded' } catch { Write-Host '[ERROR] Download failed'; exit 1 }"
if errorlevel 1 goto error_download
echo.

REM Step 3: Extract files using native Windows extraction
echo [3/7] Extracting files...
if exist "%extractPath%" rmdir /s /q "%extractPath%" >nul 2>&1
mkdir "%extractPath%"
cd /d "%extractPath%"
powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::ExtractToDirectory('%zipPath%', '%extractPath%')" >nul 2>&1
if errorlevel 1 goto error_extract
echo [OK] Files extracted
echo.

REM Step 4: Copy to installation folder
echo [4/7] Copying files to installation folder...
cd /d "%extractPath%\health-scheduler-ai-main"
xcopy . "%installPath%" /E /I /Y /Q >nul 2>&1
cd /d "%installPath%"
echo [OK] Files copied
echo.

REM Step 5: Clean up old dependencies
echo [5/7] Cleaning up old dependencies...
if exist "node_modules" rmdir /s /q "node_modules" >nul 2>&1
if exist "package-lock.json" del /f /q "package-lock.json" >nul 2>&1
echo [OK] Cleanup complete
echo.

REM Step 6: Install dependencies
echo [6/7] Installing dependencies (this may take 5-10 minutes)...
call npm install >nul 2>&1
if errorlevel 1 goto error_install
echo [OK] Dependencies installed
echo.

REM Step 7: Start servers and wait for them to be ready
echo [7/7] Starting servers...
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

REM Start npm dev in background
start "Health Scheduler AI" cmd /k "cd /d %installPath% && npm run dev"

REM Wait for server to be ready (check port 3002)
echo Waiting for server to start (this may take 30 seconds)...
set "counter=0"
:wait_loop
timeout /t 1 /nobreak >nul
set /a counter+=1
netstat -ano | findstr ":3002" >nul 2>&1
if errorlevel 1 (
    if %counter% lss 60 (
        echo Waiting... %counter%/60
        goto wait_loop
    ) else (
        echo Server took too long to start
        goto wait_error
    )
) else (
    echo Server is ready!
)

REM Wait a bit more to ensure everything is fully loaded
timeout /t 3 /nobreak >nul

REM Open browser
start http://localhost:3002

echo.
echo [OK] Application is running!
echo [OK] Browser should open automatically
echo.
echo To stop the application, close the command window or press Ctrl+C
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
echo Try running these commands manually:
echo   cd %installPath%
echo   del package-lock.json
echo   rmdir /s /q node_modules
echo   npm install
echo.
pause
exit /b 1

:wait_error
echo.
echo [ERROR] Server failed to start
echo Check if ports 3002 and 5000 are available
echo.
pause
exit /b 1
