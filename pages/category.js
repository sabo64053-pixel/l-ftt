import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
  const [expandedFilters, setExpandedFilters] = useState({
    priceRange: false,
    colors: false,
    sizes: false,
    brands: false
  });

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

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
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
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold text-gray-900">Kategoriler</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{filteredProducts.length} ürün bulundu</span>
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filtrele</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
              <span>Sıradan bir ürün</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Layout: Sidebar + Products */}
        <div className="hidden md:flex gap-6">
          {/* Left Sidebar - Filters */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-6 h-fit">
            {/* Sort By Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer" onClick={() => toggleFilter('sortBy')}>
                <span className="text-gray-700 font-medium">Göre sırala</span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedFilters.sortBy ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {expandedFilters.sortBy && (
                <div className="mt-3 space-y-2">
                  <div className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">En Yeni</div>
                  <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">En Popüler</div>
                  <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">Fiyat: Düşükten Yükseğe</div>
                  <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">Fiyat: Yüksekten Düşüğe</div>
                  <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">En Yüksek Puanlı</div>
                </div>
              )}
            </div>

            {/* Filters Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Filtreler</h3>
                <button className="text-sm text-gray-500 hover:text-gray-700">Temizle</button>
              </div>
              
              {/* Price Range */}
              <div className="mb-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer" onClick={() => toggleFilter('priceRange')}>
                  <span className="text-gray-700 font-medium">Fiyat Aralığı</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedFilters.priceRange ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {expandedFilters.priceRange && (
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center space-x-2">
                      <input type="number" placeholder="Min" className="w-20 px-2 py-1 border border-gray-300 rounded text-sm" />
                      <span className="text-gray-500">-</span>
                      <input type="number" placeholder="Max" className="w-20 px-2 py-1 border border-gray-300 rounded text-sm" />
                      <span className="text-gray-500">₺</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Colors */}
              <div className="mb-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer" onClick={() => toggleFilter('colors')}>
                  <span className="text-gray-700 font-medium">Renkler</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedFilters.colors ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {expandedFilters.colors && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <span className="text-sm">Siyah</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-4 h-4 bg-white border border-gray-300 rounded-full"></div>
                      <span className="text-sm">Beyaz</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-sm">Gri</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-4 h-4 bg-yellow-200 rounded-full"></div>
                      <span className="text-sm">Bej</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Mavi</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Yeşil</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Sizes */}
              <div className="mb-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer" onClick={() => toggleFilter('sizes')}>
                  <span className="text-gray-700 font-medium">Boyutlar</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedFilters.sizes ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {expandedFilters.sizes && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-center">XS</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-center">S</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-center">M</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-center">L</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-center">XL</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-center">XXL</div>
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="mb-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer" onClick={() => toggleFilter('brands')}>
                  <span className="text-gray-700 font-medium">Markalar</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedFilters.brands ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {expandedFilters.brands && (
                  <div className="mt-3 space-y-2">
                    <div className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">Tümü</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">Zara</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">Mango</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">Bershka</div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">Nike</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Side - Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6">

              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="block group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* Heart Icon - Favorite */}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    {/* Cart Icon - Add to Cart */}
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </button>
                    {/* Carousel Dots */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-blue-600">₺{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">₺{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Layout: Simple Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="block group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Heart Icon - Favorite */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  {/* Cart Icon - Add to Cart */}
                  <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </button>
                  {/* Carousel Dots */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₺{product.originalPrice}</span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;

