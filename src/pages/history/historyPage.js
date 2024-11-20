import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollReveal from 'scrollreveal';
import { Container, Button, Modal, ListGroup } from 'react-bootstrap';
import { ApiUrl } from '../../config';
import './historyPage.css';
import HistoryBanner from '../../assets/images/history.jpg';

const OrderHistoryPage = ({ user }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      axios.get(`${ApiUrl}/orders?userId=${user.id}`)
        .then((response) =>
          setOrders(response.data.sort((a, b) => new Date(b.date) - new Date(a.date)))
        )
        .catch((error) => console.error('Error fetching orders:', error));
    }
  }, [user]);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  useEffect(() => {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal('.history-banner-text', {
      duration: 1200,
      origin: 'top',
      distance: '30px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.order-history-title', {
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
      delay: 200,
    });

    ScrollReveal().reveal('.timeline-item', {
      duration: 1200,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
      interval: 200,
    });

    ScrollReveal().reveal('.timeline-item.right', {
      origin: 'right',
    });
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '540px',
          overflow: 'hidden',
        }}
      >
        <img
          src={HistoryBanner}
          alt="History Banner"
          style={{
            width: '100%',
            height: '600px',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'blur(3px)',
            transform: 'scale(1.1)',
          }}
        />
        <div
          className="history-banner-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            zIndex: 2,
            fontFamily: 'Quicksand',
          }}
        >
          <h1 style={{ fontSize: '4rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            History Page
          </h1>
          <p style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Track and manage your order history
          </p>
        </div>
      </div>

      {/* Order History Section */}
      <Container className="order-history-container">
        <h2 className="order-history-title mt-10" style={{ fontFamily: 'Quicksand' }}>
          Order History
        </h2>
        <div className="timeline">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ fontFamily: 'Quicksand' }}
            >
              <div
                onClick={() => handleViewDetails(order)}
                className="timeline-content"
              >
                <h5>{order.billingInfo.fullName}</h5>
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(order.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Total:</strong> ${order.totalAmount.toFixed(2)}
                </p>
                <div className="d-flex">
                  {order.items.slice(0, 3).map((item) => (
                    <img
                      key={item.productId}
                      src={item.productImage}
                      alt={item.productName}
                      style={{
                        width: '50px',
                        height: '50px',
                        marginRight: '10px',
                        borderRadius: '4px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Order #{selectedOrder.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontFamily: 'Quicksand' }}>
              <p>
                <strong>Date:</strong>{' '}
                {new Date(selectedOrder.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Total:</strong> ${selectedOrder.totalAmount.toFixed(2)}
              </p>
              <p>
                <strong>Billing Info:</strong>{' '}
                {selectedOrder.billingInfo.fullName}
              </p>
              <p>
                <strong>Address:</strong>{' '}
                {selectedOrder.billingInfo.address || 'N/A'}
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                {selectedOrder.billingInfo.phone || 'N/A'}
              </p>
              <ListGroup variant="flush">
                {selectedOrder.items.map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        style={{
                          width: '50px',
                          height: '50px',
                          marginRight: '10px',
                          borderRadius: '4px',
                        }}
                      />
                      <div>
                        <p className="m-0">
                          <strong>{item.productName}</strong>
                        </p>
                        <p className="m-0">Quantity: {item.quantity}</p>
                        <p className="m-0">Price: ${item.price}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default OrderHistoryPage;
