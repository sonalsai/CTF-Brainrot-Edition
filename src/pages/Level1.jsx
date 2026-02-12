import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import SubmitFlag from "../components/SubmitFlag";
import LevelIndicator from "../components/LevelIndicator";

const LastCommit = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <LevelIndicator level={1} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          color="success.main"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Deployment successful.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typography variant="h6" color="text.primary">
          Nothing seems wrong.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.8rem",
              color: "text.disabled",
              fontStyle: "italic",
            }}
          >
            "The numbers in the verse reveal the hidden shape..."
            <br />
            <strong>
              "I need to be baptized by you, and do you come to me?"
            </strong>
          </Typography>
        </Box>
      </motion.div>

      <SubmitFlag
        expectedFlag={import.meta.env.FLAG1}
        onSuccessPath="/level2"
        successMessage="Path Cleared! 🚀"
        level={1}
        taskMessage="Hope you didn't just guess that."
      />
    </Container>
  );
};

export default LastCommit;
