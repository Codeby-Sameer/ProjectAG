import React, { useState } from 'react';

const Header = ({ onOpenSidebar }) => {
  const [userRole, setUserRole] = useState('admin');
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, type: '🚨 No-Show Alert', time: '2 min ago', message: 'Client missed appointment', unread: true },
    { id: 2, type: '✅ Resolution Completed', time: '1 hour ago', message: 'Problem resolved successfully', unread: false },
    { id: 3, type: '📅 Appointment Reminder', time: '2 hours ago', message: 'Upcoming appointment today', unread: false },
  ];

  const markAllAsRead = () => {
    setNotificationCount(0);
    setShowNotifications(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-3  lg:px-8 py-4">
        {/* Mobile Sidebar Toggle Button */}
        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={onOpenSidebar}
        >
          <span className="text-2xl">☰</span>
        </button>
         <div className='lg:hidden ms-2 md:hidden flex '>
      <div className='text-xl font-bold text-blue-600'>
        CRM 
      </div>

    </div>
        
        <div className="flex items-center lg:space-x-9 space-x-2 ml-auto">
          {/* Notification Bell */}
          <div className="relative">
            <button 
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <span className="text-2xl">🔔</span>
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-pulse">
                  {notificationCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 animate-slide-in-down">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-900">🔔 Notifications</h4>
                  <button 
                    onClick={markAllAsRead}
                    className="text-blue-600 text-sm hover:text-blue-700 font-medium"
                  >
                    Mark all read
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border-b border-gray-100 last:border-b-0 ${
                        notification.unread ? 'bg-red-50 border-l-4 border-l-red-400' : ''
                      }`}
                    >
                      <div className="font-semibold text-gray-900 text-sm">
                        {notification.type}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
                      <div className="text-sm text-gray-700 mt-2">{notification.message}</div>
                      {notification.unread && (
                        <div className="flex space-x-2 mt-3">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                            Reschedule
                          </button>
                          <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors">
                            Mark Read
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
   

          {/* User Role Selector */}
          <div className=" md:flex hidden lg:flex items-center lg:space-x-8 space-x-2">
            <span className="text-gray-600 text-sm ">👤 Role:</span>
            <select 
              value={userRole} 
              onChange={(e) => setUserRole(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 lg:px-7  py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="receptionist">📝 Receptionist/Staff</option>
              <option value="admin">👨‍💼 Admin Personnel</option>
              <option value="specialist">🔧 Specialist</option>
              <option value="manager">📊 Manager</option>
              <option value="administrator">⚙️ Administrator</option>
            </select>
          </div>

          <span className="text-gray-600 text-sm  hidden lg:flex md:flex">📧 info@anandgroup.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;