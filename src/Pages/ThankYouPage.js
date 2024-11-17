import React from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, CheckCircle } from 'lucide-react';

const Header = () => (
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
);

const OrderSummary = () => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative">
        <img 
          src="/assets/images/kesik.png"
          alt="File Kiyilmis Ic" 
          className="w-16 h-16 object-cover rounded-md"
        />
        <span className="absolute -top-2 -right-2 bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
          1
        </span>
      </div>
      <div>
        <h3 className="font-medium">File Kiyilmis Ic</h3>
        <p className="text-green-600">$ 9.99</p>
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Subtotal</span>
        <span>$ 9.99</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Shipping</span>
        <span className="text-green-600">Free Shipping</span>
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <span className="font-medium">Total</span>
        <span className="text-green-600">$ 9.99</span>
      </div>
    </div>
  </div>
);

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/cart" className="text-gray-500">Cart</Link>
          <span className="text-gray-300">/</span>
          <Link to="/details" className="text-gray-500">Details</Link>
          <span className="text-gray-300">/</span>
          <Link to="/shipping" className="text-gray-500">Shipping</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900">Payment</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Confirmation Message */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6">
              <CheckCircle className="w-full h-full text-green-500" />
            </div>
            
            <h1 className="text-2xl font-medium mb-2">Payment Confirmed</h1>
            <p className="text-green-600 text-sm mb-4">ORDER #0033</p>
            
            <p className="text-gray-600 mb-6 max-w-md">
              Thank you for your payment. The nature is grateful to you. Now that your 
              order is confirmed it will be ready to ship in 2 days. Please check your inbox 
              in the future for your order updates.
            </p>

            <div className="space-y-3">
              <Link
                to="/products"
                className="block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Back to shopping
              </Link>
              
              <button className="text-green-600 hover:text-green-700">
                Print receipt
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <OrderSummary />
        </div>
      </main>

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
    </div>
  );
};

export default ThankYouPage;