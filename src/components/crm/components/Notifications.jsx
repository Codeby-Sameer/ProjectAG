import React, { useState } from 'react';

const Notifications = () => {
  const [emailSettings, setEmailSettings] = useState({
    confirmations: true,
    reminders24h: true,
    reminders2h: true,
    statusChanges: true
  });

  const [smsSettings, setSmsSettings] = useState({
    urgent: true,
    allReminders: false,
    cancellations: true
  });

  const notifications = [
    {
      id: 1,
      type: '🚨 No-Show Alert',
      time: '2 min ago',
      message: 'Client John Smith missed appointment at 2:00 PM - Problem #PR-2024-001',
      unread: true
    },
    {
      id: 2,
      type: '✅ Resolution Completed',
      time: '1 hour ago',
      message: 'Problem #PR-2024-002 resolved by Sarah Johnson. Satisfaction survey sent to client.',
      unread: false
    },
    {
      id: 3,
      type: '📅 Appointment Scheduled',
      time: '3 hours ago',
      message: 'New appointment scheduled for tomorrow at 10:00 AM with Mike Davis - Problem #PR-2024-003',
      unread: false
    }
  ];

  const notificationTypes = [
    { type: 'Appointment Confirmation', timing: 'Immediately after scheduling', recipients: 'Client, Specialist, Admin', method: '📧 Email + 📱 SMS' },
    { type: '24-Hour Reminder', timing: '24 hours before appointment', recipients: 'Client, Specialist', method: '📧 Email' },
    { type: '2-Hour Reminder', timing: '2 hours before appointment', recipients: 'Client, Specialist', method: '📱 SMS' },
    { type: 'Appointment Reschedule', timing: 'When rescheduled by admin', recipients: 'Client, Specialist, Admin', method: '📧 Email + 📱 SMS' },
    { type: 'Appointment Cancellation', timing: 'When cancelled by any party', recipients: 'Client, Specialist, Admin', method: '📧 Email + 📱 SMS' },
    { type: 'No-Show Alert', timing: '15 min after appointment time', recipients: 'Admin only', method: '🔔 System Alert' },
    { type: 'Resolution Completed', timing: 'After specialist closes ticket', recipients: 'Client (with satisfaction survey)', method: '📧 Email' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">🔔 Notification System</h2>
        <p className="text-gray-600">Automated notifications for appointments, status changes, and system alerts</p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">⚙️ Notification Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Settings */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">📧 Email Notifications</h4>
            <div className="space-y-3">
              {Object.entries(emailSettings).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setEmailSettings(prev => ({
                      ...prev,
                      [key]: e.target.checked
                    }))}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* SMS Settings */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">📱 SMS Notifications</h4>
            <div className="space-y-3">
              {Object.entries(smsSettings).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setSmsSettings(prev => ({
                      ...prev,
                      [key]: e.target.checked
                    }))}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notification Types Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">📋 Notification Types & Timing</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">Notification Type</th>
                <th className="px-4 py-3">Timing</th>
                <th className="px-4 py-3">Recipients</th>
                <th className="px-4 py-3">Method</th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.type}</td>
                  <td className="px-4 py-3">{item.timing}</td>
                  <td className="px-4 py-3">{item.recipients}</td>
                  <td className="px-4 py-3">{item.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">📬 Recent Notifications</h3>
        <div className="space-y-4">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`p-4 rounded-lg border-l-4 ${
                notification.unread 
                  ? 'bg-red-50 border-red-400' 
                  : 'bg-gray-50 border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-semibold text-gray-900">{notification.type}</div>
                <div className="text-xs text-gray-500">{notification.time}</div>
              </div>
              <div className="text-gray-700 text-sm mb-3">{notification.message}</div>
              {notification.unread && (
                <div className="flex space-x-2">
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
    </div>
  );
};

export default Notifications;