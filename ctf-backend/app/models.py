from pydantic import BaseModel


class FlagSubmitRequest(BaseModel):
    """Request body for flag submission."""
    level: int
    flag: str
    session_id: str


class FlagSubmitResponse(BaseModel):
    """Response body for flag submission."""
    correct: bool
    message: str
    token: str | None = None


class ProgressResponse(BaseModel):
    """Response body for progress check."""
    completed_levels: list[int]
    current_level: int


class ProgressVerifyRequest(BaseModel):
    """Request body for verifying progress token."""
    level: int
    token: str


class ProgressVerifyResponse(BaseModel):
    """Response body for progress verification."""
    valid: bool


class LevelInfo(BaseModel):
    """Level metadata (no flag data)."""
    level: int
    name: str
    description: str


class LevelsResponse(BaseModel):
    """Response body for levels list."""
    total_levels: int
    levels: list[LevelInfo]


class DoorKeyRequest(BaseModel):
    """Request body for door key verification."""
    key: str


class DoorKeyResponse(BaseModel):
    """Response body for door key verification."""
    valid: bool
    door_url: str | None = None


class TelemetryResponse(BaseModel):
    """Response body for telemetry message."""
    message: str
