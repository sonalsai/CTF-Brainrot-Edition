import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import LastCommit from "./pages/LastCommit";
import CircleMe from "./pages/CircleMe";
import StrongestWills from "./pages/StrongestWills";
import DarkKnight from "./pages/DrakKnight";
import WaitForIt from "./pages/WaitForIt";

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
          <Route path="/last-commit" element={<LastCommit />} />
          <Route path="/circle-around" element={<CircleMe />} />
          <Route
            path="/time"
            element={
              <div
                style={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <h1>Level 3: Time (Coming Soon)</h1>
              </div>
            }
          />
          <Route
            path={`/${import.meta.env.VITE_TASK3_URL}`}
            element={<StrongestWills />}
          />
          <Route path="/dark-knight" element={<DarkKnight />} />
          <Route path="/wait-for-it" element={<WaitForIt />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
