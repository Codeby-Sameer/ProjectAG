import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import AppointmentForm from './Context/AppointmentForm'; // Import the form component

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email Us',
      details: ['info@anandgroup.com', 'support@anandgroup.com']
    },
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568']
    },
    {
      icon: <MapPin size={20} />,
      title: 'Visit Us',
      details: ['123 Business Avenue', 'Suite 100, Business District', 'New York, NY 10001']
    },
    {
      icon: <Clock size={20} />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-12 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl lg:text-7xl mb-4 lg:mb-6">📅</div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg lg:text-2xl text-blue-100 leading-relaxed px-2">
              Schedule a meeting with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              
              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-4 lg:mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    We're here to help and answer any questions you might have.
                  </p>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 lg:p-6 bg-white rounded-lg lg:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="bg-gold text-navy p-2 lg:p-3 rounded-lg mr-4 lg:mr-6 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-semibold text-navy mb-1">
                          {item.title}
                        </h3>
                        <div className="space-y-1 lg:space-y-2">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm lg:text-base">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="pt-4 lg:pt-6">
                  <h4 className="text-lg lg:text-xl font-semibold text-navy mb-3 lg:mb-4">Follow Us</h4>
                  <div className="flex flex-wrap gap-2 lg:gap-4">
                    {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                      <div
                        key={platform}
                        className="bg-white  group hover:bg-navy  p-3 lg:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200"
                      >
                        <span className="text-navy group-hover:text-white font-semibold text-sm lg:text-base">
                          {platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Imported Appointment Form Component */}
             <div>
              <div className='text-2xl lg:text-4xl text-center font-bold text-navy mb-4 lg:mb-6'>
                Book Your Appointment
              </div>
               <AppointmentForm />
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;