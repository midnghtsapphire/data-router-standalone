"""Data Router — FastAPI Backend Main Entry Point"""
import os, sys
from pathlib import Path
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from backend.api.routes.data_router import router as data_router
from backend.services.stripe_service import StripeService

app = FastAPI(title="Data Router", description="Data routing, visual flow builder, webhooks", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
stripe_svc = StripeService()
app.include_router(data_router)

@app.get("/api/health")
async def health():
    return {"status": "healthy", "service": "Data Router", "version": "1.0.0"}

@app.get("/api/stripe/config")
async def stripe_config():
    return {"publishable_key": stripe_svc.get_publishable_key(), "mode": os.getenv("STRIPE_MODE", "test")}

static_dir = Path(__file__).parent.parent / "static"
if static_dir.exists():
    app.mount("/assets", StaticFiles(directory=str(static_dir / "assets")), name="assets")
    @app.get("/{full_path:path}")
    async def serve_frontend(full_path: str):
        file_path = static_dir / full_path
        if file_path.exists() and file_path.is_file():
            return FileResponse(str(file_path))
        return FileResponse(str(static_dir / "index.html"))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8002, reload=True)
