import { useMultiFormModal } from "../Context/ModalContext";

const WorkProcess = () => {
  const {openModal}=useMultiFormModal()
  const workProcess = [
    {
      icon: '📋',
      title: 'Book Appointment',
      description: 'Fill out our simple appointment form with your basic details and property preferences.',
      color: 'from-blue-500 to-blue-600'
    },
   
    {
      icon: '🏢',
      title: 'Site Visit & Selection',
      description: 'Schedule a personalized site visit to explore our premium properties and locations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '✅',
      title: 'Documentation & Handover',
      description: 'Complete seamless documentation and get ready for your dream property handover.',
      color: 'from-orange-500 to-orange-600'
    },
     {
      icon: '📞',
      title: '24 X 7',
      description: 'Our relationship manager will contact you within 24 hours to understand your requirements.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From appointment to handover - Experience seamless property acquisition with Anand Reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
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

        {/* CTA Section */}
       {/* Enhanced Call to Action */}
        <div className="text-center my-16">
          <div className="bg-gradient-to-r from-purple-700 to-violet-900 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Journey With Us?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our diversified expertise can help you achieve your dreams, whether it's your dream home, 
              next investment, or creative project.
            </p>
       
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">
                Prefer to speak directly with our experts?
              </p>
              <button
                onClick={() => openModal('appointment', { prefillData: 'division-page-inquiry' })}
                className="px-8 py-3  text-gray-900 font-bold rounded-lg bg-white  text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Schedule a Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

 export default WorkProcess;