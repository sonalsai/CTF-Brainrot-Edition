import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import GameInstructions from "./components/GameInstructions";
import MobileBlocker from "./components/MobileBlocker";
import Router from "./Router";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6200ea", // Deep Purple
    },
    secondary: {
      main: "#03dac6", // Teal
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <MobileBlocker />
      <BrowserRouter>
        <GameInstructions />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
