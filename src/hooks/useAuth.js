// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock authentication for development
    const mockAuth = () => {
      // You can toggle between roles by changing this value
      const mockUser = {
        id: 1,
        name: 'Admin User',
        role: 'SALES_MANAGER', // set PRODUCT_MANAGER or 'SALES_MANAGER' depending on which one you want to see.
        email: 'admin@example.com'
      };
      
      setUser(mockUser);
      setIsLoading(false);
    };

    mockAuth();
  }, []);

  return { user, isLoading };
};