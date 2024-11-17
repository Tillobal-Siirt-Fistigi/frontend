import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User, ShoppingCart, Minus, Plus } from 'lucide-react';

// Product data (you might want to move this to a separate file)
const productsData = [
  {
    id: 1,
    name: "Roasted Cracked Salted Pistachios",
    price: 12.99,
    image: "/assets/images/kavrulmus.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  },
  {
    id: 2,
    name: "(Not Roasted) Raw Pistachios",
    price: 11.99,
    image: "/assets/images/kavrulmamis.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  },
  {
    id: 3,
    name: "Tree-Ripened Shelled Pistachios",
    price: 10.99,
    image: "/assets/images/kuru.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  },
  {
    id: 4,
    name: "Roasted Pistachio Kernels",
    price: 14.99,
    image: "/assets/images/ic.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  },
  {
    id: 5,
    name: "(Not Roasted) Raw Pistachio Kernels",
    price: 8.99,
    image: "/assets/images/ic2.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  },
  {
    id: 6,
    name: "Chopped File Siirt Pistachio Kernels",
    price: 13.99,
    image: "/assets/images/kesik.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  },
  {
    id: 7,
    name: "Pistachio flour",
    price: 7.99,
    image: "/assets/images/toz.png",
    description: "All organic, ethically sourced pistachios collected for you and for your loved ones. Our premium pistachios are carefully selected from the finest orchards, ensuring exceptional quality and taste.",
    dimensions: "20cm x 25cm",
    weight: "100g"
  }
];

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

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product based on the ID from the URL
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-white">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-2xl font-medium text-gray-900">{product.name}</h1>
            
            <div className="text-xl font-semibold text-green-600">
              ${product.price}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Quantity</p>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <input 
                  type="text" 
                  value={quantity}
                  readOnly
                  className="w-12 text-center border border-gray-300 rounded-md"
                />
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart size={20} />
              <span>Add to cart</span>
            </button>

            {/* Free Shipping Banner */}
            <div className="bg-green-50 text-green-700 p-3 rounded-md flex items-center justify-center space-x-2">
              <span role="img" aria-label="truck">🚚</span>
              <span>FREE SHIPPING</span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="font-medium">Description:</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="space-y-2">
              <div className="flex">
                <span className="text-sm text-gray-600 w-24">Dimension:</span>
                <span className="text-sm">{product.dimensions}</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-600 w-24">Weight:</span>
                <span className="text-sm">{product.weight}</span>
              </div>
            </div>
          </div>
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

export default ProductDetailsPage;