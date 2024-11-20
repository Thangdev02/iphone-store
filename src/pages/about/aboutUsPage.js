import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import About from '../../assets/images/about.jpg';

const AboutUsPage = () => {
  useEffect(() => {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal('.about-us-header', {
      duration: 1000,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.about-us-content', {
      duration: 1200,
      origin: 'right',
      distance: '50px',
      delay: 200,
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.team-image', {
      duration: 1000,
      scale: 0.8,
      delay: 300,
      interval: 200,
    });

    ScrollReveal().reveal('.quote-section', {
      duration: 1000,
      origin: 'top',
      distance: '30px',
      delay: 300,
    });

    ScrollReveal().reveal('.team-header', {
      duration: 800,
      origin: 'left',
      distance: '40px',
    });

    ScrollReveal().reveal('.team-member', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      delay: 200,
      interval: 200,
    });

    ScrollReveal().reveal('.stats-section', {
      duration: 1000,
      origin: 'bottom',
      distance: '40px',
      delay: 300,
      interval: 200,
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Quicksand', marginTop: '40px' }}>
      <Container>
        {/* About Us Section */}
        <Row className="mb-5">
          <Col>
            <h1 className="about-us-header" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              ABOUT US.
            </h1>
            <p className="about-us-content" style={{ lineHeight: '1.6rem' }}>
              Studio Thang Le Quoc, a communication agency based in Milan, has been created in 2024 from Ho Chi Minh,
              Viet Nam after his long-term experience with the uberfamous McCann Erickson. Many of his clients, like
              L’Espresso Group and Radio Deejay, will follow him in this new adventure and many others such as Ha Noi
              Capital.
            </p>
            <p className="about-us-content" style={{ lineHeight: '1.6rem' }}>
              After a fortunate encounter with the copywriter and content manager Thang, Studio Thang Le Quoc gains
              another fundamental member of his creative team. Anna, at that time, was already collaborating with big
              international brands like Barilla, Volkswagen, Campari, Vodafone, Philips, and many more.
            </p>
          </Col>
        </Row>

        {/* Team Working Image */}
        <Row className="mb-5">
          <Col style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Image
              className="team-image"
              style={{ width: '30%', height: 'auto' }}
              src="https://i.pinimg.com/736x/db/a8/b4/dba8b4f4db001305e1cd8e0ebdfaabe2.jpg"
              rounded
            />
            <Image
              className="team-image"
              style={{ width: '30%', height: 'auto' }}
              src="https://i.pinimg.com/736x/4f/ea/4e/4fea4ea246211bc2ec160f14d0ee5684.jpg"
              rounded
            />
            <Image
              className="team-image"
              style={{ width: '30%', height: 'auto' }}
              src="https://i.pinimg.com/736x/0e/b8/2c/0eb82c51253da67f047ed7019ef1dc1c.jpg"
              rounded
            />
          </Col>
        </Row>

        {/* Quote Section */}
        <Row className="text-center mb-5 quote-section">
          <Col>
            <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', margin: '20px 0' }}>
              "Our work does make sense only if it is a faithful witness of its time."
            </blockquote>
            <p>- Thang Le Quoc, Director</p>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="team-header" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              THE TEAM.
            </h2>
            <p style={{ lineHeight: '1.6rem' }}>
              All art is quite useless. One can never consent to creep when one feels an impulse to soar. Words do not
              express thoughts very well. They always become a little different immediately after they are expressed.
            </p>
          </Col>
        </Row>

        {/* Team Members */}
        <Row className="text-center" style={{ display: 'flex', justifyContent: 'center' }}>
          {['Font-End Developer', 'Creative Director', 'Back-End Developer'].map((role, index) => (
            <Col
              key={index}
              md={4}
              className="mb-4 team-member"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Image src={About} roundedCircle style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
              <h5>Thang Le Quoc</h5>
              <p className="text-muted">{role}</p>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <Row className="text-center mt-5 stats-section">
          <Col md={3}>
            <h2>600</h2>
            <p>million sq ft of sustainable work</p>
          </Col>
          <Col md={3}>
            <h2>700</h2>
            <p>billion gallons of water saved annually</p>
          </Col>
          <Col md={3}>
            <h2>1.2</h2>
            <p>million sq ft of LEED certified projects</p>
          </Col>
          <Col md={3}>
            <h2>110</h2>
            <p>USGBC certified projects</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
