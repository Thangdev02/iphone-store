// src/pages/admin/BrandManagement.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { ApiUrl } from '../config';

const BrandManagement = () => {
  const [brands, setBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/brands`);
      console.log("Fetched brands:", response.data);
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const handleOpenModal = (brand = {}) => {
    console.log("Opening modal for brand:", brand);
    setEditingBrand(brand); // Sets brand for edit, if provided
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditingBrand(null);
    setShowModal(false);
  };

  const handleSaveBrand = async (e) => {
    e.preventDefault();
  
    if (!editingBrand.brandName) {
      alert("Brand name cannot be empty.");
      return;
    }
  
    if (editingBrand && editingBrand.id) {
      // If `id` exists, update the brand
      try {
        await axios.put(`${ApiUrl}/brands/${editingBrand.id}`, editingBrand);
      } catch (error) {
        console.error("Error updating brand:", error);
      }
    } else {
      // Create a new brand with a generated brandId
      try {
        // Find the highest `brandId` from the existing brands
        const maxBrandId = brands.reduce((max, brand) => Math.max(max, brand.brandId || 0), 0);
        const newBrand = {
          ...editingBrand,
          brandId: maxBrandId + 1, // Increment the maxBrandId
        };
        await axios.post(`${ApiUrl}/brands`, newBrand);
      } catch (error) {
        console.error("Error adding brand:", error);
      }
    }
  
    fetchBrands();
    handleCloseModal();
  };
  

  const handleDeleteBrand = async (id) => {
    console.log("Deleting brand with ID:", id);
    try {
      await axios.delete(`${ApiUrl}/brands/${id}`);
      console.log("Brand deleted successfully");
      fetchBrands();
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  return (
    <div>
      <h2>Brand Management</h2>
      <Button onClick={() => handleOpenModal()}>Add Brand</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.brandName}</td>
              <td>
                <Button variant="warning" onClick={() => handleOpenModal(brand)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteBrand(brand.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Create/Edit */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingBrand?.id ? 'Edit Brand' : 'Add Brand'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveBrand}>
            <Form.Group>
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="text"
                value={editingBrand?.brandName || ''}
                onChange={(e) =>
                  setEditingBrand((prev) => ({ ...prev, brandName: e.target.value }))
                }
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrandManagement;
