const FounderMessage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navy to-blue-900 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-gold text-6xl md:text-8xl mb-6 opacity-50">"</div>
              <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8 italic">
                My dream is to build enterprises that inspire innovation, create opportunities,
                and uplift lives across the world. Every venture we undertake is guided by our
                core values of integrity, excellence, and social responsibility.
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gold"></div>
                <div>
                  <p className="text-white font-bold text-lg">L. Arun</p>
                  <p className="text-gray-300 text-sm">CEO, Anand Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
