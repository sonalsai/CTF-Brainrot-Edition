import os
from functools import lru_cache
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    # Security
    SECURITY_SALT: str = "default_salt_change_me"
    SECRET_KEY: str = "default_secret_change_me"

    # CORS
    CORS_ORIGINS: str = "http://localhost:5173"

    # Flags (server-side only)
    FLAG1: str = ""
    FLAG2: str = ""
    FLAG3: str = ""
    FLAG4: str = ""
    FLAG5: str = ""
    FLAG6: str = ""
    FLAG7: str = ""

    # Level-specific secrets (server-side only)
    DOOR_KEY: str = ""
    DOOR_URL: str = ""
    TELEMETRY_MSG: str = ""

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]

    @property
    def flags(self) -> dict[int, str]:
        return {
            1: self.FLAG1,
            2: self.FLAG2,
            3: self.FLAG3,
            4: self.FLAG4,
            5: self.FLAG5,
            6: self.FLAG6,
            7: self.FLAG7,
        }

    class Config:
        env_file = ".env"
        extra = "ignore"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
