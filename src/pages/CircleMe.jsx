import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { FaArrowDown } from "react-icons/fa";
import SubmitFlag from "../components/SubmitFlag";

const CircleMe = () => {
  const [showInfinity, setShowInfinity] = useState(false);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Show infinity symbol after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfinity(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          minHeight: "250vh", // Increased height for better scroll experience
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ position: "absolute", bottom: 40 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                opacity: 0.6,
              }}
            >
              <Typography variant="caption" sx={{ letterSpacing: 2 }}>
                SCROLL DOWN
              </Typography>
              <FaArrowDown />
            </Box>
          </motion.div>
        </Box>

        {/* Simulating long content/scroll requirement */}
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: "10rem",
              color: "#e0e0e0",
              transform: "rotate(-45deg)",
            }}
          >
            LOOP
          </Typography>
        </Box>

        {/* The Hidden Infinity Symbol */}
        {showInfinity && (
          <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{
                scale: 1.2,
                rotate: 180,
                filter: "drop-shadow(0 0 20px #03dac6)",
              }}
              whileTap={{ scale: 0.9 }}
              style={{ cursor: "pointer" }}
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
        )}

        {/* Reusable Submit Flag Dialog */}
        <SubmitFlag
          expectedFlag={
            import.meta.env.VITE_FLAG2 || "flag{infinite_scroll_madness}"
          }
          onSuccessPath="/time"
          successMessage="Infinity Conquered! ♾️"
        />

        <Toaster />
      </Container>
    </Box>
  );
};

export default CircleMe;
