const QualityExcellence = () => {
  const qualityStandards = [
    {
      metric: '30+',
      label: 'Projects Completed',
      icon: '🏗️',
      description: 'Successful real estate & infrastructure developments'
    },
    {
      metric: '200+',
      label: 'Happy Customers',
      icon: '⭐',
      description: 'Satisfied clients across all our ventures'
    },
    {
      metric: '3',
      label: 'Business Verticals',
      icon: '🏢',
      description: 'Realty, Cinema Production & Infrastructure'
    },
    {
      metric: '2025',
      label: 'Established',
      icon: '🚀',
      description: 'Beginning our journey with excellence'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-navy to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Anand Group Excellence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building dreams across real estate, entertainment, and infrastructure since our inception
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityStandards.map((metric, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.metric}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-gray-300 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
};

export default QualityExcellence;