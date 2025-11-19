import React, { useState, useMemo, useEffect } from 'react';
import { useMultiFormModal } from "../../Context/ModalContext";
import { appointmentService } from '../../../services/appointmentService';

// Calendar component
const CalendarView = ({ appointments, onDateSelect, onAppointmentSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { firstDay, lastDay, daysInMonth, startingDay };
  };

  const getAppointmentsForDate = (date) => {
    return appointments.filter(apt => {
      const aptDate = new Date(apt.date);
      return aptDate.toDateString() === date.toDateString();
    });
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleDateClick = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  const days = [];
  
  // Empty cells for days before the first day of month
  for (let i = 0; i < startingDay; i++) {
    days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayAppointments = getAppointmentsForDate(date);
    const isToday = date.toDateString() === new Date().toDateString();
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

    days.push(
      <div
        key={day}
        className={`h-24 border border-gray-200 p-1 cursor-pointer transition-colors ${
          isSelected ? 'bg-blue-50 border-blue-300' : 
          isToday ? 'bg-green-50' : 'hover:bg-gray-50'
        }`}
        onClick={() => handleDateClick(day)}
      >
        <div className={`text-sm font-medium ${
          isToday ? 'text-green-600' : 
          isSelected ? 'text-blue-600' : 'text-gray-700'
        }`}>
          {day}
        </div>
        <div className="mt-1 space-y-1 max-h-16 overflow-y-auto">
          {dayAppointments.slice(0, 3).map(apt => (
            <div
              key={apt.id}
              className={`text-xs p-1 rounded truncate cursor-pointer ${
                apt.status === 'completed' ? 'bg-green-100 text-green-800' :
                apt.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                'bg-blue-100 text-blue-800'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onAppointmentSelect?.(apt);
              }}
              title={`${apt.clientName} - ${apt.time || ''}`}
            >
              <div className="font-medium truncate">{apt.clientName}</div>
              <div className="truncate">{apt.time || ''}</div>
            </div>
          ))}
          {dayAppointments.length > 3 && (
            <div className="text-xs text-gray-500 text-center">
              +{dayAppointments.length - 3} more
            </div>
          )}
        </div>
      </div>
    );
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          ←
        </button>
        <h3 className="text-lg font-semibold text-gray-900">{monthYear}</h3>
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          →
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {dayNames.map(day => (
          <div key={day} className="p-3 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {days}
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-100 rounded"></div>
            <span>Scheduled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-100 rounded"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-100 rounded"></div>
            <span>Cancelled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-50 rounded border border-green-200"></div>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Local modal for reschedule
const RescheduleModal = ({ open, onClose, appointment, onReschedule }) => {
  const [form, setForm] = useState({
    date: '',
    time: '',
    notes: ''
  });

  useEffect(() => {
    if (appointment) {
      const aptDate = new Date(appointment.date);
      setForm({
        date: aptDate.toISOString().split('T')[0],
        time: appointment.time || '10:00',
        notes: ''
      });
    }
  }, [appointment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReschedule({
      ...appointment,
      date: form.date,
      time: form.time,
      rescheduleNotes: form.notes
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Reschedule Appointment</h3>
          <button className="text-gray-500 hover:text-gray-900" onClick={onClose}>✖</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Name
            </label>
            <input
              type="text"
              value={appointment?.clientName || ''}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Date
            </label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm(f => ({ ...f, date: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Time
            </label>
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => setForm(f => ({ ...f, time: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reschedule Notes (Optional)
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm(f => ({ ...f, notes: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Reason for rescheduling..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const getStatusBadge = (status) => {
  switch ((status || '').toLowerCase()) {
    case 'scheduled':
      return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Scheduled</span>;
    case 'completed':
      return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">Completed</span>;
    case 'cancelled':
      return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">Cancelled</span>;
    default:
      return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">{status || 'Pending'}</span>;
  }
};

const formatDateTime = (date, time) => {
  if (!date) return '-';
  try {
    if (time) {
      const combined = `${date}T${time.length === 5 ? time : time + ':00'}`;
      const d = new Date(combined);
      return isNaN(d) ? `${date} ${time}` : d.toLocaleString();
    }
    const d = new Date(date);
    return isNaN(d) ? String(date) : d.toLocaleString();
  } catch (e) {
    return `${date} ${time || ''}`;
  }
};

export default function AppointmentsTab() {
  const { openModal } = useMultiFormModal();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [calendarView, setCalendarView] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rescheduleModalOpen, setRescheduleModalOpen] = useState(false);
  const [appointmentToReschedule, setAppointmentToReschedule] = useState(null);
  const [timeFilter, setTimeFilter] = useState('All');

  // Load appointments
  useEffect(() => {
    let mounted = true;
    const loadAppointments = async () => {
      setLoading(true);
      try {
        const data = await appointmentService.getAppointments();
        if (mounted) {
          setAppointments(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error('Failed to load appointments:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadAppointments();
    return () => { mounted = false; };
  }, []);

  // Filter appointments by time
  const filteredAppointments = useMemo(() => {
    if (timeFilter === 'All') return appointments;

    const now = new Date();
    return appointments.filter(apt => {
      const aptDate = new Date(apt.date);
      if (isNaN(aptDate)) return false;

      if (timeFilter === 'Today') {
        return aptDate.toDateString() === now.toDateString();
      }
      if (timeFilter === 'This Week') {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 7);
        return aptDate >= startOfWeek && aptDate < endOfWeek;
      }
      if (timeFilter === 'This Month') {
        return aptDate.getMonth() === now.getMonth() && aptDate.getFullYear() === now.getFullYear();
      }
      return true;
    });
  }, [appointments, timeFilter]);

  const handleNewAppointment = () => {
    openModal('appointment');
  };

  const handleReschedule = (appointment) => {
    setAppointmentToReschedule(appointment);
    setRescheduleModalOpen(true);
  };

  const handleRescheduleSubmit = async (updatedAppointment) => {
    try {
      const result = await appointmentService.updateAppointment(updatedAppointment.id, {
        ...updatedAppointment,
        status: 'scheduled'
      });
      
      setAppointments(prev => prev.map(apt => 
        apt.id === updatedAppointment.id ? result : apt
      ));
      
      setRescheduleModalOpen(false);
      setAppointmentToReschedule(null);
    } catch (err) {
      console.error('Failed to reschedule appointment:', err);
      alert('Failed to reschedule appointment');
    }
  };

  const handleCancel = async (appointment) => {
    const ok = confirm(`Cancel appointment for ${appointment.clientName}?`);
    if (!ok) return;

    const prevAppointments = [...appointments];
    setAppointments(prev => prev.map(apt => 
      apt.id === appointment.id ? { ...apt, status: 'cancelled' } : apt
    ));

    try {
      await appointmentService.updateAppointment(appointment.id, {
        ...appointment,
        status: 'cancelled'
      });
    } catch (err) {
      console.error('Failed to cancel appointment:', err);
      setAppointments(prevAppointments);
      alert('Failed to cancel appointment');
    }
  };

  const handleCalendarDateSelect = (date) => {
    console.log('Selected date:', date);
    // You can implement additional logic here for date selection
  };

  const handleCalendarAppointmentSelect = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📅 Appointments</h2>
        <p className="text-gray-600">Manage and schedule appointments</p>
        {loading && <div className="text-sm text-gray-500 mt-2">Loading appointments...</div>}
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <select 
            value={timeFilter} 
            onChange={(e) => setTimeFilter(e.target.value)} 
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="All">All Appointments</option>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3">
          <button 
            onClick={handleNewAppointment}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            New Appointment
          </button>
          <button 
            onClick={() => setCalendarView(v => !v)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            {calendarView ? 'List View' : 'Calendar View'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      {calendarView ? (
        <CalendarView
          appointments={appointments}
          onDateSelect={handleCalendarDateSelect}
          onAppointmentSelect={handleCalendarAppointmentSelect}
        />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Appointments ({filteredAppointments.length})
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredAppointments.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No appointments found.
              </div>
            ) : (
              filteredAppointments.map(appointment => (
                <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {appointment.clientName}
                        </h4>
                        {getStatusBadge(appointment.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-semibold">Specialist:</span> {appointment.specialist}
                        </div>
                        <div>
                          <span className="font-semibold">Date & Time:</span> {formatDateTime(appointment.date, appointment.time)}
                        </div>
                        <div>
                          <span className="font-semibold">Duration:</span> {appointment.duration || '-'}
                        </div>
                        <div>
                          <span className="font-semibold">Type:</span> {appointment.type || '-'}
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="mt-2 text-sm text-gray-500">
                          <span className="font-semibold">Notes:</span> {appointment.notes}
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2 mt-4 lg:mt-0">
                      <button 
                        onClick={() => handleReschedule(appointment)}
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors font-medium"
                      >
                        Reschedule
                      </button>
                      <button 
                        onClick={() => handleCancel(appointment)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      <RescheduleModal
        open={rescheduleModalOpen}
        onClose={() => {
          setRescheduleModalOpen(false);
          setAppointmentToReschedule(null);
        }}
        appointment={appointmentToReschedule}
        onReschedule={handleRescheduleSubmit}
      />

      {/* Selected Appointment Details (for calendar view) */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Appointment Details</h3>
              <button 
                className="text-gray-500 hover:text-gray-900"
                onClick={() => setSelectedAppointment(null)}
              >
                ✖
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <strong>Client:</strong> {selectedAppointment.clientName}
              </div>
              <div>
                <strong>Date & Time:</strong> {formatDateTime(selectedAppointment.date, selectedAppointment.time)}
              </div>
              <div>
                <strong>Specialist:</strong> {selectedAppointment.specialist}
              </div>
              <div>
                <strong>Status:</strong> {getStatusBadge(selectedAppointment.status)}
              </div>
              {selectedAppointment.notes && (
                <div>
                  <strong>Notes:</strong> {selectedAppointment.notes}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedAppointment(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleReschedule(selectedAppointment);
                  setSelectedAppointment(null);
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 