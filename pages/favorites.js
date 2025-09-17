import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Favorites = () => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} sepete eklendi!`);
  };

  const handleViewDetails = (productId) => {
    window.location.href = `/product/${productId}`;
  };
  
  const [favoriteProducts, setFavoriteProducts] = useState([
    {
      id: 1,
      name: 'Premium Designer Handbag',
      price: 459,
      originalPrice: 699,
      category: 'home-decor',
      brand: 'West Elm',
      colors: ['Black', 'Brown'],
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
      discount: 34,
      dateAdded: '2024-01-15',
      inStock: true,
      imageType: 'handbag',
      imageColor: 'purple'
    },
    {
      id: 2,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      category: 'makeup',
      brand: 'MAC',
      colors: ['White'],
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
      discount: 37,
      dateAdded: '2024-01-12',
      inStock: true,
      imageType: 'cosmetic',
      imageColor: 'pink'
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 89,
      originalPrice: 129,
      category: 'home-decor',
      brand: 'IKEA',
      colors: ['White', 'Black'],
      rating: 4.4,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=400&h=400&fit=crop&crop=center',
      discount: 31,
      dateAdded: '2024-01-10',
      inStock: false,
      imageType: 'lamp',
      imageColor: 'yellow'
    },
    {
      id: 4,
      name: 'Designer Sneakers',
      price: 199,
      originalPrice: 299,
      category: 'shoes',
      brand: 'Nike',
      colors: ['White', 'Black', 'Blue'],
      rating: 4.7,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center',
      discount: 33,
      dateAdded: '2024-01-08',
      inStock: true,
      imageType: 'sneakers',
      imageColor: 'blue'
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      price: 29,
      originalPrice: 49,
      category: 'clothing',
      brand: 'H&M',
      colors: ['White', 'Black', 'Blue'],
      rating: 4.3,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
      discount: 41,
      dateAdded: '2024-01-05',
      inStock: true,
      imageType: 'tshirt',
      imageColor: 'green'
    },
    {
      id: 6,
      name: 'Lipstick Set',
      price: 45,
      originalPrice: 65,
      category: 'makeup',
      brand: 'Sephora',
      colors: ['Red', 'Pink', 'Purple'],
      rating: 4.5,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center',
      discount: 31,
      dateAdded: '2024-01-03',
      inStock: true,
      imageType: 'lipstick',
      imageColor: 'red'
    }
  ]);

  const [showNotification, setShowNotification] = useState({ show: false, message: '', type: '' });

  // Function to render product image using real images
  const renderProductImage = (product) => {
    return (
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    );
  };

  // Show notification
  const showNotificationMessage = (message, type = 'success') => {
    setShowNotification({ show: true, message, type });
    setTimeout(() => setShowNotification({ show: false, message: '', type: '' }), 3000);
  };


  const removeFromFavorites = (id) => {
    setFavoriteProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    showNotificationMessage('Product removed from favorites', 'success');
  };

  const addToCart = (id) => {
    // This would typically add to a global cart state
    showNotificationMessage('Product added to cart!', 'success');
  };

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your favorites list is empty</h1>
            <p className="text-gray-600 mb-8">Start adding products you love to your favorites!</p>
            <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Browse Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Notification */}
      {showNotification.show && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          showNotification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {showNotification.message}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">{favoriteProducts.length} items in your favorites</p>
        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Product Image */}
              <div className="aspect-square relative">
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    -{product.discount}%
                  </div>
                )}

                {/* Out of Stock Badge */}
                {!product.inStock && (
                  <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    Out of Stock
                  </div>
                )}

                {/* Product Image */}
                {renderProductImage(product)}

                {/* Remove from Favorites Button */}
                <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="absolute top-3 right-3 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-red-50 transition-colors z-20"
                  title="Remove from favorites"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-2 sm:p-3">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm line-clamp-2">{product.name}</h3>

                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-3">
                  <span className="text-sm sm:text-base font-bold text-blue-600">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs sm:text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-wrap gap-1">
                    {product.colors.slice(0, 2).map((color, index) => (
                      <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {color}
                      </span>
                    ))}
                    {product.colors.length > 2 && (
                      <span className="text-xs text-gray-500">+{product.colors.length - 2}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-1 sm:space-y-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  <button 
                    onClick={() => handleViewDetails(product.id)}
                    className="w-full py-1.5 sm:py-2 px-2 sm:px-3 border border-gray-300 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>

                {/* Date Added */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Added on {new Date(product.dateAdded).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
