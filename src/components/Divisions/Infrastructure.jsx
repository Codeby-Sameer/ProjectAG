import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      color: 'from-blue-500 to-indigo-600',
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
      color: 'from-green-500 to-emerald-600',
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
      color: 'from-teal-500 to-cyan-600',
      image: '💧'
    }
  ];

  const techFeatures = [
    { icon: '🤖', title: 'Smart Systems', description: 'AI-powered monitoring ' },
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
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Sustainable Infrastructure',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
      description: 'Build eco-friendly infrastructure with renewable energy integration, green materials, and carbon-neutral designs.',
      buttonText: 'Learn More',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      title: 'Transportation Networks',
      icon: '🚇',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
      description: 'Develop modern transportation systems including highways, railways, bridges, and public transit networks.',
      buttonText: 'View Projects',
      gradient: 'from-purple-600 to-pink-700'
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
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 lg:py-32 min-h-[80vh] flex items-center justify-center overflow-hidden bg-navy"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 30, 60, 0.9)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6 animate-bounce">🏗️</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Anand Infra
            </h1>
            <p className="text-xl lg:text-2xl text-gold mb-8 font-semibold">
              Building India's Future Infrastructure
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Transforming landscapes with cutting-edge infrastructure solutions that drive economic growth 
              and sustainable development across the nation.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={'/about'} className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                📞 Get Project Consultation
              </Link>
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-8 border-r-2 border-b-2 border-gold rotate-45"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Km Constructed</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Projects Completed</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600 font-semibold">Investment Value</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-gray-600 font-semibold">Cities Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}  
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-navy">
              What's Your Vision?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {dreamCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-500 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  onMouseEnter={() => setHoveredDream(index)}
                  onMouseLeave={() => setHoveredDream(null)}
                >
                  {/* Image Background */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-7xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 text-white">
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
                        <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                        <p className="text-white text-opacity-95 leading-relaxed mb-6">
                          {card.description}
                        </p>
                      </div>
                      <button className="w-full bg-gold hover:bg-yellow-400 text-navy font-bold py-3 px-6 rounded-lg transform transition-transform hover:scale-105 shadow-xl">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  {/* Title Label Below Card */}
                  <div className="bg-white p-4 border-t-2 border-gray-200 group-hover:border-blue-500 transition-colors">
                    <p className="text-center font-semibold text-navy text-lg">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Our Infrastructure Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg font-medium">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Ongoing Projects</h2>
            
            {/* Carousel */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl mb-12 shadow-2xl">
              {ongoingProjects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 z-10 scale-100'
                      : 'opacity-0 z-0 scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-8 lg:p-12 h-full flex flex-col text-white`}>
                    <div className="text-center mb-8">
                      <div className="text-8xl animate-bounce">{project.image}</div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4 mt-4">{project.name}</h3>
                      <p className="text-xl text-white text-opacity-90">{project.location}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center">
                        <p className="text-sm mb-1 font-semibold">Budget</p>
                        <p className="text-2xl font-bold">{project.budget}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center">
                        <p className="text-sm mb-1 font-semibold">Scope</p>
                        <p className="text-lg font-bold">{project.scope}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center">
                        <p className="text-sm mb-1 font-semibold">Progress</p>
                        <p className="text-2xl font-bold">{project.progress}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-lg font-semibold mb-3">Key Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/30">
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
                        : 'w-3 h-3 bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Tech Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white transform transition-all duration-500 shadow-lg hover:shadow-2xl"
                    style={{
                      transform: hoveredCard === index 
                        ? 'translateY(-10px) scale(1.05)'
                        : 'translateY(0) scale(1)',
                    }}
                  >
                    <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-center">{feature.title}</h4>
                    <p className="text-blue-100 text-center text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-800 text-lg font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with Anand Infra for innovative, sustainable, and world-class infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={'/contact'} className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                🏗️ Start Your Project
              </Link>
              {/* <button className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105">
                📞 Contact Our Team
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;