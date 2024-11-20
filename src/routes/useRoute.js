import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserPrivateRoute = () => {
  const userCookie = Cookies.get('user');
  const user = userCookie ? JSON.parse(userCookie) : null;

  console.log('User:', user); // Debugging: Check if user is retrieved correctly

  if (!user) {
    console.error('No user found. Redirecting to /login');
    return <Navigate to="/login" />;
  }

  if (user.role === 'admin') {
    console.error('Admin user trying to access user route. Redirecting to /dashboard');
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />; // Render child routes for authenticated users
};

export default UserPrivateRoute;
