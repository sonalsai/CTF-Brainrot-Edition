import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/0-Home";
import LastCommit from "./pages/1-LastCommit";
import CircleMe from "./pages/2-CircleMe";
import StrongestWills from "./pages/3-StrongestWills";
import DarkKnight from "./pages/4-DrakKnight";
import WaitForIt from "./pages/5-WaitForIt";

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
