import { Box, Typography, Container, keyframes } from "@mui/material";
import { FaDesktop, FaMobileAlt, FaBan } from "react-icons/fa";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const MobileBlocker = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" }, // Show on mobile (xs), hide on desktop (md+)
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "#050505",
        zIndex: 99999, // Super high z-index to overlap everything
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          mb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaDesktop size={60} color="#03dac6" style={{ marginRight: "20px" }} />
        <FaBan
          size={40}
          color="#ff1744"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <FaMobileAlt size={60} color="#666" style={{ opacity: 0.5 }} />
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "#ff1744",
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        Desktop Required
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "monospace",
          color: "#aaa",
          maxWidth: "80%",
          lineHeight: 1.6,
        }}
      >
        This CTF challenge requires a desktop environment for the full
        experience. Please switch to a larger screen to continue.
      </Typography>
    </Box>
  );
};

export default MobileBlocker;
