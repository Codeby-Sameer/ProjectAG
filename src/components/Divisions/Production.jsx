import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Production = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredDream, setHoveredDream] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const dreamCards = [
    {
      title: 'Director and Writer',
      icon: '🎬',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
      description: 'Submit your synopsis or pitch deck. Join our filmmaker program and bring your vision to the big screen.',
      buttonText: 'Submit Details',
      gradient: 'from-blue-600 to-navy-700'
    },
    {
      title: 'Cinematographer',
      icon: '📹',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      description: 'Share your portfolio and showcase your visual storytelling skills. We\'re looking for talented cinematographers.',
      buttonText: 'Show Your Work',
      gradient: 'from-blue-700 to-navy-800'
    },
    {
      title: 'Producer',
      icon: '🎥',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
      description: 'Experienced in managing projects? Join our production team and oversee exciting film projects.',
      buttonText: 'Join Our Team',
      gradient: 'from-blue-700 to-navy-800'
    },
    {
      title: 'Music Director',
      icon: '🎵',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
      description: 'Compose the soundtrack for our films. Share your musical portfolio and let\'s create magic together.',
      buttonText: 'Share Portfolio',
      gradient: 'from-blue-500 to-navy-700'
    },
    {
      title: 'Lyricist',
      icon: '✍️',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      description: 'Craft meaningful lyrics for our productions. Submit your work and become part of our creative journey.',
      buttonText: 'Submit Lyrics',
      gradient: 'from-blue-700 to-navy-700'
    },
    {
      title: 'Other Roles',
      icon: '🌟',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
      description: 'Have a unique skill in film production? We welcome all creative talents. Reach out to explore opportunities.',
      buttonText: 'Contact Us',
      gradient: 'from-blue-600 to-navy-800'
    }
  ];

  const services = [
    'Full-service film production from pre-production to post-production',
    'State-of-the-art editing facilities and cutting-edge equipment',
    'Award-winning directors, cinematographers, and creative teams',
    'International distribution networks',
    'Documentary filmmaking and storytelling',
    'Commercial advertising production',
    'Music video production',
    'Event coverage and corporate videos'
  ];

  const recentProjects = [
    {
      title: 'Epic Adventure Series',
      description: 'A groundbreaking series that captivated audiences globally',
      year: '2024',
      awards: 'International Best Drama Award',
      image: '🎬',
      color: 'from-navy to-blue-700',
      rating: '9.5/10',
      duration: '120 min',
      budget: '$25M'
    },
    {
      title: 'Documentary: The Silent Warriors',
      description: 'An inspiring documentary about unsung heroes',
      year: '2023',
      awards: 'Best Documentary at Film Festival',
      image: '🎞️',
      color: 'from-navy to-blue-800',
      rating: '9.8/10',
      duration: '95 min',
      budget: '$8M'
    },
    {
      title: 'Corporate Success Stories',
      description: 'A series showcasing business achievements',
      year: '2023',
      awards: 'Industry Excellence Award',
      image: '📺',
      color: 'from-blue-500 to-navy',
      rating: '8.9/10',
      duration: '45 min',
      budget: '$3M'
    }
  ];

  const visionSections = [
    {
      section: 'WHAT YOU WILL HAVE',
      title: 'Creative Freedom',
      description: 'We believe in giving filmmakers the freedom to explore their creativity without constraints, allowing their distinct voices and visions to shine through on screen.',
      features: [
        { icon: '🎬', title: 'Unrestricted Expression', description: "We support each creator's unique storytelling approach, encouraging authenticity and originality." },
        { icon: '💡', title: 'Limitless Innovation', description: 'With no creative boundaries, filmmakers can experiment, innovate, and push the boundaries of cinematic art.' }
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      layout: 'image-left'
    },
    {
      section: 'WHAT YOU WILL GAIN',
      title: 'Industry Mentorship',
      description: 'Gain personalized mentorship from experienced professionals in the film industry, helping you refine your skills and advance your career.',
      features: [
        { icon: '📈', title: 'Expert Insights', description: 'Receive hands-on advice and industry knowledge from mentors who understand the nuances of filmmaking.' },
        { icon: '🚀', title: 'Career Development', description: 'Our mentorship empowers you to make informed decisions, build your network, and elevate your craft.' }
      ],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      layout: 'image-right'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recentProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [recentProjects.length]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section with Background Video */}
      <section className="relative py-16 lg:py-32 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
          >
            <source src="https://cdn.pixabay.com/video/2016/09/13/5130-183300011_tiny.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-blue-900/60 to-navy/90"></div>
          
          {/* Loading Fallback */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center">
              <div className="text-white text-xl lg:text-2xl animate-pulse">🎬 Loading Anand Cinemas...</div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl lg:text-9xl mb-4 lg:mb-6 animate-pulse">🎬</div>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 text-white leading-tight">
              Anand Cinemas
            </h1>
            <p className="text-lg lg:text-2xl text-gold mb-6 lg:mb-8 font-semibold tracking-wide bg-gold/20 px-4 py-2 lg:px-6 lg:py-3 rounded-full inline-block">
              LIGHTS, CAMERA, ACTION
            </p>
            <p className="text-base lg:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed bg-white/10 backdrop-blur-sm p-4 lg:p-6 rounded-2xl">
              <span className="hidden lg:inline">
                Producing high-quality films, web series, and digital content for global audiences. 
                From big-budget blockbusters to independent cinema, we push creative boundaries 
                and deliver unforgettable cinematic experiences.
              </span>
              <span className="lg:hidden text-sm">
                Producing high-quality films and digital content for global audiences. 
                We push creative boundaries and deliver unforgettable cinematic experiences.
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Link to={'/contact'} className="bg-gold text-navy px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl lg:shadow-2xl border-2 border-gold hover:shadow-gold/40">
                🎥 Start Project
              </Link>
              <Link to={'/contact'} className="bg-transparent border-2 border-gold text-gold px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                📞 Contact Studio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-6 lg:w-8 lg:h-8 border-r-2 border-b-2 border-gold rotate-45"></div>
        </div>

        {/* Film Strip Effect */}
        <div className="absolute top-0 left-0 w-full h-2 lg:h-4 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 lg:h-4 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50 to-navy/10">
        <div className="container mx-auto px-4 lg:px-6 mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-5xl font-bold text-navy mb-3 lg:mb-4">
              Our Legacy in Numbers
            </h2>
            <p className="text-base lg:text-xl text-blue-700 max-w-2xl mx-auto px-4">
              Decades of excellence in film production
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-center">
            <div className="p-4 lg:p-8 bg-white/80 rounded-xl lg:rounded-2xl backdrop-blur-xl border border-blue-200 shadow-lg lg:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-gold">
              <div className="text-2xl lg:text-6xl font-bold text-gold mb-2 lg:mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">50+</div>
              <div className="text-navy font-semibold text-sm lg:text-lg">Films Produced</div>
              <div className="text-blue-600 text-xs lg:text-sm mt-1 lg:mt-2">Award-winning</div>
            </div>
            
            <div className="p-4 lg:p-8 bg-white/80 rounded-xl lg:rounded-2xl backdrop-blur-xl border border-blue-200 shadow-lg lg:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-gold">
              <div className="text-2xl lg:text-6xl font-bold text-gold mb-2 lg:mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">5</div>
              <div className="text-navy font-semibold text-sm lg:text-lg">Awards Won</div>
              <div className="text-blue-600 text-xs lg:text-sm mt-1 lg:mt-2">International</div>
            </div>
            
            <div className="p-4 lg:p-8 bg-white/80 rounded-xl lg:rounded-2xl backdrop-blur-xl border border-blue-200 shadow-lg lg:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-gold">
              <div className="text-2xl lg:text-6xl font-bold text-gold mb-2 lg:mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">20M+</div>
              <div className="text-navy font-semibold text-sm lg:text-lg">Total Views</div>
              <div className="text-blue-600 text-xs lg:text-sm mt-1 lg:mt-2">Global reach</div>
            </div>
            
            <div className="p-4 lg:p-8 bg-white/80 rounded-xl lg:rounded-2xl backdrop-blur-xl border border-blue-200 shadow-lg lg:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-gold">
              <div className="text-2xl lg:text-6xl font-bold text-gold mb-2 lg:mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">50K</div>
              <div className="text-navy font-semibold text-sm lg:text-lg">Studio Sq Ft</div>
              <div className="text-blue-600 text-xs lg:text-sm mt-1 lg:mt-2">Modern facilities</div>
            </div>
          </div>
        </div>

        {/* What's Your Dream Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-4 text-navy bg-gradient-to-r from-navy to-blue-800 bg-clip-text text-transparent">
                  What's Your Dream Role?
                </h2>
                <p className="text-base lg:text-xl text-blue-700 max-w-3xl mx-auto px-4">
                  Discover your path in cinema with our career tracks
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {dreamCards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white border-2 border-blue-200 hover:border-gold transition-all duration-500 shadow-xl lg:shadow-2xl hover:shadow-gold/30"
                    onMouseEnter={() => setHoveredDream(index)}
                    onMouseLeave={() => setHoveredDream(null)}
                  >
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image Background */}
                    <div className="relative h-48 lg:h-72 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl lg:text-6xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 text-gold drop-shadow-2xl">
                          {card.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content - Appears on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} p-4 lg:p-8 transition-all duration-500 ${
                      hoveredDream === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}>
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-4">{card.title}</h3>
                          <p className="text-white/90 leading-relaxed mb-4 lg:mb-6 text-xs lg:text-sm">
                            {card.description}
                          </p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-navy font-bold py-2 lg:py-4 px-4 lg:px-6 rounded-lg lg:rounded-xl transform transition-all hover:scale-105 shadow-lg lg:shadow-2xl hover:shadow-yellow-500/30 text-sm lg:text-base">
                          {card.buttonText}
                        </button>
                      </div>
                    </div>
                    
                    {/* Title Label Below Card */}
                    <div className="bg-white p-4 lg:p-6 border-t-2 border-blue-200 group-hover:border-gold transition-all duration-300">
                      <p className="text-center font-bold text-navy text-base lg:text-lg tracking-wide">
                        {card.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-4 text-navy bg-gradient-to-r from-navy to-blue-800 bg-clip-text text-transparent">
                  Our Production Services
                </h2>
                <p className="text-base lg:text-xl text-blue-700 max-w-2xl mx-auto px-4">
                  Comprehensive film production from concept to final cut
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-xl p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-blue-200 hover:border-gold transition-all duration-500 shadow-xl lg:shadow-2xl hover:shadow-gold/20 hover:scale-105">
                    <div className="flex items-start">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy rounded-full flex items-center justify-center text-sm lg:text-lg font-bold mr-4 lg:mr-6 flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                        {index + 1}
                      </div>
                      <p className="text-navy text-base lg:text-xl font-semibold group-hover:text-blue-800 transition-colors leading-relaxed">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Sections */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            {visionSections.map((section, index) => (
              <div key={index} className="mb-16 lg:mb-24 last:mb-0">
                {section.layout === 'image-left' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image Left */}
                    <div className="relative group order-2 lg:order-1">
                      <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-64 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Enhanced Film Reel Effect */}
                      <div className="hidden lg:block absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full opacity-80 shadow-2xl shadow-yellow-500/50"></div>
                      <div className="hidden lg:block absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full opacity-80 shadow-2xl shadow-yellow-500/50"></div>
                    </div>
                    
                    {/* Text Right */}
                    <div className="text-navy order-1 lg:order-2">
                      <p className="text-gold uppercase text-xs lg:text-sm mb-3 lg:mb-4 tracking-widest font-bold bg-gold/20 px-3 py-1 lg:px-4 lg:py-2 rounded-full inline-block">
                        {section.section}
                      </p>
                      <h3 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 text-navy bg-gradient-to-r from-navy to-blue-800 bg-clip-text text-transparent">
                        {section.title}
                      </h3>
                      <p className="text-base lg:text-xl text-blue-700 mb-6 lg:mb-8 leading-relaxed bg-white/80 backdrop-blur-sm p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-blue-200">
                        {section.description}
                      </p>
                      
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="mb-4 lg:mb-6 flex items-start group hover:bg-white/80 p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-200">
                          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy flex items-center justify-center mr-4 lg:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <span className="text-xl lg:text-2xl">{feature.icon}</span>
                          </div>
                          <div>
                            <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-navy group-hover:text-blue-800 transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-blue-600 group-hover:text-blue-700 transition-colors text-sm lg:text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text Left */}
                    <div className="text-navy">
                      <p className="text-gold uppercase text-xs lg:text-sm mb-3 lg:mb-4 tracking-widest font-bold bg-gold/20 px-3 py-1 lg:px-4 lg:py-2 rounded-full inline-block">
                        {section.section}
                      </p>
                      <h3 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 text-navy bg-gradient-to-r from-navy to-blue-800 bg-clip-text text-transparent">
                        {section.title}
                      </h3>
                      <p className="text-base lg:text-xl text-blue-700 mb-6 lg:mb-8 leading-relaxed bg-white/80 backdrop-blur-sm p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-blue-200">
                        {section.description}
                      </p>
                      
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="mb-4 lg:mb-6 flex items-start group hover:bg-white/80 p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-200">
                          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy flex items-center justify-center mr-4 lg:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <span className="text-xl lg:text-2xl">{feature.icon}</span>
                          </div>
                          <div>
                            <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-navy group-hover:text-blue-800 transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-blue-600 group-hover:text-blue-700 transition-colors text-sm lg:text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Image Right */}
                    <div className="relative group">
                      <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-64 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Enhanced Film Reel Effect */}
                      <div className="hidden lg:block absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full opacity-80 shadow-2xl shadow-yellow-500/50"></div>
                      <div className="hidden lg:block absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full opacity-80 shadow-2xl shadow-yellow-500/50"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Recent Projects Carousel */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-5xl font-bold text-navy mb-8 lg:mb-12 text-center">Blockbuster Projects</h2>
            
            {/* Carousel */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl border-2 border-blue-200">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 z-10 scale-100'
                      : 'opacity-0 z-0 scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-2xl lg:rounded-3xl p-6 lg:p-12 h-full flex flex-col justify-between text-white relative overflow-hidden`}>
                    {/* Project Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-repeat bg-center" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="text-6xl lg:text-8xl mb-4 lg:mb-6 animate-bounce">{project.image}</div>
                      <h3 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-4">{project.title}</h3>
                      <p className="text-base lg:text-xl text-white text-opacity-90 mb-4 lg:mb-6">{project.description}</p>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 lg:p-4 rounded-lg lg:rounded-xl text-center border border-white/30">
                        <p className="text-xs lg:text-sm mb-1 font-semibold">Rating</p>
                        <p className="text-lg lg:text-2xl font-bold">⭐ {project.rating}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 lg:p-4 rounded-lg lg:rounded-xl text-center border border-white/30">
                        <p className="text-xs lg:text-sm mb-1 font-semibold">Duration</p>
                        <p className="text-lg lg:text-2xl font-bold">⏱️ {project.duration}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 lg:p-4 rounded-lg lg:rounded-xl text-center border border-white/30">
                        <p className="text-xs lg:text-sm mb-1 font-semibold">Year</p>
                        <p className="text-lg lg:text-2xl font-bold">📅 {project.year}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 lg:p-4 rounded-lg lg:rounded-xl text-center border border-white/30">
                        <p className="text-xs lg:text-sm mb-1 font-semibold">Budget</p>
                        <p className="text-lg lg:text-2xl font-bold">💰 {project.budget}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <span className="text-xs lg:text-sm bg-white bg-opacity-30 px-3 py-1 lg:px-4 lg:py-2 rounded-full border border-white/50">{project.awards}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 lg:gap-3 z-20">
                {recentProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-6 lg:w-10 h-1.5 lg:h-3 bg-gold'
                        : 'w-1.5 lg:w-3 h-1.5 lg:h-3 bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gold">Ready to Create Magic?</h2>
            <p className="text-base lg:text-xl text-blue-200 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
              Join Anand Cinemas and be part of cinematic storytelling
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Link to={'/contact'} className="bg-gold text-navy px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl lg:shadow-2xl border-2 border-gold hover:shadow-gold/40">
                🎬 Start Film Project
              </Link>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;