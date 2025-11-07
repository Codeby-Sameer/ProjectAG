import { useFormik } from 'formik';
import * as Yup from 'yup';
import { appointmentService } from '../../services/appointmentService';

const AppointmentForm = () => {
  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\+?[\d\s-()]+$/, 'Invalid phone number')
      .required('Phone number is required'),
    department: Yup.string()
      .required('Please select a department'),
    date: Yup.date()
      .min(new Date(), 'Please select a future date')
      .required('Date is required'),
    time: Yup.string()
      .required('Time is required'),
    message: Yup.string()
      .max(500, 'Message must be less than 500 characters')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      time: '',
      message: ''
    },
    validationSchema,
    onSubmit:async (values, { setSubmitting, resetForm }) => {
      console.log('Form submitted:', values);
      try {
          const response = await appointmentService.createAppointment(values);
          console.log('✅ Submission successful:', response);
          // Optionally show success UI or redirect
        } catch (error) {
          console.error('❌ Submission failed:', error);
          // Optionally show error UI
        }
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        // Show success message
        alert('Appointment booked successfully! We will contact you soon.');
      }, 2000);
    }
  });

  return (
    <div className="bg-white p-4 lg:p-10 rounded-lg lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-100">
      <div className="text-center mb-4 lg:mb-3">
        
        <p className="text-gray-600 text-xs lg:text-base">
          Fill out the form and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-3 lg:space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base ${
              formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.name}</div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base ${
              formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.phone}</div>
          )}
        </div>

        {/* Department Field */}
        <div>
          <label htmlFor="department" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
            Department *
          </label>
          <select
            id="department"
            name="department"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.department}
            className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base ${
              formik.touched.department && formik.errors.department ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a department</option>
            <option value="production">Film Production</option>
            <option value="real-estate">Real Estate</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="general">General Inquiry</option>
          </select>
          {formik.touched.department && formik.errors.department && (
            <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.department}</div>
          )}
        </div>

        {/* Date and Time Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
              Preferred Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base ${
                formik.touched.date && formik.errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.date && formik.errors.date && (
              <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.date}</div>
            )}
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
              Preferred Time *
            </label>
            <input
              id="time"
              name="time"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base ${
                formik.touched.time && formik.errors.time ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.time && formik.errors.time && (
              <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.time}</div>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1 lg:mb-2 text-xs lg:text-base">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm lg:text-base resize-none ${
              formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your project or inquiry..."
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-xs lg:text-sm mt-1">{formik.errors.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-navy text-white py-3 lg:py-4 rounded-lg font-bold text-sm lg:text-lg hover:from-yellow-400 hover:to-gold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {formik.isSubmitting ? 'Booking Appointment...' : 'Book Appointment Now'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;