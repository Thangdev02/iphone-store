import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminPrivateRoute = () => {
  const userCookie = Cookies.get('user');
  const user = userCookie ? JSON.parse(userCookie) : null;

  console.log('Admin User:', user); // Debugging: Ensure user is correctly fetched

  if (!user || user.role !== 'admin') {
    console.error('Access denied. Redirecting to /');
    return <Navigate to="/" />; // Redirect non-admin users to the homepage
  }

  return <Outlet />; // Render admin route if the user is an admin
};

export default AdminPrivateRoute;
