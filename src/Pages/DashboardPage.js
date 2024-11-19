import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, LogOut } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const OrderPanel = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const daysSinceOrder = Math.floor((new Date() - new Date(order.date)) / (1000 * 60 * 60 * 24));
  const canRefund = daysSinceOrder <= 30;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100">
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Order #</p>
          <p className="font-medium">{order.orderNumber}</p>
        </div>
        <div className="px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Date</p>
          <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
        </div>
        <div className="px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Days Since</p>
          <p className="font-medium">{daysSinceOrder} days</p>
        </div>
        <div className="px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Amount</p>
          <p className="font-medium text-green-600">${order.amount}</p>
        </div>
        <div className="px-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            Details {isOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>
        </div>
        <div className="px-2">
          <button
            disabled={!canRefund}
            className={`w-full px-3 py-1 text-sm rounded-md transition-colors ${
              canRefund
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Refund
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-gray-500">Order Details</h4>
          <div className="bg-gray-50 rounded-md p-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Item</div>
              <div className="text-gray-500 text-right">Price</div>
              {order.items.map((item, index) => (
                <React.Fragment key={index}>
                  <div>{item.name} x{item.quantity}</div>
                  <div className="text-right text-green-600">${item.price}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WishlistItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100">
      <div className="grid grid-cols-8 gap-4 items-center">
        <div className="col-span-3 px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Product Name</p>
          <p className="font-medium text-gray-900">{item.name}</p>
        </div>
        <div className="col-span-1 px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Price</p>
          <p className="font-medium text-green-600">${item.price}</p>
        </div>
        <div className="col-span-2 px-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Added On</p>
          <p className="font-medium">{new Date(item.addedAt).toLocaleDateString()}</p>
        </div>
        <div className="col-span-2 px-2">
          <Link 
            to={`/product/${item.id}`}
            className="w-full px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
          >
            Go to Product
          </Link>
        </div>
      </div>
    </div>
  );
};

const initialWishlistItems = [
  {
    id: 1,
    name: "Raw Pistachios",
    price: 14.99,
    addedAt: "2024-03-15",
    description: "Premium quality raw pistachios"
  },
  {
    id: 2,
    name: "Roasted Salted Pistachios",
    price: 16.99,
    addedAt: "2024-03-16", 
    description: "Perfectly roasted and salted pistachios"
  }
];

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      orderNumber: "ORD-001",
      date: "2024-03-01",
      amount: 29.99,
      items: [
        { name: "Raw Pistachios", quantity: 2, price: "14.99" },
        { name: "Roasted Pistachios", quantity: 1, price: "15.00" }
      ]
    },
    {
      orderNumber: "ORD-002",
      date: "2024-01-15",
      amount: 45.98,
      items: [
        { name: "Premium Pistachios", quantity: 2, price: "22.99" }
      ]
    }
  ]);
  const [wishlist, setWishlist] = useState(initialWishlistItems);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:5000/wishlist', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setWishlist(response.data);
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      }
    };

    fetchWishlist();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              Welcome back, {user?.username}!
            </h1>
            <p className="text-gray-600">
              Here's an overview of your orders and wishlist.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orders Section */}
          <div>
            <h2 className="text-xl font-medium mb-4">Your Orders</h2>
            <div className="space-y-4">
              {orders.map((order, index) => (
                <OrderPanel key={index} order={order} />
              ))}
              {orders.length === 0 && (
                <p className="text-gray-500 text-center py-8">No orders yet</p>
              )}
            </div>
          </div>

          {/* Wishlist Section */}
          <div>
            <h2 className="text-xl font-medium mb-4">Your Wishlist</h2>
            <div className="space-y-4">
              {wishlist.map((item) => (
                <WishlistItem key={item.id} item={item} />
              ))}
              {wishlist.length === 0 && (
                <p className="text-gray-500 text-center py-8">Your wishlist is empty</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;