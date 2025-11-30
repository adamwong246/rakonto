import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { LandingPage } from "./pages/LandingPage";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";

import "./index.css";

const App: React.FC = () => {
  const { auth } = useAuth();
  

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            !auth.isAuthenticated ? (
              <LandingPage />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />
        <Route 
          path="/auth" 
          element={
            !auth.isAuthenticated ? (
              <AuthPage />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            auth.isAuthenticated ? (
              <DashboardPage />
            ) : (
              <Navigate to="/auth" replace />
            )
          } 
        />
        {/* Fallback route for SPA routing */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
