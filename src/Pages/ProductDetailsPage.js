import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Minus, Plus, Heart, Star, StarHalf } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


const productsData = [
  {
    id: 1,
    name: "Roasted Cracked Salted Pistachios",
    price: 12.99,
    image: "/assets/images/kavrulmus.png",
    popularity: 95,
    stockCount: 50
  },
  {
    id: 2,
    name: "(Not Roasted) Raw Pistachios",
    price: 11.99,
    image: "/assets/images/kavrulmamis.png",
    popularity: 85,
    stockCount: 0  // Out of stock
  },
  {
    id: 3,
    name: "Tree-Ripened Shelled Pistachios",
    price: 10.99,
    image: "/assets/images/kuru.png",
    popularity: 90,
    stockCount: 30
  },
  {
    id: 4,
    name: "Roasted Pistachio Kernels",
    price: 14.99,
    image: "/assets/images/ic.png",
    popularity: 88,
    stockCount: 20
  },
  {
    id: 5,
    name: "(Not Roasted) Raw Pistachio Kernels",
    price: 8.99,
    image: "/assets/images/ic2.png",
    popularity: 82,
    stockCount: 0  // Out of stock
  },
  {
    id: 6,
    name: "Chopped File Siirt Pistachio Kernels",
    price: 13.99,
    image: "/assets/images/kesik.png",
    popularity: 78,
    stockCount: 15
  },
  {
    id: 7,
    name: "Pistachio flour",
    price: 7.99,
    image: "/assets/images/toz.png",
    popularity: 75,
    stockCount: 40
  }
];

const staticComments = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "2024-03-15",
    comment: "These pistachios are amazing! Very fresh and tasty."
  },
  {
    id: 2,
    name: "Maria Garcia",
    rating: 4,
    date: "2024-03-10",
    comment: "Good quality product, fast shipping. Will buy again."
  },
  {
    id: 3,
    name: "Alex Johnson",
    rating: 5,
    date: "2024-03-05",
    comment: "Best pistachios I've ever had. The roasting is perfect!"
  }
];

// StarRating component for displaying ratings
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} size={16} fill="#22c55e" className="text-green-500" />);
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} size={16} fill="#22c55e" className="text-green-500" />);
    } else {
      stars.push(<Star key={i} size={16} className="text-gray-300" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

// Comment Section Component
const CommentSection = ({ productId }) => {
  const [newComment, setNewComment] = useState({
    rating: 5,
    comment: ''
  });
  const [comments, setComments] = useState(staticComments); // Temporarily use static comments
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setMessage("You must be logged in to submit a review.");
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/reviews/post',
        {
          product_id: productId,
          rating: newComment.rating,
          review_text: newComment.comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.msg);
      // Reset form after submission
      setNewComment({ rating: 5, comment: '' });
      // Add the new comment to the list of comments
      setComments([...comments, { ...newComment, name: 'You', date: new Date().toLocaleDateString() }]);
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "An error occurred while submitting your review.";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="mt-12 space-y-8">
      <h2 className="text-xl font-medium">Customer Reviews</h2>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">{comment.name}</p>
                <StarRating rating={comment.rating} />
              </div>
              <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-600 mt-2">{comment.comment}</p>
          </div>
        ))}
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewComment(prev => ({ ...prev, rating: star }))}
                  className="focus:outline-none"
                >
                  <Star
                    size={24}
                    className={star <= newComment.rating ? "text-green-500 fill-current" : "text-gray-300"}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
            <textarea
              value={newComment.comment}
              onChange={(e) => setNewComment(prev => ({ ...prev, comment: e.target.value }))}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Write your review here..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Submit Review
          </button>
        </div>
      </form>

      {/* Display message */}
      {message && (
        <div className="mt-4 p-3 text-center text-white bg-green-500 rounded-md">{message}</div>
      )}
    </div>
  );
};

const ProductDetailsPage = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(""); // State for success/error messages
  const [rating, setRating] = useState(5); // Default rating to 5 stars
  const [reviewText, setReviewText] = useState(""); // Review text state

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = async () => {
    // Don't proceed if product is out of stock
    if (!product || product.stockCount < quantity) {
      setMessage("This product is currently out of stock.");
      return;
    }

    const token = localStorage.getItem('accessToken');  // Get the token from localStorage

    if (!token) {
      setMessage("You must be logged in to add products to your cart.");
      return;
    }

    try {
      const user_id = user.email;
      const response = await axios.post(
        "http://localhost:5000/cart/add",
        {
          user_id,  // User ID
          product_id: product.id,  // Product ID
          quantity,  // Product Quantity
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the JWT token in the headers
          },
        }
      );

      // Handle success response
      setMessage(response.data.msg); // Display success message
    } catch (error) {
      console.log(error);
      // Handle error response
      const errorMsg = error.response?.data?.msg || "An error occurred";
      setMessage(errorMsg); // Display error message
    }
  };

  const handleAddToWishlist = async () => {
    if (!isAuthenticated) {
      setMessage("You must be logged in to add products to your wishlist.");
      return;
    }

    const token = localStorage.getItem('accessToken'); // Get the token from localStorage

    if (!token) {
      setMessage("You must be logged in to add products to your wishlist.");
      return;
    }

    try {
      const user_id = user.email; // Assuming user.email is the user ID
      const response = await axios.post(
        "http://localhost:5000/wishlist/add", 
        {
          user_id,  // User ID
          product_id: product.id,  // Product ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Attach the JWT token in the headers
          },
        }
      );
      setMessage(response.data.msg);  // Success message
    } catch (error) {
      console.log(error);
      const errorMsg = error.response?.data?.msg || "An error occurred";
      setMessage(errorMsg);  // Display error message
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setMessage("You must be logged in to post a review.");
      return;
    }

    const token = localStorage.getItem('accessToken'); // Get the token from localStorage

    if (!token) {
      setMessage("You must be logged in to post a review.");
      return;
    }

    try {
      const user_id = user.email; // Assuming user.email is the user ID
      const response = await axios.post(
        "http://localhost:5000/reviews/post", 
        {
          user_id,  // User ID
          product_id: product.id,  // Product ID
          rating,  // Product rating
          review_text: reviewText,  // Review text
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Attach the JWT token in the headers
          },
        }
      );
      setMessage(response.data.msg);  // Success message
      setRating(5);  // Reset rating
      setReviewText("");  // Reset review text
    } catch (error) {
      console.log(error);
      const errorMsg = error.response?.data?.msg || "An error occurred";
      setMessage(errorMsg);  // Display error message
    }
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
            <div className="text-xl font-semibold text-green-600">${product.price}</div>

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

            {/* Action Buttons */}
            <div className="flex gap-4">
              {/* Add to Cart Button */}
              <button 
                className={`flex-1 py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 ${
                  product.stockCount > 0 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                }`}
                disabled={product.stockCount === 0}
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                <span>{product.stockCount > 0 ? 'Add to cart' : 'Out of Stock'}</span>
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={handleAddToWishlist}
                className="flex-1 border border-green-500 text-green-500 py-3 px-4 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
            </div>

            {/* Add Stock Status */}
            {product.stockCount > 0 ? (
              <div className="text-sm text-gray-600">
                {product.stockCount} items in stock
              </div>
            ) : (
              <div className="text-sm text-red-500 font-medium">
                Currently out of stock
              </div>
            )}

            {/* Display Success/Error Message */}
            {message && (
              <div
                className={`mt-4 p-3 rounded-md text-center ${
                  message.toLowerCase().includes("error")
                    ? "bg-red-50 text-red-700"
                    : "bg-green-50 text-green-700"
                }`}
              >
                {message}
              </div>
            )}

            {/* Free Shipping Banner */}
            <div className="bg-green-50 text-green-700 p-3 rounded-md flex items-center justify-center space-x-2">
              <span role="img" aria-label="truck">🚚</span>
              <span>FREE SHIPPING</span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="font-medium">Description:</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
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

        {/* Comment Section */}
        <div className="mt-12 space-y-8">
          <h2 className="text-xl font-medium">Customer Reviews</h2>

          {/* Comments List */}
          <div className="space-y-6">
            {staticComments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{comment.name}</p>
                    <StarRating rating={comment.rating} />
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{comment.comment}</p>
              </div>
            ))}
          </div>

          {/* New Comment Form */}
          <form onSubmit={handleSubmitReview} className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium mb-4">Write a Review</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        size={24}
                        className={star <= rating ? "text-green-500 fill-current" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Write your review here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;