import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../cart/cartPage.css';

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const fallbackImage = "/path/to/fallback-image.jpg";

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleQuantityChange = (index, change) => {
    const updatedCart = cart.map((item, idx) =>
      idx === index
        ? { ...item, quantity: Math.max(1, item.quantity + change) } // Ensure quantity stays >= 1
        : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    setCart(updatedCart);
  };

  return (
    <Container className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <Button variant="link" className="back-button" onClick={() => navigate(-1)}>
        ← Continue Shopping
      </Button>
      <Row>
        <Col md={8}>
          {cart.map((item, index) => (
            <Row key={index} className="cart-item align-items-center mb-4">
              <Col xs={2}>
                <img
                  src={item.productImage || fallbackImage}
                  alt={item.productName}
                  className="cart-item-image"
                />
              </Col>
              <Col xs={4}>
                <h6>{item.productName}</h6>
                <p className="text-muted">{item.description || "No description available"}</p>
              </Col>
              <Col xs={2}>${item.price.toFixed(2)}</Col>
              <Col xs={3} className="quantity-controls">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleQuantityChange(index, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <span className="quantity-display">{item.quantity}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  +
                </Button>
              </Col>
              <Col xs={1}>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleRemoveItem(index)}
                >
                  ×
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <div className="cart-summary p-4">
            <h5 className="mb-4">Cart Totals</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4">
              <strong>Total</strong>
              <strong>${totalAmount.toFixed(2)}</strong>
            </div>
            <Button
              variant="dark"
              className="w-100"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
