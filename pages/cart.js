import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const router = useRouter();
  const { cartItems, setCartItems, removeFromCart } = useCart();
  
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Eğer sepet boşsa test verileri ekle
  useEffect(() => {
    if (cartItems.length === 0) {
      const testItems = [
        {
          id: 1,
          name: 'Premium Leather Armchair',
          price: 1299,
          originalPrice: 1599,
          color: 'Brown Leather',
          size: 'Standard',
          quantity: 1,
          inStock: true,
          imageType: 'chair',
          imageColor: 'brown',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center'
        },
        {
          id: 2,
          name: 'Premium Leather Armchair',
          price: 1299,
          originalPrice: 1599,
          color: 'Brown Leather',
          size: 'Standard',
          quantity: 1,
          inStock: true,
          imageType: 'chair',
          imageColor: 'brown',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center'
        },
        {
          id: 3,
          name: 'Premium Leather Armchair',
          price: 1299,
          originalPrice: 1599,
          color: 'Brown Leather',
          size: 'Standard',
          quantity: 1,
          inStock: true,
          imageType: 'chair',
          imageColor: 'brown',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center'
        }
      ];
      setCartItems(testItems);
    }
  }, [cartItems.length, setCartItems]);

  // Function to render product image based on type and color
  const renderProductImage = (item) => {
    // Eğer item'da image varsa onu kullan
    if (item.image) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    // Fallback olarak icon göster
    const colorMap = {
      purple: 'from-purple-100 to-purple-200',
      pink: 'from-pink-100 to-pink-200',
      yellow: 'from-yellow-100 to-yellow-200',
      blue: 'from-blue-100 to-blue-200',
      green: 'from-green-100 to-green-200',
      red: 'from-red-100 to-red-200',
      gray: 'from-gray-100 to-gray-200',
      orange: 'from-orange-100 to-orange-200',
      brown: 'from-amber-100 to-amber-200'
    };

    const iconMap = {
      handbag: {
        icon: (
          <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
        text: 'Handbag'
      },
      cosmetic: {
        icon: (
          <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        ),
        text: 'Cream'
      },
      lamp: {
        icon: (
          <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        text: 'Lamp'
      },
      chair: {
        icon: (
          <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
        text: 'Chair'
      }
    };

    const colorClass = colorMap[item.imageColor] || 'from-gray-100 to-gray-200';
    const iconData = iconMap[item.imageType] || {
      icon: (
        <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: 'Product'
    };

    return (
      <div className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center rounded-lg`}>
        <div className="text-center text-gray-700">
          {iconData.icon}
          <p className="text-xs font-medium">{iconData.text}</p>
        </div>
      </div>
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    // CartContext'teki setCartItems'i kullan
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      
      // Local storage'a kaydet
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeItem = (id) => {
    removeFromCart(id);
  };

  const saveForLater = (id) => {
    // This would typically save to a "saved items" list
    // For now, just remove from cart
    removeItem(id);
  };

  const applyCoupon = () => {
    if (couponCode.trim() === '') return;
    
    if (couponCode.toUpperCase() === 'SAVE20') {
      setCouponApplied(true);
      setCouponDiscount(20);
      setCouponCode('');
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setCouponApplied(true);
      setCouponDiscount(29.99); // Free shipping
      setCouponCode('');
    } else {
      alert('Invalid coupon code. Try SAVE20 or FREESHIP');
      setCouponCode('');
    }
  };

  const clearCoupon = () => {
    setCouponApplied(false);
    setCouponDiscount(0);
  };

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add some items before checkout.');
      return;
    }
    
    // Save cart data to localStorage or state management
    const checkoutData = {
      items: cartItems,
      subtotal: subtotal,
      shipping: shipping,
      discount: couponDiscount,
      total: total,
      couponCode: couponApplied ? (couponCode || 'SAVE20') : null
    };
    
    // Store checkout data in localStorage
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    
    // Navigate to checkout page
    router.push('/shipping-address');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 29.99;
  const total = subtotal + shipping - couponDiscount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
            <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Cart Items ({cartItems.length})</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-16 h-16 flex-shrink-0">
                        {renderProductImage(item)}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">{item.name}</h3>
                            <div className="flex items-center space-x-3 text-xs text-gray-600 mb-1">
                              <span>Color: {item.color}</span>
                              <span>Size: {item.size}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-base font-bold text-blue-600">${item.price}</span>
                              {item.originalPrice > item.price && (
                                <span className="text-xs text-gray-500 line-through">${item.originalPrice}</span>
                              )}
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </button>
                              <span className="w-12 text-center font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                disabled={!item.inStock}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </button>
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                              {!item.inStock && (
                                <span className="text-sm text-red-600">Out of Stock</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4 mt-4">
                          <button
                            onClick={() => saveForLater(item.id)}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                          >
                            Save for Later
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && applyCoupon()}
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-green-600">Coupon applied!</p>
                    <button
                      onClick={clearCoupon}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-2">Try: SAVE20 or FREESHIP</p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={proceedToCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <div className="text-center mt-4">
                <Link href="/products" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

