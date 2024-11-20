import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        padding: "40px 20px",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "0.9rem",
      }}
    >
      <Container>
        <Row>
          {/* Column 1: Company */}
          <Col md={3}>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Company</h5>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="/aboutus" style={{ textDecoration: "none", color: "#343a40" }}>About Us</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Contact Us</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Newsletter</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Privacy</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Terms</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Cookies</a></li>
              <li>Status <span style={{ color: "green", fontWeight: "bold" }}>99.80%</span></li>
            </ul>
          </Col>

          {/* Column 2: Products */}
          <Col md={3}>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Products</h5>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Postcards: Email Builder</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Slides: Website Generator</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Startup: Bootstrap Builder</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Affiliate Program</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Help Articles</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Email Signature Templates</a></li>
            </ul>
          </Col>

          {/* Column 3: Templates */}
          <Col md={3}>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Templates</h5>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Gmail Email Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Outlook Email Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Mailchimp Email Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>HubSpot Email Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Klaviyo Email Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Email Marketing Templates</a></li>
            </ul>
          </Col>

          {/* Column 4: Resources */}
          <Col md={3}>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Resources</h5>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Designmodo Experts</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Email Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Website Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Bootstrap Templates</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Siter.io</a></li>
              <li><a href="#" style={{ textDecoration: "none", color: "#343a40" }}>Static.app</a></li>
            </ul>
          </Col>
        </Row>

        {/* Social Media Icons */}
        
        {/* Bottom Section */}
        <Row className="mt-4 text-center">
          <Col>
            <p style={{ margin: "0", fontSize: "0.8rem", color: "#666" }}>
              DESIGNMODO INC. 50 N 1ST ST, BROOKLYN, NY 11249, UNITED STATES
            </p>
            <p style={{ margin: "0", fontSize: "0.8rem", color: "#666" }}>
              COPYRIGHT © 2010-2024
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
