// src/services/appointmentService.js
import api from './api';

export const appointmentService = {
  // Get all appointments
  getAppointments: async () => {
    try {
      const response = await api.get('/api/appointments/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAppointmentsbyId: async (id) => {
    try {
      const response = await api.get(`/api/appointments/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create appointment
  createAppointment: async (appointmentData) => {
    try {
      const response = await api.post('/api/appointments/', appointmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update appointment
  updateAppointment: async (appointmentId, appointmentData) => {
    try {
      const response = await api.put(`/api/appointments/${appointmentId}`, appointmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete appointment
  deleteAppointment: async (appointmentId) => {
    try {
      const response = await api.delete(`/api/appointments/${appointmentId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};