import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

const Home = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const handleReviewProduct = (productId) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Product data for the featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 89,
      originalPrice: 129,
      discount: 31,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'CottonCo',
      colors: ['Beyaz', 'Siyah'],
      sizes: ['S', 'M', 'L']
    },
    {
      id: 2,
      name: 'Sport Running Shoes',
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.4,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center',
      category: 'shoes',
      brand: 'SportMax',
      colors: ['Beyaz', 'Siyah'],
      sizes: ['38', '39', '40', '41', '42']
    },
    {
      id: 3,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      discount: 37,
      rating: 4.5,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
      category: 'makeup',
      brand: 'BeautyCare',
      colors: ['Doğal'],
      sizes: ['50ml']
    },
    {
      id: 4,
      name: 'Modern Table Lamp',
      price: 189,
      originalPrice: 249,
      discount: 24,
      rating: 4.7,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=400&h=400&fit=crop&crop=center',
      category: 'home-decor',
      brand: 'IKEA',
      colors: ['Beyaz', 'Siyah'],
      sizes: ['Standart']
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section - Elegant Home Decor with Purple Filter */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center overflow-hidden">
        {/* Background Image - Modern Living Room */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop&crop=center"
              alt="Elegant Home Decor"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        
        {/* Purple Filter Overlay - Soft Elegant Purple */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-purple-400/25 to-purple-300/20 z-10"></div>
        
        {/* Content - Left aligned like the image */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl lg:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight drop-shadow-lg">
              Elegant Home Decor
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white leading-relaxed opacity-95 drop-shadow-md max-w-lg">
              Transform your space with our exclusive collection of luxury home decor and designer furniture pieces.
            </p>
            <Link href="/shop/home-decor" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl inline-flex items-center gap-2 transform hover:scale-105">
              Explore More &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories - Responsive padding and grid */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8 space-y-4 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800">Öne Çıkan Kategoriler</h2>
            <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              Tümünü Gör &gt;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Category Card 1: Clothing */}
            <Link href="/category/clothing" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center"
                    alt="Clothing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Clothing</h3>
                </div>
              </div>
            </Link>

            {/* Category Card 2: Shoes */}
            <Link href="/category/shoes" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center"
                    alt="Shoes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Shoes</h3>
                </div>
              </div>
            </Link>

            {/* Category Card 3: Makeup */}
            <Link href="/category/makeup" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center"
                    alt="Makeup"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Makeup</h3>
                </div>
              </div>
            </Link>

            {/* Category Card 4: Home Decor */}
            <Link href="/category/home-decor" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
                    alt="Home Decor"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Home Decor</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Responsive grid and spacing */}
      <section className="bg-gray-50 py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8 space-y-4 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800">Öne Çıkan Ürünler</h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              Tümünü Gör &gt;
            </Link>
          </div>
          {/* Mobile: 2 columns grid, Desktop: horizontal scroll */}
          <div className="relative md:h-[450px]">
            <div className="grid grid-cols-2 md:flex md:overflow-x-auto md:gap-6 md:pb-4 hide-scrollbar" ref={scrollContainerRef}>
            {/* Product Card 1 - Designer Leather Handbag */}
            <Link href="/product/1" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center"
                    alt="Designer Leather Handbag"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Designer Leather Handbag</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$459</span>
                    <span className="text-sm text-gray-500 line-through">$599</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 2 - Luxury Face Cream */}
            <Link href="/product/2" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center"
                    alt="Luxury Face Cream"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Luxury Face Cream</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$125</span>
                    <span className="text-sm text-gray-500 line-through">$599</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 3 - Modern Table Lamp */}
            <Link href="/product/3" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=400&h=400&fit=crop&crop=center"
                    alt="Modern Table Lamp"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Modern Table Lamp</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$459</span>
                    <span className="text-sm text-gray-500 line-through">$599</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 4 - Premium Skincare Set */}
            <Link href="/product/4" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center"
                    alt="Premium Skincare Set"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Premium Skincare Set</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$459</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 5 - Designer Leather Handbag */}
            <Link href="/product/5" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center"
                    alt="Designer Leather Handbag"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Designer Leather Handbag</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$459</span>
                    <span className="text-sm text-gray-500 line-through">$599</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 6 - Luxury Face Cream */}
            <Link href="/product/6" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center"
                    alt="Luxury Face Cream"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Luxury Face Cream</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$125</span>
                    <span className="text-sm text-gray-500 line-through">$599</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 7 - Modern Table Lamp */}
            <Link href="/product/7" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=400&h=400&fit=crop&crop=center"
                    alt="Modern Table Lamp"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Modern Table Lamp</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$459</span>
                    <span className="text-sm text-gray-500 line-through">$599</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 8 - Premium Skincare Set */}
            <Link href="/product/8" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center"
                    alt="Premium Skincare Set"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Premium Skincare Set</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">$459</span>
                  </div>
                </div>
              </div>
            </Link>

            </div>

          {/* Left Navigation Button - Desktop Only */}
          <button
            onClick={scrollLeft}
            className="hidden md:block absolute left-0 top-[225px] transform -translate-y-1/2 z-20 bg-white rounded-full shadow-lg hover:shadow-xl p-4 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Button - Desktop Only */}
          <button
            onClick={scrollRight}
            className="hidden md:block absolute right-0 top-[225px] transform -translate-y-1/2 z-20 bg-white rounded-full shadow-lg hover:shadow-xl p-4 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      </section>

      {/* New Products - Horizontal Scroll */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8 space-y-4 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800">Yeni Ürünler</h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              Tümünü Gör &gt;
            </Link>
          </div>
          {/* Mobile: 2 columns grid, Desktop: horizontal scroll */}
          <div className="relative md:h-[450px]">
            <div className="grid grid-cols-2 md:flex md:overflow-x-auto md:gap-6 md:pb-4 hide-scrollbar" ref={scrollContainerRef}>
            {/* Product Card 1 - Wireless Headphones */}
            <Link href="/product/9" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center"
                    alt="Wireless Headphones"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Wireless Headphones</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺299</span>
                    <span className="text-sm text-gray-500 line-through">₺399</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 2 - Smart Watch */}
            <Link href="/product/10" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center"
                    alt="Smart Watch"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Smart Watch</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺599</span>
                    <span className="text-sm text-gray-500 line-through">₺799</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 3 - Gaming Mouse */}
            <Link href="/product/11" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center"
                    alt="Gaming Mouse"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Gaming Mouse</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺199</span>
                    <span className="text-sm text-gray-500 line-through">₺299</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 4 - Bluetooth Speaker */}
            <Link href="/product/12" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center"
                    alt="Bluetooth Speaker"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Bluetooth Speaker</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺149</span>
                    <span className="text-sm text-gray-500 line-through">₺199</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 5 - Wireless Earbuds */}
            <Link href="/product/13" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center"
                    alt="Wireless Earbuds"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Wireless Earbuds</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺249</span>
                    <span className="text-sm text-gray-500 line-through">₺349</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Card 6 - Mechanical Keyboard */}
            <Link href="/product/14" className="block group md:w-[300px] md:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&crop=center"
                    alt="Mechanical Keyboard"
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
                  <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">Mechanical Keyboard</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">₺399</span>
                    <span className="text-sm text-gray-500 line-through">₺599</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* Left Navigation Button - Desktop Only */}
          <button
            onClick={scrollLeft}
            className="hidden md:block absolute left-0 top-[225px] transform -translate-y-1/2 z-20 bg-white rounded-full shadow-lg hover:shadow-xl p-4 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Button - Desktop Only */}
          <button
            onClick={scrollRight}
            className="hidden md:block absolute right-0 top-[225px] transform -translate-y-1/2 z-20 bg-white rounded-full shadow-lg hover:shadow-xl p-4 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </div>
        </div>
      </section>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center space-x-2">
          <span>Show More</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Service Benefits - Figma Design */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1: 30-Day Returns */}
            <div className="bg-[#F8F8FC] rounded-lg p-4 sm:p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#2A2A5A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2A2A5A] mb-2">30-Day Returns</h3>
              <p className="text-[#2A2A5A] text-sm opacity-80">Hassle-free returns</p>
            </div>

            {/* Service 2: Secure Payments */}
            <div className="bg-[#F8F8FC] rounded-lg p-4 sm:p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#2A2A5A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2A2A5A] mb-2">Secure Payments</h3>
              <p className="text-[#2A2A5A] text-sm opacity-80">SSL encrypted checkout</p>
            </div>

            {/* Service 3: 24/7 Support */}
            <div className="bg-[#F8F8FC] rounded-lg p-4 sm:p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#2A2A5A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2A2A5A] mb-2">24/7 Support</h3>
              <p className="text-[#2A2A5A] text-sm opacity-80">Expert customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Figma Design */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2A2A5A] mb-4">Join Our Community</h2>
            <p className="text-[#2A2A5A] text-sm sm:text-base mb-6 opacity-80">
              Be the first to discover new collections and receive exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5BCC] focus:border-[#6B5BCC] text-gray-900 placeholder-gray-500 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#6B5BCC] hover:bg-[#5A4BB8] text-white font-semibold rounded-lg transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;



