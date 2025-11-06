// src/services/api.js
import axios from 'axios';


// Base URL configuration
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage or your auth store
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // For file uploads, let browser set Content-Type
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    
    console.log(`🚀 Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response received: ${response.status}`);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', error.response?.status, error.response?.data);
    
    // Handle specific error cases
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
       
          
        case 403:
          // Forbidden - insufficient permissions
          console.warn('Access forbidden: Insufficient permissions');
          break;
          
        case 404:
          // Not found
          console.warn('Resource not found');
          break;
          
        case 422:
          // Validation error
          console.warn('Validation error:', data.detail);
          break;
          
        case 500:
          // Server error
          console.error('Server error occurred');
          break;
          
        default:
          console.error(`HTTP error ${status}:`, data.detail);
      }
    } else if (error.request) {
      // Network error
      console.error('Network error: No response received');
    } else {
      // Request setup error
      console.error('Request error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;