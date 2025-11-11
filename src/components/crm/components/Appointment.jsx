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
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl p-6">
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

const formatDate = (isoOrDate) => {
  if (!isoOrDate) return '-';
  try {
    const d = new Date(isoOrDate);
    if (isNaN(d)) return String(isoOrDate);
    return d.toLocaleString();
  } catch (e) {
    return String(isoOrDate);
  }
};

// combine appointment date/time (some appointments have date + time separate)
const formatDateTimeFromItem = (item) => {
  // appointment sample: date: "2025-11-15", time: "10:00"
  if (!item) return '-';
  if (item.date && item.time) {
    // combine as local date+time
    try {
      const combined = `${item.date}T${item.time.length === 5 ? item.time : item.time + ':00'}`;
      const d = new Date(combined);
      return isNaN(d) ? `${item.date} ${item.time}` : d.toLocaleString();
    } catch (e) {
      return `${item.date} ${item.time}`;
    }
  }
  if (item.date) return formatDate(item.date);
  if (item.created_at) return formatDate(item.created_at);
  if (item.createdAt) return formatDate(item.createdAt);
  return '-';
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
 
  const {openModal} = useMultiFormModal();
  /* ignore */ }

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

  // normalize display fields and build combined list
  const combinedList = useMemo(() => {
    const appts = (appointments || []).map(a => ({
      __type: 'appointment',
      // unify common names
      id: a.id,
      clientName: a.clientName || a.name || a.full_name || a.fullName,
      specialist: a.specialist || a.department,
      date: a.date || a.appointment_date || a.created_at,
      time: a.time || a.appointment_time,
      duration: a.duration,
      type: a.type || a.appointment_type,
      status: a.status || 'scheduled',
      raw: a
    }));

    const probs = (problems || []).map(p => ({
      __type: 'problem',
      id: p.id,
      full_name: p.full_name || p.fullName || p.name,
      email: p.email,
      phone: p.phone,
      problem_category: p.problem_category || p.problemCategory,
      priority_level: p.priority_level || p.priorityLevel,
      created_at: p.created_at || p.createdAt,
      status: p.status || p.is_resolved ? 'resolved' : 'pending',
      raw: p
    }));

    const re = (realEstates || []).map(r => ({
      __type: 'realestate',
      id: r.id,
      file_no: r.file_no || r.fileNo || r.fileNo,
      owner_name: r.document_holder || r.owner || r.owner_name || r.document_holder,
      location: r.location || r.village || r.mandal || r.district,
      extent: r.extent,
      survey_no: r.survey_no || r.surveyNo,
      passbook_number: r.passbook_number || r.passbookNumber || r.passbook_number,
      sale: r.sale,
      date: r.date || r.created_at || r.file_no?.startsWith('RE-') ? (r.date || null) : null,
      raw: r
    }));

    const merged = [...appts, ...probs, ...re];

    // sort by best available date-like field (newest first)
    merged.sort((x, y) => {
      const xf = x.date || x.created_at || (x.raw && x.raw.created_at) || null;
      const yf = y.date || y.created_at || (y.raw && y.raw.created_at) || null;
      if (!xf && !yf) return 0;
      if (!xf) return 1;
      if (!yf) return -1;
      const dx = new Date(xf);
      const dy = new Date(yf);
      if (isNaN(dx) || isNaN(dy)) return 0;
      return dy - dx;
    });

    return merged;
  }, [appointments, problems, realEstates]);

  // apply simple time filter to combinedList
  const filteredList = useMemo(() => {
    if (timeFilter === 'All') return combinedList;
    const now = new Date();
    return combinedList.filter(item => {
      const dateStr = item.date || item.created_at || item.raw?.created_at || null;
      if (!dateStr) return false;
      const d = new Date(dateStr);
      if (isNaN(d)) return false;
      if (timeFilter === 'Today') return d.toDateString() === now.toDateString();
      if (timeFilter === 'This Week') {
        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay());
        start.setHours(0,0,0,0);
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

    // if payload contains appointment/problem/realestate or item, set selected
    const item = payload?.item ?? payload?.appointment ?? payload?.problem ?? payload?.realestate ?? null;
    setSelected(item);
    setLocalModalTitle(action.charAt(0).toUpperCase() + action.slice(1));

    if (action === 'appointment' || action === 'reschedule') {
      const appointment = payload?.appointment;
      setForm(appointment ? {
        clientName: appointment.clientName || appointment.name || '',
        specialist: appointment.specialist || appointment.department || '',
        date: appointment.date ? new Date(appointment.date).toISOString().slice(0,16) : '',
        duration: appointment.duration || '',
        type: appointment.type || '',
        status: appointment.status || 'scheduled',
        problemId: appointment.problemId || ''
      } : emptyForm);
      setIsEditing(!!appointment);
    }

    setLocalModalOpen(true);
  }

  const handleNew = () => openEitherModal('appointment', { mode: 'create' });
  const handleView = (item) => openEitherModal('view', { item });
  const handleEdit = (appointment) => openEitherModal('appointment', { appointment });

  const handleCancel = async (appointment) => {
    const ok = confirm(`Cancel appointment for ${appointment.clientName || appointment.name}?`);
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
    const headers = ['__type','id','title','clientName','specialField','date','raw'];
    const rows = [headers.join(',')];
    for (const a of filteredList) {
      const title = a.__type === 'appointment' ? (a.clientName || a.raw?.name || '') : (a.__type === 'problem' ? (a.full_name || a.raw?.full_name || '') : (a.file_no || a.raw?.file_no || ''));
      const specialField = a.__type === 'realestate' ? (a.location || '') : (a.__type === 'problem' ? (a.problem_category || '') : (a.specialist || ''));
      const row = [
        `"${a.__type}"`,
        `"${String(a.id ?? '')}"`,
        `"${title}"`,
        `"${String(a.clientName ?? '')}"`,
        `"${specialField}"`,
        `"${String(a.date ?? a.created_at ?? '')}"`,
        `"${JSON.stringify(a.raw ?? {})}"`
      ].join(',');
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
      setForm(emptyForm);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert('Failed to save appointment');
    }
  };

  const handleDeleteAppointment = async (appointment) => {
    const ok = confirm(`Delete appointment for ${appointment.clientName || appointment.name}? This cannot be undone.`);
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

  // Render the view card depending on selected.__type
  const ViewCard = ({ item }) => {
    if (!item) return null;
    const raw = item.raw || item;

    if (item.__type === 'appointment') {
      return (
        <div className="space-y-4">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold">{item.clientName || raw.name}</h4>
                <p className="text-sm text-gray-500">{raw.department || item.specialist || raw.specialist}</p>
              </div>
              <div className="text-right">
                {getStatusBadge(item.status)}
                <div className="text-xs text-gray-500 mt-1">{formatDateTimeFromItem(raw)}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm text-gray-700">
              <div><span className="font-semibold">Phone:</span> {raw.phone || raw.contact || '-'}</div>
              <div><span className="font-semibold">Email:</span> {raw.email || '-'}</div>
              <div><span className="font-semibold">Department / Specialist:</span> {raw.department || item.specialist || '-'}</div>
              <div><span className="font-semibold">Duration:</span> {raw.duration || item.duration || '-'}</div>
              <div className="md:col-span-2"><span className="font-semibold">Message:</span> <div className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{raw.message || raw.problem_summary || '-'}</div></div>
              <div><span className="font-semibold">Appointment ID:</span> {raw.id || '-'}</div>
            </div>
          </div>
        </div>
      );
    }

    if (item.__type === 'problem') {
      return (
        <div className="space-y-4">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold">{item.full_name || raw.full_name || raw.fullName || raw.clientName || 'Problem Submission'}</h4>
                <p className="text-sm text-gray-500">Category: {raw.problem_category || raw.problemCategory || '-'}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">{formatDate(raw.created_at || raw.createdAt)}</div>
                <div className="text-xs text-gray-500">Status: {raw.status || (raw.is_resolved ? 'Resolved' : 'Pending')}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm text-gray-700">
              <div><span className="font-semibold">Phone:</span> {raw.phone || '-'}</div>
              <div><span className="font-semibold">Email:</span> {raw.email || '-'}</div>
              <div><span className="font-semibold">Priority:</span> {raw.priority_level || raw.priorityLevel || '-'}</div>
              <div className="md:col-span-2"><span className="font-semibold">Summary:</span> <div className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{raw.problem_summary || raw.message || '-'}</div></div>
              <div className="md:col-span-2"><span className="font-semibold">Other fields:</span> <div className="text-xs text-gray-500 mt-1">{JSON.stringify(raw)}</div></div>
            </div>
          </div>
        </div>
      );
    }

    // realestate
    if (item.__type === 'realestate') {
      return (
        <div className="space-y-4">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold">File: {item.file_no || raw.file_no || raw.fileNo || '—'}</h4>
                <p className="text-sm text-gray-500">Owner: {item.owner_name || raw.document_holder || raw.owner || '-'}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">{formatDate(raw.date || raw.created_at)}</div>
                <div className="text-xs text-gray-500">Sale: {raw.sale || raw.sale === 'YES' ? 'Yes' : (raw.sale === 'NO' ? 'No' : (raw.sale ? String(raw.sale) : '-'))}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm text-gray-700">
              <div><span className="font-semibold">Location:</span> {raw.location || raw.village || raw.mandal || raw.district || '-'}</div>
              <div><span className="font-semibold">Extent:</span> {raw.extent || '-'}</div>
              <div><span className="font-semibold">Survey No:</span> {raw.survey_no || raw.surveyNo || '-'}</div>
              <div><span className="font-semibold">Passbook No:</span> {raw.passbook_number || raw.passbookNumber || '-'}</div>
              <div className="md:col-span-2"><span className="font-semibold">Notes:</span> <div className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{raw.note || raw.notes || '-'}</div></div>
              <div className="md:col-span-2"><span className="font-semibold">Documents & Flags:</span>
                <div className="text-xs text-gray-500 mt-1">
                  Adangal: {raw.adangal || raw.oneb || '-'} • EC Digital: {raw.ec_digital ?? raw.ecDigital ?? '-'} • FMB Sketch: {raw.fmb_sketch ?? '-'}
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Full JSON (for debug): <pre className="bg-gray-50 p-2 rounded mt-2 text-xs overflow-auto">{JSON.stringify(raw, null, 2)}</pre></div>
        </div>
      );
    }

    // fallback
    return <pre className="text-xs bg-gray-50 p-2 rounded">{JSON.stringify(item, null, 2)}</pre>;
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
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {item.__type === 'appointment'
                          ? (item.clientName || item.raw?.name || 'Appointment')
                          : (item.__type === 'problem'
                            ? (item.full_name || item.raw?.full_name || 'Problem')
                            : (item.file_no || item.raw?.file_no || 'Real Estate'))}
                      </h4>
                      {item.__type === 'appointment' && getStatusBadge(item.status)}
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">{item.__type}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      {item.__type === 'appointment' && (
                        <>
                          <div><span className="font-semibold">Specialist:</span> {item.specialist}</div>
                          <div><span className="font-semibold">Date:</span> {formatDateTimeFromItem(item.raw || item)}</div>
                          <div><span className="font-semibold">Duration:</span> {item.duration || '-'}</div>
                          <div><span className="font-semibold">Type:</span> {item.type || '-'}</div>
                        </>
                      )}

                      {item.__type === 'problem' && (
                        <>
                          <div><span className="font-semibold">Phone:</span> {item.phone || item.raw?.phone || '-'}</div>
                          <div><span className="font-semibold">Email:</span> {item.email || '-'}</div>
                          <div><span className="font-semibold">Category:</span> {item.problem_category || '-'}</div>
                          <div><span className="font-semibold">Priority:</span> {item.priority_level || '-'}</div>
                        </>
                      )}

                      {item.__type === 'realestate' && (
                        <>
                          <div><span className="font-semibold">File No:</span> {item.file_no || '-'}</div>
                          <div><span className="font-semibold">Owner:</span> {item.owner_name || '-'}</div>
                          <div><span className="font-semibold">Location:</span> {item.location || '-'}</div>
                          <div><span className="font-semibold">Extent:</span> {item.extent || '-'}</div>
                        </>
                      )}
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                      {item.__type === 'appointment' ? `Problem ID: ${item.problemId || item.raw?.problem_id || '-'}` : ''}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4 lg:mt-0">
                    <button onClick={() => handleView(item)} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">👁️ View</button>
                    {item.__type === 'appointment' && (
                      <>
                        <button onClick={() => { setSelected(item); openModal('appointment', ); }} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">✏️ Edit</button>
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
          <ViewCard item={selected} />
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
