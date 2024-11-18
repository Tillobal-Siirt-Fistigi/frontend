import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CartPage from './Pages/CartPage';
import PaymentPage from './Pages/PaymentPage';
import ThankYouPage from './Pages/ThankYouPage';
import { LoginPage, SignupPage } from './Pages/AuthPages';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AdminDashboard from './Pages/AdminDashboard';
import ProductManagement from './Pages/ProductManagement';
import InvoiceManagement from './Pages/InvoiceManagement';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

                {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/invoices" element={<InvoiceManagement />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;