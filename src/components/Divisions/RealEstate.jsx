import { useState, useEffect } from 'react';
import { useMultiFormModal } from '../Context/ModalContext';


const RealEstate = () => {
const {openModal}=useMultiFormModal()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredDream, setHoveredDream] = useState(null);



  const services = [
    'Premium residential and commercial developments',
    'Sustainable building practices and green architecture',
    'Mixed-use projects integrating living, work, and leisure',
    'Smart building technologies and modern amenities',
    'Community-focused developments',
    'Property management and maintenance services',
    'Real estate investment opportunities',
    'Land acquisition and development consulting'
  ];

  const achievements = [
    'Delivered over 5,000 residential units',
    'Developed over 2 million sq ft of commercial space',
    'Sustainable certifications for green buildings',
    '25+ landmark projects across major cities',
    'Zero incident construction record for 5+ years',
    'Partnerships with leading architects and designers'
  ];

  const featuredProjects = [
    {
      name: 'Skyline Residences',
      location: 'Downtown Area',
      units: '150 Luxury Apartments',
      status: 'Completed 2024',
      features: ['Rooftop Garden', 'Swimming Pool', 'Smart Home System'],
      price: '$250M',
      color: 'from-blue-500 to-indigo-600',
      image: '🏙️'
    },
    {
      name: 'Business Plaza',
      location: 'Commercial District',
      units: '500,000 sq ft',
      status: 'In Progress',
      features: ['LEED Certified', 'Parking Facilities', 'Modern Office Spaces'],
      price: '$180M',
      color: 'from-green-500 to-emerald-600',
      image: '🏢'
    },
    {
      name: 'Green Valley Community',
      location: 'Suburban Area',
      units: '200 Villas & Townhouses',
      status: 'Planning Phase',
      features: ['Eco-Friendly Design', 'Community Center', 'Sustainable Living'],
      price: '$120M',
      color: 'from-purple-500 to-pink-600',
      image: '🏘️'
    }
  ];

  const dreamCards = [
    {
      title: 'Residential Haven',
      icon: '🏡',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      description: 'Discover premium residential properties designed for modern living. From luxury apartments to spacious villas, find your perfect home.',
      buttonText: 'Explore Homes',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Commercial Spaces',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Prime commercial properties in strategic locations. Ideal for businesses seeking premium office spaces and retail outlets.',
      buttonText: 'View Properties',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      title: 'Land Investment',
      icon: '🌳',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
      description: 'Strategic land acquisition opportunities with excellent growth potential. Invest in prime locations for maximum returns.',
      buttonText: 'Invest Now',
      gradient: 'from-purple-600 to-pink-700'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🏢</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Estate Development</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Building landmark properties and sustainable communities across continents
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Residential</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Commercial</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Mixed-Use</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Sustainable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Residential Units</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Sq Ft Commercial</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Landmark Projects</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

        {/* What's Your Dream Section */}
        <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#3B82F6' }}>
              What's Your Dream?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dreamCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 border-2 border-transparent hover:border-blue-500 transition-all duration-500"
                  onMouseEnter={() => setHoveredDream(index)}
                  onMouseLeave={() => setHoveredDream(null)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Background */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content - Appears on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} p-6 transition-all duration-500 ${
                    hoveredDream === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
                        <p className="text-white text-opacity-95 leading-relaxed mb-6 text-lg">
                          {card.description}
                        </p>
                      </div>
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transform transition-transform hover:scale-105 shadow-xl">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  {/* Title Label Below Card */}
                  <div className="bg-gray-800 p-4 border-t-2 border-gray-700 group-hover:border-blue-500 transition-colors">
                    <p className="text-center font-semibold" style={{ color: '#3B82F6' }}>
                      - {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
            
            {/* Carousel */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 z-10 scale-100'
                      : 'opacity-0 z-0 scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-12 h-full flex flex-col text-white shadow-2xl`}>
                    <div className="flex-1">
                      <div className="text-9xl mb-6 text-center animate-pulse-slow">{project.image}</div>
                      <h3 className="text-5xl md:text-6xl font-bold mb-4 text-center">{project.name}</h3>
                      <p className="text-2xl text-center text-white text-opacity-90 mb-8">{project.location}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl">
                          <p className="text-sm text-white text-opacity-80 mb-2">Total Units</p>
                          <p className="text-3xl font-bold">{project.units}</p>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl">
                          <p className="text-sm text-white text-opacity-80 mb-2">Investment Value</p>
                          <p className="text-3xl font-bold">{project.price}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-lg font-semibold mb-3">Key Features:</p>
                        <div className="flex flex-wrap gap-3">
                          {project.features.map((feature, idx) => (
                            <span key={idx} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                              ✓ {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white border-opacity-30">
                      <span className="text-2xl font-bold bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-10 h-3 bg-white'
                        : 'w-3 h-3 bg-white bg-opacity-40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 3D Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`bg-white border-2 border-gray-200 rounded-2xl p-6 transform transition-all duration-500 ${
                      hoveredCard === index
                        ? 'rotate-y-6 rotate-x-3 scale-105 shadow-2xl'
                        : 'rotate-y-0 rotate-x-0 scale-100'
                    }`}
                    style={{
                      transform: hoveredCard === index 
                        ? 'perspective(1000px) rotateY(-8deg) rotateX(5deg) scale(1.05)'
                        : 'perspective(1000px)'
                    }}
                  >
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">{project.name}</h4>
                    <p className="text-blue-600 font-semibold mb-4 text-center">{project.location}</p>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mb-4">
                      <p className="text-3xl font-bold text-center text-blue-700">{project.price}</p>
                    </div>
                    <div className="flex justify-center">
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Achievements & Milestones</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-800 text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Invest in Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover our premium properties and start your journey to luxury living
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                View Properties
              </button>
              <button 
              onClick={() => openModal('real-estate', { prefillData: 'some data' })}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors shadow-lg border-2 border-white">
                Land Information Form
              </button>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default RealEstate;
