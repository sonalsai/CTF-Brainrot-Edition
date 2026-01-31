import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitFlag from "../components/SubmitFlag";

import morse from "morse";

const getMorseForChar = (char) => {
  if (char === " ") return "";
  return morse.encode(char);
};

const Level7 = () => {
  const [stage, setStage] = useState(0);
  const [decodedMsg, setDecodedMsg] = useState("");
  const [currentSeq, setCurrentSeq] = useState("");
  const targetMessage = import.meta.env.VITE_TELEMETRY_MSG;

  const handleDownloadLog = () => {
    const link = document.createElement("a");
    link.href = "/signal_log.txt";
    link.download = "signal_log.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStage(1);
    toast.success("LOG DOWNLOADED. CHECK FILE CONTENT.");
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = "/sky.png";
    link.download = "sky.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const playMorseTone = (dotOrDash) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = dotOrDash === "." ? 600 : 400; // Distinct tones
    const duration = dotOrDash === "." ? 0.1 : 0.3;

    osc.start();
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration + 0.05);
  };

  const handleInput = (input) => {
    playMorseTone(input);

    if (decodedMsg.length >= targetMessage.length) return;

    let nextCharIndex = decodedMsg.length;
    let targetChar = targetMessage[nextCharIndex];

    // Safety check for unknown chars
    // if (!MORSE_CODE[targetChar] && targetChar !== " ") { ... }

    const newSeq = currentSeq + input;
    const expectedMorse = getMorseForChar(targetChar);

    if (expectedMorse.startsWith(newSeq)) {
      // Input is correct so far
      if (newSeq === expectedMorse) {
        // Letter Complete!
        let newDecoded = decodedMsg + targetChar;
        setCurrentSeq("");

        // Check if next char is space, auto-add it
        if (
          newDecoded.length < targetMessage.length &&
          targetMessage[newDecoded.length] === " "
        ) {
          newDecoded += " ";
        }

        setDecodedMsg(newDecoded);

        // Win Condition
        if (newDecoded === targetMessage) {
          toast.success("SIGNAL VERIFIED. DOWNLOADING DATA...");
          handleDownloadImage();
          setStage(2);
        }
      } else {
        // Still building the letter
        setCurrentSeq(newSeq);
      }
    } else {
      // INCORRECT INPUT
      toast.error("SEQUENCE BROKEN. RESETTING LINK...", {
        id: "sequence-broken",
        style: {
          border: "1px solid #ff0000",
          padding: "16px",
          color: "#ff0000",
          background: "#000",
        },
        iconTheme: { primary: "#ff0000", secondary: "#000" },
      });
      setDecodedMsg(""); // HARSH PENALTY
      setCurrentSeq("");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#050505",
        color: "#00ff41",
        fontFamily: "'Share Tech Mono', monospace",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        userSelect: "none", // Prevent selection
      }}
    >
      <Box
        sx={{
          zIndex: 2,
          textAlign: "center",
          p: 6,
          maxWidth: "800px",
          width: "90%",
          border: "2px solid #00ff41",
          boxShadow: "0 0 20px #00ff41, inset 0 0 20px rgba(0, 255, 65, 0.2)",
          bgcolor: "rgba(0, 10, 0, 0.95)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontFamily: "inherit",
            letterSpacing: 4,
            fontWeight: "bold",
            textShadow: "0 0 10px #00ff41",
          }}
        >
          SIGNAL UPLINK
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontFamily: "inherit",
            color: stage === 2 ? "#00ff41" : "#ff3333",
          }}
        >
          CONNECTION STATUS:{" "}
          {stage === 2
            ? "SECURE"
            : stage === 1
              ? "HANDSHAKE IN PROGRESS"
              : "OFFLINE"}
        </Typography>

        {stage === 0 && (
          <Button
            variant="outlined"
            onClick={handleDownloadLog}
            sx={{
              color: "#00ff41",
              borderColor: "#00ff41",
              fontFamily: "inherit",
              fontSize: "1.2rem",
              px: 4,
              py: 2,
              borderWidth: 2,
              "&:hover": {
                bgcolor: "rgba(0, 255, 65, 0.1)",
                borderColor: "#00ff41",
                boxShadow: "0 0 20px #00ff41",
              },
            }}
          >
            [ INITIATE CONNECTION ]
          </Button>
        )}

        {stage === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography sx={{ mb: 1, color: "#00cc00", fontFamily: "inherit" }}>
              DECODED BUFFER:
            </Typography>

            {/* Decoded Message Display */}
            <Box
              sx={{
                minHeight: "60px",
                border: "1px solid #005500",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#001100",
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "monospace",
                  letterSpacing: 2,
                  wordBreak: "break-all",
                  px: 2,
                }}
              >
                {decodedMsg}
                <span style={{ opacity: 0.5 }}>_</span>
              </Typography>
            </Box>

            {/* Current Sequence Display */}
            <Typography
              sx={{
                mb: 1,
                color: "#88ff88",
                fontFamily: "inherit",
                fontSize: "0.9rem",
              }}
            >
              CURRENT SEQUENCE:
            </Typography>
            <Box sx={{ height: "40px", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "monospace",
                  color: "#ffff00",
                  letterSpacing: 5,
                }}
              >
                {currentSeq}
              </Typography>
            </Box>

            <Typography sx={{ mb: 4, color: "#00aa00", fontSize: "0.8rem" }}>
              [ VERIFYING AGAINST TARGET SIGNATURE... ]
            </Typography>

            {/* Controls */}
            <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
              <Button
                onClick={() => handleInput(".")}
                variant="contained"
                sx={{
                  bgcolor: "transparent",
                  color: "#00ff41",
                  border: "2px solid #00ff41",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  fontSize: "2rem",
                  fontFamily: "inherit",
                  "&:hover": {
                    bgcolor: "#00ff41",
                    color: "#000",
                    boxShadow: "0 0 30px #00ff41",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                ●
              </Button>

              <Button
                onClick={() => handleInput("-")}
                variant="contained"
                sx={{
                  bgcolor: "transparent",
                  color: "#00ff41",
                  border: "2px solid #00ff41",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  fontSize: "2rem",
                  fontFamily: "inherit",
                  "&:hover": {
                    bgcolor: "#00ff41",
                    color: "#000",
                    boxShadow: "0 0 30px #00ff41",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                ▬
              </Button>
            </Box>
            <Typography sx={{ mt: 2, color: "#005500", fontSize: "0.7rem" }}>
              CAUTION: INVALID INPUT WILL CAUSE IMMEDIATE LINK FAILURE.
            </Typography>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Typography sx={{ mt: 4, fontFamily: "inherit", color: "#aaa" }}>
              AWAITING FINAL KEY...
            </Typography>
          </motion.div>
        )}
      </Box>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG7}
        onSuccessPath="/coming-soon"
        successMessage="SIGNAL ESTABLISHED. 📡"
        level={7}
        taskMessage="You have reached the stars."
      />
    </Box>
  );
};

export default Level7;
