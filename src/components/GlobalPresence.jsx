const GlobalPresence = () => {
  const stats = [
    { icon: '🌍', value: '7', label: 'Countries' },
    { icon: '🏗️', value: '50+', label: 'Projects' },
    { icon: '🎬', value: '25+', label: 'Productions' },
    { icon: '👨‍🎓', value: '10k+', label: 'Youth Empowered' }
  ];

  return (
    <section id="global" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Presence
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Operating across seven countries with a commitment to excellence and innovation
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-blue-900 bg-opacity-50 rounded-xl p-8 md:p-12">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
              <svg className="w-full h-full opacity-30" viewBox="0 0 1000 500" fill="none">
                <circle cx="150" cy="150" r="8" fill="#D4AF37" className="animate-pulse" />
                <circle cx="350" cy="200" r="8" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                <circle cx="500" cy="180" r="8" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '0.4s'}} />
                <circle cx="700" cy="160" r="8" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                <circle cx="800" cy="220" r="8" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '0.8s'}} />
                <circle cx="250" cy="320" r="8" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '1s'}} />
                <circle cx="650" cy="300" r="8" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '1.2s'}} />
                <path d="M 150 150 Q 250 100 350 200" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
                <path d="M 350 200 Q 400 150 500 180" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
                <path d="M 500 180 Q 600 150 700 160" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
                <path d="M 700 160 Q 750 190 800 220" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌐</div>
                  <p className="text-xl font-semibold">Worldwide Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-900 bg-opacity-50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-opacity-70"
            >
              <div className="text-4xl md:text-5xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
