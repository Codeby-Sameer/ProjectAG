const KeyTopics = () => {
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
  );
};

export default KeyTopics;