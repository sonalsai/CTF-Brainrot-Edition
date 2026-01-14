import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/0-Home";
import LastCommit from "./pages/1-LastCommit";
import CircleMe from "./pages/2-CircleMe";
import StrongestWills from "./pages/3-StrongestWills";
import DarkKnight from "./pages/4-DrakKnight";
import WaitForIt from "./pages/5-WaitForIt";
import ProtectedRoute from "./components/ProtectedRoute";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Level 1 */}
          <Route path="/last-commit" element={<LastCommit />} />
          {/* Level 2 */}
          <Route
            path="/circle-around"
            element={
              <ProtectedRoute requiredSolvedLevel={1}>
                <CircleMe />
              </ProtectedRoute>
            }
          />
          {/* Level 3 */}
          <Route
            path={`/${import.meta.env.VITE_TASK3_URL}`}
            element={
              <ProtectedRoute requiredSolvedLevel={2}>
                <StrongestWills />
              </ProtectedRoute>
            }
          />
          {/* Level 4 */}
          <Route
            path="/dark-knight"
            element={
              <ProtectedRoute requiredSolvedLevel={3}>
                <DarkKnight />
              </ProtectedRoute>
            }
          />
          {/* Level 5 */}
          <Route
            path="/wait-for-it"
            element={
              <ProtectedRoute requiredSolvedLevel={4}>
                <WaitForIt />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
