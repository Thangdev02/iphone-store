import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { registerUser } from '../../services/authService'; // Import the authService
import AppleStore from '../../assets/images/appleStore.jpg';
import '../auth/registerPage.css';

const styles = {
  page: {
    backgroundImage: `url(${AppleStore})`,
    backgroundSize: 'cover',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Quicksand',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    width: '70%',
    maxWidth: '900px',
    borderRadius: '12px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    backgroundImage: `url('https://images.unsplash.com/photo-1602053540422-140b3eba9159?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1rem',
    fontWeight: 'lighter',
  },
  formContainer: {
    flex: 1,
    padding: '40px',
    overflowY: 'auto',
    maxHeight: '80vh',
  },
};

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const newUser = {
      username,
      password,
      email,
      phone,
      dob,
      gender,
      address,
      role: 'user',
    };

    try {
      await registerUser(newUser);  // Call the registerUser function from authService
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      setError('Error registering. Please try again.');
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="register-page" style={styles.page}>
      <div className="register-box" style={styles.box}>
        <div className="register-content" style={styles.content}>
          <h2 style={styles.heading}>Join Us Today</h2>
          <p style={styles.subheading}>Create your account and start exploring</p>
        </div>
        <div className="register-form" style={styles.form}>
          <h3>Sign Up</h3>
          <Form style={{ textAlign: 'left', fontWeight: 'bolder' }} onSubmit={handleRegister}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="dob" className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="gender" className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {error && <p className="text-danger">{error}</p>}
            <Button type="submit" variant="primary" className="w-100">
              Register
            </Button>
          </Form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
