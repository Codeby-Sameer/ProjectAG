import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Single Card Auto Carousel Component
const CompanyServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Anand Realtyy",
      icon: "🏠",
      description: "Built on trust, transparency, and long-term value. We ensure every property rests on strong legal foundations through meticulous document scrutiny and ethical practices.",
      features: ["Legal Transparency", "Vastu-aligned Design", "Quality Construction", "Accessible Luxury"],
      gradient: "from-green-500 to-green-700",
      dotColor: "bg-green-500",
      image: "venture.jpg",
      link: "https://anand-realtyy-new.vercel.app",
      buttonText: "Explore Properties"
    },
    {
      title: "Anand Infra",
      icon: "🏗️",
      description: "Creating infrastructure that endures for generations—strong, precise, and timeless. We handle commercial complexes, townships, industrial structures, and public utilities.",
      features: ["Scientific Planning", "Quality Control", "Vastu Principles", "Large-scale Projects"],
      gradient: "from-blue-500 to-blue-700",
      dotColor: "bg-blue-500",
      image: "infra.png",
      link: "https://anand-project-21.vercel.app",
      buttonText: "Explore Projects"
    },
    {
      title: "Anand Cinemaz",
      icon: "🎬",
      description: "Producing meaningful, impactful, and high-quality cinematic content that blends creativity with purpose—crafting films that entertain and inspire.",
      features: ["Meaningful Content", "Social Messages", "Artistic Integrity", "Modern Storytelling"],
      gradient: "from-purple-500 to-purple-700",
      dotColor: "bg-purple-500",
      image: "Production.png",
      link: "https://anand-cinemas.vercel.app",
      buttonText: "Explore Productions"
    }
  ];

  // Auto rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentIndex];

  return (
    <section className="py-2 sm:py-4 mb-2 mx-auto w-full max-w-sm ">
      <div className="px-2 sm:px-4 mb-3 sm:mb-4 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white opacity-80">
          Explore Our Companies →
        </h3>
      </div>

      <div className="relative h-[340px] sm:h-[380px] md:h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="group bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-2xl 
              transition-all duration-500 overflow-hidden border border-gray-200 
              absolute inset-0 flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Header Section */}
            <div className={`h-28 sm:h-32 bg-gradient-to-br ${currentService.gradient} relative overflow-hidden`}>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 
                transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${currentService.image})` }}
              ></div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <div className="text-2xl sm:text-3xl mb-1 transform group-hover:-translate-y-1 
                  transition-transform duration-300">
                  {currentService.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">
                  {currentService.title}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                {currentService.description}
              </p>

              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-1">
                {currentService.features.map((item, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-slate-700">
                    <span 
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 ${currentService.dotColor} rounded-full mr-2 sm:mr-3 flex-shrink-0`}
                    ></span>
                    <span className="text-xs sm:text-sm font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={currentService.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${currentService.gradient} 
                  text-white py-2 sm:py-2.5 rounded-lg font-semibold text-center block 
                  hover:opacity-90 transition-all duration-300 transform 
                  hover:scale-105 shadow-lg text-xs sm:text-sm`}
                >
                  {currentService.buttonText}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Manual Navigation Arrows */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
        <button
          onClick={() => setCurrentIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 
          transition-all duration-300 border border-white/20 hover:scale-110"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-xs text-white/70 font-medium px-2 sm:px-3">
          {currentIndex + 1} / {services.length}
        </div>
        
        <button
          onClick={() => setCurrentIndex(currentIndex === services.length - 1 ? 0 : currentIndex + 1)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 
          transition-all duration-300 border border-white/20 hover:scale-110"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section
      className="relative text-white overflow-hidden min-h-[calc(100vh-4rem)] transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(venture.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-emerald-900/70 transition-all duration-1000 ease-in-out" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-yellow-500/20" />
      </div>

      <div className="relative container mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 min-h-[calc(100vh-4rem)]">

          {/* Left Content - Text Section */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white/90 text-blue-900 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold shadow-lg w-fit backdrop-blur-sm">
              <span>🏆</span>
              <span className="whitespace-nowrap">Anand Group is a multi-sector enterprise built on one core belief</span>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-2 sm:mb-3 lg:mb-4">
                Building <span className="text-yellow-400">Legacies</span>,
                <br className="hidden sm:block" />
                Creating <span className="text-blue-300">Value</span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed max-w-lg">
                Quality, Trust, and Long-term Value Accessible to All
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 shadow-xl max-w-2xl">
              <p className="text-sm sm:text-base lg:text-lg italic mb-1 sm:mb-2 text-yellow-300 font-medium">
                "Dharmo Rakshati Rakshitah"
              </p>
              <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
                We believe that when we uphold what is right, it protects and strengthens everything we build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
              <a
                href="#services"
                className="group bg-white text-blue-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-xs sm:text-sm lg:text-base"
              >
                <span>Our Services</span>
                <span className="ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group border border-white/80 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center text-xs sm:text-sm lg:text-base"
              >
                <span>Get in Touch</span>
                <span className="ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 pt-3 sm:pt-4 lg:pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-yellow-400 mb-1">15+</div>
                <div className="text-[10px] sm:text-xs opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-blue-300 mb-1">100+</div>
                <div className="text-[10px] sm:text-xs opacity-80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-purple-300 mb-1">1000+</div>
                <div className="text-[10px] sm:text-xs opacity-80">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Company Cards */}
          <div className="w-full order-2 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <CompanyServicesCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;