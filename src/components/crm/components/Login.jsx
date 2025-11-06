import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validCredentials = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
    { username: 'demo', password: 'demo123' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    
    const isValid = validCredentials.some(
      cred => cred.username === credentials.username && cred.password === credentials.password
    );

    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', credentials.username);
      navigate('/crm/dashboard');
    } else {
      setError('Invalid credentials. Try: admin/admin123, user/user123, demo/demo123');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md animate-slide-in-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🔐 CRM Login</h2>
          <p className="text-gray-600">Enter your credentials to access the system</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              placeholder="Enter username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Login to CRM
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Demo Credentials:</h4>
          <div className="text-xs text-gray-600 space-y-1">
            <p>admin / admin123</p>
            <p>user / user123</p>
            <p>demo / demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;