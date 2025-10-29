import { useState, useEffect } from 'react';
import infraImage from '../../assets/infra.png';
import productionImage from '../../assets/Production.png';
import realEstateImage from '../../assets/realEstate.png';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const carouselSlides = [
    {
      image: infraImage,
      badge: '🏗️ Infrastructure Excellence',
      title: 'Building Tomorrow',
      subtitle: '',
      description: 'Leading sustainable infrastructure projects across 7 countries',
      highlight: '100+ Projects Completed',
      stats: '50,000+ Tons Infrastructure',
      buttonText: 'View Projects',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-orange-900 bg-opacity-70',
      path:"infrastructure"
    },
    {
      image: productionImage,
      badge: '🎬 Production & Cinema',
      title: 'Entertainment Universe',
      subtitle: 'Creating Magic on Screen',
      description: 'Award-winning films and digital content production',
      highlight: '500+ Productions',
      stats: '25 Million Audience Reach',
      buttonText: 'Watch Latest',
      textColor: 'text-yellow-200',
      overlayColor: 'bg-gradient-to-br from-purple-900 bg-opacity-65',
      path:"production"
    },
    {
      image: realEstateImage,
      badge: '🏢 Real Estate Pioneer',
      title: 'Premium Living Spaces',
      subtitle: 'Your Dream Home Awaits',
      description: 'Residential, Commercial & Industrial Development',
      highlight: '5,000+ Units Delivered',
      stats: '2M+ Sq Ft Developed',
      buttonText: 'Explore Properties',
      textColor: 'text-green-100',
      overlayColor: 'bg-gradient-to-br from-green-900 bg-opacity-70',
      path:"real-estate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      setSlideKey(Date.now());
    }, 6000);

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

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms] hover:scale-100"
            />
            {/* Overlay with gradient */}
            <div className={`absolute inset-0 ${slide.overlayColor} transition-all duration-700`}></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 transform transition-all duration-1000 ease-out">
                {/* Badge with animation */}
                <div 
                  key={`badge-${slideKey}-${index}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-yellow-400 rounded-full text-navy text-sm font-bold mb-4 animate-zoom-in"
                >
                  {slide.badge}
                </div>
                
                {/* Title with zoom animation */}
                <h1 
                  key={`title-${slideKey}-${index}`}
                  className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-3 ${slide.textColor} drop-shadow-2xl animate-zoom-in`}
                >
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p 
                  key={`subtitle-${slideKey}-${index}`}
                  className={`text-xl md:text-2xl font-semibold mb-2 ${slide.textColor} drop-shadow-lg animate-fade-in-up`}
                >
                  {slide.subtitle}
                </p>
                
                {/* Description */}
                <p 
                  key={`desc-${slideKey}-${index}`}
                  className={`text-lg md:text-xl font-normal mb-6 ${slide.textColor} drop-shadow-lg max-w-3xl mx-auto animate-fade-in-up`}
                >
                  {slide.description}
                </p>
                
                {/* Stats Container */}
                <div className="flex flex-wrap gap-6 justify-center mb-8">
                  <div 
                    key={`stat1-${slideKey}-${index}`}
                    className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 animate-slide-in-left"
                  >
                    <p className="text-yellow-300 font-bold text-lg">{slide.highlight}</p>
                  </div>
                  <div 
                    key={`stat2-${slideKey}-${index}`}
                    className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 animate-slide-in-right"
                  >
                    <p className="text-yellow-300 font-bold text-lg">{slide.stats}</p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div key={`buttons-${slideKey}-${index}`} className="flex flex-wrap gap-4 justify-center animate-zoom-in">
                  <Link
                    to={`${slide.path}`}
                    className="group px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-navy font-bold rounded-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl"
                  >
                    {slide.buttonText}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="about"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-gold'
                : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="about">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroCarousel;