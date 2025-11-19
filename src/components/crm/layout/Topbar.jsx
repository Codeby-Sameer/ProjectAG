import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ onOpenSidebar, isSidebarOpen }) => {
  const [userRole, setUserRole] = useState('admin');
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();

  // Page titles mapping
  const pageTitles = {
    '/crm/dashboard': 'Dashboard',
    '/crm/submit-problem': 'Submit Problem', 
    '/crm/managecases': 'Manage Cases',
    '/crm/user-management': 'User Management',
    '/crm/appointments': 'Appointments',
  };

  const getCurrentPageTitle = () => {
    return pageTitles[location.pathname] || 'Dashboard';
  };

  const userProfile = {
    name: 'Anand Sharma',
    email: 'anand.sharma@anandgroup.com',
    role: 'Administrator',
    avatar: '👨‍💼',
    phone: '+91 98765 43210',
    department: 'Management',
    joinDate: 'Jan 15, 2020'
  };

  const notifications = [
    { id: 1, type: '🚨 No-Show Alert', time: '2 min ago', message: 'Client missed appointment', unread: true },
    { id: 2, type: '✅ Resolution Completed', time: '1 hour ago', message: 'Problem resolved successfully', unread: false },
    { id: 3, type: '📅 Appointment Reminder', time: '2 hours ago', message: 'Upcoming appointment today', unread: false },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotificationCount(0);
    setShowNotifications(false);
  };

  const handleNotificationClick = (notification) => {
    if (notification.unread) {
      setNotificationCount(prev => prev - 1);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Left Section - Menu Button & Page Title */}
        <div className="flex items-center space-x-4">
          {/* Menu Toggle Button - Only show when sidebar is closed on desktop */}
          {!isSidebarOpen && (
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              onClick={onOpenSidebar}
            >
              <span className="text-2xl">☰</span>
            </button>
          )}
          
          {/* Page Title */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:block w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {getCurrentPageTitle()}
              </h1>
              <p className="text-sm text-gray-500 hidden sm:block">
                Welcome back, {userProfile.name}
              </p>
            </div>
          </div>

          {/* Mobile Logo - Only show when sidebar is closed */}
          {!isSidebarOpen && (
            <div className='lg:hidden flex items-center space-x-2 ml-4'>
              <div className='text-lg font-bold text-blue-600'>CRM</div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Right Section - Notifications & Profile */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Email - Hidden on mobile */}
          <span className="text-gray-600 text-sm hidden lg:flex items-center space-x-2">
            <span>📧</span>
            <span>info@anandgroup.com</span>
          </span>

          {/* Notification Bell */}
          <div className="relative" ref={notificationRef}>
            <button 
              className="relative p-3 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100 group"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">🔔</span>
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-pulse border-2 border-white">
                  {notificationCount}
                </span>
              )}
            </button>
            
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-14 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 animate-slide-in-down z-50">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
                  <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <span>🔔</span>
                    <span>Notifications</span>
                    {notificationCount > 0 && (
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {notificationCount}
                      </span>
                    )}
                  </h4>
                  <button 
                    onClick={markAllAsRead}
                    className="text-blue-600 text-sm hover:text-blue-700 font-medium transition-colors"
                  >
                    Mark all read
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border-b border-gray-100 last:border-b-0 transition-colors cursor-pointer hover:bg-gray-50 ${
                        notification.unread ? 'bg-red-50 border-l-4 border-l-red-400' : ''
                      }`}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-gray-900 text-sm">
                          {notification.type}
                        </div>
                        <div className="text-xs text-gray-500">{notification.time}</div>
                      </div>
                      <div className="text-sm text-gray-700 mt-1">{notification.message}</div>
                      {notification.unread && (
                        <div className="flex space-x-2 mt-3">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-700 transition-colors font-medium">
                            Reschedule
                          </button>
                          <button className="bg-gray-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-gray-700 transition-colors font-medium">
                            Mark Read
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div className="relative" ref={profileRef}>
            <button 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors group"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
            >
              {/* Avatar */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
                {userProfile.avatar}
              </div>
              
              {/* User Info - Hidden on mobile */}
              <div className="  text-left">
                <div className="text-sm font-semibold text-gray-900">{userProfile.name}</div>
                <div className="text-xs text-gray-500 capitalize">{userProfile.role}</div>
              </div>
              
              {/* Dropdown Arrow */}
              <div className={`hidden lg:block transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`}>
                <span className="text-gray-400">▼</span>
              </div>
            </button>

            {/* Profile Dropdown Card */}
            {showProfile && (
              <div className="absolute right-0 top-14 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 animate-slide-in-down z-50">
                {/* Profile Header */}
                <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm">
                      {userProfile.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{userProfile.name}</h3>
                      <p className="text-blue-100 text-sm">{userProfile.role}</p>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-400">📧</span>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="text-sm font-medium text-gray-900">{userProfile.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-400">📱</span>
                    <div>
                      <div className="text-xs text-gray-500">Phone</div>
                      <div className="text-sm font-medium text-gray-900">{userProfile.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-400">🏢</span>
                    <div>
                      <div className="text-xs text-gray-500">Department</div>
                      <div className="text-sm font-medium text-gray-900">{userProfile.department}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-400">📅</span>
                    <div>
                      <div className="text-xs text-gray-500">Joined</div>
                      <div className="text-sm font-medium text-gray-900">{userProfile.joinDate}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-t border-gray-200 grid grid-cols-2 gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                    Sign Out
                  </button>
                </div>

                {/* Quick Status */}
                <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Status</span>
                    <span className="flex items-center space-x-1 text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Active</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}; 

export default Header;