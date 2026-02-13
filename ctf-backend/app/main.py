from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import get_settings
from app.routes import flags, progress, levels

app = FastAPI(
    title="CTF Brainrot Backend",
    description="Backend API for CTF: Brainrot Edition — flag validation, progress tracking, and level management",
    version="1.0.0",
)

# CORS configuration
settings = get_settings()
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(flags.router)
app.include_router(progress.router)
app.include_router(levels.router)


@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint."""
    return {"status": "ok", "service": "ctf-brainrot-backend"}
