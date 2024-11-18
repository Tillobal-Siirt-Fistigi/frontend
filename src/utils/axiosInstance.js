import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Your API base URL
});

// Add token to the Authorization header for every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
