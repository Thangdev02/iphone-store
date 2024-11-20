import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import './header.css';

const Header = ({ user, onLogout, cart }) => {
  const navigate = useNavigate();

  

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/shop');
  };


  return (
    <Navbar style={{ position: 'sticky', top: '0', zIndex: '999', scrollBehavior: 'smooth' }} bg="light" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="bi bi-apple"></i> Apple
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shop">Store</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSearch} variant="outline-secondary">Search</Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              {cart.length > 0 && (
                <Badge style={{ padding: '8px' }} bg="warning">
                  Cart <span style={{ color: 'black' }}>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </Badge>
              )}
            </Nav.Link>
            {user ? (
              <Nav.Link
                style={{ display: 'flex', alignItems: 'center' }}
                as="span"
                onClick={() => navigate('/profile')}
                className="text-gray-600"
              >
                <FaApple style={{ marginRight: '8px' }} /> {user.username}
              </Nav.Link>
            ) : (
              <Button as={Link} to="/login" variant="outline-primary">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
