import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export const CompanyCarousel = ({ companyCards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % companyCards.length);
  }, [companyCards.length]);

  const resetAutoCarousel = useCallback(() => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % companyCards.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + companyCards.length) % companyCards.length);
    }
    
    resetAutoCarousel();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="md:hidden">
      <div className="backdrop-blur-2xl bg-white/5 rounded-3xl shadow-2xl border border-white/20 p-4">
        <div 
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >   
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {companyCards.map((company, index) => (
              <div key={company.id} className="w-full flex-shrink-0">
                <a
                  href={company.path}
                  target="_blank" rel="noopener noreferrer"
                  className="block"
                  onClick={resetAutoCarousel}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className={`bg-gradient-to-br ${company.color} h-32 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                      <div className="absolute inset-0">
                        <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                      </div>
                      <div className="relative z-10 p-6 h-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl transform filter drop-shadow-lg">
                            {company.badge}
                          </div>
                          <h3 className={`text-lg font-bold ${company.textColor} filter drop-shadow`}>
                            {company.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 space-y-4">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                          {company.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <p className="text-xs font-medium text-gray-600">
                            {company.stats}
                          </p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm">
                          <span>Explore</span>
                          <span className="transform transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {companyCards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                resetAutoCarousel();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-6' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => {
              setCurrentSlide((prev) => (prev - 1 + companyCards.length) % companyCards.length);
              resetAutoCarousel();
            }}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              setCurrentSlide((prev) => (prev + 1) % companyCards.length);
              resetAutoCarousel();
            }}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const companyCards = [
    {
      id: 1,
      name: 'Anand Infra',
      badge: '🏗️',
      description: 'Sustainable Infrastructure',
      stats: '30+ Projects • 7 Countries',
      color: 'from-blue-500 to-blue-700',
      glowColor: 'hover:shadow-blue-500/20',
      textColor: 'text-white',
      path: "https://anand-project-21.vercel.app"
    },
    {
      id: 2,
      name: 'Anand Realty',
      badge: '🏢',
      description: 'Premium Living Spaces',
      stats: '1,000+ Units • 2M+ Sq Ft',
      color: 'from-purple-500 to-purple-700',
      glowColor: 'hover:shadow-purple-500/20',
      textColor: 'text-white',
      path: "https://anand-realtyy-new.vercel.app/"
    },
    {
      id: 3,
      name: 'Anand Cinemaz',
      badge: '🎬',
      description: 'Entertainment & Production',
      stats: '50+ Productions • 10M+ Audience',
      color: 'from-amber-500 to-orange-600',
      glowColor: 'hover:shadow-amber-500/20',
      textColor: 'text-white',
      path: "https://anand-cinemas.vercel.app"
    },
 
  ];

  // Auto scroll effect for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % companyCards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [companyCards.length]);

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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 min-h-[calc(100vh-4rem)]">

          {/* Left Content - Text Section */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-white/90 text-blue-900 rounded-full text-xxs sm:text-xs lg:font-bold font-semibold shadow-lg w-fit backdrop-blur-sm">
              <span>🏆</span>
              <span>Anand Group is a multi-sector enterprise built on one core belief</span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                Building <span className="text-yellow-400">Legacies</span>,
                <br className="hidden md:block" />
                Creating <span className="text-blue-300">Value</span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-lg opacity-90 leading-relaxed">
                Quality, Trust, and Long-term Value Accessible to All
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/20 shadow-xl max-w-2xl">
              <p className="text-sm sm:text-base lg:text-lg italic mb-2 text-yellow-300 font-medium">
                "Dharmo Rakshati Rakshitah"
              </p>
              <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
                We believe that when we uphold what is right, it protects and strengthens everything we build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#services"
                className="group bg-white text-blue-900 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
              >
                <span>Our Services</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group border-2 border-white/80 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center text-sm sm:text-base"
              >
                <span>Get in Touch</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-1">15+</div>
                <div className="text-xs sm:text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-300 mb-1">100+</div>
                <div className="text-xs sm:text-sm opacity-80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-300 mb-1">1000+</div>
                <div className="text-xs sm:text-sm opacity-80">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Scrolling Company Cards */}
          <div className="w-full order-2">
            {/* Desktop Scrolling View */}
            <div className="hidden md:block backdrop-blur-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl lg:rounded-4xl shadow-2xl border border-white/20 p-6 lg:p-8 overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                {/* Scrolling Container */}
                <div 
                  className="absolute inset-0 flex flex-col items-center space-y-4 transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateY(-${scrollPosition * 100}px)` }}
                >
                  {[...companyCards, ...companyCards].map((company, index) => (
                    <a
                      key={`${company.id}-${index}`}
                      href={company.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-full max-w-xs transform transition-all duration-500 ease-out ${
                        activeCard === index % companyCards.length 
                          ? 'scale-105 bg-white/20 z-10' 
                          : 'scale-100 hover:scale-102 hover:bg-white/10'
                      }`}
                      onMouseEnter={() => setActiveCard(index % companyCards.length)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div className={`relative backdrop-blur-xl bg-gradient-to-br ${company.color} rounded-2xl p-4 shadow-xl border-2 border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300 h-20 flex items-center`}>
                        
                        {/* Animated Slide-in Bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/50 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-200"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 w-full flex items-center justify-between px-2">
                          <div className="flex items-center gap-3">
                            <div className="text-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-lg">
                              {company.badge}
                            </div>
                            <div>
                              <h3 className={`text-sm font-bold ${company.textColor} filter drop-shadow`}>
                                {company.name}
                              </h3>
                              <p className={`text-xs ${company.textColor} opacity-80 mt-1`}>
                                {company.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Animated Arrow */}
                          <div className="transform translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
                            </svg>
                          </div>
                        </div>

                        {/* Hover Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>

                      {/* Pulse Effect for Active Card */}
                      {activeCard === index % companyCards.length && (
                        <div className="absolute inset-0 border-2 border-white/50 rounded-2xl animate-pulse"></div>
                      )}
                    </a>
                  ))}
                </div>

                {/* Gradient Overlays for Smooth Scroll */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-500/20 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-purple-500/20 to-transparent z-20"></div>
              </div>

              {/* Control Buttons */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => setScrollPosition(prev => (prev - 1 + companyCards.length) % companyCards.length)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                
                <div className="text-xs text-white/60 font-medium px-4">
                  {scrollPosition + 1} / {companyCards.length}
                </div>
                
                <button
                  onClick={() => setScrollPosition(prev => (prev + 1) % companyCards.length)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Carousel View */}
            <CompanyCarousel companyCards={companyCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;