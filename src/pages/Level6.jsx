import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LevelIndicator from "../components/LevelIndicator";
import SubmitFlag from "../components/SubmitFlag";

const Level6 = () => {
  const doorLink = import.meta.env.VITE_DOOR_URL;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#000000",
        color: "#e0e0e0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <LevelIndicator level={6} />

      {/* Classy Atmosphere Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, #1a237e 0%, #000000 70%)", // Deep Royal Blue to Black
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="md"
        sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typography
            variant="h4"
            component="blockquote"
            sx={{
              fontFamily: "'Cinzel', serif",
              fontStyle: "italic",
              mb: 8,
              lineHeight: 1.8,
              color: "#E5E4E2", // Platinum
              letterSpacing: "0.02em",
              textShadow: "0 4px 20px rgba(255, 255, 255, 0.15)",
              borderLeft: "2px solid #536dfe",
              paddingLeft: 4,
              display: "inline-block",
            }}
          >
            "If you make a vow to the Lord your God, do not be slow to pay it,
            for the Lord your God will certainly demand it of you and you will
            be guilty of sin"
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "rgba(229, 228, 226, 0.6)", // Muted Platinum
              mb: 10,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Understanding is the key. Seek the{" "}
            <Box
              component="a"
              href={doorLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                borderBottom: "1px solid transparent",
                transition: "all 0.3s ease",
                fontWeight: 600,
                "&:hover": {
                  color: "#fff",
                  borderBottom: "1px solid #536dfe",
                  textShadow: "0 0 15px rgba(83, 109, 254, 0.8)",
                },
              }}
            >
              door
            </Box>{" "}
            to find your answer.
          </Typography>
        </motion.div>
      </Container>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG6}
        onSuccessPath="/"
        successMessage="Vow fulfilled. 🗝️"
        level={6}
        taskMessage="Calculus of the soul."
      />

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@300;400;600&display=swap');
        `}
      </style>
    </Box>
  );
};

export default Level6;
