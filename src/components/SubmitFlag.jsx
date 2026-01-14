import { useState } from "react";
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
import { FaArrowRight, FaFlag } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { saveProgress } from "../utils/security";

const SubmitFlag = ({
  expectedFlag,
  onSuccessPath,
  successMessage = "System Unlocked! 🔓",
  level,
}) => {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const refinedFlag = flag.trim().toLowerCase().replaceAll(" ", "_");
    if (refinedFlag === expectedFlag) {
      toast.success(successMessage, {
        duration: 2000,
        position: "top-center",
        icon: "🚀",
        style: {
          background: "#1a1a1a",
          color: "#03dac6",
          border: "1px solid #03dac6",
          boxShadow: "0 0 15px rgba(3, 218, 198, 0.3)",
          fontWeight: "bold",
        },
      });

      // Update progress securely
      if (level) {
        await saveProgress(level);
      }

      setTimeout(() => {
        navigate(onSuccessPath);
      }, 1500);
      handleClose();
    } else {
      toast.error("Incorrect Flag. Try again! 🚫", {
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
        }}
      >
        <motion.div
          layout
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleOpen}
          style={{
            backgroundColor: "#6200ea",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            boxShadow: "0 8px 24px rgba(98, 0, 234, 0.3)",
            height: "56px",
            minWidth: "56px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div layout style={{ display: "flex", alignItems: "center" }}>
            <FaArrowRight size={20} color="white" />
            <AnimatePresence>
              {isHovered && (
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
                  Submit Flag
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
              placeholder="enter_flag_here"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  fontSize: "1.1rem",
                  fontFamily: "monospace",
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
    </>
  );
};

export default SubmitFlag;
