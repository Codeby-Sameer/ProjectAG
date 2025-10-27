const SocialResponsibility = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-2xl font-semibold mb-2">Empowering Communities</p>
                <p className="text-lg opacity-90">Through Education & Opportunity</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Social Responsibility & Youth Empowerment
            </h2>
            <div className="w-24 h-1 bg-gold"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Anand Group, we believe in giving back to society and nurturing the next generation.
              Our youth empowerment initiatives focus on education, skill development, and creating
              opportunities for young minds to thrive and lead.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Scholarship programs for underprivileged students</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Vocational training and skill development workshops</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Leadership development programs</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Community development initiatives</span>
              </li>
            </ul>
            <button className="mt-6 px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg">
              Explore Initiatives
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;
