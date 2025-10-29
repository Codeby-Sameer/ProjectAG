import { useState, useEffect } from 'react';

const Infrastructure = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredDream, setHoveredDream] = useState(null);

  const services = [
    'Road and transportation infrastructure development',
    'Urban planning and smart city initiatives',
    'Water management and sanitation systems',
    'Power and energy infrastructure projects',
    'Industrial parks and logistics hubs',
    'Bridge and tunnel construction',
    'Railway and metro systems',
    'Airport and port infrastructure'
  ];

  const achievements = [
    'Constructed over 500 km of roads and highways',
    'Completed 50+ infrastructure projects',
    'Active public-private partnerships in development',
    'Smart city solutions implemented across 10 cities',
    'Zero accident safety record for 3 consecutive years',
    'Awarded Best Infrastructure Company 2024'
  ];

  const ongoingProjects = [
    {
      name: 'Mega Highway Project',
      location: 'National Corridor',
      scope: '200 km Expressway',
      progress: '75%',
      timeline: '2024-2025',
      features: ['Smart Traffic Management', 'EV Charging Stations', 'Emergency Services'],
      budget: '$500M',
      color: 'from-green-500 to-emerald-600',
      image: '🛣️'
    },
    {
      name: 'Metro Rail Extension',
      location: 'City Center',
      scope: '30 km Underground Network',
      progress: '60%',
      timeline: '2024-2026',
      features: ['Underground Stations', 'Parking Facilities', 'Accessibility Features'],
      budget: '$750M',
      color: 'from-blue-500 to-cyan-600',
      image: '🚇'
    },
    {
      name: 'Smart Water Distribution',
      location: 'Urban Area',
      scope: 'City-Wide Network',
      progress: '40%',
      timeline: '2024-2027',
      features: ['Automated Systems', 'Water Recycling', 'Quality Monitoring'],
      budget: '$300M',
      color: 'from-teal-500 to-blue-600',
      image: '💧'
    }
  ];

  const techFeatures = [
    { icon: '🤖', title: 'Smart Systems', description: 'AI-powered monitoring and automation' },
    { icon: '♻️', title: 'Sustainable', description: 'Eco-friendly building materials' },
    { icon: '🔒', title: 'Safety First', description: 'Zero tolerance for accidents' },
    { icon: '⚡', title: 'Energy Efficient', description: 'Renewable energy integration' }
  ];

  const dreamCards = [
    {
      title: 'Smart City Solutions',
      icon: '🏙️',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
      description: 'Transform urban landscapes with integrated smart city technologies, IoT sensors, and data-driven infrastructure management.',
      buttonText: 'Explore Solutions',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      title: 'Sustainable Infrastructure',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
      description: 'Build eco-friendly infrastructure with renewable energy integration, green materials, and carbon-neutral designs.',
      buttonText: 'Learn More',
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      title: 'Transportation Networks',
      icon: '🚇',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
      description: 'Develop modern transportation systems including highways, railways, bridges, and public transit networks.',
      buttonText: 'View Projects',
      gradient: 'from-blue-600 to-indigo-700'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ongoingProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ongoingProjects.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🏗️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Infrastructure Development</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Building tomorrow's foundation with innovative and sustainable infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Roads & Highways</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Smart Cities</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Public Works</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Utilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Km Constructed</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">$500M+</div>
              <div className="text-gray-600">Investment Value</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">10</div>
              <div className="text-gray-600">Cities Transformed</div>
            </div>
          </div>
        </div>
      </section>


       {/* What's Your Dream Section */}
       <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#10B981' }}>
              What's Your Vision?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dreamCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 border-2 border-transparent hover:border-green-500 transition-all duration-500"
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
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transform transition-transform hover:scale-105 shadow-xl">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  {/* Title Label Below Card */}
                  <div className="bg-gray-800 p-4 border-t-2 border-gray-700 group-hover:border-green-500 transition-colors">
                    <p className="text-center font-semibold" style={{ color: '#10B981' }}>
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
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Ongoing Projects Carousel */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Ongoing Projects</h2>
            
            {/* Carousel */}
            <div className="relative h-[550px] overflow-hidden rounded-3xl mb-12">
              {ongoingProjects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 z-10 scale-100'
                      : 'opacity-0 z-0 scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-10 h-full flex flex-col text-white shadow-2xl`}>
                    <div className="text-center mb-8">
                      <div className="text-9xl animate-bounce-slow">{project.image}</div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h3>
                      <p className="text-2xl text-white text-opacity-90">{project.location}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center">
                        <p className="text-sm mb-1">Budget</p>
                        <p className="text-2xl font-bold">{project.budget}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center">
                        <p className="text-sm mb-1">Scope</p>
                        <p className="text-lg font-bold">{project.scope}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center">
                        <p className="text-sm mb-1">Progress</p>
                        <p className="text-2xl font-bold">{project.progress}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-lg font-semibold mb-2">Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto border-t border-white border-opacity-30 pt-4">
                      <p className="text-lg font-semibold">Timeline: {project.timeline}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {ongoingProjects.map((_, index) => (
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

            {/* 3D Tech Features Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white transform transition-all duration-500"
                    style={{
                      transform: hoveredCard === index 
                        ? 'perspective(1000px) rotateY(-8deg) rotateX(5deg) scale(1.05)'
                        : 'perspective(1000px)',
                    }}
                  >
                    <div className="text-6xl mb-4 text-center animate-pulse-slow">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2 text-center">{feature.title}</h4>
                    <p className="text-green-100 text-center text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Achievements & Milestones</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Building Tomorrow, Today</h2>
            <p className="text-xl text-green-100 mb-8">
              Partner with us for innovative infrastructure solutions
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;

