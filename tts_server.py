# /// script
# requires-python = ">=3.9"
# dependencies = [
#     "fastapi",
#     "uvicorn",
#     "edge-tts",
#     "pdfplumber",
#     "python-docx",
#     "python-multipart"
# ]
# ///

import asyncio
import re
import os
import shutil
import xml.etree.ElementTree as ET
from typing import Optional, List
from fastapi import FastAPI, Query, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
import edge_tts
import json
from rag_engine import rag_engine, KB_DIR

LLM_CONFIG_FILE = "llm_config.json"

def load_llm_config():
    if os.path.exists(LLM_CONFIG_FILE):
        try:
            with open(LLM_CONFIG_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Server] Error reading LLM config: {e}")
    return {
        "provider": "offline",
        "api_key": "",
        "model": "gemini-1.5-flash"
    }

def save_llm_config(config):
    try:
        with open(LLM_CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump(config, f, indent=2)
        return True
    except Exception as e:
        print(f"[Server] Error saving LLM config: {e}")
        return False

class LLMConfig(BaseModel):
    provider: str
    api_key: str
    model: str


app = FastAPI(title="Retail Sales Pro - High-Fidelity SSML TTS Server")

# Configure CORS to allow direct requests from file:// and localhost origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TTSRequest(BaseModel):
    text: Optional[str] = None
    ssml: Optional[str] = None
    gender: Optional[str] = "female"
    lang: Optional[str] = "ar"
    rate: Optional[float] = 0.85
    pitch: Optional[float] = 1.0

# Voice mapping table
VOICE_MAP = {
    "ar": {
        "female": "ar-AE-FatimaNeural",
        "male": "ar-AE-HamdanNeural"
    },
    "en": {
        "female": "en-US-JennyNeural",
        "male": "en-US-GuyNeural"
    }
}

def format_percentage(val: float) -> str:
    """Converts a float scaling factor (e.g. 0.85) to an SSML percentage string (e.g. -15%)."""
    percent = int((val - 1.0) * 100)
    if percent >= 0:
        return f"+{percent}%"
    return f"{percent}%"

def format_pitch(val: float) -> str:
    """Converts a float scaling factor (e.g. 0.9) to an SSML pitch change string (e.g. -10Hz)."""
    pitch_hz = int((val - 1.0) * 100)
    if pitch_hz >= 0:
        return f"+{pitch_hz}Hz"
    return f"{pitch_hz}Hz"

def parse_ssml(ssml_str: str):
    """
    Parses a standard SSML string and extracts parameters for edge-tts.
    Returns: (text, voice, rate, pitch)
    """
    voice = "ar-AE-FatimaNeural"
    rate = "+0%"
    pitch = "+0Hz"
    text = ""
    
    # Try parsing using standard XML parser
    try:
        # Add a dummy default namespace if none is declared, to simplify parsing
        if "xmlns" not in ssml_str:
            ssml_str = ssml_str.replace("<speak", "<speak xmlns='http://www.w3.org/2001/10/synthesis'")
            
        root = ET.fromstring(ssml_str)
        namespaces = {'ns': 'http://www.w3.org/2001/10/synthesis'}
        
        voice_elem = root.find('.//ns:voice', namespaces) or root.find('.//voice')
        if voice_elem is not None:
            voice = voice_elem.get('name', voice)
            prosody_elem = voice_elem.find('.//ns:prosody', namespaces) or voice_elem.find('.//prosody')
            if prosody_elem is not None:
                rate = prosody_elem.get('rate', rate)
                pitch = prosody_elem.get('pitch', pitch)
                text = "".join(prosody_elem.itertext()).strip()
            else:
                text = "".join(voice_elem.itertext()).strip()
        else:
            prosody_elem = root.find('.//ns:prosody', namespaces) or root.find('.//prosody')
            if prosody_elem is not None:
                rate = prosody_elem.get('rate', rate)
                pitch = prosody_elem.get('pitch', pitch)
                text = "".join(prosody_elem.itertext()).strip()
            else:
                text = "".join(root.itertext()).strip()
                
        return text, voice, rate, pitch
    except Exception as e:
        print(f"XML SSML parsing failed ({e}). Falling back to extraction regex...")
        
        # Regex extraction fallback for robust performance
        voice_match = re.search(r'voice\s+name=["\']([^"\']+)["\']', ssml_str)
        if voice_match:
            voice = voice_match.group(1)
            
        rate_match = re.search(r'rate=["\']([^"\']+)["\']', ssml_str)
        if rate_match:
            rate = rate_match.group(1)
            
        pitch_match = re.search(r'pitch=["\']([^"\']+)["\']', ssml_str)
        if pitch_match:
            pitch = pitch_match.group(1)
            
        # Clean text by removing all XML tags
        clean_text = re.sub(r'<[^>]+>', '', ssml_str).strip()
        return clean_text, voice, rate, pitch

async def stream_tts_chunks(text: str, voice: str, rate: str, pitch: str):
    """Asynchronously streams chunks of synthesized audio."""
    try:
        communicate = edge_tts.Communicate(
            text=text,
            voice=voice,
            rate=rate,
            pitch=pitch
        )
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                yield chunk["data"]
    except Exception as e:
        print(f"Edge-TTS dynamic streaming failed: {e}")
        return

@app.get("/api/tts")
async def get_tts(
    text: str = Query(..., description="Text to synthesize"),
    gender: str = Query("female", description="Gender of the voice (male/female)"),
    lang: str = Query("ar", description="Language (ar/en)"),
    rate: float = Query(0.85, description="Playback rate (0.5 to 2.0)"),
    pitch: float = Query(1.0, description="Playback pitch (0.5 to 2.0)")
):
    # Select voice based on language and gender
    lang_code = "ar" if lang.startswith("ar") else "en"
    voice_name = VOICE_MAP.get(lang_code, VOICE_MAP["ar"]).get(gender, "ar-AE-FatimaNeural")
    
    rate_str = format_percentage(rate)
    pitch_str = format_pitch(pitch)
    
    print(f"GET TTS Request: text_len={len(text)} voice={voice_name} rate={rate_str} pitch={pitch_str}")
    
    return StreamingResponse(
        stream_tts_chunks(text, voice_name, rate_str, pitch_str),
        media_type="audio/mpeg"
    )

@app.post("/api/tts")
async def post_tts(request: TTSRequest):
    if request.ssml:
        text, voice, rate, pitch = parse_ssml(request.ssml)
        print(f"POST SSML Request: text_len={len(text)} voice={voice} rate={rate} pitch={pitch}")
    elif request.text:
        lang_code = "ar" if request.lang.startswith("ar") else "en"
        voice = VOICE_MAP.get(lang_code, VOICE_MAP["ar"]).get(request.gender, "ar-AE-FatimaNeural")
        rate = format_percentage(request.rate)
        pitch = format_pitch(request.pitch)
        text = request.text
        print(f"POST Text Request: text_len={len(text)} voice={voice} rate={rate} pitch={pitch}")
    else:
        raise HTTPException(status_code=400, detail="Either 'text' or 'ssml' must be provided.")
        
    return StreamingResponse(
        stream_tts_chunks(text, voice, rate, pitch),
        media_type="audio/mpeg"
    )

@app.on_event("startup")
def startup_event():
    print("[Server] Initializing RAG Engine and Indexing Documents...")
    try:
        rag_engine.rebuild_index()
        print("[Server] RAG Engine ready and loaded successfully.")
    except Exception as e:
        print(f"[Server] Failed to initialize RAG: {e}")

class CoachRequest(BaseModel):
    text: str
    personality: str
    lang: str = "en"

@app.post("/api/coach")
def api_coach(req: CoachRequest):
    try:
        res = rag_engine.generate_response(req.text, req.personality, req.lang)
        if not res:
            return {"status": "no_match", "message": "No relevant document found."}
        return {"status": "success", **res}
    except Exception as e:
        print(f"[API] RAG coach error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/settings/llm")
def get_settings_llm():
    config = load_llm_config()
    key = config.get("api_key", "")
    masked_key = ""
    if key:
        if len(key) > 8:
            masked_key = key[:4] + "*" * (len(key) - 8) + key[-4:]
        else:
            masked_key = "****"
            
    return {
        "provider": config.get("provider", "offline"),
        "api_key": masked_key,
        "model": config.get("model", "gemini-1.5-flash")
    }

@app.post("/api/settings/llm")
def post_settings_llm(config: LLMConfig):
    saved_config = load_llm_config()
    incoming_key = config.api_key.strip()
    
    if "*" in incoming_key or incoming_key == "****" or not incoming_key:
        key_to_save = saved_config.get("api_key", "")
    else:
        key_to_save = incoming_key
        
    config_dict = {
        "provider": config.provider,
        "api_key": key_to_save,
        "model": config.model
    }
    
    if save_llm_config(config_dict):
        rag_engine.reload_llm_config()
        return {"status": "success", "message": "LLM Configuration saved successfully."}
    else:
        raise HTTPException(status_code=500, detail="Failed to save LLM configuration.")

@app.get("/api/kb/documents")
def get_kb_documents():
    if not os.path.exists(KB_DIR):
        return []
    
    docs = []
    # Scan directory for real files
    for idx, filename in enumerate(os.listdir(KB_DIR)):
        path = os.path.join(KB_DIR, filename)
        if not os.path.isfile(path):
            continue
            
        stat = os.stat(path)
        size_bytes = stat.st_size
        if size_bytes < 1024:
            size_str = f"{size_bytes} B"
        elif size_bytes < 1024 * 1024:
            size_str = f"{size_bytes / 1024:.1f} KB"
        else:
            size_str = f"{size_bytes / (1024 * 1024):.1f} MB"
            
        ext = os.path.splitext(filename)[1].lower()
        if ext == ".pdf":
            doc_type = "Manual" if "دليل" in filename or "manual" in filename.lower() else "Strategy"
        elif ext in (".docx", ".doc"):
            doc_type = "Manual"
        else:
            doc_type = "Scripts"
            
        from datetime import datetime
        mtime = datetime.fromtimestamp(stat.st_mtime)
        updated_str = mtime.strftime("%d %b %Y, %H:%M")
        
        lang = "ARABIC" if any(c in filename for c in ["أ", "ب", "ت", "ج", "د", "ر", "س", "ش", "ع", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "دليل", "مبيعات"]) else "ENGLISH"
        
        docs.append({
            "id": idx + 1,
            "name": filename,
            "size": size_str,
            "type": doc_type,
            "status": "INDEXED",
            "updated": updated_str,
            "language": lang
        })
    return docs

@app.post("/api/kb/upload")
async def upload_kb_document(file: UploadFile = File(...)):
    if not os.path.exists(KB_DIR):
        os.makedirs(KB_DIR)
        
    filename = os.path.basename(file.filename)
    dest_path = os.path.join(KB_DIR, filename)
    
    try:
        with open(dest_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Trigger re-indexing
        rag_engine.rebuild_index()
        return {"status": "success", "message": f"Successfully uploaded and indexed {filename}."}
    except Exception as e:
        print(f"[API] Error uploading file: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/api/kb/documents/{name}")
def delete_kb_document(name: str):
    filename = os.path.basename(name)
    file_path = os.path.join(KB_DIR, filename)
    
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Document not found.")
        
    try:
        os.remove(file_path)
        # Trigger re-indexing
        rag_engine.rebuild_index()
        return {"status": "success", "message": f"Successfully deleted {filename}."}
    except Exception as e:
        print(f"[API] Error deleting file: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health():
    return {"status": "healthy"}

# Mount the static files last to prevent intercepting API routes
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("tts_server:app", host="127.0.0.1", port=5002, reload=False)
