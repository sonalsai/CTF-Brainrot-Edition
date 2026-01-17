import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Level4 from "./pages/Level4";
import Level5 from "./pages/Level5";
import Level6 from "./pages/Level6";
import Level7 from "./pages/Level7";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Level 1 */}
      <Route path="/level1" element={<Level1 />} />
      {/* Level 2 */}
      <Route
        path="/level2"
        element={
          <ProtectedRoute requiredSolvedLevel={1}>
            <Level2 />
          </ProtectedRoute>
        }
      />
      {/* Level 3 Redirect */}
      <Route
        path="/level3"
        element={<Navigate to={`/${import.meta.env.VITE_TASK3_URL}`} replace />}
      />
      {/* Level 3 Actual */}
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
        path="/level4"
        element={
          <ProtectedRoute requiredSolvedLevel={3}>
            <Level4 />
          </ProtectedRoute>
        }
      />
      {/* Level 5 */}
      <Route
        path="/level5"
        element={
          <ProtectedRoute requiredSolvedLevel={4}>
            <Level5 />
          </ProtectedRoute>
        }
      />
      {/* Level 6 */}
      <Route
        path="/level6"
        element={
          <ProtectedRoute requiredSolvedLevel={5}>
            <Level6 />
          </ProtectedRoute>
        }
      />
      {/* Level 7 */}
      <Route
        path="/level7"
        element={
          <ProtectedRoute requiredSolvedLevel={6}>
            <Level7 />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
