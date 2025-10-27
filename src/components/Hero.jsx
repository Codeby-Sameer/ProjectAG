const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-blue-900 to-navy opacity-95"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-white space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-gold bg-opacity-20 rounded-full text-gold text-sm font-semibold mb-4">
              Chief Executive Officer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              L. Arun
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-200">
              Visionary Leader, Global Innovator
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              CEO, Anand Group — Shaping the Future with Excellence across Seven Countries
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#about"
                className="px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                About the CEO
              </a>
              <a
                href="#divisions"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-105"
              >
                Explore Anand Group
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-slide-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold opacity-20 blur-2xl rounded-full"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-48 h-48 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-navy">Leading Since 1995</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
