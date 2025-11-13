// import Divisions from "./Divisions";
// import HeroCarousel from "./Hero/HeroCarousel";
// import KeyTopics from "./Hero/KeyTopics";
// import QualityExcellence from "./Hero/QualityExcellence";
// import WorkProcess from "./Hero/WorkProcess";
// import ScrollingNotice from "./Sections/Scroller";
// import Services from "./Sections/Services";



// const Hero = () => {
//   return (
//     <>
//       <section className="relative bg-gradient-to-r from-violet-600 to-amber-800 text-white">
//       <div className="container mx-auto px-4 py-20 md:py-28">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             Building Legacies,<br />Creating Value
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 opacity-90">
//             Quality, Trust, and Long-term Value Accessible to All
//           </p>
//           <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30">
//             <p className="text-lg italic mb-2">"Dharmo Rakshati Rakshitah"</p>
//             <p className="opacity-90">We believe that when we uphold what is right, it protects and strengthens everything we build.</p>
//           </div>
//           <div className="mt-8 flex flex-wrap gap-4">
//             <a href="#services" className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
//               Our Services
//             </a>
//             <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
//     </section>

//       <HeroCarousel/>
//       <ScrollingNotice/>
//   <Services/>
//       <WorkProcess />
//       <QualityExcellence />


//     </>
//   );
// };

// export default Hero;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);

  const companyCards = [
    {
      id: 1,
      name: 'Anand Infra',
      badge: '🏗️',
      description: 'Sustainable Infrastructure',
      stats: '30+ Projects • 7 Countries',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'hover:shadow-blue-500/20',
      textColor: 'text-white',
      path: 'infrastructure',
      delay: '0'
    },
    {
      id: 2,
      name: 'Anand Cinemaz',
      badge: '🎬',
      description: 'Entertainment & Production',
      stats: '50+ Productions • 10M+ Audience',
      color: 'from-amber-500 to-orange-400',
      glowColor: 'hover:shadow-amber-500/20',
      textColor: 'text-white',
      path: 'production',
      delay: '100'
    },
    {
      id: 3,
      name: 'Anand Realty',
      badge: '🏢',
      description: 'Premium Living Spaces',
      stats: '1,000+ Units • 2M+ Sq Ft',
      color: 'from-slate-600 to-slate-700',
      glowColor: 'hover:shadow-slate-500/20',
      textColor: 'text-white',
      path: 'real-estate',
      delay: '200'
    },
    {
      id: 4,
      name: 'Anand Yatra',
      badge: '✈️',
      description: 'Travel & Hospitality',
      stats: 'Luxury Experiences • Global',
      color: 'from-yellow-400 to-amber-400',
      glowColor: 'hover:shadow-yellow-500/20',
      textColor: 'text-gray-900',
      path: 'travel',
      delay: '300'
    },
    {
      id: 5,
      name: 'Anand Pharma',
      badge: '💊',
      description: 'Healthcare Solutions',
      stats: 'Innovative Medicines • Research',
      color: 'from-white to-gray-100',
      glowColor: 'hover:shadow-white/20',
      textColor: 'text-gray-800',
      path: 'pharma',
      delay: '400'
    },
    {
      id: 6,
      name: 'Anand Capital',
      badge: '💎',
      description: 'Financial Services',
      stats: 'Wealth Management • Investments',
      color: 'from-emerald-400 to-teal-500',
      glowColor: 'hover:shadow-emerald-500/20',
      textColor: 'text-white',
      path: 'capital',
      delay: '500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % companyCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [companyCards.length]);

  return (
  <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50 overflow-hidden">
  {/* Enhanced Animated Background */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-32 right-20 w-96 h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    
    {/* Geometric Patterns */}
    <div className="absolute top-40 right-40 w-32 h-32 border-2 border-blue-300/20 rounded-lg rotate-45"></div>
    <div className="absolute bottom-40 left-40 w-24 h-24 border-2 border-amber-300/20 rounded-full"></div>
    <div className="absolute top-1/2 left-20 w-16 h-16 border-2 border-cyan-300/20 rotate-12"></div>
  </div>

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20  min-h-[calc(100vh-4rem)]">
      
      {/* Left Content - Main Text */}
      <div className="flex flex-col justify-center space-y-8 lg:space-y-12 order-2 lg:order-1">
        
        {/* Enhanced Main Heading */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-500 bg-clip-text text-transparent">
              ANAND GROUP
            </span>
          </h1>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-2xl max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-amber-500 mt-1">❝</div>
              <div>
                <p className="text-xl italic mb-4 text-slate-700 font-medium leading-relaxed">
                  "Multi-Sector Enterprise Built on One Core Belief"
                </p>
                <p className="text-slate-600/80 leading-relaxed font-light text-lg">
                  When we uphold what is right, it protects and strengthens everything we build.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#services"
            className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center text-lg"
          >
            <span>Our Services</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
          <a
            href="#contact"
            className="group border-2 border-blue-800 text-blue-800 px-10 py-4 rounded-2xl font-bold hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center text-lg"
          >
            <span>Get in Touch</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>

        {/* Enhanced Stats Row */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-300/30">
          {[
            { number: '15+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
            { number: '100+', label: 'Projects', color: 'from-amber-500 to-orange-500' },
            { number: '1000+', label: 'Happy Clients', color: 'from-slate-600 to-slate-700' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-slate-600/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Company Cards Grid Only */}
      <div className="w-full order-1 lg:order-2 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {companyCards.map((company, index) => (
            <Link
              key={company.id}
              to={`/${company.path}`}
              className={`relative group cursor-pointer transform transition-all duration-700 ease-out ${
                activeCard === index 
                  ? 'scale-110 z-10' 
                  : 'scale-100 opacity-80 hover:scale-105 hover:opacity-100'
              }`}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Enhanced Card */}
              <div className={`relative bg-gradient-to-br ${company.color} rounded-2xl p-4 shadow-lg ${company.glowColor} hover:shadow-2xl transition-all duration-500 h-28 flex flex-col justify-between backdrop-blur-sm border border-white/30 overflow-hidden`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge and Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-lg transform group-hover:scale-110 transition-transform duration-300">
                      {company.badge}
                    </div>
                    <h3 className={`text-xs font-bold ${company.textColor} leading-tight truncate`}>
                      {company.name}
                    </h3>
                  </div>

                  {/* Description and Stats */}
                  <div className={`space-y-1 ${company.textColor}`}>
                    <p className="text-[10px] opacity-90 leading-tight font-medium truncate">
                      {company.description}
                    </p>
                    <p className="text-[9px] opacity-70 leading-tight truncate">
                      {company.stats}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Active Indicator */}
                {activeCard === index && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Custom animations */}
  <style jsx>{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(40px, -60px) scale(1.1); }
      66% { transform: translate(-30px, 30px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 8s infinite ease-in-out;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>
  );
};

export default Hero;