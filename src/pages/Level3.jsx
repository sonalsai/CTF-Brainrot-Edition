import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SubmitFlag from "../components/SubmitFlag";
import LevelIndicator from "../components/LevelIndicator";
import { FaLongArrowAltUp } from "react-icons/fa";

const StrongestWills = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#f3e5f5", // Light Lavender
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LevelIndicator level={3} />

      {/* 1. Ethereal Sky Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, #ffffff 0%, #f3e5f5 50%, #e1bee7 100%)",
          zIndex: 0,
        }}
      />

      {/* 2. Soft Cloud/Aura Animation */}
      <Box
        component={motion.div}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "30%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(circle, rgba(149, 117, 205, 0.2) 0%, transparent 60%)", // Soft Violet Aura
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* 3. Main Content Card */}
      <Container
        maxWidth="md"
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          {/* Glass Card - Light Version */}
          <Box
            sx={{
              position: "relative",
              padding: { xs: 4, md: 8 },
              borderRadius: "32px",
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 20px 60px rgba(103, 58, 183, 0.15)", // Soft violet shadow
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            {/* Top Shine */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(149, 117, 205, 0.4), transparent)",
              }}
            />

            {/* The Quote */}
            <Typography
              variant="h3"
              sx={{
                color: "#4a148c", // Deep Purple Text
                fontFamily: '"Poppins", "Ubuntu", "sans-serif"',
                fontWeight: 700,
                lineHeight: 1.4,
                mb: 6,
                fontSize: { xs: "1.8rem", md: "2.8rem" },
              }}
            >
              "The hardest choices require the strongest wills"
            </Typography>

            {/* Ornamental Divider */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mb: 6,
                opacity: 0.6,
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #7e57c2)",
                }}
              />
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  transform: "rotate(45deg)",
                  bgcolor: "#7e57c2", // Medium Purple
                }}
              />
              <Box
                sx={{
                  width: "60px",
                  height: "1px",
                  background: "linear-gradient(90deg, #7e57c2, transparent)",
                }}
              />
            </Box>

            {/* The Hint Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaLongArrowAltUp
                  size={28}
                  color="#673ab7" // Deep Purple Icon
                />
              </motion.div>

              <Typography
                variant="overline"
                sx={{
                  color: "#673ab7",
                  letterSpacing: "0.3em",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  mt: 1,
                }}
              >
                Seek The Path Above
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <SubmitFlag
        expectedFlag={import.meta.env.FLAG3}
        onSuccessPath="/level4"
        successMessage="Balance restored. 🧤"
        level={3}
        taskMessage="Did you guess it or did it cost everything?"
      />
    </Box>
  );
};

export default StrongestWills;
