import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderConfirmed = () => {
  const router = useRouter();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const savedOrderData = localStorage.getItem('finalOrderData');
    if (savedOrderData) {
      setOrderData(JSON.parse(savedOrderData));
    }
  }, []);

  const continueShopping = () => {
    router.push('/');
  };

  const trackOrder = () => {
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-2xl font-bold text-green-600 mb-2">Order Confirmed</h1>
            <p className="text-gray-600 mb-8">Your order has been placed and you&apos;ll be receiving a confirmation email shortly.</p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={continueShopping}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
              <button
                onClick={trackOrder}
                className="w-full bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-6 rounded-lg border-2 border-purple-600 transition-colors"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmed;

