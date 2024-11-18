import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { refreshAccessToken } from '../utils/auth'; // Import the refresh token function

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check if the user is authenticated by checking the access token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
      fetchUserData(token); // Fetch user data if the token exists
    }
  }, []);

  // Fetch user data using the access token
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/user/data', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
    } catch (error) {
      // If the access token is expired (401), attempt to refresh it
      if (error.response && error.response.status === 401) {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);
          setIsAuthenticated(true);
          fetchUserData(newAccessToken); // Fetch user data with new access token
        } else {
          setIsAuthenticated(false); // If refresh fails, log out the user
        }
      }
    }
  };

  // Login function to store access and refresh tokens
  const login = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken); // Store refresh token securely
    setIsAuthenticated(true);
    fetchUserData(accessToken); // Fetch user data after login
  };

  // Logout function to remove both tokens from localStorage
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken'); // Also remove the refresh token
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
