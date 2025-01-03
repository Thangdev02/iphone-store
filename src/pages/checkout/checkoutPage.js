import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './checkoutPage.css'; // Assume this CSS file has custom styles for checkout
import Cookies from 'js-cookie';

const CheckoutPage = ({ cart, placeOrder }) => {
  const [billingInfo, setBillingInfo] = useState({
    username: '',
    address: '',
    phone: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage if available
    
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const user = JSON.parse(storedUser)[0]; // Ensure data is parsed and not null
  //     if (user) {
  //       setBillingInfo({
  //         fullName: user.username || '', // Pre-fill with the user's username
  //         address: user.address || '', // Pre-fill with the user's address
  //         phone: user.phone || '', // Pre-fill with the user's phone number
  //       });
  //     }
  //   }
  // }, []);
  const userCookie = Cookies.get('user'); // 'user' là tên cookie bạn lưu
  if (userCookie) {
    // Parse cookie từ JSON thành object
    const userData = JSON.parse(decodeURIComponent(userCookie));
    // Cập nhật state với dữ liệu từ cookie
    setBillingInfo({
      username: userData.username || '',
      address: userData.address || '',
      phone: userData.phone || '',
    });
  }
}, []);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    placeOrder(billingInfo); // Use the billing information to place the order
    navigate('/history'); // Redirect to order history
    window.location.reload();

  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="checkout-container">
      <Row>
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h2 className="checkout-title">Checkout</h2>
            <Form onSubmit={handlePlaceOrder}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={billingInfo.username}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </Form.Group>
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={billingInfo.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your address"
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={billingInfo.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Place Order
              </Button>
            </Form>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h2 className="checkout-title">Order Summary</h2>
            {cart.map((item, index) => (
              <Row key={index} className="mb-3">
                <Col xs={3}>
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="img-fluid"
                    style={{ borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={6}>
                  <h5>{item.productName}</h5>
                  <p className="text-muted">Qty: {item.quantity}</p>
                </Col>
                <Col xs={3} className="text-end">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </Col>
              </Row>
            ))}
            <hr />
            <div className="text-end">
              <h5>Total: ${totalAmount.toFixed(2)}</h5>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
