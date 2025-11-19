import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authcontext';
import { X } from 'lucide-react';

const Sidebar = ({ onClose, isSidebarOpen }) => {
  const location = useLocation();
  const { userRole, userEmail, logout, hasAnyRole } = useAuth();
  
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
      path: '/crm/user-management', 
      icon: '👥', 
      label: 'User Management',
      roles: ['manager', 'superadmin']
    },
    { 
      path: '/crm/appointments', 
      icon: '📅', 
      label: 'Appointments',
      roles: ['manager', 'superadmin']
    },
  ];

  // Filter menu items based on user role
  const userMenuItems = allMenuItems.filter(item => 
    hasAnyRole(item.roles)
  );

  // Handle navigation with sidebar close on mobile
  const handleNavigation = () => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <div className="w-64 flex flex-col h-screen bg-white border-r border-gray-200">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-12 rounded-full flex items-center justify-center ">
            <img 
              src='/logo.png' 
              alt="logo" 
              className='w-8 h-8 object-contain' 
            />
          </div>
          <div className="font-semibold">
            <div className='text-orange-500 text-lg'>ANAND GROUP</div>
            <div className='text-blue-700 text-xs'>CRM</div>
          </div>
        </div>
        
        {/* Close Button - Visible on desktop when sidebar is open */}
        {isSidebarOpen && (
          <button 
            className=" text-gray-500 hover:text-gray-700 transition-colors lg:flex "
            onClick={onClose}
          >
            <X size={20} />
          </button>
        )}
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