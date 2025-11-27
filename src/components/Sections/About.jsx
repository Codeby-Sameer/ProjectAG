// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaFilm, 
  FaHammer, 
  FaShieldAlt, 
  FaBullseye, 
  FaUsers, 
  FaHeart, 
  FaHome, 
  FaAward, 
  FaSmile,
  FaHandshake,
  FaStar,
  FaRocket
} from 'react-icons/fa';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
              variants={itemVariants}
            >
              Building Dreams, <span className="text-blue-700">Creating Legacies</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-blue-700 mx-auto mb-6 rounded-full"
              variants={itemVariants}
            ></motion.div>
            <motion.p 
              className="text-base md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
              variants={itemVariants}
            >
              For over two decades, Anand Group has been more than just a business—we've been a trusted partner 
              in growth. From your first home to your biggest investments, we believe everyone deserves 
              quality, transparency, and lasting value that stands the test of time.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Column - Our Story & Stats */}
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Our Story */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaHeart className="w-6 h-6 md:w-7 md:h-7 text-blue-700" />
                  </div>
                  Our Story
                </h3>
                <div className="space-y-4 text-slate-600 mb-8">
                  <p className="text-sm md:text-lg leading-relaxed">
                    It all started with a simple vision: to create spaces and experiences that enrich lives. 
                    What began as a small real estate venture has blossomed into a multi-sector enterprise, 
                    but our core values have remained unchanged.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed">
                    We understand that trust is earned, not given. That's why every project we undertake, 
                    every home we build, and every film we produce carries the same commitment to excellence 
                    and ethical practices that defined our very first endeavor.
                  </p>
                </div>

                {/* Stats Cards - Small Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  {/* Stat 1 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <FaHome className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">500+</div>
                    <div className="text-sm text-slate-600 font-medium">Projects</div>
                  </motion.div>

                  {/* Stat 2 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <FaAward className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">20+</div>
                    <div className="text-sm text-slate-600 font-medium">Years</div>
                  </motion.div>

                  {/* Stat 3 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <FaUsers className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">10K+</div>
                    <div className="text-sm text-slate-600 font-medium">Clients</div>
                  </motion.div>

                  {/* Stat 4 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <FaSmile className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">98%</div>
                    <div className="text-sm text-slate-600 font-medium">Satisfaction</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - What Makes Us Different */}
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* What Makes Us Different */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaShieldAlt className="w-6 h-6 md:w-7 md:h-7 text-blue-700" />
                  </div>
                  What Makes Us Different
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaBullseye className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">Transparency First</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        No hidden clauses, no surprise costs. We believe in clear documentation and 
                        honest communication from day one.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaHammer className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">Quality That Lasts</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        We use premium materials and follow rigorous construction standards because 
                        your safety and satisfaction are non-negotiable.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaUsers className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">For Everyone</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        From first-time homebuyers to established businesses, we create solutions 
                        that are accessible without compromising on quality.
                      </p>
                    </div>
                  </motion.div>

                  {/* Additional Feature Card */}
                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaHandshake className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">Trusted Partnership</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        We build lasting relationships with our clients, supporting them beyond project 
                        completion with dedicated after-sales service.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Vision Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {/* Mission */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRocket className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To create exceptional value through innovative solutions, sustainable practices, 
                and unwavering commitment to quality across all our business divisions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaStar className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and respected conglomerate, transforming communities 
                and enriching lives through diversified excellence and social responsibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;