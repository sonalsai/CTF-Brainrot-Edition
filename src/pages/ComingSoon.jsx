import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  Stack,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome, FaTrashAlt, FaRedo, FaClock, FaRocket } from "react-icons/fa";

const ComingSoon = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleHomeClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("ctf_progress_")) {
        localStorage.removeItem(key);
      }
    });
    navigate("/");
  };

  const handleHomeOnly = () => {
    navigate("/");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stack spacing={6} alignItems="center" textAlign="center" zIndex={1}>
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              fontSize: "4rem",
              color: "secondary.main",
            }}
          >
            <FaClock />
            <FaRocket style={{ color: theme.palette.primary.main }} />
          </Box>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(45deg, #6200ea 30%, #03dac6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1px",
              mb: 2,
            }}
          >
            TO BE CONTINUED...
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: "600px" }}
          >
            You have proven your worth, but the simulation is evolving.
            <br />
            New challenges are being compiled. Stay tuned.
          </Typography>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleHomeClick}
            startIcon={<FaHome />}
            sx={{
              borderRadius: "50px",
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              background: "linear-gradient(45deg, #6200ea 30%, #03dac6 90%)",
              boxShadow: "0 10px 20px rgba(98, 0, 234, 0.3)",
              "&:hover": {
                boxShadow: "0 15px 30px rgba(3, 218, 198, 0.4)",
              },
            }}
          >
            Return to Home
          </Button>
        </motion.div>
      </Stack>

      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            p: 2,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          },
        }}
        TransitionComponent={motion.div}
        TransitionProps={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          <FaRedo /> Reset Progress?
        </DialogTitle>
        <DialogContent>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            You've reached the end of the current content. <br />
            Would you like to reset your progress before returning home?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={handleHomeOnly}
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: "50px", px: 3 }}
          >
            Keep Progress
          </Button>
          <Button
            onClick={handleReset}
            variant="contained"
            color="error"
            startIcon={<FaTrashAlt />}
            sx={{
              borderRadius: "50px",
              px: 3,
              boxShadow: "0 4px 12px rgba(211, 47, 47, 0.3)",
            }}
          >
            Yes, Reset
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ComingSoon;
