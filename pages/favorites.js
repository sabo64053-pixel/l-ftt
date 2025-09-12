import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Favorites = () => {
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
      image: '/api/placeholder/300/300',
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
      image: '/api/placeholder/300/300',
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
      image: '/api/placeholder/300/300',
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
      image: '/api/placeholder/300/300',
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
      image: '/api/placeholder/300/300',
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
      image: '/api/placeholder/300/300',
      discount: 31,
      dateAdded: '2024-01-03',
      inStock: true,
      imageType: 'lipstick',
      imageColor: 'red'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date-added');
  const [showNotification, setShowNotification] = useState({ show: false, message: '', type: '' });

  // Function to render product image based on type and color
  const renderProductImage = (product) => {
    const colorMap = {
      purple: 'from-purple-100 to-purple-200',
      pink: 'from-pink-100 to-pink-200',
      yellow: 'from-yellow-100 to-yellow-200',
      blue: 'from-blue-100 to-blue-200',
      green: 'from-green-100 to-green-200',
      red: 'from-red-100 to-red-200',
      gray: 'from-gray-100 to-gray-200',
      orange: 'from-orange-100 to-orange-200'
    };

    const iconMap = {
      handbag: {
        icon: (
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
        text: 'Designer Handbag'
      },
      cosmetic: {
        icon: (
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        ),
        text: 'Luxury Cream'
      },
      lamp: {
        icon: (
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        text: 'Table Lamp'
      },
      sneakers: {
        icon: (
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        ),
        text: 'Designer Sneakers'
      },
      tshirt: {
        icon: (
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: 'Casual T-Shirt'
      },
      lipstick: {
        icon: (
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        ),
        text: 'Lipstick Set'
      }
    };

    const colorClass = colorMap[product.imageColor] || 'from-gray-100 to-gray-200';
    const iconData = iconMap[product.imageType] || {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: 'Product Image'
    };

    return (
      <div className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center relative overflow-hidden`}>
        <div className="text-center text-gray-700">
          {iconData.icon}
          <p className="text-sm font-medium">{iconData.text}</p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-current opacity-20 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-current opacity-30 rounded-full"></div>
      </div>
    );
  };

  // Show notification
  const showNotificationMessage = (message, type = 'success') => {
    setShowNotification({ show: true, message, type });
    setTimeout(() => setShowNotification({ show: false, message: '', type: '' }), 3000);
  };

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories', count: favoriteProducts.length },
    { id: 'clothing', name: 'Clothing', count: favoriteProducts.filter(p => p.category === 'clothing').length },
    { id: 'shoes', name: 'Shoes', count: favoriteProducts.filter(p => p.category === 'shoes').length },
    { id: 'makeup', name: 'Makeup', count: favoriteProducts.filter(p => p.category === 'makeup').length },
    { id: 'home-decor', name: 'Home Decor', count: favoriteProducts.filter(p => p.category === 'home-decor').length }
  ];

  const filteredProducts = favoriteProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'date-added':
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      default:
        return 0;
    }
  });

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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">{filteredProducts.length} items in your favorites</p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Sorting */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date-added">Date Added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
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
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
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
                <div className="space-y-2">
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
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

        {/* Empty State for Filtered Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or browse more products.</p>
            <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Browse Products
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
