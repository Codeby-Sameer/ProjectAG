import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/crm/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/crm/managecases', icon: '📊', label: 'Manage Cases' },
    { path: '/crm/submit-problem', icon: '📝', label: 'Submit Problem' },
    { path: '/crm/appointments', icon: '📝', label: 'Appointments' },
    { path: '/crm/notifications', icon: '🔔', label: 'Notifications' },
    { path: '/crm/financial', icon: '💰', label: 'Financial' },
    { path: '/crm/specifications', icon: '📋', label: 'System Specs' },
  ];

  return (
    <div className="w-64 z-10">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">CRM System</h2>
      </div>
      <nav className="p-4">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
              location.pathname === item.path 
                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;