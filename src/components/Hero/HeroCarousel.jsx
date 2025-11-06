import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const carouselSlides = [
    {
      type: 'image',
      imageUrl: '/venture.jpg',
      badge: '🏗️ Infrastructure Excellence',
      title: 'Building Tomorrow',
      subtitle: '',
      description: 'Leading sustainable infrastructure projects across 7 countries',
      highlight: '30+ Projects Completed',
      stats: '10,000+ Tons Infrastructure',
      buttonText: 'View Projects',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-green-900/70 to-emerald-900/70',
      path: "infrastructure"
    },
    {
      type: 'image',
      imageUrl: '/Production.png',
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
      type: 'image',
      imageUrl: '/infra.png',
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

  const handleImageLoad = (index) => {
    console.log(`Image ${index} loaded`);
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index, error) => {
    console.error(`Image ${index} failed to load:`, error);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      setSlideKey(Date.now());
    }, 5000);

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
    if (slide.type === 'image') {
      return (
        <>
          <img
            key={`image-${index}`}
            src={slide.imageUrl}
            alt={`${slide.title} background`}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-linear"
            onLoad={() => handleImageLoad(index)}
            onError={(e) => handleImageError(index, e)}
          />
          {!imagesLoaded[index] && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <div className="text-white text-lg">Loading image...</div>
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
    <section className="relative h-[75vh] min-h-[600px] max-h-[800px] flex items-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            {renderBackground(slide, index)}
            
            {/* Overlay with gradient */}
            <div className={`absolute inset-0 ${slide.overlayColor || 'bg-black/50'}`}></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:py-0 transform transition-all duration-1000 ease-out w-full">
                <div className="max-w-4xl mx-auto text-center lg:text-left">
                  {/* Badge with animation */}
                  <div 
                    key={`badge-${slideKey}-${index}`}
                    className="inline-block px-4 py-2 md:px-6 md:py-3 bg-white rounded-full text-navy text-xs md:text-sm font-bold mb-4 md:mb-6 animate-zoom-in"
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
                    className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 md:mb-4 ${slide.textColor} drop-shadow-2xl animate-zoom-in leading-tight`}
                  >
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle - Hidden on mobile */}
                  {slide.subtitle && (
                    <p 
                      key={`subtitle-${slideKey}-${index}`}
                      className={`hidden md:block text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 ${slide.textColor} drop-shadow-lg animate-fade-in-up`}
                    >
                      {slide.subtitle}
                    </p>
                  )}
                  
                  {/* Description - Shorter on mobile */}
                  <p 
                    key={`desc-${slideKey}-${index}`}
                    className={`text-base md:text-lg lg:text-xl font-normal mb-6 md:mb-8 ${slide.textColor} drop-shadow-lg max-w-2xl mx-auto lg:mx-0 px-2 animate-fade-in-up`}
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
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center lg:justify-start mb-6 md:mb-8">
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
                      <p className="text-white font-bold text-lg">{slide.stats}</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons - Single primary button on mobile */}
                  <div key={`buttons-${slideKey}-${index}`} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center animate-zoom-in">
                    <Link
                      to={`/${slide.path}`}
                      className="group px-6 py-3 md:px-8 md:py-4 bg-white text-navy font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 md:hover:scale-110 shadow-lg md:shadow-2xl hover:shadow-3xl text-sm md:text-base w-full sm:w-auto text-center"
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
          </div>
        ))}
      </div>

    
    

      {/* Pagination Dots - Smaller and closer on mobile */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
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