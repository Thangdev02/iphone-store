import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { ApiUrl } from '../config';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchBrands();
  }, []);

  // Fetch products from the server
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch brands from the server
  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/brands`);
      setBrands(response.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  // Open modal for adding or editing a product
  const handleOpenModal = (product = {}) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setEditingProduct(null);
    setShowModal(false);
  };

  // Handle form submission for adding/updating a product
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct.id) {
        // Update existing product
        await axios.put(`${ApiUrl}/products/${editingProduct.id}`, editingProduct);
      } else {
        // Create new product
        await axios.post(`${ApiUrl}/products`, editingProduct);
      }
      fetchProducts(); // Refresh the product list
      handleCloseModal();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${ApiUrl}/products/${id}`);
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Handle input change in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' || name === 'quantity' || name === 'discount' ? parseFloat(value) : value,
    }));
  };

  // Function to get brand name by brandId
  const getBrandNameById = (brandId) => {
    const brand = brands.find((b) => b.brandId === parseInt(brandId) || b.brandId === brandId);
    return brand ? brand.brandName : 'Unknown';
  };

  return (
    <Container>
      <h2>Product Management</h2>
      <Button onClick={() => handleOpenModal()} className="mb-3">Add Product</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount (%)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{getBrandNameById(product.brandId)}</td> {/* Get brand name by brandId */}
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td>{product.discount}%</td>
              <td>
                <Button variant="warning" onClick={() => handleOpenModal(product)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Product Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct?.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveProduct}>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={editingProduct?.productName || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                as="select"
                name="brandId"
                value={editingProduct?.brandId || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand.brandId} value={brand.brandId}>
                    {brand.brandName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={editingProduct?.quantity || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editingProduct?.price || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Image URL</Form.Label>
              <Form.Control
                type="text"
                name="productImage"
                value={editingProduct?.productImage || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={editingProduct?.description || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Discount (%)</Form.Label>
              <Form.Control
                type="number"
                name="discount"
                value={editingProduct?.discount || 0}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductManagement;
