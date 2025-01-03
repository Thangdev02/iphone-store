import axios from 'axios';
import Cookies from 'js-cookie';

export const ApiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9999'
    : 'https://iphone-store-iota.vercel.app/api';

const AuthService = {
  // Login method
  async login(username, password) {
    try {
      console.log('Login attempt:', { username, password }); // Debug input
      const response = await axios.get(`${ApiUrl}/users`, {
        params: { username: username.trim(), password: password.trim() },
        headers: {
          'Cache-Control': 'no-cache',  // Prevent cache
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
      console.log('API response:', response.data); // Debug output
  
      const users = response.data;
      if (Array.isArray(users) && users.length > 0) {
        return users[0]; // Return the first user if found
      }
  
      throw new Error('Invalid username or password');
    } catch (err) {
      console.error('Error in login:', err.message || err);
      throw new Error('Login failed. Please try again.');
    }
  },  

  // Save the logged-in user data into cookies
  setUserInCookies(user) {
    Cookies.set('user', JSON.stringify(user), { expires: 7 }); // Cookie valid for 7 days
  },

  // Retrieve the user from cookies
  getUserFromCookies() {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
  },

  // Clear user data from cookies (for logout)
  clearUserFromCookies() {
    Cookies.remove('user');
  },
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${ApiUrl}/users`, userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error;
  }
};


  

export default AuthService;
