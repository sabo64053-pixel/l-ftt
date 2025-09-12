import React from 'react';
import Link from 'next/link';

const OrderConfirmedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        {/* Top Bar */}
        <div className="bg-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>order</span>
              <div className="flex space-x-6">
                <Link href="/about" className="hover:text-gray-800">About Us</Link>
                <Link href="/help" className="hover:text-gray-800">Help Center</Link>
                <Link href="/contact" className="hover:text-gray-800">Contact</Link>
                <span className="cursor-pointer">EN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold text-blue-900">
                LIFT・PICK 升取
              </Link>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-8">
                <Link href="/profile" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm">Account</span>
                </Link>
                <Link href="/favorites" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm">Favorites</span>
                </Link>
                <Link href="/cart" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                  <div className="relative">
                    <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </div>
                  <span className="text-sm">Cart (0)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-4">
              <Link href="/products" className="flex items-center space-x-2 cursor-pointer">
                <span className="text-blue-600 font-medium">All Categories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Clothing</Link>
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Shoes</Link>
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Makeup</Link>
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Home Decor</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center p-4">
        {/* Order Confirmed Card */}
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-green-600 mb-4">Order Confirmed!</h2>

          {/* Message */}
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed and is being processed.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Link href="/products" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Continue Shopping</span>
            </Link>
            <Link href="/profile" className="flex-1 bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM7 14c3.22-2.91 4.29-8.75 5.64-12.68M15 14c3.22-2.91 4.29-8.75 5.64-12.68" />
              </svg>
              <span>Track Order</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-blue-200">About Us</Link></li>
                <li><Link href="/warranty" className="hover:text-blue-200">Warranty Terms</Link></li>
                <li><Link href="/agreement" className="hover:text-blue-200">Distance Selling Agreement</Link></li>
                <li><Link href="/returns" className="hover:text-blue-200">Returns and Exchanges</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-200">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-blue-200">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-blue-200">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-blue-200">Returns</Link></li>
                <li><Link href="/size-guide" className="hover:text-blue-200">Size Guide</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/new-arrivals" className="hover:text-blue-200">New Arrivals</Link></li>
                <li><Link href="/sale" className="hover:text-blue-200">Sale</Link></li>
                <li><Link href="/gift-cards" className="hover:text-blue-200">Gift Cards</Link></li>
                <li><Link href="/wishlist" className="hover:text-blue-200">Wishlist</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm">VISA</span>
                <span className="text-sm">Mastercard</span>
                <span className="text-sm">PayPal</span>
                <span className="text-sm">Apple Pay</span>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 mt-8 text-center text-sm">
            © 2025 LIFT-PICK. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmedPage;



