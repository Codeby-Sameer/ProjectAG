import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredDream, setHoveredDream] = useState(null);

  const services = [
    'Commercial Complexes & Office Spaces',
    'Residential Townships & Housing',
    'Industrial Structures & Warehouses',
    'Layout Development & Urban Planning',
    'Public Utilities & Community Infrastructure',
    'Large-scale Construction Projects',
    'Industrial Parks & Manufacturing Units',
    'Smart City Infrastructure Development'
  ];

  const achievements = [
    '30+ Years of Infrastructure Excellence',
    '100+ Projects Successfully Completed',
    'Scientific Planning & Precision Engineering',
    'Vastu-Aligned Designs for Harmony & Balance',
    'Strict Quality Control & Timely Delivery',
    'Award-Winning Sustainable Infrastructure'
  ];

  const ongoingProjects = [
    {
      name: 'Anand Business Hub',
      location: 'Commercial District',
      scope: '50,000 Sq Ft Commercial Complex',
      progress: '85%',
      timeline: '2024-2025',
      features: ['Vastu-Aligned Design', 'Smart Building Systems', 'Premium Amenities'],
      budget: '$25M',
      color: 'from-blue-500 to-indigo-600',
      image: '🏢'
    },
    {
      name: 'Green Valley Township',
      location: 'Suburban Area',
      scope: '200 Residential Units',
      progress: '70%',
      timeline: '2024-2026',
      features: ['Eco-Friendly Design', 'Community Spaces', 'Modern Amenities'],
      budget: '$35M',
      color: 'from-green-500 to-emerald-600',
      image: '🏘️'
    },
    {
      name: 'Industrial Park Development',
      location: 'Industrial Zone',
      scope: '100 Acre Industrial Park',
      progress: '60%',
      timeline: '2024-2027',
      features: ['Advanced Logistics', 'Sustainable Infrastructure', 'Custom Facilities'],
      budget: '$50M',
      color: 'from-orange-500 to-red-600',
      image: '🏭'
    }
  ];

  const coreValues = [
    { 
      icon: '⚖️', 
      title: 'Timeless Quality', 
      description: 'Building infrastructure that endures for generations with unmatched durability and precision' 
    },
    { 
      icon: '📐', 
      title: 'Scientific Planning', 
      description: 'Meticulous engineering and strategic planning for optimal results' 
    },
    { 
      icon: '🌿', 
      title: 'Vastu-Aligned Design', 
      description: 'Creating harmonious spaces that promote balance and well-being' 
    },
    { 
      icon: '🔬', 
      title: 'Quality Control', 
      description: 'Stringent quality standards ensuring excellence in every project' 
    }
  ];

  const dreamCards = [
    {
      title: 'Commercial Excellence',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Create iconic commercial spaces that redefine business environments with modern amenities and strategic locations.',
      buttonText: 'Explore Commercial',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Residential Communities',
      icon: '🏘️',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      description: 'Build harmonious residential townships that become lasting legacies for families and communities.',
      buttonText: 'View Townships',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      title: 'Industrial Infrastructure',
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      description: 'Develop robust industrial parks and manufacturing units that drive economic growth and innovation.',
      buttonText: 'Industrial Solutions',
      gradient: 'from-orange-600 to-red-700'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ongoingProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ongoingProjects.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-16 lg:py-24 min-h-[70vh] flex items-center justify-center overflow-hidden bg-navy"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.85), rgba(0, 30, 60, 0.9)), url('infra1.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-6 animate-bounce">🏗️</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Anand Infra
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 font-semibold">
              Building Tomorrow's Legacy Today
            </p>
            <p className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Creating infrastructure that endures for generations—strong, precise, and timeless. 
              We build not just for today, but for the future—delivering iconic, reliable, and innovative 
              infrastructure that strengthens communities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to={'/contact'} 
                className="bg-white text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl text-center"
              >
                📞 Get Project Consultation
              </Link>
              <Link 
                to={'/projects'} 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-105 text-center"
              >
                🏗️ View Our Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-6 border-r-2 border-b-2 border-white rotate-45"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">30+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Projects Completed</div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">$100M+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Investment Value</div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Cities Served</div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Vision Section */}  
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 text-center text-navy">
              What's Your Vision?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {dreamCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-500 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  onMouseEnter={() => setHoveredDream(index)}
                  onMouseLeave={() => setHoveredDream(null)}
                >
                  {/* Image Background */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl sm:text-6xl lg:text-7xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 text-white">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content - Appears on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} p-4 sm:p-6 transition-all duration-500 ${
                    hoveredDream === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">{card.title}</h3>
                        <p className="text-white text-opacity-95 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                          {card.description}
                        </p>
                      </div>
                      <button className="w-full bg-white hover:bg-yellow-400 text-navy font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transform transition-transform hover:scale-105 shadow-xl text-sm sm:text-base">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  {/* Title Label Below Card */}
                  <div className="bg-white p-3 sm:p-4 border-t-2 border-gray-200 group-hover:border-blue-500 transition-colors">
                    <p className="text-center font-semibold text-navy text-base sm:text-lg">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
     <section className='py-16 sm:py-20 bg-white'>
  <div className="container mx-auto px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Core Values
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Building infrastructure that stands the test of time with precision, quality, and harmony
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="group relative cursor-pointer flex flex-col h-full"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Main Card Container */}
            <div className={`
              relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 
              border-2 border-gray-100 shadow-lg hover:shadow-2xl 
              transition-all duration-500 ease-out
              flex flex-col flex-grow
              ${hoveredCard === index 
                ? 'transform -translate-y-2 scale-[1.02] border-blue-200 shadow-xl' 
                : 'transform translate-y-0 scale-100'
              }
              overflow-hidden
              h-full
            `}>
              
              {/* Background Gradient Overlay on Hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
                transition-opacity duration-500
                ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
              `}></div>

              {/* Animated Border Effect */}
              <div className={`
                absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 
                transition-all duration-500
                ${hoveredCard === index ? 'opacity-10' : 'opacity-0'}
              `}></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                
                {/* Icon Container with Animation */}
                <div className={`
                  w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 
                  rounded-2xl sm:rounded-3xl 
                  bg-gradient-to-br from-blue-500 to-indigo-600 
                  flex items-center justify-center 
                  shadow-lg mb-4 sm:mb-6
                  transition-all duration-500 ease-out
                  flex-shrink-0
                  ${hoveredCard === index 
                    ? 'transform scale-110 rotate-6 shadow-xl' 
                    : 'transform scale-100 rotate-0'
                  }
                `}>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-white">
                    {value.icon}
                  </span>
                </div>

                {/* Title with Gradient Text on Hover */}
                <h3 className={`
                  text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4
                  transition-all duration-500 flex-shrink-0
                  ${hoveredCard === index 
                    ? 'text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text' 
                    : 'text-gray-800'
                  }
                `}>
                  {value.title}
                </h3>

                {/* Description - This will grow to fill available space */}
                <p className={`
                  text-sm sm:text-base leading-relaxed
                  transition-all duration-500 flex-grow
                  ${hoveredCard === index 
                    ? 'text-gray-700 font-medium' 
                    : 'text-gray-600'
                  }
                `}>
                  {value.description}
                </p>

                {/* Hover Indicator Dot - Fixed at bottom */}
                <div className={`
                  w-2 h-2 rounded-full bg-blue-500 mt-4 sm:mt-6
                  transition-all duration-500 flex-shrink-0
                  ${hoveredCard === index 
                    ? 'opacity-100 scale-125' 
                    : 'opacity-0 scale-75'
                  }
                `}></div>
              </div>

              {/* Shine Effect */}
              <div className={`
                absolute top-0 -left-full w-1/2 h-full 
                bg-gradient-to-r from-transparent via-white/30 to-transparent 
                skew-x-12
                transition-all duration-1000
                ${hoveredCard === index ? 'left-full' : '-left-full'}
              `}></div>
            </div>

            {/* Outer Glow Effect */}
            <div className={`
              absolute -inset-2 rounded-3xl sm:rounded-4xl 
              bg-gradient-to-r from-blue-400/20 to-indigo-500/20 
              blur-md
              transition-all duration-500
              ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
              -z-10
            `}></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>  

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-8 sm:mb-12 text-center">Our Infrastructure Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg font-medium">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Carousel */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-8 sm:mb-12 text-center">Ongoing Projects</h2>
            
            {/* Carousel */}
            <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 shadow-2xl">
              {ongoingProjects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 z-10 scale-100'
                      : 'opacity-0 z-0 scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 h-full flex flex-col text-white`}>
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="text-6xl sm:text-7xl lg:text-8xl animate-bounce">{project.image}</div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 mt-4">{project.name}</h3>
                      <p className="text-base sm:text-lg lg:text-xl text-white text-opacity-90">{project.location}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 sm:p-4 rounded-xl text-center">
                        <p className="text-xs sm:text-sm mb-1 font-semibold">Budget</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold">{project.budget}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 sm:p-4 rounded-xl text-center">
                        <p className="text-xs sm:text-sm mb-1 font-semibold">Scope</p>
                        <p className="text-sm sm:text-base lg:text-lg font-bold">{project.scope}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 sm:p-4 rounded-xl text-center">
                        <p className="text-xs sm:text-sm mb-1 font-semibold">Progress</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold">{project.progress}</p>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <p className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="bg-white bg-opacity-20 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm border border-white/30">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto border-t border-white border-opacity-30 pt-3 sm:pt-4">
                      <p className="text-base sm:text-lg font-semibold">Timeline: {project.timeline}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
                {ongoingProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-6 sm:w-8 h-2 sm:h-3 bg-white'
                        : 'w-2 sm:w-3 h-2 sm:h-3 bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-8 sm:mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Build Your Legacy?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Partner with Anand Infra for innovative, sustainable, and timeless infrastructure solutions that endure for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to={'/contact'} 
                className="bg-white text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl text-center"
              >
                🏗️ Start Your Project
              </Link>
              <Link 
                to={'/about'} 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-105 text-center"
              >
                📖 Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;