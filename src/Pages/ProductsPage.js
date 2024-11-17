import React from 'react';
import { User, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const ProductCard = ({ id, name, price, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-lg font-semibold text-green-600">${price}</p>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Roasted Cracked Salted Pistachios",
      price: 12.99,
      image: "/assets/images/kavrulmus.png"
    },
    {
      id: 2,
      name: "(Not Roasted) Raw Pistachios",
      price: 11.99,
      image: "/assets/images/kavrulmamis.png"
    },
    {
      id: 3,
      name: "Tree-Ripened Shelled Pistachios",
      price: 10.99,
      image: "/assets/images/kuru.png"
    },
    {
      id: 4,
      name: "Roasted Pistachio Kernels",
      price: 14.99,
      image: "/assets/images/ic.png"
    },
    {
      id: 5,
      name: "(Not Roasted) Raw Pistachio Kernels",
      price: 8.99,
      image: "/assets/images/ic2.png"
    },
    {
      id: 6,
      name: "Chopped File Siirt Pistachio Kernels",
      price: 13.99,
      image: "/assets/images/kesik.png"
    },
    {
      id: 7,
      name: "Pistachio flour",
      price: 7.99,
      image: "/assets/images/toz.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium text-gray-900 text-center mb-8">
          All Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
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

export default ProductsPage;