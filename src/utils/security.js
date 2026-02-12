// Brainrot Security Department 🔒

const sha256 = async (message) => {
	const msgBuffer = new TextEncoder().encode(message);
	const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

export const generateToken = async (level) => {
	const SALT = import.meta.env.SECURITY_SALT;
	return await sha256(`${SALT}_LEVEL_${level}_COMPLETED`);
};

export const saveProgress = async (level) => {
	const token = await generateToken(level);
	localStorage.setItem(`ctf_progress_l${level}`, token);
};

export const verifyAccess = async (requiredLevel) => {
	const storedToken = localStorage.getItem(`ctf_progress_l${requiredLevel}`);
	if (!storedToken) return false;
	const expectedToken = await generateToken(requiredLevel);
	return storedToken === expectedToken;
};
