import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Designer Handbag',
      price: 459,
      originalPrice: 699,
      quantity: 1,
      color: 'Siyah',
      size: 'M',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=center',
      inStock: true
    },
    {
      id: 2,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      quantity: 2,
      color: 'Beyaz',
      size: '50ml',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop&crop=center',
      inStock: true
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 89,
      originalPrice: 129,
      quantity: 1,
      color: 'Beyaz',
      size: 'Standart',
      image: 'https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=200&h=200&fit=crop&crop=center',
      inStock: false
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.trim() === 'SAVE20') {
      setCouponApplied(true);
      setCouponDiscount(0.20); // 20% discount
    } else {
      alert('Geçersiz kupon kodu!');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 29.99; // Free shipping over 500 TL
  const discount = subtotal * couponDiscount;
  const total = subtotal + shipping - discount;

  const saveForLater = (id) => {
    // Save for later functionality
    console.log('Saved for later:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alışveriş Sepeti</h1>
          <p className="text-gray-600">{cartItems.length} ürün sepetinizde</p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sepetiniz Boş</h2>
            <p className="text-gray-600 mb-8">Alışverişe başlamak için ürünlerimize göz atın.</p>
            <Link 
              href="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Alışverişe Başla
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.image || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=center'}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                              Renk: {item.color}
                            </span>
                            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                              Beden: {item.size}
                            </span>
                          </div>
                          
                          {!item.inStock && (
                            <div className="mb-3">
                              <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded">
                                Stokta Yok
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Price and Actions */}
                        <div className="flex flex-col items-end space-y-3">
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-blue-600">₺{item.price}</span>
                              {item.originalPrice > item.price && (
                                <span className="text-sm text-gray-500 line-through">₺{item.originalPrice}</span>
                              )}
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-2">
                            <button
                              onClick={() => saveForLater(item.id)}
                              className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1 rounded border border-gray-300 hover:bg-gray-50"
                            >
                              Daha Sonra
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-600 hover:text-red-800 px-3 py-1 rounded border border-red-300 hover:bg-red-50"
                            >
                              Kaldır
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Sipariş Özeti</h2>
                
                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kupon Kodu
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="SAVE20"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={applyCoupon}
                      disabled={couponApplied}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
                    >
                      {couponApplied ? 'Uygulandı' : 'Uygula'}
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-sm text-green-600 mt-2">%20 indirim uygulandı!</p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Ara Toplam</span>
                    <span>₺{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Kargo</span>
                    <span className={shipping === 0 ? 'text-green-600' : ''}>
                      {shipping === 0 ? 'Ücretsiz' : `₺${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>İndirim</span>
                      <span>-₺{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Toplam</span>
                      <span>₺{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 text-lg mb-4">
                  Ödemeye Geç
                </button>

                {/* Continue Shopping */}
                <Link 
                  href="/products"
                  className="block w-full text-center text-blue-600 hover:text-blue-700 font-medium py-3 border border-blue-600 rounded-xl transition-colors duration-300"
                >
                  Alışverişe Devam Et
                </Link>

                {/* Shipping Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-blue-800">
                      {shipping === 0 ? '₺500 üzeri ücretsiz kargo!' : '₺500 üzeri ücretsiz kargo için ₺' + (500 - subtotal).toFixed(2) + ' daha harcayın'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
