import { FaFacebookF, FaCalendarAlt, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import AppointmentForm from './Context/AppointmentForm';
import { motion } from 'framer-motion';


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 1
    }
  }
};





const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email Us',
      details: ['info@anandgroup.com', 'support@anandgroup.com']
    },
    {
      icon: <FaPhone size={20} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568']
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Visit Us',
      details: [ 'H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.']
    },
    {
      icon: <FaClock size={20} />,
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

      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-purple-900 text-white py-16 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-30 blur-lg"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-12 h-12 bg-cyan-300 rounded-full opacity-25 blur-lg"
            animate={{
              x: [0, 60, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Icon/Graphic */}
            <motion.div
              className="relative inline-flex items-center justify-center mb-8 lg:mb-12"
              variants={iconVariants}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                <div className="relative bg-gradient-to-br from-white to-blue-100 p-6 lg:p-8 rounded-2xl shadow-2xl">
                  <FaCalendarAlt className="w-10 h-10 lg:w-12 lg:h-12 text-navy" />
                </div>
              </div>

              {/* Floating elements around main icon */}
              <motion.div
                className="absolute -top-2 -right-2 bg-yellow-400 text-navy p-2 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaPhone className="w-4 h-4" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 bg-green-400 text-navy p-2 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaEnvelope className="w-4 h-4" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl sm:text-4xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
              variants={itemVariants}
            >
              Let's Start{" "}
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Talking
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-md lg:text-2xl text-blue-100 leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Connect with our team and discover how we can help your business grow
            </motion.p>



          </motion.div>
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
                      <div className="bg-yellow-400 text-white p-2 lg:p-3 rounded-lg mr-4 lg:mr-6 flex-shrink-0">
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
                    {[
                      {
                        name: 'Facebook',
                        icon: <FaFacebookF className="w-4 h-4 lg:w-5 lg:h-5" />,
                        url: 'https://facebook.com'
                      },
                      {
                        name: 'Twitter',
                        icon: <FaTwitter className="w-4 h-4 lg:w-5 lg:h-5" />,
                        url: 'https://twitter.com'
                      },
                      {
                        name: 'LinkedIn',
                        icon: <FaLinkedinIn className="w-4 h-4 lg:w-5 lg:h-5" />,
                        url: 'https://linkedin.com'
                      },
                      {
                        name: 'Instagram',
                        icon: <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />,
                        url: 'https://instagram.com'
                      }
                    ].map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white group hover:bg-navy p-3 lg:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200"
                        aria-label={`Follow us on ${platform.name}`}
                      >
                        <span className="text-navy group-hover:text-white">
                          {platform.icon}
                        </span>
                      </a>
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