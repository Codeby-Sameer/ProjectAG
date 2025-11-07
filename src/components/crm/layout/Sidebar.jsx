import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const { userRole, userEmail, logout, hasAnyRole } = useAuth();
  console.log(userEmail,userRole,"iamuser")
  
  // Define menu items with permissions
  const allMenuItems = [
    { 
      path: '/crm/dashboard', 
      icon: '🏠', 
      label: 'Dashboard',
      roles: ['receptionist', 'manager', 'superadmin']
    },
    { 
      path: '/crm/submit-problem', 
      icon: '📋', 
      label: 'Submit Problem',
      roles: ['receptionist', 'superadmin']
    },
    { 
      path: '/crm/managecases', 
      icon: '📁', 
      label: 'Manage Cases',
      roles: ['manager', 'superadmin']
    },
    { 
      path: '/crm/appointments', 
      icon: '📅', 
      label: 'Appointments',
      roles: ['manager', 'superadmin']
    },
    { 
      path: '/crm/notifications', 
      icon: '🔔', 
      label: 'Notifications',
      roles: ['manager', 'superadmin']
    },
    
    { 
      path: '/crm/specifications', 
      icon: '⚙️', 
      label: 'System Specs',
      roles: ['superadmin']
    }
  ];

  // Filter menu items based on user role
  const userMenuItems = allMenuItems.filter(item => 
    hasAnyRole(userRole)
  );

  // Role display configuration
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
      displayName: 'superadmin',
      color: 'bg-purple-100 text-purple-800',
      description: 'Full System Access'
    }
  };

  const currentRole = roleConfig[userRole];

  // Handle navigation with sidebar close on mobile
  const handleNavigation = () => {
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) { // lg breakpoint
      onClose();
    }
  };

  return (
    <div className="w-64 z-10 flex flex-col h-screen">
      {/* Header Section with Close Button */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-start">
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300">
            <img 
              src='/logo.png' 
              alt="logo" 
              className='w-full h-full object-contain p-1' 
            />
          </div>
          <div className="font-semibold text-gray-800 mb-2 ml-3">
            <span className='text-orange-500 lg:text-lg  text-md'>ANAND GROUP</span> <span className='text-blue-700'>CRM</span>
          </div>
        </div>
        
        {/* Close Button - Visible only on mobile */}
        <button 
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
        >
          <span className="text-xl">✕</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {userMenuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavigation}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                location.pathname === item.path 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
              }`}
            >
              <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              
              {/* Admin-only badge */}
              {item.roles.length === 1 && item.roles[0] === 'admin' && (
                <span className="ml-auto text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  Admin
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer Section with Logout */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <button
          onClick={() => {
            handleNavigation();
            logout();
          }}
          className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200 group"
        >
          <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
            🚪
          </span>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;