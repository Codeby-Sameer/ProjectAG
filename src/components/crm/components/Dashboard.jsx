// src/components/Dashboard/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const metrics = [
    { title: 'Total Problems', value: '24', change: '+12%', icon: '📊', color: 'blue' },
    { title: 'Resolved', value: '18', change: '+8%', icon: '✅', color: 'green' },
    { title: 'Pending', value: '6', change: '-2%', icon: '⏳', color: 'yellow' },
    { title: 'Satisfaction', value: '94%', change: '+5%', icon: '⭐', color: 'purple' },
  ];

  const activities = [
    { icon: '🎯', message: 'New problem submitted by John Doe', time: '2 minutes ago' },
    { icon: '✅', message: 'Problem #PR-2024-015 resolved', time: '1 hour ago' },
    { icon: '📅', message: 'Appointment scheduled with Sarah Johnson', time: '3 hours ago' },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">📊 CRM Dashboard</h2>
        <p className="text-gray-600 text-sm lg:text-base">Overview of problem resolution system</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg lg:rounded-xl p-4 lg:p-6 shadow border border-gray-100 hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600">{metric.title}</p>
                <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mt-1 lg:mt-2">{metric.value}</h3>
                <span className={`text-xs font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl lg:text-4xl">
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg lg:rounded-xl shadow border border-gray-100 p-4 lg:p-6 animate-fade-in-up">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Recent Activity</h3>
        <div className="space-y-3 lg:space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-xl lg:text-2xl">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-medium text-sm lg:text-base truncate">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;