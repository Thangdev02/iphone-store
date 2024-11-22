import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../auth/loginPage.css'; // Adjust this path as needed
import AppleStore from '../../assets/images/appleStore.jpg';
import AuthService from '../../services/authService';

const styles = {
  page: {
    backgroundImage: `url(${AppleStore})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Apply blur effect
    width: '70%',
    maxWidth: '900px',
    borderRadius: '12px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    backgroundImage: `url(${AppleStore})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '40px',
    display: 'flex',
    fontFamily: 'Quicksand',
        justifyContent: 'center',
    backdropFilter: 'blur(15px)', // Smear the content area
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a dark overlay for contrast
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
  form: {
    flex: 1,
    padding: '40px',
    fontFamily: 'Quicksand',

  },
};


const LoginPage = ({ onLogin }) => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
  
    // Validate input fields
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
  
    try {
      // Attempt to log in using AuthService
      const user = await AuthService.login(username.trim(), password.trim());
  
      // If login is successful
      if (user && user.role) {
        AuthService.setUserInCookies(user);  // Save user in cookies
        onLogin(user);  // Pass the user to the parent component
    
        // Redirect based on user role
        navigate(user.role === 'admin' ? '/dashboard/products' : '/');
      } else {
        setError('ko biet bi gi');
      }
    } catch (err) {
      setError(err.message || 'Error logging in. Please try again.....');
    }
  };
  
  return (
    <div className="login-page" style={styles.page}>
  <div className="login-box" style={styles.box}>
    <div className="login-content" style={styles.content}>
      <h2 style={styles.heading}>WHAT WILL YOU BUILD TODAY?</h2>
      <p style={styles.subheading}>"Think Different".</p>
    </div>
    <div className="login-form" style={styles.form}>
      <h3>Sign In</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Your Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Your Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button type="submit" variant="primary" className="w-100">
          Sign In
        </Button>
      </Form>
      <p className="text-center mt-3">
        Don’t have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
