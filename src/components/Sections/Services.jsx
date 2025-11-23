// components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import Devocation from '../Devocation';





// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const BusinessDivisions = () => {
  const divisions = [
    {
      id: 1,
      name: "Anand Events, Media & Awards",
      tagline: "Crafting Experiences. Creating Influence. Celebrating Excellence.",
      description: "Anand Events turns ideas into extraordinary experiences with high-impact events that blend creativity, technology, and flawless execution. Anand Media empowers through meaningful storytelling, while Anand Awards honors exceptional talent across industries.",
      icon: "🎪",
      color: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      features: [
        { icon: "🎬", title: "Film & Entertainment Events", desc: "Audio launches, trailer events, release shows" },
        { icon: "🏢", title: "Corporate Events", desc: "Galas, product launches, celebrity appearances" },
        { icon: "📡", title: "Media Production", desc: "Satellite channel, podcasts, inspirational content" },
        { icon: "🏆", title: "Award Ceremonies", desc: "Business, pharma, film & entertainment honors" }
      ],
      services: [
        {
          title: "Event Management",
          description: "Grand audio launches, movie release shows, corporate galas and cultural festivals",
          icon: "🎉",
          color: "from-orange-400 to-orange-600"
        },
        {
          title: "Media Production",
          description: "Satellite channel programming, podcast series with achievers and visionaries",
          icon: "🎙️",
          color: "from-yellow-400 to-yellow-600"
        },
        {
          title: "Awards & Recognition",
          description: "Prestigious award ceremonies celebrating excellence across diverse industries",
          icon: "⭐",
          color: "from-amber-400 to-amber-600"
        }
      ]
    },
    {
      id: 2,
      name: "Anand Imports & Exports",
      tagline: "Connecting Markets. Delivering Excellence. Expanding Global Possibilities.",
      description: "A dynamic global trading enterprise bridging national and international markets. We specialize in smooth movement of quality goods across borders with strong sourcing networks and strategic partnerships.",
      icon: "🌐",
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [
        { icon: "📦", title: "Global Export", desc: "Premium goods to international markets" },
        { icon: "🚚", title: "National Distribution", desc: "Pan-India supply chain network" },
        { icon: "📊", title: "Import Solutions", desc: "Sourcing to customs clearance" },
        { icon: "🏭", title: "Multi-Industry", desc: "Consumer goods, electronics, textiles" }
      ],
      services: [
        {
          title: "International Trade",
          description: "Exporting premium-quality goods to global markets meeting international standards",
          icon: "✈️",
          color: "from-blue-400 to-blue-600"
        },
        {
          title: "Domestic Distribution",
          description: "Well-established logistics and supply chain system across Indian states",
          icon: "🇮🇳",
          color: "from-cyan-400 to-cyan-600"
        },
        {
          title: "Import Management",
          description: "Wide range of goods from trusted international suppliers with quality assurance",
          icon: "📦",
          color: "from-sky-400 to-sky-600"
        }
      ]
    },
    {
      id: 3,
      name: "Anand Technology & Safety",
      tagline: "Redefining Travel Safety Through Innovation, Monitoring, and Human Excellence.",
      description: "Transforming transportation through intelligent safety solutions, robust vehicle monitoring systems, and human-driven responsibility. We focus on elevating safety standards and enhancing passenger confidence.",
      icon: "🔒",
      color: "from-slate-600 to-slate-700",
      bgGradient: "from-slate-50 to-gray-50",
      features: [
        { icon: "📡", title: "Smart Sensors", desc: "Multi-layered hazard detection systems" },
        { icon: "🚗", title: "Vehicle Fitness", desc: "Comprehensive pre-tour safety checks" },
        { icon: "👨‍💼", title: "Driver Excellence", desc: "Recognition and training programs" },
        { icon: "🍱", title: "Travel Comfort", desc: "Pre-ordered meal systems" }
      ],
      services: [
        {
          title: "Safety Systems",
          description: "Advanced transport safety with real-time monitoring and emergency response",
          icon: "🛡️",
          color: "from-slate-500 to-slate-700"
        },
        {
          title: "Vehicle Protocol",
          description: "Detailed vehicle assessment and certification before every tour",
          icon: "🔧",
          color: "from-gray-500 to-gray-700"
        },
        {
          title: "Driver Empowerment",
          description: "Recognition programs and skill development for safe driving excellence",
          icon: "👨‍✈️",
          color: "from-zinc-500 to-zinc-700"
        }
      ]
    },
    {
      id: 4,
      name: "Anand Pharma",
      tagline: "Making healthcare truly accessible - genuine medicines in just 15 minutes.",
      description: "Our vision is to make healthcare accessible where genuine medicines reach every doorstep quickly. We empower users with real choices, offering equivalent medicines with transparent pricing across trusted brands.",
      icon: "💊",
      color: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50",
      features: [
        { icon: "⚡", title: "15-Minute Delivery", desc: "Rapid medicine access" },
        { icon: "🏪", title: "Multiple Brands", desc: "Equivalent medicine options" },
        { icon: "💳", title: "Transparent Pricing", desc: "Clear cost information" },
        { icon: "🔬", title: "Quality Assured", desc: "Licensed pharmacy expertise" }
      ],
      services: [
        {
          title: "Fast Delivery",
          description: "Genuine medicines delivered to your doorstep within 15 minutes",
          icon: "🚀",
          color: "from-green-400 to-green-600"
        },
        {
          title: "Choice & Trust",
          description: "Multiple trusted brands with same formula and transparent pricing",
          icon: "🛒",
          color: "from-emerald-400 to-emerald-600"
        },
        {
          title: "Healthcare Ecosystem",
          description: "Advanced technology combined with licensed pharmacy expertise",
          icon: "🏥",
          color: "from-teal-400 to-teal-600"
        }
      ]
    },
    {
      id: 5,
      name: "Anand Devocation",
      tagline: "Soulful pilgrimage experiences in their purest and most meaningful form.",
      description: "Created for devotees who wish to experience pilgrimage in its truest form. We offer thoughtfully curated journeys to sacred destinations with complete guidance, knowledge, and support.",
      icon: "🙏",
      color: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-50 to-orange-50",
      features: [
        { icon: "🛕", title: "Sacred Journeys", desc: "Curated spiritual experiences" },
        { icon: "📚", title: "Cultural Immersion", desc: "Authentic temple knowledge" },
        { icon: "🏨", title: "Themed Stays", desc: "Culturally inspired accommodations" },
        { icon: "🧘", title: "Soulful Retreat", desc: "Inner peace and clarity" }
      ],
      services: [
        {
          title: "Pilgrimage Tours",
          description: "Thoughtfully curated journeys to sacred destinations with complete guidance",
          icon: "🛤️",
          color: "from-yellow-400 to-yellow-600"
        },
        {
          title: "Cultural Experience",
          description: "Authentic temple history, rituals, traditions and cultural significance",
          icon: "🎎",
          color: "from-amber-400 to-amber-600"
        },
        {
          title: "Sacred Retreats",
          description: "Thematic experiences that help devotees connect deeply with divine atmosphere",
          icon: "☮️",
          color: "from-orange-400 to-orange-600"
        }
      ]
    },
    {
      id: 6,
      name: "Anand Yatra",
      tagline: "Effortless, enriching, and perfectly organized travel experiences.",
      description: "We believe every journey should be effortless and perfectly organized. Our team takes complete responsibility for planning your entire travel experience ensuring seamless and stress-free journeys.",
      icon: "✈️",
      color: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      features: [
        { icon: "📅", title: "End-to-End Planning", desc: "Complete travel coordination" },
        { icon: "🏨", title: "Accommodation", desc: "Hotels and homestays arranged" },
        { icon: "🗺️", title: "Personalized Itinerary", desc: "Comprehensive travel routes" },
        { icon: "⏰", title: "Perfect Timing", desc: "Thoughtfully planned schedules" }
      ],
      services: [
        {
          title: "Complete Travel Planning",
          description: "End-to-end travel coordination from flights to accommodation and local experiences",
          icon: "🗓️",
          color: "from-cyan-400 to-cyan-600"
        },
        {
          title: "Personalized Itineraries",
          description: "Comprehensive, customized travel plans for single or multiple destinations",
          icon: "🧭",
          color: "from-blue-400 to-blue-600"
        },
        {
          title: "Seamless Coordination",
          description: "Perfectly organized journeys with every moment thoughtfully planned",
          icon: "⚡",
          color: "from-sky-400 to-sky-600"
        }
      ]
    },
    {
      id: 7,
      name: "Anand Celebrity Service",
      tagline: "Secure, luxurious, and discreet travel services for high-profile individuals.",
      description: "Understanding the unique lifestyle demands of celebrities and high-profile professionals. We provide complete end-to-end service with security, luxury, and uncompromising discretion.",
      icon: "⭐",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: [
        { icon: "🚗", title: "Luxury Transport", desc: "Secure luxury vehicles" },
        { icon: "🛡️", title: "Security Personnel", desc: "Gunmen and bouncers" },
        { icon: "🏨", title: "Premium Stays", desc: "Well-maintained hotels" },
        { icon: "🤫", title: "Absolute Discretion", desc: "Confidential service" }
      ],
      services: [
        {
          title: "Executive Protection",
          description: "Secure luxury cars with trained chauffeurs and professional security personnel",
          icon: "🚘",
          color: "from-purple-400 to-purple-600"
        },
        {
          title: "Premium Accommodation",
          description: "Luxury hotels arranged for comfortable and private stays during travel",
          icon: "🏩",
          color: "from-pink-400 to-pink-600"
        },
        {
          title: "Complete Coordination",
          description: "Fully coordinated backend support for smooth movement across destinations",
          icon: "🔧",
          color: "from-fuchsia-400 to-fuchsia-600"
        }
      ]
    },
    {
      id: 8,
      name: "Anand Lockers",
      tagline: "Bank-grade secure storage solutions for your precious belongings.",
      description: "A secure, modern solution for safeguarding your most precious belongings. We offer reliable alternative to bank lockers with advanced security systems and continuous surveillance.",
      icon: "🗄️",
      color: "from-gray-600 to-slate-700",
      bgGradient: "from-gray-50 to-slate-50",
      features: [
        { icon: "📹", title: "24/7 Surveillance", desc: "Continuous monitoring" },
        { icon: "🔐", title: "Private Access", desc: "Easy and confidential access" },
        { icon: "🏦", title: "Bank-Grade Safety", desc: "High-standard protection" },
        { icon: "📦", title: "Various Sizes", desc: "Multiple locker options" }
      ],
      services: [
        {
          title: "Secure Storage",
          description: "Advanced security systems with continuous surveillance and bank-grade protection",
          icon: "🔒",
          color: "from-gray-500 to-gray-700"
        },
        {
          title: "Private Lockers",
          description: "Easy-access lockers in various sizes with high-standard safety measures",
          icon: "🗃️",
          color: "from-slate-500 to-slate-700"
        },
        {
          title: "Asset Protection",
          description: "Secure storage for jewelry, documents, heirlooms and valuable assets",
          icon: "💎",
          color: "from-neutral-500 to-neutral-700"
        }
      ]
    },
    {
      id: 9,
      name: "Anand Share Broking",
      tagline: "Expertise, technology, and trust for seamless trading experiences.",
      description: "Bringing expertise, technology and trust together for both beginners and seasoned investors. We offer comprehensive share broking services with real-time data and personalized guidance.",
      icon: "📈",
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      features: [
        { icon: "💹", title: "Equity Trading", desc: "Stocks and derivatives" },
        { icon: "📊", title: "Market Insights", desc: "Real-time data and research" },
        { icon: "🛠️", title: "Trading Tools", desc: "User-friendly platforms" },
        { icon: "🎯", title: "Portfolio Management", desc: "Performance monitoring" }
      ],
      services: [
        {
          title: "Trading Platform",
          description: "Equity and derivative trading across leading stock exchanges with real-time data",
          icon: "💻",
          color: "from-emerald-400 to-emerald-600"
        },
        {
          title: "Investment Guidance",
          description: "Expert insights, research reports and personalized assistance for investors",
          icon: "🎓",
          color: "from-green-400 to-green-600"
        },
        {
          title: "Portfolio Management",
          description: "Comprehensive support to monitor performance and rebalance investments",
          icon: "📋",
          color: "from-lime-400 to-lime-600"
        }
      ]
    },
    {
      id: 10,
      name: "Anand Wealth Consultancy",
      tagline: "Smart, strategic, and sustainable financial choices for wealth growth.",
      description: "Committed to helping individuals and businesses make smart financial choices. We provide clear direction and tailored strategies to manage, protect, and grow your wealth effectively.",
      icon: "💰",
      color: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      features: [
        { icon: "🏦", title: "Wealth Management", desc: "Protection and growth planning" },
        { icon: "📈", title: "Investment Strategy", desc: "Long-term growth focus" },
        { icon: "🌍", title: "Global Markets", desc: "Domestic and international avenues" },
        { icon: "🎯", title: "Personalized Plans", desc: "Goal-based strategies" }
      ],
      services: [
        {
          title: "Wealth Planning",
          description: "Wealth management and protection planning with smart investment strategies",
          icon: "📊",
          color: "from-amber-400 to-amber-600"
        },
        {
          title: "Global Investment",
          description: "Guidance across domestic and international financial markets and avenues",
          icon: "🌐",
          color: "from-orange-400 to-orange-600"
        },
        {
          title: "Strategic Growth",
          description: "Personalized plans based on your goals and risk appetite for steady growth",
          icon: "🚀",
          color: "from-yellow-400 to-yellow-600"
        }
      ]
    }
  ];

  return (
    <section >
     

          {/* Render all divisions */}
          {divisions.map((division, divisionIndex) => (
            <motion.div
              key={division.id}
              className="mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${divisionIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image/Visual Section */}
                <motion.div variants={itemVariants} className={`relative group ${divisionIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br ${division.color}`}>
                    <div className="w-full h-96 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">{division.icon}</div>
                        <h3 className="text-4xl font-bold mb-2">{division.name.split(' ')[0]}</h3>
                        <p className="text-xl opacity-90">{division.name.split(' ').slice(1).join(' ')}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div variants={itemVariants} className={`space-y-6 ${divisionIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-navy">{division.name}</h3>
                  <p className="text-lg font-semibold text-gray-700 italic">"{division.tagline}"</p>
                  <p className="sm:text-lg text-md text-gray-700 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {division.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Explore {division.name.split(' ')[0]} →
                  </button>
                </motion.div>
              </div>

              {/* Services Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {division.services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`bg-gradient-to-br ${service.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        
    </section>
  );
};



const Services = () => {
  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Enhanced Business Verticals Section */}
      <section className="pt-14 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center md:mb-14 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-navy ">
                Our Business Divisions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
              <p className="lg:text-xl sm:text-md text-base text-gray-600 max-w-3xl mx-auto">
                Diversified excellence across multiple sectors, united by our commitment to quality and innovation
              </p>
            </motion.div>

            {/* Anand Realty - Enhanced Section */}
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div variants={itemVariants} className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="img/venture.jpg"
                      alt="Anand Realty - Land Ventures"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl mb-2">🏢</div>
                      <h3 className="text-3xl font-bold text-white">Anand Realtyy</h3>
                      <p className="text-green-200 text-lg">Land Plots & Ventures</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-3xl font-bold text-navy">Premium Real Estate Development</h3>
                  <p className="sm:text-lg text-md text-gray-700 leading-relaxed">
                    Anand Realty stands as a beacon of trust and transparency in the real estate sector. 
                    We specialize in transforming landscapes into thriving communities through meticulous 
                    planning and ethical practices.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🔒", title: "Legal Assurance", desc: "100% clear titles" },
                      { icon: "📐", title: "Vastu Compliant", desc: "Scientific design" },
                      { icon: "💰", title: "Best Value", desc: "Premium locations" },
                      { icon: "⚡", title: "Quick Possession", desc: "Timely delivery" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="https://anand-realtyy-new.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Land Ventures →
                  </a>
                </motion.div>
              </div>

              {/* Realty Features Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    title: "Residential Plots",
                    description: "Premium plotted developments in strategic locations with all modern amenities",
                    icon: "🏡",
                    color: "from-green-400 to-green-600"
                  },
                  {
                    title: "Commercial Ventures",
                    description: "High-return commercial properties in developing business corridors",
                    icon: "🏪",
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    title: "Farm Lands & Estates",
                    description: "Agricultural and recreational land parcels for sustainable investments",
                    icon: "🌳",
                    color: "from-emerald-400 to-emerald-600"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Anand Cinemaz - Enhanced Section */}
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div variants={itemVariants} className="lg:order-2 relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="img/Production.png"
                      alt="Anand Cinemaz - Film Production"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl mb-2">🎬</div>
                      <h3 className="text-3xl font-bold text-white">Anand Cinemaz</h3>
                      <p className="text-purple-200 text-lg">Film Production & Entertainment</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="lg:order-1 space-y-6">
                  <h3 className="text-3xl font-bold text-navy">Creative Storytelling Excellence</h3>
                  <p className="sm:text-lg text-md text-gray-700 leading-relaxed">
                    Anand Cinemaz brings compelling stories to life through cutting-edge production 
                    techniques and artistic vision. We create meaningful cinema that entertains, 
                    inspires, and leaves a lasting impact on audiences worldwide.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🎭", title: "Creative Vision", desc: "Artistic storytelling" },
                      { icon: "🌟", title: "Talent Excellence", desc: "Best in industry" },
                      { icon: "💫", title: "Global Reach", desc: "International distribution" },
                      { icon: "📱", title: "Digital Content", desc: "Multi-platform presence" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="https://anand-cinemas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Productions →
                  </a>
                </motion.div>
              </div>

              {/* Cinemaz Features Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    title: "Movie Production",
                    description: "Full-scale film production from script to screen with industry experts",
                    icon: "🎥",
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    title: "Music Direction",
                    description: "Original soundtracks and musical scores that elevate storytelling",
                    icon: "🎵",
                    color: "from-pink-400 to-pink-600"
                  },
                  {
                    title: "Digital Content",
                    description: "OTT platforms and digital media content for modern audiences",
                    icon: "📺",
                    color: "from-cyan-400 to-cyan-600"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Anand Infra - Enhanced Section */}
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div variants={itemVariants} className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="img/infra.png"
                      alt="Anand Infra - Development & Construction"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl mb-2">🏗️</div>
                      <h3 className="text-3xl font-bold text-white">Anand Infra</h3>
                      <p className="text-blue-200 text-lg">Development & Construction</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-3xl font-bold text-navy">Building Tomorrow's Infrastructure</h3>
                  <p className="sm:text-lg text-md text-gray-700 leading-relaxed">
                    Anand Infra is at the forefront of creating sustainable, future-ready infrastructure 
                    that stands the test of time. Our projects combine innovative engineering with 
                    environmental consciousness to build communities that thrive.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🏆", title: "Quality First", desc: "ISO standards" },
                      { icon: "🌱", title: "Sustainable", desc: "Eco-friendly practices" },
                      { icon: "⚡", title: "Innovation", desc: "Modern technology" },
                      { icon: "🤝", title: "Partnership", desc: "Collaborative approach" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="https://anand-project-21.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Projects →
                  </a>
                </motion.div>
              </div>

              {/* Infra Features Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    title: "Gated Communities",
                    description: "Secure, well-planned residential townships with premium amenities",
                    icon: "🏘️",
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    title: "Commercial Complexes",
                    description: "Modern commercial spaces designed for business success and growth",
                    icon: "🏢",
                    color: "from-cyan-400 to-cyan-600"
                  },
                  {
                    title: "Smart City Projects",
                    description: "Future-ready urban developments with smart technology integration",
                    icon: "🏙️",
                    color: "from-indigo-400 to-indigo-600"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <BusinessDivisions/>

           


          </div>
        </div>
      </section>
    </>
  );
};

export default Services;