import React, { useState, useEffect } from "react";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SubmitFlag from "../components/SubmitFlag";
import { MdHourglassEmpty } from "react-icons/md";
import LevelIndicator from "../components/LevelIndicator";

const WaitForIt = () => {
  const [seconds, setSeconds] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const targetTime = 42;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= targetTime) {
          setIsComplete(true);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate progress for circular timer (inverse logic: 100% start -> 0% end)
  const progress = Math.min((seconds / targetTime) * 100, 100);

  const funnyMessages = [
    "Still waiting...",
    "Grab a coffee?",
    "Watching paint dry...",
    "Are we there yet?",
    "Almost... not really.",
    "Patience is key.",
    "Don't refresh!",
  ];

  const currentMessageIndex = Math.floor(seconds / 5) % funnyMessages.length;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#f4f6f8", // Light classy background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <LevelIndicator level={5} />
      <Container
        maxWidth={false}
        sx={{ maxWidth: "700px", textAlign: "center" }}
      >
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="waiting"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ position: "relative", display: "inline-flex", mb: 4 }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={300}
                  thickness={2}
                  sx={{ color: "#e0e0e0", position: "absolute" }}
                />
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={300}
                  thickness={3}
                  sx={{
                    color: "#ff6b6b", // Fun coral color
                    transition: "all 0.5s ease",
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "6rem",
                    }}
                  >
                    {seconds}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ letterSpacing: 2 }}
                  >
                    SECONDS
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                Wait for it...
              </Typography>

              <motion.div
                key={currentMessageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#666",
                    fontStyle: "italic",
                    minHeight: "30px",
                  }}
                >
                  "{funnyMessages[currentMessageIndex]}"
                </Typography>
              </motion.div>

              <Box sx={{ mt: 5, color: "#999" }}>
                <MdHourglassEmpty
                  style={{ animation: "spin 3s linear infinite", fontSize: 40 }}
                />
              </Box>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Box sx={{ position: "relative", display: "inline-flex", mb: 4 }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={220}
                  thickness={2}
                  sx={{ color: "#e0e0e0", position: "absolute" }}
                />
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={220}
                  thickness={4}
                  sx={{
                    color: "#4caf50",
                    transition: "all 0.5s ease",
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontFamily: "Poppins",
                    }}
                  >
                    42
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem", letterSpacing: 1 }}
                  >
                    SECONDS
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#333",
                  mb: 1,
                  letterSpacing: -1,
                  whiteSpace: "pre-wrap",
                }}
              >
                You waited long enough.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Hope you packed your towel for the journey across the stars.
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Inter:wght@400;600;800&display=swap');
            @keyframes spin { 100% { transform: rotate(360deg); } }
            `}
      </style>
      <SubmitFlag
        onSuccessPath="/level6"
        successMessage="Worth the wait! 🕰️"
        level={5}
        taskMessage="That was 42 seconds of pure adrenaline."
      />
    </Box>
  );
};

export default WaitForIt;
