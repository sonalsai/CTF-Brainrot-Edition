import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SubmitFlag from "../components/SubmitFlag";
import LevelIndicator from "../components/LevelIndicator";

const DarkKnight = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(
        "%cSerious people don't look behind the scenes.",
        "color: #fff; font-size: 14px; font-weight: bold;",
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <LevelIndicator level={4} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 400, fontFamily: "serif", fontStyle: "italic" }}
        >
          "The answer is obvious."
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            letterSpacing: 2,
            mt: 2,
            background: "linear-gradient(45deg, #000 30%, #333 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          THE DARK KNIGHT
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
              fontFamily: '"Courier New", monospace',
            }}
          >
            "I believe whatever doesn't kill you, simply makes you... look
            behind the scenes."
          </Typography>
        </Box>
      </motion.div>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG4}
        onSuccessPath="/level5"
        successMessage="so you are serious..."
        level={4}
        taskMessage="You're the hero this codebase deserves."
      />
    </Container>
  );
};

export default DarkKnight;
