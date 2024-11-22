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
      });
      console.log('API response:', response.data); // Debug output
  
      const users = response.data;
      if (Array.isArray(users) && users.length > 0) {
        return users[0];
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

export default AuthService;
