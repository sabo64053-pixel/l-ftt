import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const { addToCart } = useCart();

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
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
        text: 'Designer Handbag'
      },
      cosmetic: {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        ),
        text: 'Luxury Cream'
      },
      lamp: {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        text: 'Table Lamp'
      },
      sneakers: {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        ),
        text: 'Designer Sneakers'
      },
      tshirt: {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: 'Casual T-Shirt'
      },
      lipstick: {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        ),
        text: 'Lipstick Set'
      },
      clock: {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: 'Wall Clock'
      },
      'running-shoes': {
        icon: (
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        ),
        text: 'Running Shoes'
      }
    };

    const colorClass = colorMap[product.imageColor] || 'from-gray-100 to-gray-200';
    const iconData = iconMap[product.imageType] || {
      icon: (
        <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="absolute top-2 right-2 w-3 h-3 bg-current opacity-20 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-current opacity-30 rounded-full"></div>
      </div>
    );
  };

  // Mock categories
  const categories = [
    { id: 'all', name: 'All Categories', count: 156 },
    { id: 'clothing', name: 'Clothing', count: 45 },
    { id: 'shoes', name: 'Shoes', count: 32 },
    { id: 'makeup', name: 'Makeup', count: 28 },
    { id: 'home-decor', name: 'Home Decor', count: 51 }
  ];

  // Mock brands
  const brands = [
    'Nike', 'Adidas', 'Zara', 'H&M', 'Sephora', 'MAC', 'IKEA', 'West Elm'
  ];

  // Mock colors
  const colors = [
    'Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'
  ];

  // Mock products with images
  const products = [
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
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
      discount: 31,
      imageType: 'lipstick',
      imageColor: 'red'
    },
    {
      id: 7,
      name: 'Elegant Wall Clock',
      price: 79,
      originalPrice: 119,
      category: 'home-decor',
      brand: 'West Elm',
      colors: ['Silver', 'Gold'],
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=400&fit=crop&crop=center',
      discount: 34,
      imageType: 'clock',
      imageColor: 'gray'
    },
    {
      id: 8,
      name: 'Running Shoes',
      price: 159,
      originalPrice: 229,
      category: 'shoes',
      brand: 'Adidas',
      colors: ['Gray', 'Blue'],
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center',
      discount: 31,
      imageType: 'running-shoes',
      imageColor: 'orange'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) return false;
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
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                  />
                </div>
                <div className="w-full bg-gray-200 rounded-lg h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-lg"
                    style={{ width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Colors</h3>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((color) => (
                  <label key={color} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleColor(color)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rating</option>
                    <option value="reviews">Most Reviewed</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-square relative">
                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        -{product.discount}%
                      </div>
                    )}
                    
                    {/* Product Image */}
                    {renderProductImage(product)}
                  </div>

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

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {product.colors.slice(0, 3).map((color, index) => (
                          <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                        {product.colors.length > 3 && (
                          <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                        )}
                      </div>

                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you&apos;re looking for.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

