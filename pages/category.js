import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Category = () => {
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    color: false,
    price: false,
    size: true,
    rating: false
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState(['S', 'M']);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [reviewsWithPhotos, setReviewsWithPhotos] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  // Mock products
  const products = [
    {
      id: 1,
      name: 'Hopena Shop Kişiye Özel Fotoğraflı 99 Parça Puzzle',
      price: 283.5,
      originalPrice: 315,
      discount: 10,
      rating: 0.0,
      reviews: 0,
      image: '/api/placeholder/300/300',
      description: 'istediğiniz fotoğraftan canlı renk baskı',
      size: 'A4 Boyutunda 99 Parça'
    },
    {
      id: 2,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      discount: 23,
      category: 'home-decor',
      brand: 'Zara',
      colors: ['Siyah', 'Kahverengi'],
      sizes: ['M', 'L'],
      rating: 4.8,
      reviews: 127,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Premium Cotton T-Shirt',
      price: 89,
      originalPrice: 129,
      discount: 31,
      category: 'clothing',
      brand: 'Mango',
      colors: ['Beyaz', 'Mavi'],
      sizes: ['S', 'M', 'L'],
      rating: 4.6,
      reviews: 89,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Sport Running Shoes',
      price: 299,
      originalPrice: 399,
      discount: 25,
      category: 'shoes',
      brand: 'Nike',
      colors: ['Siyah', 'Gri'],
      sizes: ['S', 'M', 'L'],
      rating: 4.4,
      reviews: 56,
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      discount: 37,
      category: 'makeup',
      brand: 'H&M',
      colors: ['Bej'],
      sizes: ['M'],
      rating: 4.5,
      reviews: 78,
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Modern Table Lamp',
      price: 189,
      originalPrice: 249,
      discount: 24,
      category: 'home-decor',
      brand: 'Zara',
      colors: ['Beyaz', 'Siyah'],
      sizes: ['L'],
      rating: 4.7,
      reviews: 45,
      image: '/api/placeholder/300/300'
    }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setReviewsWithPhotos(false);
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600">{products.length} ürün bulundu</p>
        </div>

        {/* Filter Toggle Button and Sort Options */}
        <div className="mb-6 flex items-center justify-between">
          {/* Filter Toggle Button - Only on mobile */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden bg-white border border-orange-200 shadow-sm rounded-lg px-4 py-2 flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <span className="font-medium">Filtrele</span>
          </button>

          {/* Sort Options */}
          <button className="bg-white border border-orange-200 shadow-sm rounded-lg px-4 py-2 flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
            <span className="font-medium">Önerilen sıralama</span>
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Main Content with Filters and Products */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">FİLTRELE</h2>
              
              {/* Color Filter */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('color')}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="font-medium text-gray-900">Renk</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.color ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.color && (
                  <div className="mt-2 space-y-2">
                    {['Siyah', 'Beyaz', 'Kırmızı', 'Mavi', 'Yeşil'].map((color) => (
                      <label key={color} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => handleColorToggle(color)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('price')}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="font-medium text-gray-900">Fiyat</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.price && (
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span>₺{priceRange[0]}</span>
                      <span>₺{priceRange[1]}</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(priceRange[1] / 1000) * 100}%, #E5E7EB ${(priceRange[1] / 1000) * 100}%, #E5E7EB 100%)`
                        }}
                      />
                      <style jsx>{`
                        input[type="range"]::-webkit-slider-thumb {
                          appearance: none;
                          height: 20px;
                          width: 20px;
                          border-radius: 50%;
                          background: #3B82F6;
                          cursor: pointer;
                          border: 2px solid white;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        }
                        input[type="range"]::-moz-range-thumb {
                          height: 20px;
                          width: 20px;
                          border-radius: 50%;
                          background: #3B82F6;
                          cursor: pointer;
                          border: 2px solid white;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        }
                      `}</style>
                    </div>
                  </div>
                )}
              </div>

              {/* Size Filter */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('size')}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="font-medium text-gray-900">Beden</span>
                  <svg className={`w-5 h-5 text-orange-500 transition-transform ${expandedSections.size ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.size && (
                  <div className="mt-2 space-y-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <label key={size} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeToggle(size)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className={`ml-2 text-sm ${selectedSizes.includes(size) ? 'text-blue-600 font-medium' : 'text-gray-700'}`}>
                          {size}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Rating Filter */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('rating')}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="font-medium text-gray-900">Yıldız</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.rating && (
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reviewsWithPhotos}
                        onChange={(e) => setReviewsWithPhotos(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <svg className="ml-2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-700">Fotoğraflı Yorumlar</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    {/* Product Image Placeholder */}
                    <div className="text-center text-gray-600">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <p className="text-xs sm:text-sm font-medium text-gray-700">{product.name}</p>
                    </div>
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm line-clamp-2">{product.name}</h3>
                    {product.description && (
                      <p className="text-xs text-gray-600 mb-1 hidden sm:block">{product.description}</p>
                    )}
                    {product.size && (
                      <p className="text-xs text-gray-600 mb-1 sm:mb-2">{product.size}</p>
                    )}
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                      <span className="text-sm sm:text-lg font-bold text-blue-600">₺ {product.price}</span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through">₺ {product.originalPrice}</span>
                    </div>
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 ml-1">{product.rating} ({product.reviews} Yorum)</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg transition-colors mt-auto">
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Sidebar - Only visible when opened */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">FİLTRELE</h2>
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Color Filter */}
            <div className="mb-4">
              <button 
                onClick={() => toggleSection('color')}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <span className="font-medium text-gray-900">Renk</span>
                <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.color ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.color && (
                <div className="mt-2 space-y-2">
                  {['Siyah', 'Beyaz', 'Kırmızı', 'Mavi', 'Yeşil'].map((color) => (
                    <label key={color} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorToggle(color)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <button 
                onClick={() => toggleSection('price')}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <span className="font-medium text-gray-900">Fiyat</span>
                <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.price && (
                <div className="mt-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>₺{priceRange[0]}</span>
                    <span>₺{priceRange[1]}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(priceRange[1] / 1000) * 100}%, #E5E7EB ${(priceRange[1] / 1000) * 100}%, #E5E7EB 100%)`
                      }}
                    />
                    <style jsx>{`
                      input[type="range"]::-webkit-slider-thumb {
                        appearance: none;
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: #3B82F6;
                        cursor: pointer;
                        border: 2px solid white;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                      }
                      input[type="range"]::-moz-range-thumb {
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: #3B82F6;
                        cursor: pointer;
                        border: 2px solid white;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                      }
                    `}</style>
                  </div>
                </div>
              )}
            </div>

            {/* Size Filter */}
            <div className="mb-4">
              <button 
                onClick={() => toggleSection('size')}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <span className="font-medium text-gray-900">Beden</span>
                <svg className={`w-5 h-5 text-orange-500 transition-transform ${expandedSections.size ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.size && (
                <div className="mt-2 space-y-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <label key={size} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleSizeToggle(size)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className={`ml-2 text-sm ${selectedSizes.includes(size) ? 'text-blue-600 font-medium' : 'text-gray-700'}`}>
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
              <button 
                onClick={() => toggleSection('rating')}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <span className="font-medium text-gray-900">Yıldız</span>
                <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.rating && (
                <div className="mt-2 space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reviewsWithPhotos}
                      onChange={(e) => setReviewsWithPhotos(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <svg className="ml-2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-700">Fotoğraflı Yorumlar</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Apply Filters Button */}
          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Filtreleri Uygula
            </button>
          </div>
        </div>
      </div>

      {/* Overlay - Only for mobile */}
      {isFilterOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}

      <Footer />
    </div>
  );
};

export default Category;

