import React from 'react';
import Header from './header';
import Footer from './footer';
import { useLocation } from 'react-router-dom';
export default function MainLayout({ children }) {
    const location = useLocation();
    const showHeaderFooter = location.pathname !== '/login';
  
    return (
      <div className="app-container">
        {showHeaderFooter && <Header />}
        <div>{children}</div>
        {showHeaderFooter && <Footer />}
      </div>
    );
  }