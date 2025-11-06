// src/services/problemService.js
import api from './api';

// Transform frontend field names to backend field names
const transformFormData = (formData) => {
  return {
    full_name: formData.clientName,
    phone: formData.contactPhone,
    email: formData.contactEmail,
    client_id: formData.existingClientId || null,
    business_vertical: formData.businessVertical,
    referring_source: formData.referringSource,
    problem_category: formData.problemCategory,
    priority_level: formData.urgencyLevel,
    problem_summary: formData.problemSummary || null,
  };
};

export const problemService = {
  // Submit new problem with audio file
  submitProblem: async (formData, audioFile) => {
    const submissionData = new FormData();
    
    // Transform and append form fields
    const transformedData = transformFormData(formData);
    Object.keys(transformedData).forEach(key => {
      if (transformedData[key] !== null && transformedData[key] !== undefined) {
        submissionData.append(key, transformedData[key]);
      }
    });

    // Append audio file
    if (audioFile) {
      submissionData.append('audio', audioFile); // Make sure this matches your backend parameter name
    }

    try {
      const response = await api.post('/api/problems/', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(`Upload Progress: ${progress}%`);
        }
      });
      console.log('✅ Submission response:', response);
      return response.data;
    } catch (error) {
      console.error('❌ Submission error:', error.response?.data || error.message);
      throw error;
    }
  },

  // Get all problems
  getProblems: async () => {
    try {
      const response = await api.get('/api/problems/');
      return response.data;
    } catch (error) {
      console.error('Error fetching problems:', error);
      throw error;
    }
  },

  // Get problem by ID
  getProblemById: async (problemId) => {
    try {
      const response = await api.get(`/api/problems/${problemId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching problem:', error);
      throw error;
    }
  },

  // Update problem
  updateProblem: async (problemId, formData, audioFile = null) => {
    const submissionData = new FormData();
    const transformedData = transformFormData(formData);
    
    Object.keys(transformedData).forEach(key => {
      if (transformedData[key] !== null && transformedData[key] !== undefined) {
        submissionData.append(key, transformedData[key]);
      }
    });

    if (audioFile) {
      submissionData.append('audio', audioFile);
    }

    try {
      const response = await api.put(`/api/problems/${problemId}`, submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error updating problem:', error);
      throw error;
    }
  },

  // Delete problem
  deleteProblem: async (problemId) => {
    try {
      const response = await api.delete(`/api/problems/${problemId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting problem:', error);
      throw error;
    }
  }
};