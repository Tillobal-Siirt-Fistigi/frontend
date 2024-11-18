import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderSummary = ({ orderDetails }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="flex items-center space-x-4 mb-6">
      <img 
        src={orderDetails.image} 
        alt={orderDetails.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <h3 className="font-medium text-gray-900">{orderDetails.name}</h3>
        <p className="text-green-600">${orderDetails.price}</p>
      </div>
    </div>

    <div className="space-y-3 border-t border-gray-200 pt-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">${orderDetails.subtotal}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Shipping</span>
        <span className="text-green-600">Free Shipping</span>
      </div>
      <div className="flex justify-between border-t border-gray-200 pt-3">
        <span className="font-medium">Total</span>
        <span className="font-medium">${orderDetails.total}</span>
      </div>
    </div>
  </div>
);

const PaymentPage = () => {
  const navigate = useNavigate();
  const [orderDetails] = useState({
    name: "File Kiyilmis Ic",
    price: "9.99",
    image: "/assets/images/kesik.png",
    subtotal: "9.99",
    total: "9.99"
  });

  const [formData, setFormData] = useState({
    email: "joe.smith@hello.com",
    address: "Via Parioli 23, 00253, Campitello di Fassa AO, Italy",
    shipping: "Standard Shipping - FREE",
    cardNumber: "",
    holderName: "",
    expiration: "",
    cvv: ""
  });

  const [editing, setEditing] = useState({
    email: false,
    address: false,
    shipping: false
  });

  const handleEdit = (field) => {
    setEditing(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayNow = () => {
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/cart" className="text-gray-500">Cart</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900">Payment</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Contact Info */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Contact</p>
                <button 
                  onClick={() => handleEdit('email')} 
                  className="text-green-600 text-sm"
                >
                  Edit
                </button>
              </div>
              {editing.email ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <p className="text-sm">{formData.email}</p>
              )}
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Ship to</p>
                <button 
                  onClick={() => handleEdit('address')} 
                  className="text-green-600 text-sm"
                >
                  Edit
                </button>
              </div>
              {editing.address ? (
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <p className="text-sm">{formData.address}</p>
              )}
            </div>

            {/* Shipping Method */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Method</p>
                <button 
                  onClick={() => handleEdit('shipping')} 
                  className="text-green-600 text-sm"
                >
                  Edit
                </button>
              </div>
              {editing.shipping ? (
                <select
                  value={formData.shipping}
                  onChange={(e) => handleInputChange('shipping', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Standard Shipping - FREE">Standard Shipping - FREE</option>
                  <option value="Express Shipping - $9.99">Express Shipping - $9.99</option>
                </select>
              ) : (
                <p className="text-sm">{formData.shipping}</p>
              )}
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Payment method</h2>
              <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-3 mb-4">
                <CreditCard className="text-green-600" />
                <span>Credit Card</span>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Holder Name"
                    value={formData.holderName}
                    onChange={(e) => handleInputChange('holderName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiration (MM/YY)"
                    value={formData.expiration}
                    onChange={(e) => handleInputChange('expiration', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Link 
                to="/cart" 
                className="text-green-600 hover:text-green-700"
              >
                Back to shopping
              </Link>
              <button 
                onClick={handlePayNow}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Pay now
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <OrderSummary orderDetails={orderDetails} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPage;