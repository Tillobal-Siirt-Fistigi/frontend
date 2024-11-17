import React, { useState } from 'react';
import { User, ShoppingCart } from 'lucide-react';

const AuthLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="header">
      <img src="/placeholder.svg?height=50&width=150" alt="PistachioHut Logo" className="logo" />
      <nav className="nav">
        <a href="#products" className="nav-link">Products</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact us</a>
      </nav>
      <div className="user-actions">
        <User className="icon" />
        <ShoppingCart className="icon" />
      </div>
    </header>
    <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Login</h2>
          <p className="mt-2 text-gray-600">to get started</p>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="text-right">
            <a href="#forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Continue
          </button>
        </form>
        <div className="text-center text-sm">
          <span className="text-gray-600">New User? </span>
          <a href="/signup" className="text-green-600 hover:text-green-700 font-medium">
            Register
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Signup</h2>
          <p className="mt-2 text-gray-600">to get started</p>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-600">
              Agree to Our terms and Conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Continue
          </button>
        </form>
        <div className="text-center text-sm">
          <span className="text-gray-600">Already registered? </span>
          <a href="/login" className="text-green-600 hover:text-green-700 font-medium">
            Login
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <img src="/placeholder.svg?height=50&width=150" alt="PistachioHut Logo" className="footer-logo" />
        <p>Your natural gift from Siirt</p>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Products</h3>
        <ul className="footer-list">
          <li><a href="#" className="footer-link">New arrivals</a></li>
          <li><a href="#" className="footer-link">Best sellers</a></li>
          <li><a href="#" className="footer-link">Sale</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">About</h3>
        <ul className="footer-list">
          <li><a href="#" className="footer-link">Our story</a></li>
          <li><a href="#" className="footer-link">Sustainability</a></li>
          <li><a href="#" className="footer-link">Contact us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Help</h3>
        <ul className="footer-list">
          <li><a href="#" className="footer-link">Shipping</a></li>
          <li><a href="#" className="footer-link">Returns</a></li>
          <li><a href="#" className="footer-link">FAQ</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 PistachioHut. All rights reserved.</p>
    </div>
  </footer>
);

export { LoginPage, SignupPage };