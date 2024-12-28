import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import '../store/storePage.css';
import { ApiUrl } from '../../config';
import StoreBanner from '../../components/store/storeBanner';

const StorePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandPage, setBrandPage] = useState(1);
  const [currentPages, setCurrentPages] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);

  const productsPerPage = 4;
  const brandsPerPage = 6; // Display 6 brands per page
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
    fetchProducts();
    initializeScrollReveal(); // Initialize ScrollReveal after the data loads
  }, []);

  const initializeScrollReveal = () => {
    // Initialize ScrollReveal for sections
    ScrollReveal().reveal('.brand-filter-row', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.brand-section', {
      origin: 'bottom',
      distance: '100px',
      duration: 1200,
      easing: 'ease-in-out',
      interval: 200,
    });

    ScrollReveal().reveal('.product-card', {
      origin: 'left',
      distance: '100px',
      duration: 1500,
      easing: 'ease',
      interval: 100,
    });
  };

  const getBrandIcon = (brandName) => {
    const iconMapping = {
      mac: 'bi bi-laptop',
      ipad: 'bi bi-tablet',
      iphone: 'bi bi-phone',
      keyboard: 'bi bi-keyboard',
      watch: 'bi bi-smartwatch',
      'apple vision pro': 'bi bi-vr',
      headphone: 'bi bi-headphones',
    };

    const normalizedBrandName = brandName.toLowerCase();
    return iconMapping[normalizedBrandName] || 'bi bi-box'; // Default icon
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/brands`);
      const initialPages = {};
      response.data.forEach((brand) => {
        initialPages[brand.brandId] = 1;
      });
      setBrands(response.data);
      setCurrentPages(initialPages);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleBrandClick = (brandId) => {
    setSelectedBrand(selectedBrand === brandId ? null : brandId); // Toggle brand selection
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const getFilteredProducts = () => {
    let filteredProducts = selectedBrand
      ? products.filter((product) => product.brandId === String(selectedBrand))
      : products;

    // Prioritize "Newest" and move "Other" to the bottom
    filteredProducts = [
      ...filteredProducts.filter((p) => p.brandId === 'Newest'),
      ...filteredProducts.filter((p) => p.brandId !== 'Newest' && p.brandId !== 'Other'),
      ...filteredProducts.filter((p) => p.brandId === 'Other'),
    ];
    return filteredProducts;
  };

  const paginateProducts = (brandId, filteredProducts) => {
    const currentPage = currentPages[brandId] || 1;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const paginateBrands = () => {
    const indexOfLastBrand = brandPage * brandsPerPage;
    const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
    return brands.slice(indexOfFirstBrand, indexOfLastBrand);
  };

  const handlePagination = (brandId, pageNumber) => {
    setCurrentPages((prev) => ({
      ...prev,
      [brandId]: pageNumber,
    }));
  };

  const handleBrandPagination = (page) => {
    setBrandPage(page);
  };

  const totalBrandPages = Math.ceil(brands.length / brandsPerPage);

  return (
    <div>
      <StoreBanner />
      <h1 className="store-title text-center mt-6">New Arrivals</h1>

      {/* Top Brand Filter Row */}
      <div className="brand-filter-row text-center mb-4">
        <Container>
          <Row className="justify-content-center">
            {paginateBrands().map((brand) => (
              <Col key={brand.brandId} xs={4} sm={3} md={2} className="brand-icon-col text-center">
                <div
                  className={`brand-icon-container ${selectedBrand === brand.brandId ? 'active' : ''}`}
                  onClick={() => handleBrandClick(brand.brandId)}
                >
                  <div className="brand-icon-circle">
                    <i className={getBrandIcon(brand.brandName)}></i>
                  </div>
                  <p className="brand-label">{brand.brandName}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Dot Pagination for Brands */}
          {totalBrandPages > 1 && (
            <div className="pagination-dots text-center mt-3">
              {[...Array(totalBrandPages)].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index + 1 === brandPage ? 'active' : ''}`}
                  onClick={() => handleBrandPagination(index + 1)}
                ></span>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* Product Grid */}
      <Container>
        {brands.map((brand) => {
          const brandProducts = getFilteredProducts().filter(
            (product) => product.brandId === String(brand.brandId)
          );
          const paginatedProducts = paginateProducts(brand.brandId, brandProducts);
          const totalPages = Math.ceil(brandProducts.length / productsPerPage);

          return brandProducts.length > 0 ? (
            <div key={brand.brandId} className="brand-section">
              <h4 className="brand-title">{brand.brandName}</h4>
              <Row className="product-grid">
                { paginatedProducts.length > 0 ?
                paginatedProducts.map((product) => (
                  <Col xs={6} sm={6} md={3} key={product.id} className="mb-4">
                    <Card className="product-card" style={{border: 'none',boxShadow: 'none'}}>
                      <div className="card-content">
                        <Card.Img
                          variant="top"
                          src={product.productImage}
                          alt={product.productName}
                          className="product-image"
                        />
                        <Card.Body>
                          <Card.Title className="product-title">{product.productName}</Card.Title>
                          <Card.Text className="product-info">
                            <span className="product-price">${product.price}</span>
                          </Card.Text>
                          {product.discount && (
                            <Badge
                              pill
                              bg="danger"
                              className="discount-badge"
                            >
                              {product.discount}% OFF
                            </Badge>
                          )}
                      
                        </Card.Body>
                      </div>
                      <Button
                        variant="outline-secondary"
                        className="view-details-btn"
                        onClick={() => handleViewDetails(product.id)}
                      >
                        View Details
                      </Button>
                    </Card>
                  </Col>
                )):
                <div className="text-center mt-5">
                  <p>No products found for this category.</p>
                </div>
                }
              </Row>

              {/* Dot Pagination */}
              {totalPages > 1 && (
                <div className="pagination-dots text-center mt-4">
                  {[...Array(totalPages)].map((_, index) => (
                    <span
                      key={index + 1}
                      className={`dot ${index + 1 === currentPages[brand.brandId] ? 'active' : ''}`}
                      onClick={() => handlePagination(brand.brandId, index + 1)}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          ) : null;
        })}
      </Container>
    </div>
  );
};

export default StorePage;
