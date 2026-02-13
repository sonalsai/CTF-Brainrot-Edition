// Brainrot Security Department 🔒

const API_BASE = import.meta.env.VITE_API_URL || "";

/**
 * Get or create a session ID for anonymous progress tracking.
 */
export const getSessionId = () => {
	let sessionId = localStorage.getItem("ctf_session_id");
	if (!sessionId) {
		sessionId = crypto.randomUUID();
		localStorage.setItem("ctf_session_id", sessionId);
	}
	return sessionId;
};

/**
 * Save a progress token returned by the backend.
 */
export const saveProgress = async (level, token) => {
	localStorage.setItem(`ctf_progress_l${level}`, token);
};

/**
 * Verify access for a level by checking the stored progress token
 * against the backend.
 */
export const verifyAccess = async (requiredLevel) => {
	const storedToken = localStorage.getItem(`ctf_progress_l${requiredLevel}`);
	if (!storedToken) return false;

	try {
		const response = await fetch(`${API_BASE}/api/progress/verify`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				level: requiredLevel,
				token: storedToken,
			}),
		});

		if (!response.ok) return false;

		const data = await response.json();
		return data.valid;
	} catch {
		// If backend is unreachable, fall back to token existence check
		return !!storedToken;
	}
};
