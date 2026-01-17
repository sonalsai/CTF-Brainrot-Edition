import { motion } from "framer-motion";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { FaBrain, FaGamepad } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={4} alignItems="center" textAlign="center">
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
              color: "primary.main",
              fontSize: "5rem",
              display: "flex",
              gap: 2,
            }}
          >
            <FaBrain />
            <FaGamepad />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              background: "linear-gradient(45deg, #6200ea 30%, #03dac6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CTF: Brainrot Edition
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Typography variant="h5" color="text.secondary" paragraph>
            Welcome to the ultimate challenge for your neurons. Prepare to debug
            the un-debuggable and decrypt the absurd.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ px: 5, py: 1.5, fontSize: "1.2rem", borderRadius: "50px" }}
            endIcon={<FaGamepad />}
            onClick={() => navigate("/level1")}
          >
            Start Challenge
          </Button>
        </motion.div>
      </Stack>
    </Container>
  );
};

export default Home;
