import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProblemSubmission from './components/ProblemSubmission';
import Notifications from './components/Notifications';
import Financial from './components/Financial';
import SystemSpecs from './components/SystemSpecs';
import Layout from './layout/Layout';
import AppointmentsTab from './components/Appointment';
import ManageCasesTab from './components/ManageCases';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/crm/login" />;
};
function CrmApp() {
  return (
  
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="managecases" element={<ManageCasesTab />} />
                  <Route path="submit-problem" element={<ProblemSubmission />} />
                  <Route path="appointments" element={<AppointmentsTab />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="financial" element={<Financial />} />
                  <Route path="specifications" element={<SystemSpecs />} />
                  <Route path="/" element={<Navigate to="dashboard" />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to="login" />} />
        </Routes>
      </div>
  
  );
}
export default CrmApp;