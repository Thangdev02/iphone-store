// src/layouts/AdminLayout.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import './adminLayouts.css';
import Cookies from 'js-cookie';

const AdminLayout = () => {
  const handleLogout = () => {
    Cookies.remove('user'); // Remove the user cookie
    window.location.href = '/login'; // Redirect to login page
  };
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="admin-sidebar p-3">
          <h4>Admin Dashboard</h4>
          <Nav className="flex-column">
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Product Management
            </NavLink>
            <NavLink
              to="brands"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Brand Management
            </NavLink>
            <NavLink
              to="orders"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Orders Management
            </NavLink>
          </Nav>
          <Button variant="danger" className="mt-3" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
        <Col md={10} className="admin-content p-4">
          <Outlet /> {/* Render the child routes here */}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
