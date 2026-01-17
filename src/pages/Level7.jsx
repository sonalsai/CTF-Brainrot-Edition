import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { generateTelemetry } from "../utils/telemetryGen";
import SubmitFlag from "../components/SubmitFlag";

const Level7 = () => {
  const [stage, setStage] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleDownloadLog = () => {
    generateTelemetry(import.meta.env.VITE_TELEMETRY_MSG);
    setStage(1);
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = "/sky.png";
    link.download = "sky.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = answer.trim().toUpperCase();

    if (stage === 1) {
      if (normalized === import.meta.env.VITE_TELEMETRY_MSG) {
        toast.success("LOG DECODED. DOWNLOADING IMAGERY...");
        handleDownloadImage();
        setStage(2);
        setAnswer("");
      } else {
        toast.error("INVALID DECRYPTION");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "black",
        color: "white",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          zIndex: 2,
          textAlign: "center",
          p: 4,
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontFamily: "monospace",
            letterSpacing: 6,
            fontWeight: "bold",
          }}
        >
          SIGNAL RECEIVED
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 1, fontFamily: "monospace", color: "#00ff00" }}
        >
          SOURCE: UNKNOWN
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 6, fontFamily: "monospace", color: "red" }}
        >
          STATUS: {stage === 2 ? "AWAITING FINAL KEY" : "UNSTABLE"}
        </Typography>

        {stage === 0 && (
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "white",
              borderColor: "white",
              fontFamily: "monospace",
              fontSize: "1.2rem",
              px: 4,
              py: 1.5,
              borderWidth: 2,
              "&:hover": {
                borderColor: "#00ff00",
                color: "#00ff00",
                boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)",
                borderWidth: 2,
              },
            }}
            onClick={handleDownloadLog}
          >
            [ DOWNLOAD TELEMETRY ]
          </Button>
        )}

        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="ENTER LOG MESSAGE"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                sx={{
                  input: {
                    color: "white",
                    fontFamily: "monospace",
                    textAlign: "center",
                    letterSpacing: 2,
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "& fieldset": { borderColor: "rgba(255,255,255,0.5)" },
                    "&:hover fieldset": { borderColor: "#00ff00" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00ff00",
                      borderWidth: 2,
                    },
                  },
                  minWidth: "350px",
                  bgcolor: "rgba(0,0,0,0.8)",
                }}
                autoComplete="off"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontFamily: "monospace",
                  fontSize: "1.1rem",
                  px: 4,
                  py: 1,
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: "#00ff00",
                    color: "black",
                    boxShadow: "0 0 15px rgba(0, 255, 0, 0.8)",
                  },
                }}
              >
                [ TRANSMIT ]
              </Button>
            </form>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Typography sx={{ fontFamily: "monospace", color: "#aaa" }}>
              CHANNEL SECURE. INPUT REQUIRED.
            </Typography>
          </motion.div>
        )}
      </Box>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG7}
        onSuccessPath="/"
        successMessage="SIGNAL ESTABLISHED. 📡"
        level={7}
        taskMessage="You have reached the stars."
      />
    </Box>
  );
};

export default Level7;
