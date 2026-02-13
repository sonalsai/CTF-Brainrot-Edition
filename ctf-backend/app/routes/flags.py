from fastapi import APIRouter, HTTPException
from app.config import get_settings
from app.models import FlagSubmitRequest, FlagSubmitResponse
from app.utils.security import compare_flags, generate_progress_token

router = APIRouter(prefix="/api/flags", tags=["Flags"])

# In-memory session progress store
# Key: session_id, Value: set of completed levels
session_progress: dict[str, set[int]] = {}


@router.post("/submit", response_model=FlagSubmitResponse)
async def submit_flag(request: FlagSubmitRequest):
    """
    Validate a submitted flag against the server-side stored value.
    Flags never leave the server.
    """
    settings = get_settings()

    # Validate level number
    if request.level < 1 or request.level > 7:
        raise HTTPException(status_code=400, detail="Invalid level number")

    # Check that previous levels are completed (level 1 has no prerequisite)
    if request.level > 1:
        completed = session_progress.get(request.session_id, set())
        if request.level - 1 not in completed:
            raise HTTPException(
                status_code=403,
                detail=f"You must complete level {request.level - 1} first",
            )

    # Get the expected flag for this level
    expected_flag = settings.flags.get(request.level)
    if not expected_flag:
        raise HTTPException(status_code=500, detail="Flag not configured for this level")

    # Compare flags
    if compare_flags(request.flag, expected_flag):
        # Record progress
        if request.session_id not in session_progress:
            session_progress[request.session_id] = set()
        session_progress[request.session_id].add(request.level)

        # Generate progress token
        token = generate_progress_token(settings.SECURITY_SALT, request.level)

        return FlagSubmitResponse(
            correct=True,
            message="Correct! Level completed! 🎉",
            token=token,
        )
    else:
        return FlagSubmitResponse(
            correct=False,
            message="Incorrect flag. Try again! 🚫",
            token=None,
        )
