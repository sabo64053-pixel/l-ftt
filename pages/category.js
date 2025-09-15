import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Category = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  
  // Filter states
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const handleReviewProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Filter functions
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSortBy('name');
    setPriceRange({ min: 0, max: 1000 });
    setSelectedBrands([]);
    setSelectedCategories([]);
  };

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
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop&crop=center',
      description: 'istediğiniz fotoğraftan canlı renk baskı',
      size: 'A4 Boyutunda 99 Parça',
      brand: 'Hopena Shop',
      category: 'games'
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
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center'
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
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
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
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
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
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
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
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
    }
  ];

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Price filter
    if (product.price < priceRange.min || product.price > priceRange.max) {
      return false;
    }
    
    // Brand filter
    if (selectedBrands.length > 0 && product.brand && !selectedBrands.includes(product.brand)) {
      return false;
    }
    
    // Category filter
    if (selectedCategories.length > 0 && product.category && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return b.discount - a.discount;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Get unique brands and categories
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))];
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Kategoriler</h1>
          <p className="text-gray-600">{filteredProducts.length} ürün bulundu</p>
        </div>

        {/* Minimal Filter Controls */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 relative">
          <div className="flex items-center justify-between">
            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-gray-700 font-medium">Filtrele</span>
            </button>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-200"></div>

            {/* Sort Button */}
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <span className="text-gray-700 font-medium">Önerilen sıralama</span>
            </button>
          </div>

          {/* Filter Panel - Mobile Overlay */}
          {showFilters && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setShowFilters(false)}
              ></div>
              
              {/* Filter Menu */}
              <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">FİLTRELE</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Filter Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-6">
                      {/* Color Filter */}
                      <div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Renk</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Fiyat</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Size Filter */}
                      <div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Beden</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Yıldız</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Photo Reviews Filter */}
                      <div className="flex items-center gap-3 py-3">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-700">Fotoğraflı Yorumlar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-gray-200">
                    <button
                      onClick={clearFilters}
                      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Filtreleri Temizle
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Sort Menu - Right Side Menu */}
          {showSortMenu && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Sıralama Seçenekleri</h3>
                <div className="space-y-2">
                  {[
                    { value: 'name', label: 'İsme Göre' },
                    { value: 'price-low', label: 'Fiyat (Düşük-Yüksek)' },
                    { value: 'price-high', label: 'Fiyat (Yüksek-Düşük)' },
                    { value: 'rating', label: 'Değerlendirme' },
                    { value: 'discount', label: 'İndirim Oranı' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortMenu(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        sortBy === option.value 
                          ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Products Grid */}
        <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
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
                      <span className="text-xs sm:text-sm font-bold text-blue-600">₺ {product.price}</span>
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
                    <div className="space-y-1 sm:space-y-2 mt-auto">
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg transition-colors"
                      >
                        Sepete Ekle
                      </button>
                      <button 
                        onClick={() => handleReviewProduct(product.id)}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg transition-colors"
                      >
                        Ürün İncele
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;

