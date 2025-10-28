import { useState, useEffect } from 'react';

const GlobalPresence = () => {
  const [activeCountry, setActiveCountry] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);

  const countries = [
    {
      name: 'India',
     
      year: '1995',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
      projects: 15,
      keyProject: 'Metro Rail System',
      description: 'Leading infrastructure development with multiple landmark projects',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'USA',
     
      year: '2005',
      cities: ['New York', 'Los Angeles', 'Chicago'],
      projects: 12,
      keyProject: 'Commercial Complexes',
      description: 'Expanding real estate portfolio in key metropolitan areas',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'UK',
 
      year: '2010',
      cities: ['London', 'Manchester', 'Birmingham'],
      projects: 8,
      keyProject: 'Mixed-Use Developments',
      description: 'Sustainable residential and commercial projects',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'UAE',
    
      year: '2012',
      cities: ['Dubai', 'Abu Dhabi'],
      projects: 10,
      keyProject: 'Luxury Residences',
      description: 'Premium real estate developments in Dubai',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Singapore',
    
      year: '2014',
      cities: ['Singapore'],
      projects: 5,
      keyProject: 'Smart Buildings',
      description: 'Technology-integrated sustainable infrastructure',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      name: 'Australia',
    
      year: '2016',
      cities: ['Sydney', 'Melbourne'],
      projects: 6,
      keyProject: 'Eco-Friendly Homes',
      description: 'Environmentally conscious development projects',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Canada',
      
      year: '2018',
      cities: ['Toronto', 'Vancouver'],
      projects: 4,
      keyProject: 'Urban Regeneration',
      description: 'Transforming urban landscapes with innovative designs',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  const globalStats = [
    { icon: '🌍', value: '7', suffix: '+', label: 'Countries', description: 'Global Footprint' },
    { icon: '🏗️', value: '60', suffix: '+', label: 'Projects', description: 'Completed' },
    { icon: '💰', value: '$5', suffix: 'B+', label: 'Investment', description: 'Total Value' },
    { icon: '👥', value: '50k', suffix: '+', label: 'Employed', description: 'Workforce' },
    { icon: '🎬', value: '500', suffix: '+', label: 'Productions', description: 'Content Created' },
    { icon: '🏆', value: '100', suffix: '+', label: 'Awards', description: 'Recognition' }
  ];

  const milestones = [
    { year: '1995', title: 'Founded in Mumbai', description: 'Started operations in India', icon: '🚀' },
    { year: '2005', title: 'Expanded to USA', description: 'International presence began', icon: '🌎' },
    { year: '2010', title: 'European Entry', description: 'UK operations established', icon: '🏰' },
    { year: '2015', title: 'Middle East Expansion', description: 'Dubai hub inaugurated', icon: '🏙️' },
    { year: '2020', title: 'Digital Transformation', description: 'AI and tech integration', icon: '🤖' },
    { year: '2024', title: 'Sustainable Future', description: '100% green initiatives', icon: '🌱' }
  ];

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const nextCountry = () => {
    setActiveCountry((prev) => (prev + 1) % countries.length);
  };

  const prevCountry = () => {
    setActiveCountry((prev) => (prev - 1 + countries.length) % countries.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="global" className="py-20 bg-gradient-to-br from-navy via-blue-900 to-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-gold bg-opacity-20 rounded-full text-gold text-sm font-semibold mb-6">
            🌍 GLOBAL FOOTPRINT
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Global Presence
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Operating across seven countries with a commitment to excellence, innovation, and sustainable development
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {globalStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-gray-200 font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Countries Carousel */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gold bg-opacity-20 rounded-full text-gold text-sm font-semibold mb-6">
              🌏 WORLDWIDE OPERATIONS
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Our International Locations
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Mumbai to Melbourne, discover our global footprint
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Country Cards Container */}
            <div className="relative h-[650px] md:h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 to-navy">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeCountry
                      ? 'opacity-100 z-10 translate-x-0 scale-100'
                      : index < activeCountry
                      ? 'opacity-0 -translate-x-full scale-90'
                      : 'opacity-0 translate-x-full scale-90'
                  }`}
                >
                  <div className="h-full flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${country.gradient} rounded-3xl p-10 md:p-14 shadow-2xl w-full max-w-4xl mx-auto`}>
                      {/* Header - Centered */}
                      <div className="inline-block px-8 py-3  bg-white bg-opacity-25 backdrop-blur-sm rounded-full text-lg font-bold border border-white border-opacity-40 shadow-lg">
                          🕒 Since {country.year}
                        </div>
                      <div className="text-center mb-10">
                        
                       {/* Cities Tags */}
                       <div className="flex flex-wrap gap-4 justify-center">
                          {country.cities.map((city, idx) => (
                            <div
                              key={idx}
                              className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-base font-semibold border border-white border-opacity-30 shadow-md hover:bg-opacity-30 hover:scale-105 transition-all duration-300"
                            >
                              🏙️ {city}
                            </div>
                          ))}
                        </div>
                       
                       
                      </div>

                      {/* Content - Centered and Balanced */}
                      <div className="space-y-6">
                        {/* Projects Card */}
                        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-30 shadow-xl text-center">
                          <div className="text-5xl md:text-6xl font-bold text-yellow-300 mb-3 drop-shadow-lg">
                            {country.projects}+
                          </div>
                          <div className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                            {country.keyProject}
                          </div>
                          <p className="text-lg md:text-xl text-white text-opacity-95 leading-relaxed">
                            {country.description}
                          </p>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevCountry}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous country"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextCountry}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next country"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </div>

            {/* Pagination Dots */}
            <div className="flex gap-3 justify-center mt-8">
              {countries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCountry(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeCountry
                      ? 'w-10 h-3 bg-gold'
                      : 'w-3 h-3 bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                  aria-label={`Go to ${countries[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gold bg-opacity-20 rounded-full text-gold text-sm font-semibold mb-6">
              📅 MILESTONES
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Our Journey
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A timeline of growth, expansion, and innovation since 1995
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold via-yellow-500 to-gold opacity-40"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
            <div
              key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{milestone.icon}</div>
                        <div className="text-3xl font-bold text-gold">{milestone.year}</div>
                      </div>
                      <h4 className="text-2xl font-bold mb-2">{milestone.title}</h4>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-8 h-8 bg-gold rounded-full border-4 border-navy transform hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20"></div>
                  </div>

                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Impact Section */}
        <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-3xl p-8 md:p-12 text-navy shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Making a Global Impact
              </h3>
              <p className="text-xl mb-8 leading-relaxed">
                From infrastructure to entertainment, we're creating lasting value across continents. 
                Our projects touch lives, transform communities, and build a better tomorrow.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">✅</div>
                  <div>
                    <div className="font-bold text-2xl">99.9%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🌍</div>
                  <div>
                    <div className="font-bold text-2xl">7</div>
                    <div className="text-sm">Countries</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <div className="font-bold text-2xl">100+</div>
                    <div className="text-sm">Awards</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🏗️', title: 'Infrastructure', value: '60+' },
                { icon: '🏢', title: 'Real Estate', value: '100+' },
                { icon: '🎬', title: 'Production', value: '500+' },
                { icon: '💡', title: 'Innovation', value: '24/7' }
              ].map((item, index) => (
                <div key={index} className="bg-navy bg-opacity-10 rounded-2xl p-6 text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-gold mb-2">{item.value}</div>
                  <div className="text-sm font-semibold">{item.title}</div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
