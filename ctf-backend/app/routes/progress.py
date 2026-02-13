from fastapi import APIRouter
from app.config import get_settings
from app.models import (
    ProgressResponse,
    ProgressVerifyRequest,
    ProgressVerifyResponse,
)
from app.utils.security import verify_progress_token
from app.routes.flags import session_progress

router = APIRouter(prefix="/api/progress", tags=["Progress"])


@router.get("/{session_id}", response_model=ProgressResponse)
async def get_progress(session_id: str):
    """Get completed levels for a session."""
    completed = sorted(session_progress.get(session_id, set()))
    current_level = max(completed) + 1 if completed else 1
    return ProgressResponse(
        completed_levels=completed,
        current_level=min(current_level, 8),  # Cap at 8 (all done)
    )


@router.post("/verify", response_model=ProgressVerifyResponse)
async def verify_token(request: ProgressVerifyRequest):
    """
    Verify a progress token is valid for a given level.
    Used by the frontend to check if a user can access a level.
    """
    settings = get_settings()
    valid = verify_progress_token(settings.SECURITY_SALT, request.level, request.token)
    return ProgressVerifyResponse(valid=valid)
