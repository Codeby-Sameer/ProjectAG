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
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">📊 CRM Dashboard</h2>
        <p className="text-gray-600">Overview of problem resolution system</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</h3>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-4xl">
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-fade-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-2xl">{activity.icon}</span>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{activity.message}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;