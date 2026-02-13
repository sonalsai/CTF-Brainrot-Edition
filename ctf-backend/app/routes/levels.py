from fastapi import APIRouter, HTTPException
from app.config import get_settings
from app.models import (
    LevelInfo, LevelsResponse,
    DoorKeyRequest, DoorKeyResponse,
    TelemetryResponse,
)
import hmac

router = APIRouter(prefix="/api/levels", tags=["Levels"])

# Level metadata — no flag data here
LEVELS: list[LevelInfo] = [
    LevelInfo(level=1, name="The Last Commit", description="Something hides in plain sight..."),
    LevelInfo(level=2, name="The Common Loop", description="A twist in the fabric reveals the infinite"),
    LevelInfo(level=3, name="Telemetry Signal", description="Decode the hidden signal in the noise"),
    LevelInfo(level=4, name="The Door", description="Find the key to unlock the door"),
    LevelInfo(level=5, name="Cipher Challenge", description="Break the code, break the system"),
    LevelInfo(level=6, name="Lost Signal", description="Track the signal through the static"),
    LevelInfo(level=7, name="The Final Brain", description="Your neurons will be tested to the limit"),
]


@router.get("", response_model=LevelsResponse)
async def get_levels():
    """Return level metadata without any flag data."""
    return LevelsResponse(
        total_levels=len(LEVELS),
        levels=LEVELS,
    )


@router.post("/door/verify", response_model=DoorKeyResponse)
async def verify_door_key(request: DoorKeyRequest):
    """Verify the door key and return the door URL if correct."""
    settings = get_settings()
    if not settings.DOOR_KEY:
        raise HTTPException(status_code=500, detail="Door key not configured")

    if hmac.compare_digest(request.key.strip(), settings.DOOR_KEY.strip()):
        return DoorKeyResponse(valid=True, door_url=settings.DOOR_URL)
    else:
        return DoorKeyResponse(valid=False, door_url=None)


@router.get("/telemetry/message", response_model=TelemetryResponse)
async def get_telemetry_message():
    """Return the telemetry target message for Level 7."""
    settings = get_settings()
    if not settings.TELEMETRY_MSG:
        raise HTTPException(status_code=500, detail="Telemetry message not configured")
    return TelemetryResponse(message=settings.TELEMETRY_MSG)


@router.get("/{level_number}", response_model=LevelInfo)
async def get_level(level_number: int):
    """Return metadata for a specific level."""
    for level in LEVELS:
        if level.level == level_number:
            return level
    raise HTTPException(status_code=404, detail="Level not found")
