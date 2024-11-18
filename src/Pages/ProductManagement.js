import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Roasted Pistachios', stock: 50, category: 'Roasted', price: 12.99 },
    { id: 2, name: 'Raw Pistachios', stock: 30, category: 'Raw', price: 10.99 },
  ]);

  const handleAddProduct = () => {
    // Add product logic
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-green-600">Product Management</h1>
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105 mb-6"
          >
            Add Product
          </button>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Stock</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-300 px-4 py-2">${product.price.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-transform transform hover:scale-105"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductManagement;
