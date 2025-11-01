import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState({});

  const carouselSlides = [
    {
      type: 'video',
      videoUrl: 'https://www.shutterstock.com/shutterstock/videos/3831678697/preview/stock-footage-australia-sydney-new-south-wales-sydney-opera-house-and-city-skyline-at-night-reflecting-bright.webm',
      badge: '🏗️ Infrastructure Excellence',
      title: 'Building Tomorrow',
      subtitle: '',
      description: 'Leading sustainable infrastructure projects across 7 countries',
      highlight: '30+ Projects Completed',
      stats: '10,000+ Tons Infrastructure',
      buttonText: 'View Projects',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-blue-900/70 to-navy/80',
      path: "infrastructure"
    },
    {
      type: 'video',
      videoUrl: 'src/assets/Video/5129-183300007_tiny.mp4',
      badge: '🎬 Production & Cinema',
      title: 'Entertainment Universe',
      subtitle: 'Creating Magic on Screen',
      description: 'Award-winning films and digital content production',
      highlight: '50+ Productions',
      stats: '10 Million Audience Reach',
      buttonText: 'Watch Latest',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-purple-900/70 to-pink-900/70',
      path: "production"
    },
    {
      type: 'video',
      videoUrl: 'src/assets/Video/31290-385265697_tiny.mp4',
      badge: '🏢 Real Estate Pioneer',
      title: 'Premium Living Spaces',
      subtitle: 'Your Dream Home Awaits',
      description: 'Residential, Commercial & Industrial Development',
      highlight: '1,000+ Units Delivered',
      stats: '2M+ Sq Ft Developed',
      buttonText: 'Explore Properties',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-green-900/70 to-emerald-900/70',
      path: "real-estate"
    }
  ];

  const handleVideoLoad = (index) => {
    console.log(`Video ${index} loaded`);
    setVideosLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleVideoError = (index, error) => {
    console.error(`Video ${index} failed to load:`, error);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      setSlideKey(Date.now());
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setSlideKey(Date.now());
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setSlideKey(Date.now());
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setSlideKey(Date.now());
  };

  const renderBackground = (slide, index) => {
    if (slide.type === 'video') {
      return (
        <>
          <video
            key={`video-${index}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover transform scale-105"
            onLoadedData={() => handleVideoLoad(index)}
            onError={(e) => handleVideoError(index, e)}
          >
            <source src={slide.videoUrl} type="video/mp4" />
            <source src={slide.videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {!videosLoaded[index] && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <div className="text-white text-lg">Loading video...</div>
            </div>
          )}
        </>
      );
    }
    
    return (
      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
        <div className="text-white text-lg">Background not available</div>
      </div>
    );
  };

  return (
    <section  className="relative  min-h-screen flex items-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Video/Image */}
            {renderBackground(slide, index)}
            
            {/* Overlay with gradient */}
            <div className={`absolute inset-0 ${slide.overlayColor || 'bg-black/50'} transition-all duration-700`}></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 md:px-6 transform transition-all duration-1000 ease-out w-full max-w-md md:max-w-none">
                {/* Badge with animation */}
                <div 
                  key={`badge-${slideKey}-${index}`}
                  className="inline-block px-4 py-2 md:px-6 md:py-3 bg-white rounded-full text-navy text-xs md:text-sm font-bold mb-3 md:mb-4 animate-zoom-in"
                >
                  {/* Shortened badge text for mobile */}
                  <span className="md:hidden">
                    {slide.badge.includes('Infrastructure') && '🏗️ Infrastructure'}
                    {slide.badge.includes('Production') && '🎬 Production'}
                    {slide.badge.includes('Real Estate') && '🏢 Real Estate'}
                  </span>
                  <span className="hidden md:inline">{slide.badge}</span>
                </div>
                
                {/* Title with zoom animation */}
                <h1 
                  key={`title-${slideKey}-${index}`}
                  className={`text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-2 md:mb-3 ${slide.textColor} drop-shadow-2xl animate-zoom-in`}
                >
                  {slide.title}
                </h1>
                
                {/* Subtitle - Hidden on mobile */}
                {slide.subtitle && (
                  <p 
                    key={`subtitle-${slideKey}-${index}`}
                    className={`hidden md:block text-xl md:text-2xl font-semibold mb-2 ${slide.textColor} drop-shadow-lg animate-fade-in-up`}
                  >
                    {slide.subtitle}
                  </p>
                )}
                
                {/* Description - Shorter on mobile */}
                <p 
                  key={`desc-${slideKey}-${index}`}
                  className={`text-sm md:text-lg lg:text-xl font-normal mb-4 md:mb-6 ${slide.textColor} drop-shadow-lg max-w-xs md:max-w-3xl mx-auto px-2 animate-fade-in-up`}
                >
                  {/* Shortened description for mobile */}
                  <span className="md:hidden">
                    {slide.description.includes('infrastructure') && 'Leading sustainable infrastructure projects'}
                    {slide.description.includes('films') && 'Award-winning films and content'}
                    {slide.description.includes('Residential') && 'Residential & Commercial Development'}
                  </span>
                  <span className="hidden md:inline">{slide.description}</span>
                </p>
                
                {/* Stats Container - Single stat on mobile */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center mb-6 md:mb-8">
                  <div 
                    key={`stat1-${slideKey}-${index}`}
                    className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 animate-slide-in-left"
                  >
                    <p className="text-white font-bold text-sm md:text-lg">
                      {/* Shortened stat for mobile */}
                      <span className="md:hidden">
                        {slide.highlight.includes('30+') && '100+ Projects'}
                        {slide.highlight.includes('50+') && '500+ Productions'}
                        {slide.highlight.includes('1,000+') && '5,000+ Units'}
                      </span>
                      <span className="hidden md:inline">{slide.highlight}</span>
                    </p>
                  </div>
                  {/* Second stat hidden on mobile */}
                  <div 
                    key={`stat2-${slideKey}-${index}`}
                    className="hidden md:block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 animate-slide-in-right"
                  >
                    <p className="text-gold font-bold text-lg">{slide.stats}</p>
                  </div>
                </div>
                
                {/* Action Buttons - Single primary button on mobile */}
                <div key={`buttons-${slideKey}-${index}`} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-zoom-in">
                  <Link
                    to={`/${slide.path}`}
                    className="group px-6 py-3 md:px-8 md:py-4 bg-gold text-navy font-bold rounded-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-105 md:hover:scale-110 shadow-lg md:shadow-2xl hover:shadow-3xl text-sm md:text-base w-full sm:w-auto text-center"
                  >
                    {slide.buttonText}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  {/* Secondary button hidden on mobile */}
                  <Link
                    to="/about"
                    className="hidden md:block px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Smaller on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-105 md:hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-105 md:hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots - Smaller and closer on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-6 h-1.5 md:w-10 md:h-3 bg-gold'
                : 'w-1.5 h-1.5 md:w-3 md:h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
        <Link to="/about">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroCarousel;