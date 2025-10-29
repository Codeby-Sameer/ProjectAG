import { useFormik } from 'formik';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import * as Yup from 'yup';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
       <Mail/>  
      ),
      title: 'Email Us',
      details: ['info@anandgroup.com', 'support@anandgroup.com']
    },
    {
      icon: (
       <Phone/>
      ),
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568']
    },
    {
      icon: (
        <MapPin/>
      ),
      title: 'Visit Us',
      details: ['123 Business Avenue', 'Suite 100, Business District', 'New York, NY 10001']
    },
    {
      icon: (
       <Clock/>
      ),
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

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
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('Form submitted:', values);
      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        // Show success message
        alert('Appointment booked successfully! We will contact you soon.');
      }, 2000);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl lg:text-7xl mb-6">📅</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Schedule a meeting with our team to discuss your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="bg-gold text-navy p-3 rounded-lg mr-6 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-navy mb-1">
                          {item.title}
                        </h3>
                        <div className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="pt-6">
                  <h4 className="text-xl font-semibold text-navy mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                      <div
                        key={platform}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer border border-gray-200"
                      >
                        <span className="text-gold font-semibold">
                          {platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-3">
                    Book Your Appointment
                  </h2>
                  <p className=" text-gray-600">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-md">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md ${
                        formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500 text-sm mt-2">{formik.errors.name}</div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md ${
                        formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-500 text-sm mt-2">{formik.errors.phone}</div>
                    )}
                  </div>

                  {/* Department Field */}
                  <div>
                    <label htmlFor="department" className="block text-gray-700 font-semibold mb-2 text">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.department}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md ${
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
                      <div className="text-red-500 text-sm mt-2">{formik.errors.department}</div>
                    )}
                  </div>

                  {/* Date and Time Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-gray-700 font-semibold mb-2 text">
                        Preferred Date *
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md ${
                          formik.touched.date && formik.errors.date ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formik.touched.date && formik.errors.date && (
                        <div className="text-red-500 text-sm mt-2">{formik.errors.date}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-gray-700 font-semibold mb-2 text">
                        Preferred Time *
                      </label>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md ${
                          formik.touched.time && formik.errors.time ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formik.touched.time && formik.errors.time && (
                        <div className="text-red-500 text-sm mt-2">{formik.errors.time}</div>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-md resize-none ${
                        formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="text-red-500 text-sm mt-2">{formik.errors.message}</div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-gradient-to-r from-gold to-yellow-400 text-navy py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-gold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {formik.isSubmitting ? 'Booking Appointment...' : 'Book Appointment Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;