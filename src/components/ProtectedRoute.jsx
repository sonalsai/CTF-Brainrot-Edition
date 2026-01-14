import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import { verifyAccess } from "../utils/security";

const ProtectedRoute = ({ children, requiredSolvedLevel }) => {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(null);

  useEffect(() => {
    const checkAccess = async () => {
      const access = await verifyAccess(requiredSolvedLevel);
      setHasAccess(access);
    };
    checkAccess();
  }, [requiredSolvedLevel]);

  if (hasAccess === null) {
    return null; // Or a loading spinner if preferred
  }

  if (hasAccess === false) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "#000",
          color: "#fff",
          p: 3,
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Box
            sx={{
              color: "error.main",
              fontSize: "4rem",
              mb: 2,
            }}
          >
            <FaLock />
          </Box>
        </motion.div>

        <Typography
          variant="h4"
          color="error"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          ACCESS DENIED
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "600px",
            color: "error.main",
          }}
        >
          To access this page, please complete all previous levels
        </Typography>

        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate("/")}
          sx={{ borderRadius: "50px", px: 4 }}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;
