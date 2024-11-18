import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SortAsc } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('recommended');

  const initialProducts = [
    {
      id: 1,
      name: "Roasted Cracked Salted Pistachios",
      price: 12.99,
      image: "/assets/images/kavrulmus.png",
      popularity: 95
    },
    {
      id: 2,
      name: "(Not Roasted) Raw Pistachios",
      price: 11.99,
      image: "/assets/images/kavrulmamis.png",
      popularity: 85
    },
    {
      id: 3,
      name: "Tree-Ripened Shelled Pistachios",
      price: 10.99,
      image: "/assets/images/kuru.png",
      popularity: 90
    },
    {
      id: 4,
      name: "Roasted Pistachio Kernels",
      price: 14.99,
      image: "/assets/images/ic.png",
      popularity: 88
    },
    {
      id: 5,
      name: "(Not Roasted) Raw Pistachio Kernels",
      price: 8.99,
      image: "/assets/images/ic2.png",
      popularity: 82
    },
    {
      id: 6,
      name: "Chopped File Siirt Pistachio Kernels",
      price: 13.99,
      image: "/assets/images/kesik.png",
      popularity: 78
    },
    {
      id: 7,
      name: "Pistachio flour",
      price: 7.99,
      image: "/assets/images/toz.png",
      popularity: 75
    }
  ];

  const filteredAndSortedProducts = initialProducts
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'popularity':
          return b.popularity - a.popularity;
        default: // 'recommended'
          return b.popularity - a.popularity;
      }
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium text-gray-900 text-center mb-8">
          All Products
        </h1>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <SortAsc size={20} className="text-gray-500" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="popularity">Most Popular</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found matching your search.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;