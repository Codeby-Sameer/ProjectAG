import { useState, useEffect } from 'react';
import infraImage from '../assets/infra.png';
import productionImage from '../assets/Production.png';
import realEstateImage from '../assets/realEstate.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const carouselSlides = [
    {
      image: infraImage,
      badge: '🏗️ Infrastructure Excellence',
      title: 'Building Tomorrow',
      subtitle: 'L. Arun - CEO',
      description: 'Leading sustainable infrastructure projects across 7 countries',
      highlight: '100+ Projects Completed',
      stats: '50,000+ Tons Infrastructure',
      buttonText: 'View Projects',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-orange-900 bg-opacity-70'
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
      overlayColor: 'bg-gradient-to-br from-purple-900 bg-opacity-65'
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
      overlayColor: 'bg-gradient-to-br from-green-900 bg-opacity-70'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      setSlideKey(Date.now()); // Trigger re-animation
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setSlideKey(Date.now()); // Trigger re-animation
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setSlideKey(Date.now()); // Trigger re-animation
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setSlideKey(Date.now()); // Trigger re-animation
  };

  const workProcess = [
    {
      icon: '📋',
      title: 'Consultation & Planning',
      description: 'In-depth analysis and strategic planning to understand client needs and deliver optimal solutions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎯',
      title: 'Execution Excellence',
      description: 'Skilled teams implementing projects with precision, adhering to international quality standards.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage ensuring deliverables exceed expectations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🚀',
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology and innovative approaches to stay ahead.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const qualityStandards = [
    {
      metric: '99.9%',
      label: 'Client Satisfaction',
      icon: '⭐',
      description: 'Consistently delivering excellence'
    },
    {
      metric: '25+',
      label: 'Years Experience',
      icon: '🏆',
      description: 'Proven track record since 1995'
    },
    {
      metric: '100+',
      label: 'Awards & Recognition',
      icon: '🏅',
      description: 'Industry accolades and achievements'
    },
    {
      metric: '7',
      label: 'Countries',
      icon: '🌍',
      description: 'Global presence and operations'
    }
  ];

  const keyTopics = [
    {
      icon: '🏗️',
      title: 'Sustainable Development',
      description: 'Commitment to eco-friendly practices and sustainable infrastructure solutions.',
      gradient: 'bg-gradient-to-br from-green-400 to-emerald-600'
    },
    {
      icon: '👥',
      title: 'Team Excellence',
      description: 'Experienced professionals dedicated to delivering world-class projects.',
      gradient: 'bg-gradient-to-br from-blue-400 to-indigo-600'
    },
    {
      icon: '💼',
      title: 'Diverse Portfolio',
      description: 'Infrastructure, Real Estate, Production, and Entertainment services.',
      gradient: 'bg-gradient-to-br from-purple-400 to-pink-600'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Building long-term relationships through trust and transparent communication.',
      gradient: 'bg-gradient-to-br from-orange-400 to-red-600'
    },
    {
      icon: '🔬',
      title: 'Innovation Hub',
      description: 'Continuously investing in research and development for cutting-edge solutions.',
      gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Operating across seven countries with local expertise and international standards.',
      gradient: 'bg-gradient-to-br from-violet-400 to-purple-600'
    }
  ];

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
                  <a
                    href="divisions"
                    className="group px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-navy font-bold rounded-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl"
                  >
                    {slide.buttonText}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="about"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  >
                    About Us
                  </a>
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

    {/* How We Work Section */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures excellence at every stage of your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className={`mt-6 h-1 bg-gradient-to-r ${step.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quality & Excellence Section */}
    <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quality & Excellence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak volumes about our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityStandards.map((metric, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-5xl mb-4">{metric.icon}</div>
              <div className="text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.metric}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-gray-300 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Topics Section */}
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values and strengths that drive our success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyTopics.map((topic, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
            >
              <div className={`${topic.gradient} p-8 text-white min-h-[280px] flex flex-col justify-between`}>
                <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">{topic.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gold to-yellow-400 text-navy px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-2">Ready to Work Together?</h3>
            <p className="text-lg font-semibold">Let's build something extraordinary</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
