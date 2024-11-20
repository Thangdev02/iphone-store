// src/pages/admin/OrderManagement.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Container } from 'react-bootstrap';
import axios from 'axios';
import { ApiUrl } from '../config';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Open modal to view order details
  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  return (
    <Container>
      <h2>Order Management</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.billingInfo.fullName}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>
                <Button variant="info" onClick={() => handleOpenModal(order)}>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Order Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <h5>Customer Information</h5>
              <p><strong>Name:</strong> {selectedOrder.billingInfo.fullName}</p>
              <p><strong>Address:</strong> {selectedOrder.billingInfo.address}</p>
              <p><strong>Phone:</strong> {selectedOrder.billingInfo.phone}</p>

              <h5>Items</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map(item => (
                    <tr key={item.productId}>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price}</td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <h5>Order Summary</h5>
              <p><strong>Order Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
              <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount.toFixed(2)}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrderManagement;
