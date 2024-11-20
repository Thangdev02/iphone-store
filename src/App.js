import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/auth/loginPage';
import StorePage from './pages/store/storePage';
import { ApiUrl } from './config';
import CheckoutPage from './pages/checkout/checkoutPage';
import OrderHistoryPage from './pages/history/historyPage';
import ProductDetailPage from './pages/detailPage';
import CartPage from './pages/cart/cartPage';
import Header from './layouts/header';
import BrandManagement from './admin/brandManagement';
import ProductManagement from './admin/productManagement';
import AdminPrivateRoute from './routes/adminRoute';
import UserPrivateRoute from './routes/useRoute';
import AdminLayout from './layouts/adminLayout';
import OrderManagement from './admin/orderManagement';
import RegisterPage from './pages/auth/registerPage';
import HomePage from './pages/home/homePage';
import Footer from './layouts/footer';
import AboutUsPage from './pages/about/aboutUsPage';
import ContactPage from './pages/contact/contactPage';
import ProfilePage from './pages/profile/profilePage';
import { UserProvider } from './context/UserContext';
import Cookies from 'js-cookie';

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = Cookies.get('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleLogin = (userData) => {
    setUser(userData);
    Cookies.set('user', JSON.stringify(userData), { expires: 7 }); // Store user data in cookies
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    Cookies.remove('user'); // Clear cookies
    localStorage.removeItem('cart');
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.productId === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const cartItem = {
        productId: product.id,
        productName: product.productName,
        price: product.price,
        productDescription: product.description,
        quantity: 1,
        productImage: product.productImage,
      };
      updatedCart = [...cart, cartItem];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const placeOrder = (billingInfo) => {
    if (!user) {
      alert('Please log in to place an order.');
      return;
    }

    const order = {
      userId: user.id,
      items: cart,
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      date: new Date().toISOString(),
      billingInfo,
    };

    setCart([]);
    localStorage.removeItem('cart');

    fetch(`${ApiUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then(() => {
        alert('Order placed successfully!');
      })
      .catch((error) => console.error('Order placement error:', error));
  };

  return (
    <UserProvider>
      <BrowserRouter>
        <MainLayout user={user} cart={cart} onLogout={handleLogout}>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<RegisterPage />} />

            {/* User-Only Routes */}
            <Route element={<UserPrivateRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/shop" element={<StorePage addToCart={addToCart} />} />
              <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
              <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
              <Route path="/checkout" element={<CheckoutPage cart={cart} placeOrder={placeOrder} />} />
              <Route path="/history" element={<OrderHistoryPage user={user} />} />
              <Route path="/aboutus" element={<AboutUsPage user={user} />} />
              <Route path="/contact" element={<ContactPage user={user} />} />
            </Route>

            {/* Admin-Only Routes */}
            <Route element={<AdminPrivateRoute />}>
              <Route path="/dashboard" element={<AdminLayout />}>
                <Route path="products" element={<ProductManagement />} />
                <Route path="brands" element={<BrandManagement />} />
                <Route path="orders" element={<OrderManagement />} />
              </Route>
            </Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </UserProvider>
  );
}

function MainLayout({ children, user, cart, onLogout }) {
  const { pathname } = useLocation();

  const showHeaderFooter = pathname !== '/login' && pathname !== '/signup';

  return (
    <div className="app-container">
      {showHeaderFooter && <Header user={user} onLogout={onLogout} cart={cart} />}
      <div>{children}</div>
      {showHeaderFooter && (
        <div style={{ marginTop: '4%' }}>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

