import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SubmitFlag from "../components/SubmitFlag";

const StrongestWills = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Atmosphere */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "150vw",
          height: "150vh",
          background:
            "radial-gradient(circle, rgba(98,0,234,0.15) 0%, rgba(0,0,0,1) 70%)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animation: "pulse 8s infinite ease-in-out",
          "@keyframes pulse": {
            "0%": { opacity: 0.5 },
            "50%": { opacity: 0.8 },
            "100%": { opacity: 0.5 },
          },
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontFamily: '"Cinzel", "serif"',
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.4,
              textShadow: "0 0 20px rgba(156, 39, 176, 0.7)",
              mb: 4,
            }}
          >
            "The hardest choices require the strongest wills"
          </Typography>
        </motion.div>
      </Container>

      <SubmitFlag
        expectedFlag={import.meta.env.VITE_FLAG3}
        onSuccessPath="/dark-knight"
        successMessage="Balance restored. 🧤"
      />
    </Box>
  );
};

export default StrongestWills;
