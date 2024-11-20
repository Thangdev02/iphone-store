// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Modal, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import './header.css';

const Header = ({ user, onLogout, cart }) => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowProfile(false);
    onLogout();
    navigate('/login');
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop`);
  };

  // Fallback avatar image
  const defaultAvatar = "https://cafefcdn.com/203337114487263232/2024/4/15/tim-cook-17131546935671543978626-1713163472868-1713163473337446631555.jpg";

  return (
    <Navbar style={{position: 'sticky', top: '0', zIndex: '999',scrollBehavior: 'smooth'}} bg="light" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="bi bi-apple"></i>Apple
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
                <Badge style={{ padding: '8px' }} bg="warning">Cart <span style={{ color: 'black' }}>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span></Badge>
              )}
            </Nav.Link>
            {user ? (
              <Nav.Link style={{display: 'flex', alignItems: 'center'}} as="span" onClick={() => setShowProfile(true)} className="text-gray-600">
                <FaApple /> {user.username}
              </Nav.Link>
            ) : (
              <Button as={Link} to="/login" variant="outline-primary">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Profile Modal */}
      <Modal show={showProfile} onHide={() => setShowProfile(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Account Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            {/* Left Section: Profile Picture */}
            <div className="text-center me-4">
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#f1f1f1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '10px',
                  position: 'relative',
                }}
              >
                <img
                  src={user?.avatar || defaultAvatar} // Use fallback avatar if avatar is missing
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    padding: '5px 0',
                    cursor: 'pointer',
                  }}
                >
                  Click to change photo
                </div>
              </div>
              <h5>{user?.username}</h5>
            </div>

            {/* Right Section: Account Details */}
            <div style={{ flex: 1 }}>
              <Form>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    defaultValue={user?.phone || ''}
                  />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    defaultValue={user?.email || ''}
                  />
                </Form.Group>
                <div className="d-flex mb-3">
                  <Form.Group controlId="dateOfBirth" className="me-3" style={{ flex: 1 }}>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={user?.dob || ''}
                    />
                  </Form.Group>
                  <Form.Group controlId="gender" style={{ flex: 1 }}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue={user?.gender || ''}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    defaultValue={user?.address || ''}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
          <Button 
  variant="primary" 
  onClick={() => {
    navigate('/history'); 
    setShowProfile(false);
  }}
>
  View Order History
</Button>
          <Button variant="primary" onClick={() => alert('Profile Updated')}>
            Update
          </Button>
          <Button variant="secondary" onClick={() => setShowProfile(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Header;

