import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  DialogTitle,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import { FaArrowRight, FaFlag, FaBrain } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { saveProgress, verifyAccess } from "../utils/security";

const SubmitFlag = ({
  expectedFlag,
  onSuccessPath,
  successMessage = "System Unlocked! 🔓",
  level,
  taskMessage = "Loading next challenge...",
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [flag, setFlag] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkCompletion = async () => {
      if (level) {
        const completed = await verifyAccess(level);
        setIsCompleted(completed);
      }
    };
    checkCompletion();
  }, [level]);

  const handleOpen = () => {
    if (isCompleted) {
      navigate(onSuccessPath);
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const refinedFlag = flag.trim().toLowerCase().replaceAll(" ", "_");
    if (refinedFlag === expectedFlag) {
      // Update progress securely
      if (level) {
        await saveProgress(level);
      }

      setIsLoading(true);
      handleClose();

      setTimeout(() => {
        navigate(onSuccessPath);
      }, 3000);
    } else {
      toast.error("Incorrect Flag. Try again! 🚫", {
        id: "incorrect-flag",
        position: "top-center",
        style: {
          background: "#1a1a1a",
          color: "#ff1744",
          border: "1px solid #ff1744",
          boxShadow: "0 0 15px rgba(255, 23, 68, 0.3)",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 40,
          right: 30,
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "#00c853",
              color: "white",
              padding: "4px 12px",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(0, 200, 83, 0.4)",
            }}
          >
            Level Completed ✅
          </motion.div>
        )}
        <motion.div
          layout
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleOpen}
          style={{
            backgroundColor: isCompleted ? "#52d884ff" : "#6200ea",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            boxShadow: isCompleted
              ? "0 8px 24px rgba(3, 218, 198, 0.4)"
              : "0 8px 24px rgba(98, 0, 234, 0.3)",
            height: "56px",
            minWidth: "56px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div layout style={{ display: "flex", alignItems: "center" }}>
            <FaArrowRight size={20} color="white" />
            <AnimatePresence>
              {(isHovered || isCompleted) && (
                <motion.span
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: "auto", marginLeft: 12 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  style={{
                    color: "white",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "1rem",
                  }}
                >
                  {isCompleted ? "Next Level" : "Submit Flag"}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Box>

      {/* Reusable Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: 2,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
          },
        }}
        TransitionComponent={motion.div}
        TransitionProps={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            fontWeight: 700,
          }}
        >
          <Box
            sx={{
              p: 1.5,
              borderRadius: "16px",
              bgcolor: "rgba(98, 0, 234, 0.1)",
              color: "primary.main",
              display: "flex",
            }}
          >
            <FaFlag size={20} />
          </Box>
          Submit Flag
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <Box sx={{ mt: 1 }}>
            <TextField
              autoFocus
              autoComplete="off"
              fullWidth
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="enter_flag_here"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  fontSize: "1.1rem",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(0,0,0,0.03)",
                  "& fieldset": { border: "none" },
                },
                "& .MuiInputBase-input": {
                  textAlign: "center",
                  color: "#333", // Ensure text visibility
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "text.secondary",
                      }}
                    >
                      flag&#123;
                    </Typography>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "text.secondary",
                      }}
                    >
                      &#125;
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={handleClose}
            color="inherit"
            sx={{ borderRadius: "50px", px: 3 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              px: 4,
              background: "linear-gradient(45deg, #6200ea 30%, #7c4dff 90%)",
              fontWeight: 600,
              boxShadow: "0 4px 14px 0 rgba(98, 0, 234, 0.39)",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#333",
            }}
          >
            {/* Animated Icon Container */}
            <Box
              sx={{
                position: "relative",
                width: 120,
                height: 120,
                mb: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "2px dashed #6200ea",
                  boxShadow: "0 0 15px rgba(98, 0, 234, 0.2)",
                }}
              />

              {/* Inner Pulsing Circle */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  background: "rgba(3, 218, 198, 0.1)",
                  border: "1px solid rgba(3, 218, 198, 0.3)",
                }}
              />

              {/* Icon */}
              <FaBrain size={50} color="#6200ea" style={{ zIndex: 2 }} />
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(45deg, #6200ea, #03dac6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
                {successMessage}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#555",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                  mt: 1,
                  textAlign: "center",
                  maxWidth: "80%",
                }}
              >
                {taskMessage}
              </Typography>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubmitFlag;
