// components/Achievements.js
import React from 'react';

const Achievements = () => {
  const milestones = [
    {
      number: "100+",
      title: "Projects Completed",
      description: "Successful delivery across all verticals"
    },
    {
      number: "15+",
      title: "Years of Trust",
      description: "Building reputation through excellence"
    },
    {
      number: "3",
      title: "Business Verticals",
      description: "Diversified portfolio serving sectors"
    },
    {
      number: "1000+",
      title: "Satisfied Clients",
      description: "Growing network of relationships"
    }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">Our Milestones</h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 px-4">
              Built on trust, scrutiny, and uncompromised standards, we continue to advance with 
              a strong reputation and growing network.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-1 sm:mb-2">{milestone.number}</div>
                <h4 className="text-sm sm:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">{milestone.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600">{milestone.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Major Achievement</h3>
            <p className="text-sm sm:text-lg opacity-90">
              The consolidation of our diverse businesses under the Anand Group name stands as a 
              major achievement, symbolizing our expanding capabilities and unified commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;