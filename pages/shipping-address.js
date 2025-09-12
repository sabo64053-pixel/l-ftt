import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShippingAddress = () => {
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [newAddress, setNewAddress] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });

  // Load checkout data from localStorage
  useEffect(() => {
    const savedCheckoutData = localStorage.getItem('checkoutData');
    if (savedCheckoutData) {
      setCheckoutData(JSON.parse(savedCheckoutData));
    } else {
      // Redirect to cart if no checkout data
      router.push('/cart');
    }
  }, [router]);

  const handleNewAddressChange = (field, value) => {
    setNewAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveNewAddress = () => {
    // Validate required fields
    if (!newAddress.firstName || !newAddress.lastName || !newAddress.streetAddress || 
        !newAddress.city || !newAddress.state || !newAddress.zipCode || !newAddress.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Save the new address and proceed to payment
    const orderData = {
      ...checkoutData,
      shippingAddress: newAddress,
      orderDate: new Date().toISOString()
    };

    // Store order data
    localStorage.setItem('orderData', JSON.stringify(orderData));
    
    // Navigate to payment page
    router.push('/payment');
  };

  const handleContinueToPayment = () => {
    // Use selected address and proceed to payment
    const selectedAddressData = selectedAddress === 'home' 
      ? {
          firstName: 'John',
          lastName: 'Doe',
          streetAddress: '123 Main Street, Apt 4B',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          phone: '+1 (555) 123-4567'
        }
      : {
          firstName: 'John',
          lastName: 'Doe',
          streetAddress: '456 Business Ave, Suite 200',
          city: 'New York',
          state: 'NY',
          zipCode: '10002',
          phone: '+1 (555) 987-6543'
        };

    const orderData = {
      ...checkoutData,
      shippingAddress: selectedAddressData,
      orderDate: new Date().toISOString()
    };

    // Store order data
    localStorage.setItem('orderData', JSON.stringify(orderData));
    
    // Navigate to payment page
    router.push('/payment');
  };

  if (!checkoutData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading checkout data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <span className="ml-2 font-semibold text-blue-600">Shipping Address</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="ml-2 font-semibold text-gray-600">Payment Details</span>
            </div>
          </div>
        </div>

        {!showNewAddressForm ? (
          /* Saved Addresses */
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h1 className="text-2xl font-bold text-gray-900">Shipping Address</h1>
              </div>
              <button
                onClick={() => setShowNewAddressForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Address
              </button>
            </div>

            {/* Address Cards */}
            <div className="space-y-4">
              {/* Home Address */}
              <div className={`border-2 rounded-lg p-6 ${selectedAddress === 'home' ? 'border-purple-300 bg-purple-50' : 'border-gray-200 bg-white'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-900">Home</span>
                      <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Default</span>
                    </div>
                    <p className="text-gray-700">John Doe</p>
                    <p className="text-gray-700">123 Main Street, Apt 4B</p>
                    <p className="text-gray-700">New York, NY 10001</p>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <div 
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                        selectedAddress === 'home' 
                          ? 'border-blue-600 bg-blue-600' 
                          : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedAddress('home')}
                    >
                      {selectedAddress === 'home' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className={`border-2 rounded-lg p-6 ${selectedAddress === 'office' ? 'border-purple-300 bg-purple-50' : 'border-gray-200 bg-white'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-900">Office</span>
                    </div>
                    <p className="text-gray-700">John Doe</p>
                    <p className="text-gray-700">456 Business Ave, Suite 200</p>
                    <p className="text-gray-700">New York, NY 10002</p>
                    <p className="text-gray-700">+1 (555) 987-6543</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <div 
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                        selectedAddress === 'office' 
                          ? 'border-blue-600 bg-blue-600' 
                          : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedAddress('office')}
                    >
                      {selectedAddress === 'office' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue to Payment Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleContinueToPayment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors flex items-center mx-auto"
              >
                Continue to Payment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* New Address Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h1 className="text-2xl font-bold text-gray-900">Shipping Address</h1>
                </div>
                <button
                  onClick={() => setShowNewAddressForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Add New Address</h2>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSaveNewAddress(); }} className="space-y-4">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      value={newAddress.firstName}
                      onChange={(e) => handleNewAddressChange('firstName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      type="text"
                      value={newAddress.lastName}
                      onChange={(e) => handleNewAddressChange('lastName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street address</label>
                  <input
                    type="text"
                    value={newAddress.streetAddress}
                    onChange={(e) => handleNewAddressChange('streetAddress', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* City and State */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      value={newAddress.city}
                      onChange={(e) => handleNewAddressChange('city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select State</label>
                    <select
                      value={newAddress.state}
                      onChange={(e) => handleNewAddressChange('state', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      <option value="IL">Illinois</option>
                    </select>
                  </div>
                </div>

                {/* ZIP Code and Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal code</label>
                    <input
                      type="text"
                      value={newAddress.zipCode}
                      onChange={(e) => handleNewAddressChange('zipCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                      type="tel"
                      value={newAddress.phone}
                      onChange={(e) => handleNewAddressChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Save Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Save and Continue to Payment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ShippingAddress;

