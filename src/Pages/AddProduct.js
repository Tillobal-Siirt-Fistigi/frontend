import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    model: '',
    serial_number: '',
    description: '',
    quantity_in_stock: '',
    price: '',
    warranty_status: '',
    distributor_info: '',
    image_link: '',
    dimensions: '',
    weight: '',
    popularity: 100,
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the product data to the backend to add the product
      const response = await axios.post('http://localhost:5000/products/add', productData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`  // Send the auth token
        }
      });

      // Handle success response
      setSuccess(response.data.msg);
      setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to add product');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-8">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8"> {/* Increased form width */}
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Add Product</h2>
          
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Product Name */}
            <div>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                required
              />
            </div>

            {/* Model */}
            <div>
              <input
                type="text"
                name="model"
                value={productData.model}
                onChange={handleChange}
                placeholder="Model"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                required
              />
            </div>

            {/* Serial Number */}
            <div>
              <input
                type="text"
                name="serial_number"
                value={productData.serial_number}
                onChange={handleChange}
                placeholder="Serial Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                required
              />
            </div>

            {/* Description */}
            <div>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                required
              />
            </div>

            {/* Quantity in Stock */}
            <div>
              <input
                type="number"
                name="quantity_in_stock"
                value={productData.quantity_in_stock}
                onChange={handleChange}
                placeholder="Quantity in Stock"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                required
              />
            </div>

            {/* Price */}
            <div>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                required
              />
            </div>

            {/* Warranty Status */}
            <div>
              <input
                type="text"
                name="warranty_status"
                value={productData.warranty_status}
                onChange={handleChange}
                placeholder="Warranty Status"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              />
            </div>

            {/* Distributor Information */}
            <div>
              <input
                type="text"
                name="distributor_info"
                value={productData.distributor_info}
                onChange={handleChange}
                placeholder="Distributor Information"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              />
            </div>

            {/* Image Link */}
            <div>
              <input
                type="text"
                name="image_link"
                value={productData.image_link}
                onChange={handleChange}
                placeholder="Image Link"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              />
            </div>

            {/* Dimensions */}
            <div>
              <input
                type="text"
                name="dimensions"
                value={productData.dimensions}
                onChange={handleChange}
                placeholder="Dimensions"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              />
            </div>

            {/* Weight */}
            <div>
              <input
                type="text"
                name="weight"
                value={productData.weight}
                onChange={handleChange}
                placeholder="Weight"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-md text-lg hover:bg-green-600 transition-colors"
            >
              Add Product
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddProductPage;
