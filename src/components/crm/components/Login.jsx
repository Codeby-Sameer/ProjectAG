const roleConfig = {
  receptionist: {
    displayName: 'Receptionist',
    color: 'bg-green-100 text-green-800',
    description: 'Front Desk Operations'
  },
  manager: {
    displayName: 'Manager', 
    color: 'bg-blue-100 text-blue-800',
    description: 'Team Management'
  },
  superadmin: {
    displayName: 'Super Admin',
    color: 'bg-purple-100 text-purple-800',
    description: 'Full System Access'
  }
};

// src/components/Login/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authService } from '../../../services/authService';
import { useAuth } from '../context/authcontext';

const Login = () => {
  const [error, setError] = React.useState('');
  const [useDummyAuth, setUseDummyAuth] = React.useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // Demo credentials for quick testing
  const demoCredentials = [
    { username: 'admin@company.com', password: 'admin123', role: 'superadmin' },
    { username: 'manager@company.com', password: 'manager123', role: 'manager' },
    { username: 'receptionist@company.com', password: 'receptionist123', role: 'receptionist' }
  ];

  // Form validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  // Dummy authentication function
  const dummyAuth = async (username, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = demoCredentials.find(
      cred => cred.username === username && cred.password === password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    return {
      access_token: `dummy_token_${user.role}_${Date.now()}`,
      token: `dummy_token_${user.role}_${Date.now()}`,
      role: user.role,
      user_id: `user_${user.role}_${Math.random().toString(36).substr(2, 9)}`,
      email: user.username,
      expires_in: 3600
    };
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError('');
      try {
        let result;
        
        // Try server authentication first, fallback to dummy auth if needed
        try {
          if (!useDummyAuth) {
            result = await authService.login(values.username, values.password);
            console.log('Server login successful:', result);
          } else {
            throw new Error('Using dummy auth');
          }
        } catch (serverError) {
          console.log('Server auth failed, using dummy auth:', serverError);
          result = await dummyAuth(values.username, values.password);
          console.log('Dummy auth successful:', result);
        }

        // Extract data from response (handle different formats)
        const token = result.access_token || result.token;
        const role = result.role || 'receptionist';
        const email = result.email || values.username;

        if (!token) {
          throw new Error('No access token received');
        }

        // Use context login function
        login({
          token,
          role,
          email,
          userId: result.user_id || result.id || `user_${role}_${Date.now()}`
        });
        
        console.log(`Welcome ${email}! Role: ${role}`);
        
        // Redirect to CRM dashboard
        navigate('/crm/dashboard');
        
      } catch (error) {
        console.error('Login failed:', error);
        
        let errorMessage = 'Login failed. Please check your credentials.';
        
        if (error.message.includes('Invalid credentials') || error.response?.status === 401) {
          errorMessage = 'Invalid username or password.';
        } else if (error.response?.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (!error.response && !useDummyAuth) {
          errorMessage = 'Server unavailable. Using demo mode.';
          // Auto-switch to dummy auth for next attempt
          setUseDummyAuth(true);
        } else {
          errorMessage = error.response?.data?.detail || error.message || errorMessage;
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
    // Auto-enable dummy auth when using demo credentials
    setUseDummyAuth(true);
  };

  // Toggle between server and dummy auth
  const toggleAuthMode = () => {
    setUseDummyAuth(!useDummyAuth);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🔐 CRM Login</h2>
          <p className="text-gray-600">Enter your credentials to access the system</p>
          
          {/* Auth Mode Toggle */}
          <div className="flex items-center justify-center mt-4">
            <span className={`text-sm mr-3 ${useDummyAuth ? 'text-gray-500' : 'text-green-600 font-semibold'}`}>
              Server Auth
            </span>
            <button
              type="button"
              onClick={toggleAuthMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                useDummyAuth ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useDummyAuth ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ml-3 ${useDummyAuth ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              Demo Mode
            </span>
          </div>
          
          {useDummyAuth && (
            <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2">
              <p className="text-yellow-800 text-xs">
                📍 Using demo mode - No server connection required
              </p>
            </div>
          )}
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
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
            <div className={`px-4 py-3 rounded-lg text-sm ${
              error.includes('demo mode') || error.includes('Server unavailable') 
                ? 'bg-yellow-50 border border-yellow-200 text-yellow-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}>
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
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900 text-sm">Demo Credentials:</h4>
            <span className="text-xs text-blue-600 font-medium">Auto-fill & Demo Mode</span>
          </div>
          <div className="space-y-2">
            {demoCredentials.map((cred, index) => (
              <button
                key={index}
                type="button"
                onClick={() => fillDemoCredentials(index)}
                className="w-full text-left p-2 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200 border border-transparent hover:border-gray-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium block">{cred.username}</span>
                    <span className="text-gray-500">Password: {cred.password}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${roleConfig[cred.role]?.color || 'bg-gray-100 text-gray-800'}`}>
                    {roleConfig[cred.role]?.displayName || cred.role}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            {useDummyAuth 
              ? '🔒 Demo Mode - Using local authentication' 
              : '🌐 Server Mode - Connecting to authentication server'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;