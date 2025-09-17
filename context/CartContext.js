import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Client-side kontrolü
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Local storage'dan sepet verilerini yükle
  useEffect(() => {
    if (isClient) {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
        setCartCount(parsedCart.reduce((total, item) => total + item.quantity, 0));
      }
    }
  }, [isClient]);

  // Sepete ürün ekleme
  const addToCart = (product) => {
    console.log('Adding product to cart:', product);
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      let newItems;
      if (existingItem) {
        // Ürün zaten sepette varsa miktarını artır
        newItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Yeni ürün ekle
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      
      console.log('New cart items:', newItems);
      
      // Local storage'a kaydet
      if (isClient) {
        localStorage.setItem('cartItems', JSON.stringify(newItems));
      }
      return newItems;
    });
    
    setCartCount(prevCount => {
      const newCount = prevCount + 1;
      console.log('New cart count:', newCount);
      return newCount;
    });
  };

  // Sepetten ürün çıkarma
  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productId);
      let newItems;
      
      if (item && item.quantity > 1) {
        // Miktarı azalt
        newItems = prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Ürünü tamamen çıkar
        newItems = prevItems.filter(item => item.id !== productId);
      }
      
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
    
    setCartCount(prevCount => Math.max(0, prevCount - 1));
  };

  // Sepeti temizle
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem('cartItems');
  };

  // Sepet güncelleme fonksiyonu
  const updateCartItems = (newItems) => {
    // newItems'ın array olduğundan emin ol
    const itemsArray = Array.isArray(newItems) ? newItems : [];
    setCartItems(itemsArray);
    
    // Cart count'u güncelle
    const newCount = itemsArray.reduce((total, item) => total + (item.quantity || 0), 0);
    setCartCount(newCount);
    
    // Local storage'a kaydet
    if (isClient) {
      localStorage.setItem('cartItems', JSON.stringify(itemsArray));
    }
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
    setCartItems: updateCartItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
