import hashlib
import hmac


def sha256_hash(message: str) -> str:
    """Generate SHA-256 hash of a message."""
    return hashlib.sha256(message.encode()).hexdigest()


def generate_progress_token(salt: str, level: int) -> str:
    """
    Generate a progress token for a completed level.
    Mirrors the frontend security.js logic:
      sha256(`${SALT}_LEVEL_${level}_COMPLETED`)
    """
    return sha256_hash(f"{salt}_LEVEL_{level}_COMPLETED")


def verify_progress_token(salt: str, level: int, token: str) -> bool:
    """Verify a progress token using constant-time comparison."""
    expected = generate_progress_token(salt, level)
    return hmac.compare_digest(expected, token)


def compare_flags(submitted: str, expected: str) -> bool:
    """
    Compare submitted flag against expected flag.
    - Trims whitespace
    - Lowercases
    - Replaces spaces with underscores (matching frontend behavior)
    - Uses constant-time comparison
    """
    refined = submitted.strip().lower().replace(" ", "_")
    return hmac.compare_digest(refined, expected.strip().lower())
