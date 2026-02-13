# CTF Brainrot Backend

Python FastAPI backend for **CTF: Brainrot Edition** — handles flag validation, progress tracking, and level management.

## Setup

```bash
# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your actual flag values

# Run the server
uvicorn app.main:app --reload --port 3001
```

## API Endpoints

| Method | Endpoint                     | Description                  |
| ------ | ---------------------------- | ---------------------------- |
| `GET`  | `/health`                    | Health check                 |
| `POST` | `/api/flags/submit`          | Submit a flag for validation |
| `GET`  | `/api/progress/{session_id}` | Get progress for a session   |
| `POST` | `/api/progress/verify`       | Verify a progress token      |
| `GET`  | `/api/levels`                | Get level metadata           |
| `GET`  | `/api/levels/{level_number}` | Get specific level info      |

## API Docs

Once running, visit:

- **Swagger UI**: [http://localhost:3001/docs](http://localhost:3001/docs)
- **ReDoc**: [http://localhost:3001/redoc](http://localhost:3001/redoc)
