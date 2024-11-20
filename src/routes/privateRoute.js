// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ user, requiredRole }) => {
  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (user.role !== requiredRole) {
    // Redirect to the home page if the user does not have the required role
    return <Navigate to="/" />;
  }

  // If authenticated and has the required role, allow access to the route
  return <Outlet />;
};

export default PrivateRoute;
