const Divisions = ({ selectedDivision, onDivisionSelect }) => {
  // Detailed data for each division
  const divisionData = {
    'production': {
      title: 'Production',
      subtitle: 'Film Production & Entertainment',
      description: 'Creating compelling stories that entertain and inspire audiences worldwide',
      icon: '🎬',
      color: 'from-purple-500 to-purple-700',
      details: [
        'Full-service film production from pre-production to post-production',
        'State-of-the-art editing facilities and cutting-edge equipment',
        'Award-winning directors, cinematographers, and creative teams',
        'International distribution networks',
        'Documentary filmmaking and storytelling'
      ],
      achievements: [
        '100+ films produced across multiple genres',
        'International film festival recognition',
        'Collaborations with global streaming platforms',
        'Award-winning documentaries and commercial films'
      ]
    },
    'real-estate': {
      title: 'Real Estate',
      subtitle: 'Building Landmark Properties',
      description: 'Building landmark properties and sustainable communities across continents',
      icon: '🏢',
      color: 'from-blue-500 to-blue-700',
      details: [
        'Premium residential and commercial developments',
        'Sustainable building practices and green architecture',
        'Mixed-use projects that integrate living, work, and leisure',
        'Smart building technologies and modern amenities',
        'Community-focused developments'
      ],
      achievements: [
        '5,000+ residential units delivered',
        '2M+ sq. ft. of commercial space developed',
        'Sustainable certifications for green buildings',
        '25+ landmark projects across cities'
      ]
    },
    'infrastructure': {
      title: 'Infrastructure',
      subtitle: 'Building Tomorrow\'s Foundation',
      description: 'Developing critical infrastructure that powers growth and connects communities',
      icon: '🏗️',
      color: 'from-green-500 to-green-700',
      details: [
        'Road and transportation infrastructure development',
        'Urban planning and smart city initiatives',
        'Water management and sanitation systems',
        'Power and energy infrastructure projects',
        'Industrial parks and logistics hubs'
      ],
      achievements: [
        '500+ km of roads and highways constructed',
        '50+ infrastructure projects completed',
        'Public-private partnerships in development',
        'Smart city solutions implemented'
      ]
    }
  };

  // Get the selected division data or show default
  const data = selectedDivision && divisionData[selectedDivision] ? divisionData[selectedDivision] : null;

  // Original divisions array for default view with click handlers
  const divisions = [
    {
      title: 'Real Estate',
      description: 'Building landmark properties and sustainable communities across continents',
      icon: '🏢',
      color: 'from-blue-500 to-blue-700',
      divisionKey: 'real-estate'
    },
    {
      title: 'Film Production',
      description: 'Creating compelling stories that entertain and inspire audiences worldwide',
      icon: '🎬',
      color: 'from-purple-500 to-purple-700',
      divisionKey: 'production'
    },
    {
      title: 'Infrastructure',
      description: 'Building tomorrow\'s foundation with innovative infrastructure solutions',
      icon: '🏗️',
      color: 'from-green-500 to-green-700',
      divisionKey: 'infrastructure'
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Divisions
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data ? `Detailed Information: ${data.title}` : 'Diversified excellence across six strategic business verticals'}
          </p>
        </div>

        {/* Render detailed view if a division is selected */}
        {data ? (
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br ${data.color} rounded-2xl shadow-2xl overflow-hidden`}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-7xl">{data.icon}</div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{data.title}</h3>
                    <p className="text-xl text-white text-opacity-90">{data.subtitle}</p>
                  </div>
                </div>
                <p className="text-xl text-white mb-8">{data.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">What We Do</h4>
                    <ul className="space-y-3">
                      {data.details.map((item, index) => (
                        <li key={index} className="flex items-start text-white">
                          <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Achievements</h4>
                    <ul className="space-y-3">
                      {data.achievements.map((item, index) => (
                        <li key={index} className="flex items-start text-white">
                          <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Render default grid view
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <div
                key={index}
                onClick={() => onDivisionSelect && onDivisionSelect(division.divisionKey)}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>

                <div className="relative p-8 space-y-4">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {division.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy group-hover:text-white transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors">
                    {division.description}
                  </p>
                  <div className="mt-4 text-navy group-hover:text-white font-semibold flex items-center space-x-2 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Divisions;
