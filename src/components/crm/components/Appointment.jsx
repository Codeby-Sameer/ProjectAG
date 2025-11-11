import React, { useState, useMemo, useEffect } from 'react';
import { useMultiFormModal } from "../../Context/ModalContext";
import { appointmentService } from '../../../services/appointmentService';
import { problemService } from '../../../services/problemService';
import { realEstateService } from '../../../services/realEstateService';

// Small built-in Modal used as a fallback when useMultiFormModal isn't available
const LocalModal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button className="text-gray-500 hover:text-gray-900" onClick={onClose}>✖</button>
        </div>
        <div>{children}</div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">Close</button>
        </div>
      </div>
    </div>
  );
};

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

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleString();
  } catch (e) {
    return iso;
  }
};

const emptyForm = {
  clientName: '',
  specialist: '',
  date: '',
  duration: '',
  type: '',
  status: 'scheduled',
  problemId: ''
};

export default function AppointmentsTab() {
  // try to use external modal context if available — fall back to local modal
  let modalCtx = null;
  try {
    modalCtx = useMultiFormModal?.();
  } catch (e) {
    // ignore — we'll use local modal
  }

  const externalOpenModal = modalCtx?.openModal;

  const [appointments, setAppointments] = useState([]);
  const [problems, setProblems] = useState([]);
  const [realEstates, setRealEstates] = useState([]);

  const [dataFilter, setDataFilter] = useState('all'); // all | appointments | problems | realestate
  const [timeFilter, setTimeFilter] = useState('All'); // Today / This Week / This Month / All

  const [selected, setSelected] = useState(null); // selected item for view/edit
  const [localModalOpen, setLocalModalOpen] = useState(false);
  const [localModalTitle, setLocalModalTitle] = useState('');
  const [calendarView, setCalendarView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [isEditing, setIsEditing] = useState(false);

  // fetch all three services in parallel
  useEffect(() => {
    let mounted = true;
    const loadAll = async () => {
      setLoading(true);
      setError(null);
      try {
        const [aRes, pRes, rRes] = await Promise.allSettled([
          appointmentService.getAppointments(),
          problemService.getProblems(),
          realEstateService.getRealEstates()
        ]);

        if (!mounted) return;

        if (aRes.status === 'fulfilled') setAppointments(Array.isArray(aRes.value) ? aRes.value : []);
        else console.warn('appointments failed', aRes.reason);

        if (pRes.status === 'fulfilled') setProblems(Array.isArray(pRes.value) ? pRes.value : []);
        else console.warn('problems failed', pRes.reason);

        if (rRes.status === 'fulfilled') setRealEstates(Array.isArray(rRes.value) ? rRes.value : []);
        else console.warn('real estates failed', rRes.reason);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to load data');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadAll();
    return () => { mounted = false; };
  }, []);

  // combined current view list depending on dataFilter
  const combinedList = useMemo(() => {
    if (dataFilter === 'appointments') return appointments.map(a => ({ __type: 'appointment', ...a }));
    if (dataFilter === 'problems') return problems.map(p => ({ __type: 'problem', ...p }));
    if (dataFilter === 'realestate') return realEstates.map(r => ({ __type: 'realestate', ...r }));
    // all: merge with type markers, sort by date if available
    const merged = [
      ...appointments.map(a => ({ __type: 'appointment', ...a })),
      ...problems.map(p => ({ __type: 'problem', ...p })),
      ...realEstates.map(r => ({ __type: 'realestate', ...r }))
    ];
    // try to sort by a date-like field when present
    merged.sort((x, y) => {
      const dx = x.date || x.created_at || x.submission_date || null;
      const dy = y.date || y.created_at || y.submission_date || null;
      if (!dx && !dy) return 0;
      if (!dx) return 1;
      if (!dy) return -1;
      return new Date(dy) - new Date(dx); // newest first
    });
    return merged;
  }, [dataFilter, appointments, problems, realEstates]);

  // apply simple time filter to combinedList when it's appointment-like
  const filteredList = useMemo(() => {
    if (timeFilter === 'All') return combinedList;
    const now = new Date();
    return combinedList.filter(item => {
      const dateStr = item.date || item.submission_date || item.created_at || null;
      if (!dateStr) return false;
      const d = new Date(dateStr);
      if (timeFilter === 'Today') return d.toDateString() === now.toDateString();
      if (timeFilter === 'This Week') {
        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay());
        const end = new Date(start);
        end.setDate(start.getDate() + 7);
        return d >= start && d < end;
      }
      if (timeFilter === 'This Month') return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      return true;
    });
  }, [combinedList, timeFilter]);

  function openEitherModal(action, payload = {}) {
    if (typeof externalOpenModal === 'function') {
      try {
        externalOpenModal(action, payload);
        return;
      } catch (e) {}
    }
    setSelected(payload?.item ?? payload?.appointment ?? null);
    setLocalModalTitle(action.charAt(0).toUpperCase() + action.slice(1));

    if (action === 'appointment' || action === 'reschedule') {
      setForm(payload?.appointment ? {
        clientName: payload.appointment.clientName || '',
        specialist: payload.appointment.specialist || '',
        date: payload.appointment.date ? new Date(payload.appointment.date).toISOString().slice(0,16) : '',
        duration: payload.appointment.duration || '',
        type: payload.appointment.type || '',
        status: payload.appointment.status || 'scheduled',
        problemId: payload.appointment.problemId || ''
      } : emptyForm);
      setIsEditing(!!payload?.appointment);
    }

    setLocalModalOpen(true);
  }

  const handleNew = () => openEitherModal('appointment', { mode: 'create' });
  const handleView = (item) => openEitherModal('view-item', { item });
  const handleEdit = (appointment) => openEitherModal('appointment', { appointment });

  const handleCancel = async (appointment) => {
    const ok = confirm(`Cancel appointment for ${appointment.clientName}?`);
    if (!ok) return;
    const prev = [...appointments];
    setAppointments(prev.map(a => a.id === appointment.id ? { ...a, status: 'cancelled' } : a));
    try {
      if (appointment.id) await appointmentService.updateAppointment(appointment.id, { ...appointment, status: 'cancelled' });
    } catch (err) {
      console.error(err);
      setAppointments(prev);
      alert('Failed to cancel appointment');
    }
  };

  const handleReports = () => {
    // export current filteredList to CSV
    const headers = ['__type','id','clientName','specialist','date','duration','type','status','problemId','file_no'];
    const rows = [headers.join(',')];
    for (const a of filteredList) {
      const row = headers.map(h => `"${String(a[h] ?? a[h.replace('__','')] ?? '')}"`).join(',');
      rows.push(row);
    }
    const csv = rows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `export_${dataFilter || 'all'}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleSaveEdited = async (edited) => {
    try {
      if (isEditing && edited.id) {
        const updated = await appointmentService.updateAppointment(edited.id, edited);
        setAppointments(prev => prev.map(a => a.id === edited.id ? updated : a));
      } else {
        const created = await appointmentService.createAppointment(edited);
        setAppointments(prev => [created, ...prev]);
      }
      setLocalModalOpen(false);
    } catch (err) {
      console.error(err);
      alert('Failed to save appointment');
    }
  };

  const handleDeleteAppointment = async (appointment) => {
    const ok = confirm(`Delete appointment for ${appointment.clientName}? This cannot be undone.`);
    if (!ok) return;
    const prev = [...appointments];
    setAppointments(prev.filter(a => a.id !== appointment.id));
    try {
      if (appointment.id) await appointmentService.deleteAppointment(appointment.id);
    } catch (err) {
      console.error(err);
      setAppointments(prev);
      alert('Failed to delete appointment');
    }
    setLocalModalOpen(false);
  };

  // handlers for local form inputs
  const onFormChange = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      date: form.date ? new Date(form.date).toISOString() : new Date().toISOString()
    };
    if (isEditing && selected) payload.id = selected.id;
    await handleSaveEdited(payload);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📅 Appointments & Submissions</h2>
        <p className="text-gray-600">Manage appointments, problem submissions and real estate records</p>
        {loading && <div className="text-sm text-gray-500">Loading...</div>}
        {error && <div className="text-sm text-red-500">{error}</div>}
      </div>

      {/* Filters and Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <select value={dataFilter} onChange={(e) => setDataFilter(e.target.value)} className="border rounded px-3 py-2">
            <option value="all">All</option>
            <option value="appointments">Appointments</option>
            <option value="problems">Problem Submissions</option>
            <option value="realestate">Real Estate</option>
          </select>

          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} className="border rounded px-3 py-2">
            <option>All</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button onClick={handleNew} className="bg-blue-500 text-white px-4 py-2 rounded">New Appointment</button>
          <button onClick={() => setCalendarView(v=>!v)} className="bg-green-500 text-white px-4 py-2 rounded">View Calendar</button>
          <button onClick={() => openEitherModal('reschedule', {})} className="bg-purple-500 text-white px-4 py-2 rounded">Reschedule</button>
          <button onClick={handleReports} className="bg-orange-500 text-white px-4 py-2 rounded">Export</button>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Records</h3>
        </div>

        {calendarView ? (
          <div className="p-6">(Dummy calendar) Toggle off to return to list view.</div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredList.length === 0 ? (
              <div className="p-6 text-sm text-gray-500">No records found.</div>
            ) : filteredList.map(item => (
              <div key={(item.id ?? item.file_no ?? Math.random())} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h4 className="font-semibold text-gray-900 text-lg">{item.__type === 'appointment' ? item.clientName : (item.__type === 'problem' ? item.full_name || item.clientName : item.file_no || item.title || 'Record')}</h4>
                      {item.__type === 'appointment' && getStatusBadge(item.status)}
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">{item.__type}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      {item.__type === 'appointment' && (
                        <>
                          <div><span className="font-semibold">Specialist:</span> {item.specialist}</div>
                          <div><span className="font-semibold">Date:</span> {formatDate(item.date)}</div>
                          <div><span className="font-semibold">Duration:</span> {item.duration}</div>
                          <div><span className="font-semibold">Type:</span> {item.type}</div>
                        </>
                      )}

                      {item.__type === 'problem' && (
                        <>
                          <div><span className="font-semibold">Phone:</span> {item.phone || item.contact_phone || '-'}</div>
                          <div><span className="font-semibold">Email:</span> {item.email || '-'}</div>
                          <div><span className="font-semibold">Category:</span> {item.problem_category || item.problemCategory || '-'}</div>
                          <div><span className="font-semibold">Priority:</span> {item.priority_level || item.urgencyLevel || '-'}</div>
                        </>
                      )}

                      {item.__type === 'realestate' && (
                        <>
                          <div><span className="font-semibold">File No:</span> {item.file_no || item.fileNo || '-'}</div>
                          <div><span className="font-semibold">Owner:</span> {item.owner_name || item.owner || '-'}</div>
                          <div><span className="font-semibold">Location:</span> {item.location || '-'}</div>
                          <div><span className="font-semibold">Status:</span> {item.status || '-'}</div>
                        </>
                      )}
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                      {item.__type === 'appointment' ? `Problem ID: ${item.problemId || item.problem_id || '-'}` : ''}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4 lg:mt-0">
                    <button onClick={() => handleView(item)} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">👁️ View</button>
                    {item.__type === 'appointment' && (
                      <>
                        <button onClick={() => { setSelected(item); openEitherModal('appointment', { appointment: item }); }} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">✏️ Edit</button>
                        <button onClick={() => handleCancel(item)} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors">🗑️ Cancel</button>
                      </>
                    )}
                    {item.__type === 'problem' && (
                      <button onClick={() => alert('Open problem details (implement)')} className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-600 transition-colors">Details</button>
                    )}
                    {item.__type === 'realestate' && (
                      <button onClick={() => alert('Open real estate details (implement)')} className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-600 transition-colors">Details</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Local modal fallback (or used alongside external) */}
      <LocalModal open={localModalOpen} onClose={() => { setLocalModalOpen(false); setSelected(null); setIsEditing(false); setForm(emptyForm); }} title={localModalTitle}>
        {localModalTitle.toLowerCase().includes('view') && selected ? (
          <div>
            <pre className="text-xs bg-gray-50 p-2 rounded">{JSON.stringify(selected, null, 2)}</pre>
          </div>
        ) : (
          // Create / Edit form (only for appointments)
          <form onSubmit={onSubmitForm} className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Client Name</label>
              <input required value={form.clientName} onChange={(e) => onFormChange('clientName', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Specialist</label>
              <input required value={form.specialist} onChange={(e) => onFormChange('specialist', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Date & Time</label>
              <input required type="datetime-local" value={form.date} onChange={(e) => onFormChange('date', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration</label>
              <input value={form.duration} onChange={(e) => onFormChange('duration', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Type</label>
              <input value={form.type} onChange={(e) => onFormChange('type', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Status</label>
              <select value={form.status} onChange={(e) => onFormChange('status', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2">
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Problem ID</label>
              <input value={form.problemId} onChange={(e) => onFormChange('problemId', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>

            <div className="flex justify-end space-x-2">
              <button type="button" onClick={() => { setLocalModalOpen(false); setForm(emptyForm); setSelected(null); setIsEditing(false); }} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">{isEditing ? 'Save Changes' : 'Create'}</button>
            </div>
          </form>
        )}
      </LocalModal>

    </div>
  );
}
