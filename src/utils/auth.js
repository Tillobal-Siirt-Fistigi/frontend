// utils/auth.js

import axios from 'axios';

// Function to refresh the access token using the refresh token
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  
  if (!refreshToken) {
    // If there's no refresh token, we cannot refresh the access token
    return null;
  }

  try {
    // Send refresh token to the backend to get a new access token
    const response = await axios.post('http://localhost:5000/refresh', {}, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,  // Pass refresh token in the Authorization header
      },
    });

    // Store the new access token in localStorage
    const newAccessToken = response.data.access_token;
    localStorage.setItem('accessToken', newAccessToken);
    
    return newAccessToken;  // Return the new access token
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;  // Return null if the refresh fails
  }
};
