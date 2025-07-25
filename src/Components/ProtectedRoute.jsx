import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;

