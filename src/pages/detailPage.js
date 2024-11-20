import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import { ApiUrl } from "../config";

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        id: product.id,
        productName: product.productName,
        productImage: product.productImage,
        productDescription: product.description,
        price: product.price,
        quantity: 1,
      };
      addToCart(productToAdd);
      alert(`${product.productName} has been added to the cart.`);
      navigate("/cart");
    }
  };

  useEffect(() => {
    // Fetch product details by ID
    axios
      .get(`${ApiUrl}/products/${id}`) // This will match the dynamic route in Vercel
      .then((response) => {
        setProduct(response.data);
        return response.data.brandId;
      })
      .then((brandId) => {
        return axios.get(`${ApiUrl}/brands/${brandId}`);
      })
      .then((response) => {
        setBrand(response.data.brandName);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);
  
  useEffect(() => {
    ScrollReveal().reveal(".product-image", {
      duration: 1000,
      distance: "100px",
      origin: "left",
      easing: "ease-in-out",
      delay: 1200,

    });

    ScrollReveal().reveal(".product-details", {
      duration: 1000,
      distance: "100px",
      origin: "right",
      easing: "ease-in-out",
      delay: 1200,
    });
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <Container className="my-5" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      <Button variant="link" className="back-button" onClick={() => navigate(-1)}>
        ← Continue Shopping
      </Button>
      <Row>
        {/* Left Side: Product Image */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div
            className="product-image"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              src={product.productImage}
              alt={product.productName}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
          </div>
        </Col>

        {/* Right Side: Product Details */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className="product-details">
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              {product.productName}
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
              Designed by {brand || "Apple Brand"}
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
              {product.description ||
                "This product does not have a detailed description yet. Check back later!"}
            </p>
            <h4 style={{ color: "#000", fontWeight: "bold", marginTop: "20px" }}>
              ${product.price.toFixed(2)}
            </h4>

            <div className="mt-4 d-flex">
              <Button
                variant="outline-secondary"
                className="me-3"
                onClick={() => alert("Added to wishlist!")}
              >
                Add to Wishlist
              </Button>
              <Button
                variant="dark"
                onClick={handleAddToCart}
                style={{
                  backgroundColor: "#343a40",
                  color: "#fff",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
