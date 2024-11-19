import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { storage } from '../firebase'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Correct imports for Firebase v9

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
    popularity: 0,
    category: '', // New field for category
  });

  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      const storageRef = ref(storage, `product_images/${imageFile.name}`);
      const uploadTask = uploadBytes(storageRef, imageFile);

      uploadTask.then(() => {
        getDownloadURL(storageRef).then((imageUrl) => {
          setProductData((prevData) => ({
            ...prevData,
            image_link: imageUrl,
          }));

          axios
            .post(process.env.REACT_APP_BACKEND_URL + '/products/add', productData, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            })
            .then((response) => {
              setSuccess(response.data.msg);
              setTimeout(() => navigate('/'), 2000);
            })
            .catch((err) => {
              setError(err.response?.data?.msg || 'Failed to add product');
            });
        });
      }).catch(() => {
        setError('Image upload failed');
      });
    } else {
      axios
        .post(process.env.REACT_APP_BACKEND_URL + '/products/add', productData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((response) => {
          setSuccess(response.data.msg);
          setTimeout(() => navigate('/'), 2000);
        })
        .catch((err) => {
          setError(err.response?.data?.msg || 'Failed to add product');
        });
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
            {
                
            }
            {/* Image Upload */}
            <div>
              <input
                type="file"
                onChange={handleImageChange}
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
