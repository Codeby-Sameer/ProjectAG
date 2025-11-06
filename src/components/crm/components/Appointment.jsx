import { useMultiFormModal } from "../../Context/ModalContext";

const AppointmentsTab = () => {
  const{openModal}=  useMultiFormModal()
  const appointments = [
    {
      id: 1,
      clientName: 'John Smith',
      specialist: 'Sarah Johnson',
      date: '2024-01-16T14:00:00Z',
      duration: '60 mins',
      type: 'Initial Consultation',
      status: 'scheduled',
      problemId: 'PR-2024-001'
    },
    {
      id: 2,
      clientName: 'Mike Davis',
      specialist: 'Lisa Chen',
      date: '2024-01-17T10:00:00Z',
      duration: '45 mins',
      type: 'Follow-up',
      status: 'scheduled',
      problemId: 'PR-2024-003'
    },
    {
      id: 3,
      clientName: 'Emma Wilson',
      specialist: 'Mike Davis',
      date: '2024-01-15T11:30:00Z',
      duration: '30 mins',
      type: 'Document Review',
      status: 'completed',
      problemId: 'PR-2024-004'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'scheduled':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Scheduled</span>;
      case 'completed':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">Completed</span>;
      case 'cancelled':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">Cancelled</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">Pending</span>;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📅 Appointments</h2>
        <p className="text-gray-600">Manage client appointments and schedules</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors text-center" onClick={()=>{openModal('appointment')}}>
          <div className="text-2xl mb-2">➕</div>
          <div className="font-semibold">New Appointment</div>
        </button>
        <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors text-center">
          <div className="text-2xl mb-2">📋</div>
          <div className="font-semibold">View Calendar</div>
        </button>
        <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors text-center">
          <div className="text-2xl mb-2">🔄</div>
          <div className="font-semibold">Reschedule</div>
        </button>
        <button className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold">Reports</div>
        </button>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
            <div className="flex space-x-2">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="font-semibold text-gray-900 text-lg">{appointment.clientName}</h4>
                    {getStatusBadge(appointment.status)}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold">Specialist:</span> {appointment.specialist}
                    </div>
                    <div>
                      <span className="font-semibold">Date:</span> {new Date(appointment.date).toLocaleString()}
                    </div>
                    <div>
                      <span className="font-semibold">Duration:</span> {appointment.duration}
                    </div>
                    <div>
                      <span className="font-semibold">Type:</span> {appointment.type}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Problem ID: {appointment.problemId}
                  </div>
                </div>
                <div className="flex space-x-2 mt-4 lg:mt-0">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    👁️ View
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                    ✏️ Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors">
                    🗑️ Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTab;