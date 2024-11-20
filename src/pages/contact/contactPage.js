import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

const ContactPage = () => {
  useEffect(() => {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal('.contact-title', {
      duration: 1000,
      origin: 'top',
      distance: '50px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.contact-form', {
      duration: 1200,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
      delay: 200,
    });

    ScrollReveal().reveal('.contact-info', {
      duration: 1200,
      origin: 'right',
      distance: '50px',
      easing: 'ease-in-out',
      delay: 300,
    });

    ScrollReveal().reveal('.map-section', {
      duration: 1500,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-in-out',
      delay: 400,
    });

    ScrollReveal().reveal('.faq-section h5', {
      duration: 800,
      origin: 'bottom',
      distance: '30px',
      interval: 200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div style={{ fontFamily: "Quicksand, sans-serif", padding: "40px 0" }}>
      <Container>
        {/* Title Section */}
        <h1 className="text-center mb-5 contact-title" style={{ fontWeight: "bold" }}>
          Get in touch
        </h1>

        <Row>
          {/* Left Section: Form */}
          <Col md={6} className="contact-form">
            <h4>Send a Message</h4>
            <p style={{ color: "#666" }}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec.
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Interested In</Form.Label>
                <Form.Select>
                  <option>Select...</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Right Section: Contact Info */}
          <Col md={6} className="contact-info">
            <h4>Call Us</h4>
            <p style={{ color: "#666" }}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec.
            </p>
            <p>
              <strong>📞 (84) 949-450-800</strong>
            </p>

            <h4>Visit Us</h4>
            <p style={{ color: "#666" }}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec.
            </p>
            <p>
              <strong>432 Ton Dan St, Suite 14, Ho Chi Minh, Viet Nam</strong>
            </p>

            <h4>Live Chat</h4>
            <p style={{ color: "#666" }}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec.
            </p>
            <Button variant="link">Start Chat →</Button>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5 map-section">
          <Col>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.754253653965!2d106.70267007547469!3d10.753413359616895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f73d3230abb%3A0x31d96ee732d1b920!2zNDMyIFTDtG4gxJDhuqNuLCBQaMaw4budbmcgNCwgUXXhuq1uIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1732041926688!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5 faq-section">
          <Col>
            <h2 className="mb-4" style={{ fontWeight: "bold" }}>
              FAQ
            </h2>
            <h5>Lorem ipsum dolor sit amet?</h5>
            <p style={{ color: "#666" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h5>Praesent sapien massa convallis?</h5>
            <p style={{ color: "#666" }}>Pellentesque in ipsum id orci porta dapibus.</p>
            <h5>Pellentesque in ipsum id orci porta?</h5>
            <p style={{ color: "#666" }}>Lorem eget tortor risus amet sit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
