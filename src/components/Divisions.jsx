import { Link } from 'react-router-dom';
import { useMultiFormModal } from './Context/ModalContext';

const Divisions = () => {
  const { openModal } = useMultiFormModal();

  // Enhanced divisions data with more details
  const divisions = [
    {
      title: 'Anand Realtyy',
      description: 'Building landmark properties and sustainable communities across continents',
      detailedDescription: 'Specializing in premium land plots, residential ventures, and commercial developments that redefine urban living with sustainable design and strategic locations.',
      icon: '🏢',
      color: 'from-blue-600 to-blue-800',
      gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
      link: '/real-estate',
      features: ['Land Plots', 'Residential Ventures', 'Commercial Spaces', 'Sustainable Design'],
      stats: '50+ Projects'
    },
    {
      title: 'Anand Cinemaz',
      description: 'Creating compelling stories that entertain and inspire audiences worldwide',
      detailedDescription: 'A complete entertainment powerhouse producing blockbuster movies, music albums, and digital content that captivates global audiences with innovative storytelling.',
      icon: '🎬',
      color: 'from-purple-600 to-purple-800',
      gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
      link: '/production',
      features: ['Movie Production', 'Music Albums', 'Digital Content', 'Global Distribution'],
      stats: '100+ Productions'
    },
    {
      title: 'Anand Infra',
      description: 'Building tomorrow\'s foundation with innovative infrastructure solutions',
      detailedDescription: 'Developing premium apartments, gateway communities, and integrated townships with world-class amenities and smart living solutions for modern families.',
      icon: '🏗️',
      color: 'from-green-600 to-green-800',
      gradient: 'bg-gradient-to-br from-green-50 to-green-100',
      link: '/infrastructure',
      features: ['Premium Apartments', 'Gateway Communities', 'Smart Townships', 'Modern Amenities'],
      stats: '25+ Developments'
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Strategic Divisions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driving excellence across diversified business verticals, each division represents our commitment 
            to innovation, quality, and sustainable growth in their respective domains.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {divisions.map((division, index) => (
            <div key={index} className="group">
              <div className={`relative rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer h-full border border-gray-100 ${division.gradient}`}>
                
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-10 group-hover:opacity-95 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {division.icon}
                  </div>
                  
                  {/* Title & Stats */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {division.title}
                    </h3>
                    <div className="inline-block mt-2 px-3 py-1 bg-white group-hover:bg-opacity-20 rounded-full">
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-white">
                        {division.stats}
                      </span>
                    </div>
                  </div>
                  
                  {/* Main Description */}
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300 mb-4 leading-relaxed">
                    {division.detailedDescription}
                  </p>
                  
        
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {division.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white bg-opacity-50 group-hover:bg-opacity-20 rounded-full text-xs font-medium text-gray-700 group-hover:text-white transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mt-auto">
                   
                    
                    {/* Learn More Link */}
                    <Link
                      to={division.link}
                      className="flex items-center justify-between p-3 bg-white bg-opacity-50 group-hover:bg-opacity-20 rounded-xl text-gray-800 group-hover:text-white font-semibold transition-all duration-300 hover:bg-opacity-70"
                    >
                      <span>Explore Division</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8  border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Unified Vision, Diversified Excellence
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Presence</h4>
              <p className="text-gray-600 leading-relaxed">
                Operating across multiple continents with projects that set benchmarks in quality and innovation.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation Driven</h4>
              <p className="text-gray-600 leading-relaxed">
                Leveraging cutting-edge technology and sustainable practices across all business verticals.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Centric</h4>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through exceptional service and commitment to excellence.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Divisions;