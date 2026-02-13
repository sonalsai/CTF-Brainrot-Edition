import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LevelIndicator = ({ level }) => {
  return (
    <Box
      component={motion.div}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      sx={{
        position: "fixed",
        top: 24,
        left: 30, // Aligned with the margin used for other fixed elements if possible
        zIndex: 99,
        padding: "8px 16px",
        background: "rgba(0, 0, 0, 0.7)", // Dark background for contrast on all pages
        backdropFilter: "blur(10px)",
        borderRadius: "30px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: "#03dac6", // Cyan/Teal accent
          boxShadow: "0 0 10px #03dac6",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { boxShadow: "0 0 0 0 rgba(3, 218, 198, 0.7)" },
            "70%": { boxShadow: "0 0 0 6px rgba(3, 218, 198, 0)" },
            "100%": { boxShadow: "0 0 0 0 rgba(3, 218, 198, 0)" },
          },
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#fff",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          fontFamily: "'Space Mono', monospace", // Tech-y font if available, fallback to monospace
        }}
      >
        Level {level.toString().padStart(2, "0")}
      </Typography>
    </Box>
  );
};

export default LevelIndicator;
