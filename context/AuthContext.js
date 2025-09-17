import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Client-side kontrolü
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Local storage'dan kullanıcı verilerini yükle
  useEffect(() => {
    if (isClient) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing user data:', error);
          localStorage.removeItem('user');
        }
      }
      setIsLoading(false);
    }
  }, [isClient]);

  // Giriş yapma
  const login = async (email, password) => {
    setIsLoading(true);
    
    try {
      // Basit demo kullanıcıları
      const demoUsers = [
        { id: 1, email: 'admin@liftpick.com', password: 'admin123', name: 'Admin User', role: 'admin' },
        { id: 2, email: 'user@liftpick.com', password: 'user123', name: 'Test User', role: 'user' },
        { id: 3, email: 'test@test.com', password: 'test123', name: 'Demo User', role: 'user' }
      ];

      const foundUser = demoUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          role: foundUser.role,
          loginTime: new Date().toISOString()
        };
        
        setUser(userData);
        if (isClient) {
          localStorage.setItem('user', JSON.stringify(userData));
        }
        setIsLoading(false);
        return { success: true, user: userData };
      } else {
        setIsLoading(false);
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  // Kayıt olma
  const register = async (name, email, password, confirmPassword) => {
    setIsLoading(true);
    
    try {
      // Basit validasyon
      if (password !== confirmPassword) {
        setIsLoading(false);
        return { success: false, error: 'Passwords do not match' };
      }
      
      if (password.length < 6) {
        setIsLoading(false);
        return { success: false, error: 'Password must be at least 6 characters' };
      }

      // Email format kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setIsLoading(false);
        return { success: false, error: 'Invalid email format' };
      }

      // Yeni kullanıcı oluştur
      const newUser = {
        id: Date.now(), // Basit ID
        email: email,
        name: name,
        role: 'user',
        loginTime: new Date().toISOString()
      };
      
      setUser(newUser);
      if (isClient) {
        localStorage.setItem('user', JSON.stringify(newUser));
      }
      setIsLoading(false);
      return { success: true, user: newUser };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Registration failed. Please try again.' };
    }
  };

  // Çıkış yapma
  const logout = () => {
    setUser(null);
    if (isClient) {
      localStorage.removeItem('user');
    }
  };

  // Şifre sıfırlama (demo)
  const resetPassword = async (email) => {
    setIsLoading(true);
    
    try {
      // Demo için her zaman başarılı
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 saniye bekle
      setIsLoading(false);
      return { success: true, message: 'Password reset link sent to your email' };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Password reset failed. Please try again.' };
    }
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    resetPassword,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
