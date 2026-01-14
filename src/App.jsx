import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Level4 from "./pages/Level4";
import Level5 from "./pages/Level5";
import ProtectedRoute from "./components/ProtectedRoute";
import GameInstructions from "./components/GameInstructions";

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
      <BrowserRouter>
        <GameInstructions />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Level 1 */}
          <Route path="/last-commit" element={<Level1 />} />
          {/* Level 2 */}
          <Route
            path="/circle-around"
            element={
              <ProtectedRoute requiredSolvedLevel={1}>
                <Level2 />
              </ProtectedRoute>
            }
          />
          {/* Level 3 */}
          <Route
            path={`/${import.meta.env.VITE_TASK3_URL}`}
            element={
              <ProtectedRoute requiredSolvedLevel={2}>
                <Level3 />
              </ProtectedRoute>
            }
          />
          {/* Level 4 */}
          <Route
            path="/dark-knight"
            element={
              <ProtectedRoute requiredSolvedLevel={3}>
                <Level4 />
              </ProtectedRoute>
            }
          />
          {/* Level 5 */}
          <Route
            path="/wait-for-it"
            element={
              <ProtectedRoute requiredSolvedLevel={4}>
                <Level5 />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
