import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="w-full">
      {/* Hero Section - Responsive height and layout */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[350px] flex items-center overflow-hidden">
        {/* Background Image - Figma Design */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative overflow-hidden">
            {/* Figma Background Image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex items-center justify-center">
              {/* Simple, clean background without decorative elements */}
            </div>
          </div>
        </div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent z-10"></div>
        
        {/* Content - Aligned with navbar */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 leading-tight drop-shadow-sm mt-0">Şık Ev Dekorasyonu</h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed opacity-90 drop-shadow-sm px-4 sm:px-0">
              Lüks ev dekorasyonu ve tasarımcı mobilya parçalarından oluşan özel koleksiyonumuzla mekanınızı dönüştürün.
            </p>
            <Link href="/shop/home-decor" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl inline-flex items-center gap-2 transform hover:scale-105">
              Daha Fazla Keşfet &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories - Responsive padding and grid */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 space-y-4 sm:space-y-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Öne Çıkan Kategoriler</h2>
            <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              Tümünü Gör &gt;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {/* Category Card 1: Clothing */}
            <Link href="/category/clothing" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200">
                <div className="h-32 sm:h-36 md:h-48 flex items-center justify-center p-3 sm:p-4">
                  {/* Clothing Image */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Category Title - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">Clothing</h3>
                </div>
              </div>
            </Link>

            {/* Category Card 2: Shoes */}
            <Link href="/category/shoes" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200">
                <div className="h-32 sm:h-36 md:h-48 flex items-center justify-center p-3 sm:p-4">
                  {/* Shoes Image */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-200 to-green-300 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Category Title - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">Shoes</h3>
                </div>
              </div>
            </Link>

            {/* Category Card 3: Makeup */}
            <Link href="/category/makeup" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200">
                <div className="h-32 sm:h-36 md:h-48 flex items-center justify-center p-3 sm:p-4">
                  {/* Makeup Image */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Category Title - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">Makeup</h3>
                </div>
              </div>
            </Link>

            {/* Category Card 4: Home Decor */}
            <Link href="/category/home-decor" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200">
                <div className="h-32 sm:h-36 md:h-48 flex items-center justify-center p-3 sm:p-4">
                  {/* Home Decor Image */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Category Title - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">Home Decor</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Responsive grid and spacing */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 space-y-4 sm:space-y-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Öne Çıkan Ürünler</h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              Tümünü Gör &gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Product Card 1 - Modern Masa Lambası */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                {/* Shopping Bag Icon */}
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Modern Masa Lambası</p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base leading-tight">Modern Masa<br />Lambası</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">₺ 189</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">₺ 249</span>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-700">4.7 (45)</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors mt-auto">
                  Sepete Ekle
                </button>
              </div>
            </div>

            {/* Product Card 2 - Tasarımcı Deri Çanta */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                {/* Shopping Bag Icon */}
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Tasarımcı Deri Çanta</p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base leading-tight">Tasarımcı Deri Çanta</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">₺ 459</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">₺ 599</span>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-700">4.8 (127)</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors mt-auto">
                  Sepete Ekle
                </button>
              </div>
            </div>

            {/* Product Card 3 - Additional Product */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                {/* Shopping Bag Icon */}
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Premium Ürün</p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base leading-tight">Premium Ürün<br />Koleksiyonu</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">₺ 299</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">₺ 399</span>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-700">4.6 (89)</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors mt-auto">
                  Sepete Ekle
                </button>
              </div>
            </div>

            {/* Product Card 4 - Additional Product */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                {/* Shopping Bag Icon */}
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Tasarım Ürünü</p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base leading-tight">Tasarım Ürünü<br />Koleksiyonu</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">₺ 159</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">₺ 219</span>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-700">4.5 (67)</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors mt-auto">
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits - Figma Design */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1: 30-Day Returns */}
            <div className="bg-[#F8F8FC] rounded-lg p-6 sm:p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#2A2A5A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2A2A5A] mb-2">30-Day Returns</h3>
              <p className="text-[#2A2A5A] text-sm opacity-80">Hassle-free returns</p>
            </div>

            {/* Service 2: Secure Payments */}
            <div className="bg-[#F8F8FC] rounded-lg p-6 sm:p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#2A2A5A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2A2A5A] mb-2">Secure Payments</h3>
              <p className="text-[#2A2A5A] text-sm opacity-80">SSL encrypted checkout</p>
            </div>

            {/* Service 3: 24/7 Support */}
            <div className="bg-[#F8F8FC] rounded-lg p-6 sm:p-8 text-center shadow-sm">
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
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A5A] mb-4">Join Our Community</h2>
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



