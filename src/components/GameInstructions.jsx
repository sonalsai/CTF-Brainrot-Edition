import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  FaQuestion,
  FaGamepad,
  FaRobot,
  FaBrain,
  FaSearch,
  FaKeyboard,
} from "react-icons/fa";
import { motion } from "framer-motion";

const GameInstructions = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        sx={{
          position: "fixed",
          top: 20,
          right: 30,
          zIndex: 9999,
        }}
      >
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            width: 50,
            height: 50,
            boxShadow: "0 4px 14px 0 rgba(98, 0, 234, 0.39)",
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "rotate(15deg)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <FaQuestion size={24} />
        </IconButton>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "24px",
              padding: 1,
              backgroundImage: "linear-gradient(135deg, #fff 0%, #f3e5f5 100%)",
              border: "2px solid #6200ea",
            },
          },
          transition: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(45deg, #6200ea, #03dac6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <FaBrain /> HOW TO PLAY
          </Typography>
        </DialogTitle>
        <DialogContent>
          <List sx={{ mt: 1 }}>
            {/* Flag Format Rule */}
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <FaKeyboard size={24} color="#6200ea" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    Entering Flags
                  </Typography>
                }
                secondary={
                  <Box component="span" sx={{ display: "block", mt: 1 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      • Case doesn't matter (we handle it).
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      • Spaces are automatically converted to underscores.
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "rgba(0,0,0,0.05)",
                        p: 1.5,
                        borderRadius: "8px",
                        fontFamily: "monospace",
                        fontSize: "0.85rem",
                        border: "1px dashed #6200ea",
                      }}
                    >
                      "Example Flag" → <strong>example_flag</strong>
                      <br />
                      "Example1" → <strong>example1</strong>
                      <br />
                      "Example's Word" → <strong>example's_word</strong>
                    </Box>
                  </Box>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" sx={{ my: 1 }} />

            {/* Objective Rule */}
            <ListItem>
              <ListItemIcon>
                <FaSearch size={22} color="#03dac6" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" fontWeight="bold">
                    The Objective
                  </Typography>
                }
                secondary="Find hints, solve riddles, checks source code, and uncover the next step clue. The flag is hidden where you least expect it."
              />
            </ListItem>

            <Divider variant="inset" component="li" sx={{ my: 1 }} />

            {/* AI Rule */}
            <ListItem>
              <ListItemIcon>
                <FaRobot size={22} color="#ff4081" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" fontWeight="bold">
                    AI & Brainrot
                  </Typography>
                }
                secondary={
                  <span>
                    Feel free to use AI tools, but don't let them replace your
                    own intelligence.
                    <br />
                    <br />
                    <em>
                      "It's just a fun CTF. Nothing more. Enjoy the brainrot."
                    </em>{" "}
                    🤪
                  </span>
                }
              />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameInstructions;
