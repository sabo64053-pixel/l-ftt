import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="bg-white shadow-sm">
      {/* Top Utility Bar - Hidden on mobile */}
      <div className="hidden sm:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 space-x-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-blue-700 transition-colors">
              About Us
            </Link>
            <Link href="/help" className="hover:text-blue-700 transition-colors">
              Help Center
            </Link>
            <Link href="/contact" className="hover:text-blue-700 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="py-2 sm:py-4 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl sm:text-3xl font-bold text-blue-900">
                <span>LIFT•PICK</span>
                <span className="ml-2 sm:ml-3 text-blue-900">升取</span>
              </Link>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
              {/* Desktop User Actions */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Account */}
                <Link href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium">Misafir</span>
                </Link>

                {/* Favorites */}
                <Link href="/favorites" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm font-medium">Favoriler</span>
                </Link>

                {/* Cart */}
                <Link href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="relative">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium">Sepetim</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar - Desktop Only */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-4">
            <Link href="/category" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
              All Categories
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="/category?cat=clothing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Clothing
            </Link>
            <Link href="/category?cat=shoes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Shoes
            </Link>
            <Link href="/category?cat=makeup" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Makeup
            </Link>
            <Link href="/category?cat=home-decor" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home Decor
            </Link>
          </div>
        </div>
      </div>
      {isCategoryMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/category" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              All Categories
            </Link>
            <Link 
              href="/category?cat=clothing" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Clothing
            </Link>
            <Link 
              href="/category?cat=shoes" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Shoes
            </Link>
            <Link 
              href="/category?cat=makeup" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Makeup
            </Link>
            <Link 
              href="/category?cat=home-decor" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Home Decor
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu - Sağdan açılır overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-black bg-opacity-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-blue-600">LIFT•PICK</h2>
              </div>
              <div
              onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Link href="/profile" className="flex items-center text-gray-700 py-3 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-lg font-medium">Hesabım</span>
                  </Link>
                  <Link href="/favorites" className="flex items-center text-gray-700 py-3 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-lg font-medium">Favoriler</span>
                  </Link>
                  <Link href="/orders" className="flex items-center text-gray-700 py-3 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-lg font-medium">Siparişlerim</span>
                  </Link>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Kategoriler</h3>
                  <div className="space-y-3">
                    <Link href="/category" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      Tüm Kategoriler
                    </Link>
                    <Link href="/category?cat=clothing" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Giyim
                    </Link>
                    <Link href="/category?cat=shoes" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Ayakkabı
            </Link>
                    <Link href="/category?cat=makeup" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                      Kozmetik
            </Link>
                    <Link href="/category?cat=home-decor" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Ev Dekorasyonu
            </Link>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Yardım & İletişim</h3>
                  <div className="space-y-3">
                    <Link href="/help" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Yardım</span>
            </Link>
                    <Link href="/contact" className="flex items-center text-gray-700 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>İletişim</span>
            </Link>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Çıkış Yap</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add bottom padding for mobile to account for bottom navigation */}
      <div className="md:hidden pb-20"></div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 transition-transform duration-300 z-40 ${isMobileMenuOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="flex items-center justify-around py-2">
          {/* Anasayfa */}
          <Link href="/" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs text-gray-600">Anasayfa</span>
          </Link>

          {/* Kategoriler */}
          <Link href="/category" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs text-gray-600">Kategoriler</span>
          </Link>

          {/* Favorilerim */}
          <Link href="/favorites" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs text-gray-600">Favorilerim</span>
          </Link>

          {/* Sepetim */}
          <Link href="/cart" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-600">Sepetim</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
