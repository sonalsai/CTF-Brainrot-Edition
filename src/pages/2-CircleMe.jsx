import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";

import SubmitFlag from "../components/SubmitFlag";
import LevelIndicator from "../components/LevelIndicator";

const CircleMe = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Show infinity symbol after a delay

  return (
    <Box
      ref={scrollRef}
      sx={{
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        userSelect: "none",
      }}
    >
      <LevelIndicator level={2} />
      <Container
        maxWidth="md"
        sx={{
          minHeight: "200vh", // Increased height for better scroll experience
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          // overflow: "hidden", // Remove overflow hidden from Container, let Box handle scroll
        }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 6,
                textAlign: "center",
                letterSpacing: "-0.05em",
              }}
            >
              The Circle Never Ends
            </Typography>
          </motion.div>

          {/* Infinite Spinning Ring with Trace Effect */}
          <motion.div
            style={{
              scale, // Scales up on scroll
              rotate, // Rotates on scroll
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              style={{
                width: "300px",
                height: "300px",
                position: "relative",
                borderRadius: "50%",
              }}
            >
              {/* The "Trace" Gradient Ring */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(98, 0, 234, 0.1) 40%, #03dac6 80%, #ffffff 100%)",
                  mask: "radial-gradient(closest-side, transparent 78%, black 79%)",
                  WebkitMask:
                    "radial-gradient(closest-side, transparent 78%, black 79%)",
                  filter: "drop-shadow(0 0 10px rgba(3, 218, 198, 0.4))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: "20px", // Match stroke approx width
                  height: "20px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  transform: "translate(-50%, -50%)",
                  // Removed massive box shadows
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{
                mt: 8,
                fontStyle: "italic",
                color: "text.SECONDARY",
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              “He said the answer was hidden in underground”
            </Typography>
          </motion.div>
        </Box>

        {/* Hidden Section Revealed on Scroll */}
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "800px",
              marginBottom: "16px",
            }}
          >
            {"Oh you caught me! \n But can you escape the loop?"
              .split("")
              .map((char, index) => {
                if (char === "\n") {
                  return (
                    <div
                      key={index}
                      style={{ flexBasis: "100%", height: "0" }}
                    />
                  );
                }
                return (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.5 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    <Typography
                      variant="h3"
                      component="span"
                      sx={{
                        fontWeight: 900,
                        color: "#c4c3c3ff",
                        display: "inline-block",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {char}
                    </Typography>
                  </motion.span>
                );
              })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                  delayChildren: 1.5, // Delay the second sentence slightly
                },
              },
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "800px",
              marginBottom: "32px",
            }}
          >
            {`"The end is the beginning, and the beginning is the end"`
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                      },
                    },
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "#888",
                      display: "inline-block",
                      letterSpacing: "0.05em",
                      fontSize: "1.1rem",
                    }}
                  >
                    {char}
                  </Typography>
                </motion.span>
              ))}
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              filter: "drop-shadow(0 0 20px #03dac6)",
            }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: "pointer", display: "inline-block" }}
            role="button"
          >
            <Typography
              variant="h1"
              aria-label="flag{infinite_scroll_madness}"
              sx={{
                fontSize: "10rem",
                background: "linear-gradient(45deg, #03dac6, #6200ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              ∞
            </Typography>
          </motion.div>
        </Box>

        {/* Reusable Submit Flag Dialog */}
        <SubmitFlag
          expectedFlag={import.meta.env.VITE_FLAG2}
          onSuccessPath={`/${import.meta.env.VITE_TASK3_URL}`}
          successMessage="Infinity Conquered! ♾️"
          level={2}
        />
      </Container>
    </Box>
  );
};

export default CircleMe;
