const Divisions = () => {
  const divisions = [
    {
      title: 'Real Estate',
      description: 'Building landmark properties and sustainable communities across continents',
      icon: '🏢',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Film Production',
      description: 'Creating compelling stories that entertain and inspire audiences worldwide',
      icon: '🎬',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Imports & Exports',
      description: 'Facilitating global trade with excellence in logistics and supply chain',
      icon: '🚢',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Trust Services',
      description: 'Providing comprehensive financial and legal trust management solutions',
      icon: '🤝',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      title: 'Youth Empowerment',
      description: 'Nurturing the next generation through education and skill development',
      icon: '🎓',
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Devocation',
      description: 'Spiritual journeys that connect hearts to sacred destinations',
      icon: '🕉️',
      color: 'from-orange-500 to-orange-700'
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
            Diversified excellence across six strategic business verticals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
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
                <button className="mt-4 text-navy group-hover:text-white font-semibold flex items-center space-x-2 transition-colors">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
