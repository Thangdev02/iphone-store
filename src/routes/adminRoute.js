// src/components/AdminPrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoute = ({ user }) => {
  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (user.role !== 'admin') {
    // Redirect non-admin users to the home page
    return <Navigate to="/" />;
  }

  // If authenticated and has the admin role, allow access to the route
  return <Outlet />;
};

export default AdminPrivateRoute;
