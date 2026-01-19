import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import LevelIndicator from "../components/LevelIndicator";
import SubmitFlag from "../components/SubmitFlag";
import { PiMathOperationsBold } from "react-icons/pi";

const Level6 = () => {
  const doorLink = import.meta.env.VITE_DOOR_URL;
  const [open, setOpen] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [error, setError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError(false);
    setKeyInput("");
  };

  const handleSubmit = () => {
    if (keyInput === import.meta.env.VITE_DOOR_KEY) {
      window.open(doorLink, "_blank");
      handleClose();
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#fcfcfc", // Clean paper white
        color: "#2c3e50",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Crimson Text', serif",
      }}
    >
      <LevelIndicator level={6} />

      {/* Professional Grid Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          p: 6,
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              color: "#1976d2",
            }}
          >
            <PiMathOperationsBold size={40} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Crimson Text', serif",
              fontStyle: "italic",
              fontWeight: 600,
              color: "#34495e",
              mb: 6,
              lineHeight: 1.6,
            }}
          >
            "Two consecutive odd primes are not the answer,
            <br />
            Yet two integers hide between them.
            <br />
            Their least common multiple is four hundred eighty-three.
            <br />
            Their sum equals twice the geometric mean of the pair.
            <br />
            The greater exceeds the lesser by two.
            <br />
            Reveal their proportion."
          </Typography>

          <Box
            sx={{
              height: "1px",
              width: "100px",
              bgcolor: "#1976d2",
              opacity: 0.3,
              mx: "auto",
              mb: 6,
            }}
          />

          {/* Hidden Link Sentence */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Crimson Text', serif",
              fontSize: "1.1rem",
              color: "#7f8c8d",
            }}
          >
            Understanding is the key. Seek the{" "}
            <Box
              component="span"
              onClick={handleOpen}
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#1976d2",
                  textDecorationColor: "#1976d2",
                },
              }}
            >
              door
            </Box>{" "}
            to find your answer.
          </Typography>
        </motion.div>
      </Container>

      {/* Professional Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#ffffff",
            color: "#333",
            borderRadius: "24px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            minWidth: "320px",
            maxWidth: "400px",
            padding: "8px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'Crimson Text', serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#1e293b",
            textAlign: "center",
            pt: 3,
            pb: 1,
          }}
        >
          Access Restriction
        </DialogTitle>
        <DialogContent sx={{ px: 4 }}>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "#64748b",
              textAlign: "center",
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            Please enter the key for door to proceed.
          </Typography>
          <TextField
            autoFocus
            fullWidth
            variant="outlined"
            placeholder="Key"
            value={keyInput}
            onChange={(e) => {
              setKeyInput(e.target.value);
              setError(false);
            }}
            error={error}
            helperText={error ? "Verification failed." : ""}
            InputProps={{
              style: {
                fontFamily: "'Roboto Mono', monospace",
                backgroundColor: "#f1f5f9",
                borderRadius: "12px",
                fontSize: "1rem",
              },
              sx: {
                "& fieldset": { border: "none" },
                "&:hover fieldset": { border: "none" },
                "&.Mui-focused fieldset": { border: "1px solid #1976d2" }, // Subtle focus border
                "&.Mui-focused": {
                  bgcolor: "#fff",
                  boxShadow: "0 0 0 4px rgba(25, 118, 210, 0.1)",
                },
              },
            }}
            sx={{
              "& .MuiFormHelperText-root": {
                textAlign: "center",
                fontFamily: "'Roboto Mono', monospace",
              },
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={handleClose}
            sx={{
              color: "#64748b",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "50px",
              px: 3,
              "&:hover": { bgcolor: "#f1f5f9" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#1e293b", // Darker subtle blue/slate
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "50px",
              px: 4,
              py: 1,
              "&:hover": { bgcolor: "#0f172a" },
            }}
          >
            Verify
          </Button>
        </DialogActions>
      </Dialog>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG6}
        onSuccessPath="/level7"
        successMessage="Solution verified."
        level={6}
        taskMessage="Mathematics is the language of nature."
      />

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Roboto+Mono:wght@400;500&display=swap');
        `}
      </style>
    </Box>
  );
};

export default Level6;
