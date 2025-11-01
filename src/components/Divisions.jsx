import { Link } from 'react-router-dom';
import { useMultiFormModal } from './Context/ModalContext';

const Divisions = () => {
  // Detailed data for each division


  const{openModal}=useMultiFormModal()
  // Divisions array with React Router Links
  const divisions = [
    {
      title: 'Anand Reality',
      description: 'Building landmark properties and sustainable communities across continents',
      icon: '🏢',
      color: 'from-navy to-blue-900',
      link: '/real-estate'
    },
    {
      title: ' Anand Cinema',
      description: 'Creating compelling stories that entertain and inspire audiences worldwide',
      icon: '🎬',
      color: 'from-navy to-blue-900',
      link: '/production'
    },
    {
      title: ' Anand Infras',
      description: 'Building tomorrow\'s foundation with innovative infrastructure solutions',
      icon: '🏗️',
      color: 'from-navy to-blue-700',
      link: '/infrastructure'
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
            Diversified excellence across our strategic business verticals
          </p>
        </div>

        {/* Default grid view with Links */}
        {/* Default grid view with Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div
            
              className="group block"
            >
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>

                <div className="relative p-8 space-y-4 h-full flex flex-col">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {division.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy group-hover:text-white transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors flex-grow">
                    {division.description}
                  </p>

                  {/* Appointment Button only for Real Estate */}
                  {division.title === 'Real Estate' && (
                    <div className="mb-4">
                      <button
                        onClick={() => openModal('real-estate', { prefillData: 'some data' })}
                        className="w-full bg-gold text-navy py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Book Appointment For Real Estate
                      </button>
                    </div>
                  )}

                  <div className="mt-4 text-navy group-hover:text-white font-semibold flex items-center space-x-2 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to explore our divisions in detail?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/production"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎬 Explore Production
            </Link>
            <Link
              to="/real-estate"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏢 Explore Real Estate
            </Link>
            <Link
              to="/infrastructure"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏗️ Explore Infrastructure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;