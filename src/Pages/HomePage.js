import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Hero = () => (
  <div className="relative h-[calc(100vh-72px)] overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-500 hover:scale-110"
      style={{ backgroundImage: "url('/assets/images/background.png')" }}
    />
    
    {/* Content Section */}
    <div className="relative h-full flex items-center justify-center px-4">
      <div className="bg-white/55 backdrop-blur-md px-16 py-20 rounded-2xl shadow-2xl max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Welcome to <span className="text-green-600">PistachioHut</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Taste the difference with our sustainably grown, hand-picked pistachios. Always fresh, always pure, delivered from our fields to your door.
        </p>
        <Link to="/products">
          <button className="bg-green-600 text-white px-12 py-4 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-green-700 transition-transform duration-300 transform hover:-translate-y-1">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const ProductCard = ({ id, name, price, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  // Convert price to number before using toFixed()
  const formattedPrice = Number(price).toFixed(2);

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-medium text-gray-800 mb-2">{name}</h3>
      <p className="text-green-600 font-bold">${formattedPrice}</p>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/all`);
        setProducts(response.data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-green-500 border-dotted rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Products</h2>
        <p className="text-center text-gray-600 mb-12">Order it for you or for your beloved ones</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image_link}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/products"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

const Feature = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Organic and tasteful pistachios</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Eco-sustainable
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Vegan
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Organic
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Supporting local businesses
            </li>
          </ul>
          <Link to="/about">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition duration-300 transform hover:scale-105 focus:ring-4 focus:ring-green-300">
              Learn more
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/assets/images/PistachioTreePhoto.png" 
            alt="Fresh pistachios on tree" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, rating, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-center mb-4">
      <img src={image} alt={author} className="w-16 h-16 rounded-full" />
    </div>
    <div className="flex justify-center mb-4">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-3xl text-yellow-400">★</span>
        ))}
      </div>
    </div>
    <p className="text-center text-gray-700 mb-4 italic">"{quote}"</p>
    <p className="text-center font-medium">{author}</p>
  </div>
);

const Testimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center text-gray-600 mb-12">Some quotes from our happy customers</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="Best pistachio ever!"
          author="Linda"
          rating={4}
          image="/assets/images/linda.png"
        />
        <TestimonialCard 
          quote="Recommended for everyone!"
          author="Edward"
          rating={5}
          image="/assets/images/edward.png"
        />
        <TestimonialCard 
          quote="Organic, natural, and tasteful - just great"
          author="Alex"
          rating={4}
          image="/assets/images/alex.png"
        />
      </div>
    </div>
  </section>
);

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  
  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/all`);
        setPopularProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error('Failed to fetch popular products:', error);
      }
    };
    
    fetchPopularProducts();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular</h2>
        <p className="text-center text-gray-600 mb-12">Our top-selling products that you may like</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {popularProducts.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image_link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Products />
    <Feature />
    <Testimonials />
    <PopularProducts />
    <Footer />
  </div>
);

export default HomePage;