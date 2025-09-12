import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - gerçek ürünlerle eşleşen veriler
  const products = {
    1: {
      id: 1,
      name: 'Modern Masa Lambası',
      price: 189,
      originalPrice: 249,
      discount: 24,
      brand: 'IKEA',
      rating: 4.7,
      reviewCount: 45,
      description: 'Modern tasarım masa lambası, çalışma masanızı aydınlatmak için mükemmel. LED teknolojisi ile enerji tasarrufu sağlar ve uzun ömürlüdür.',
      colors: ['Beyaz', 'Siyah', 'Gri'],
      sizes: ['Standart'],
      features: [
        'LED teknolojisi',
        'Enerji tasarrufu',
        'Uzun ömürlü',
        'Modern tasarım',
        'Kolay montaj'
      ],
      images: [
        'https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center'
      ],
      specifications: {
        'Güç': '9W LED',
        'Renk Sıcaklığı': '3000K',
        'Boyutlar': '25x25x45 cm',
        'Malzeme': 'Metal + Plastik',
        'Garanti': '2 Yıl'
      }
    },
    2: {
      id: 2,
      name: 'Tasarımcı Deri Çanta',
      price: 459,
      originalPrice: 599,
      discount: 23,
      brand: 'MounBag',
      rating: 4.8,
      reviewCount: 127,
      description: 'Premium deri malzemeden üretilmiş tasarımcı çanta. Günlük kullanım için ideal, şık ve fonksiyonel tasarım.',
      colors: ['Kahverengi', 'Siyah', 'Beyaz'],
      sizes: ['M', 'L'],
    features: [
        'Premium deri',
        'Çok bölmeli',
        'Su geçirmez',
        'Kolay temizlik',
        'Uzun ömürlü'
    ],
    images: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop&crop=center'
      ],
      specifications: {
        'Malzeme': 'Gerçek Deri',
        'Boyutlar': '35x25x15 cm',
        'Ağırlık': '800g',
        'Renk': 'Kahverengi',
        'Garanti': '1 Yıl'
      }
    },
    3: {
      id: 3,
      name: 'Premium T-Shirt',
      price: 89,
      originalPrice: 129,
      discount: 31,
      brand: 'CottonCo',
      rating: 4.6,
      reviewCount: 89,
      description: 'Premium pamuk malzemeden üretilmiş konforlu t-shirt. Günlük kullanım için ideal, nefes alabilir ve yumuşak.',
      colors: ['Beyaz', 'Siyah', 'Gri', 'Mavi'],
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Premium pamuk',
        'Nefes alabilir',
        'Yumuşak dokuma',
        'Çekmez',
        'Kolay bakım'
      ],
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1503341338985-95b4d1b3c8c5?w=600&h=600&fit=crop&crop=center'
      ],
      specifications: {
        'Malzeme': '100% Pamuk',
        'Boyutlar': 'M: 50x70 cm',
        'Ağırlık': '180g',
        'Renk': 'Beyaz',
        'Garanti': '6 Ay'
      }
    },
    4: {
      id: 4,
      name: 'Spor Ayakkabı',
      price: 299,
      originalPrice: 399,
      discount: 25,
      brand: 'SportMax',
      rating: 4.9,
      reviewCount: 156,
      description: 'Hafif ve konforlu spor ayakkabı. Koşu ve günlük kullanım için ideal, nefes alabilir ve dayanıklı.',
      colors: ['Beyaz', 'Siyah', 'Mavi', 'Kırmızı'],
      sizes: ['38', '39', '40', '41', '42', '43'],
      features: [
        'Hafif malzeme',
        'Nefes alabilir',
        'Kaymaz taban',
        'Konforlu',
        'Dayanıklı'
      ],
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop&crop=center'
      ],
      specifications: {
        'Malzeme': 'Sentetik + Mesh',
        'Boyutlar': '42 numara',
        'Ağırlık': '280g',
        'Renk': 'Beyaz',
        'Garanti': '1 Yıl'
      }
    },
    5: {
      id: 5,
      name: 'Anti-Aging Krem',
      price: 199,
      originalPrice: 279,
      discount: 29,
      brand: 'BeautyCare',
      rating: 4.5,
      reviewCount: 67,
      description: 'Yaşlanma karşıtı etkili krem. Cildi nemlendirir, kırışıklıkları azaltır ve genç görünüm sağlar.',
      colors: ['Doğal'],
      sizes: ['50ml'],
      features: [
        'Anti-aging',
        'Nemlendirici',
        'Kırışık azaltıcı',
        'Doğal içerik',
        'Hipoalerjenik'
      ],
      images: [
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&crop=center'
      ],
      specifications: {
        'Hacim': '50ml',
        'Tip': 'Günlük Krem',
        'Cilt Tipi': 'Tüm Ciltler',
        'SPF': 'Yok',
        'Garanti': '6 Ay'
      }
    },
    6: {
      id: 6,
      name: 'Bluetooth Kulaklık',
      price: 149,
      originalPrice: 199,
      discount: 25,
      brand: 'SoundTech',
      rating: 4.8,
      reviewCount: 203,
      description: 'Kablosuz Bluetooth kulaklık. Yüksek ses kalitesi, uzun pil ömrü ve konforlu tasarım.',
      colors: ['Siyah', 'Beyaz', 'Mavi'],
      sizes: ['Standart'],
      features: [
        'Bluetooth 5.0',
        'Uzun pil ömrü',
        'Su geçirmez',
        'Gürültü engelleme',
        'Konforlu'
      ],
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop&crop=center'
      ],
      specifications: {
        'Bağlantı': 'Bluetooth 5.0',
        'Pil Ömrü': '8 saat',
        'Şarj': 'USB-C',
        'Su Dayanıklılığı': 'IPX4',
        'Garanti': '1 Yıl'
      }
    }
  };

  const product = products[id] || products[1];

  // Client-side kontrolü
  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (typeof window === 'undefined') return;
    
    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity
    };
    
    const savedCart = localStorage.getItem('cartItems');
    let cartItems = savedCart ? JSON.parse(savedCart) : [];
    
    const existingItem = cartItems.find(item => 
      item.id === product.id && 
      item.selectedColor === selectedColor && 
      item.selectedSize === selectedSize
    );
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push(cartItem);
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: newCount }));
    
    alert(`${product.name} sepete eklendi!`);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    alert(`${product.name} ${isWishlisted ? 'favorilerden çıkarıldı' : 'favorilere eklendi'}!`);
  };

  const similarProducts = [
    { id: 1, name: 'Modern Masa Lambası', price: 189, image: 'https://images.unsplash.com/photo-1506629905687-4ac5ac2143ce?w=300&h=300&fit=crop&crop=center' },
    { id: 2, name: 'Tasarımcı Deri Çanta', price: 459, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center' },
    { id: 3, name: 'Premium T-Shirt', price: 89, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center' },
    { id: 4, name: 'Spor Ayakkabı', price: 299, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center' },
    { id: 5, name: 'Anti-Aging Krem', price: 199, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop&crop=center' },
    { id: 6, name: 'Bluetooth Kulaklık', price: 149, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center' }
  ];

  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            <Link href="/category" className="hover:text-blue-600">Kategoriler</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            <span className="text-gray-900">{product.name}</span>
              </div>
            </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer border-2 transition-colors ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
            </div>
              ))}
        </div>
      </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Brand & Rating */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-medium">{product.brand}</span>
              <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                ))}
              </div>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviewCount} değerlendirme)</span>
            </div>
          </div>

              {/* Product Name */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-blue-600">₺{product.price}</span>
                <span className="text-xl text-gray-500 line-through">₺{product.originalPrice}</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
                  -{product.discount}%
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 1 && (
              <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Renk</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                      <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                          selectedColor === color
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                  ))}
                </div>
              </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 1 && (
              <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Beden</h3>
                  <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                      <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                      </button>
                  ))}
                </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Miktar</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Sepete Ekle
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className={`w-12 h-12 border rounded-lg flex items-center justify-center transition-colors ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Özellikler</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Teknik Özellikler</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
                    </div>
                  </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kargo Bilgileri</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>₺500 üzeri ücretsiz kargo</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30 gün iade garantisi</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Güvenli ödeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benzer Ürünler</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {similarProducts.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">₺{item.price}</span>
                      <div className="flex space-x-1">
                        <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                        </button>
                        <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                        </button>
                    </div>
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

export default ProductDetail;
