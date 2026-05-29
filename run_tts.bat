@echo off
title Retail Sales Pro - SSML TTS Server
echo =========================================================================
echo       Retail Sales Pro - Local SSML Neural TTS Server Starting
echo =========================================================================
echo.
echo Searching for uv package manager...
set UV_PATH=C:\Users\320708\.local\bin\uv.exe

if not exist "%UV_PATH%" (
    echo uv.exe not found at %UV_PATH%, checking PATH...
    where uv >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        set UV_PATH=uv
    ) else (
        echo ERROR: uv.exe is not installed or not in PATH.
        echo Please make sure uv is installed at C:\Users\320708\.local\bin\uv.exe.
        pause
        exit /b 1
    )
)

echo Using uv path: %UV_PATH%
echo Running server on http://127.0.0.1:5002 ...
echo [Press Ctrl+C to stop the server at any time]
echo.

"%UV_PATH%" run tts_server.py
if %ERRORLEVEL% neq 0 (
    echo.
    echo ERROR: TTS Server exited with error code %ERRORLEVEL%.
    pause
)
