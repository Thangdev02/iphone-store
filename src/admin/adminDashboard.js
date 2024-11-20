// src/pages/admin/AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import ProductManagement from './productManagement';
import BrandManagement from './brandManagement';
import OrderManagement from './orderManagement';

const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light sidebar">
          <h3 className="mt-4">Admin Dashboard</h3>
          <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/dashboard/products">Product Management</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/brands">Brand Management</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/orders">Orders Management</Nav.Link>
          </Nav>
        </Col>
        <Col md={9}>
          <Routes>
            <Route path="products" element={<ProductManagement />} />
            <Route path="brands" element={<BrandManagement />} />
            <Route path="orders" element={<OrderManagement />} />

          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
