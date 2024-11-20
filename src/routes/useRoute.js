// src/components/UserPrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UserPrivateRoute = ({ user }) => {
  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (user.role === 'admin') {
    // Redirect to admin dashboard if the user is an admin
    return <Navigate to="/dashboard" />;
  }

  // If authenticated and not an admin, allow access to the route
  return <Outlet />;
};

export default UserPrivateRoute;
