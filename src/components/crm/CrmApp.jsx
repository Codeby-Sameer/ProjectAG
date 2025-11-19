// src/components/crm/CrmApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProblemSubmission from './components/ProblemSubmission';
import Notifications from './components/Notifications';
import SystemSpecs from './components/SystemSpecs';
import Layout from './layout/Layout';
import AppointmentsTab from './components/Appointment';
import ManageCasesTab from './components/ManageCases';
import { AuthProvider, useAuth } from './context/authcontext'; // Updated import path
import UserManagement from './components/UserManagement';

// Protected Route component using AuthContext
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/crm/login" />;
};

// Public Route component
const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return !isAuthenticated ? children : <Navigate to="/crm/dashboard" />;
};

function CrmApp() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          {/* Login Route */}
          <Route 
            path="login" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />
          
          {/* Protected Routes */}
          <Route 
            path="/*" 
            element={
              <ProtectedRoute>
                <Layout>
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="managecases" element={<ManageCasesTab />} />
                    <Route path="submit-problem" element={<ProblemSubmission />} />
                    <Route path="appointments" element={<AppointmentsTab />} />
                    <Route path="user-management" element={<UserManagement />} />
                    {/* <Route path="notifications" element={<Notifications />} /> */}
                  
                    {/* <Route path="specifications" element={<SystemSpecs />} /> */}
                    {/* Redirect from /crm to /crm/dashboard if authenticated */}
                    <Route path="" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default CrmApp;