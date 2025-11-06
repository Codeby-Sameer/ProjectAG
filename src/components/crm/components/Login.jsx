// src/components/Login/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authService } from '../../../services/authService';
import { useAuth } from '../context/authcontext';


const Login = () => {
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // Demo credentials for quick testing
  const demoCredentials = [
    { username: 'admin@company.com', password: 'admin123', role: 'admin' },
    { username: 'manager@company.com', password: 'manager123', role: 'manager' },
    { username: 'receptionist@company.com', password: 'receptionist123', role: 'receptionist' }
  ];

  // Form validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(2, 'Username must be at least 2 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError('');
      try {
        const result = await authService.login(values.username, values.password);
        console.log('Login successful:', result);
        
        // Extract data from response (handle different formats)
        const token = result.access_token || result.token;
        const role = result.role || 'receptionist';
        const email = values.username; // or result.email if available
        
        if (!token) {
          throw new Error('No access token received from server');
        }

        // Use context login function
        login({
          token,
          role,
          email,
          userId: result.user_id || result.id
        });
        
        console.log(`Welcome ${email}! Role: ${role}`);
        
        // Redirect to CRM dashboard
        navigate('/crm/dashboard');
        
      } catch (error) {
        console.error('Login failed:', error);
        
        let errorMessage = 'Login failed. Please check your credentials.';
        
        if (error.response?.status === 401) {
          errorMessage = 'Invalid username or password.';
        } else if (error.response?.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (!error.response) {
          errorMessage = 'Network error. Please check your connection.';
        } else {
          errorMessage = error.response?.data?.detail || errorMessage;
        }
        
        setError(errorMessage);
        
      } finally {
        setSubmitting(false);
      }
    }
  });

  // Quick fill demo credentials
  const fillDemoCredentials = (index) => {
    const demo = demoCredentials[index];
    formik.setValues({
      username: demo.username,
      password: demo.password
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🔐 CRM Login</h2>
          <p className="text-gray-600">Enter your credentials to access the system</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter username or email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                formik.touched.username && formik.errors.username 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              }`}
              required
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.username}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter password"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                formik.touched.password && formik.errors.password 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              }`}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={formik.isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting ? 'Logging in...' : 'Login to CRM'}
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Demo Credentials:</h4>
          <div className="space-y-2">
            {demoCredentials.map((cred, index) => (
              <button
                key={index}
                type="button"
                onClick={() => fillDemoCredentials(index)}
                className="w-full text-left p-2 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200"
              >
                <span className="font-medium">{cred.username}</span> / {cred.password} 
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  cred.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                  cred.role === 'manager' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {cred.role}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;