// src/services/realEstateService.js
import api from './api';

export const realEstateService = {
  // Create real estate entry
  createRealEstate: async (realEstateData) => {
    try {
      const response = await api.post('/api/real-estate/', realEstateData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all real estate records
  getRealEstates: async (skip = 0, limit = 100) => {
    try {
      const response = await api.get('/api/real-estate/', {
        params: { skip, limit }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get real estate by file number
  getRealEstateByFileNo: async (fileNo) => {
    try {
      const response = await api.get(`/api/real-estate/${fileNo}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};