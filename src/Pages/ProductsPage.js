import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

      <Footer />
    </div>
  );
};

export default ProductsPage;