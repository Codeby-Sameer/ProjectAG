const WorkProcess = () => {
  const workProcess = [
    {
      icon: '📋',
      title: 'Consultation & Planning',
      description: 'In-depth analysis and strategic planning to understand client needs and deliver optimal solutions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎯',
      title: 'Execution Excellence',
      description: 'Skilled teams implementing projects with precision, adhering to international quality standards.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage ensuring deliverables exceed expectations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🚀',
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology and innovative approaches to stay ahead.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures excellence at every stage of your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className={`mt-6 h-1 bg-gradient-to-r ${step.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;