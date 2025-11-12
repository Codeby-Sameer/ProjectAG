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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBackground, setCurrentBackground] = useState('venture.jpg');
  const [currentOverlay, setCurrentOverlay] = useState('bg-gradient-to-br from-green-900/70 to-emerald-900/70');

  const carouselSlides = [
    {
      type: 'image',
      imageUrl: 'venture.jpg',
      badge: '🏗️ Anand Infra',
      title: 'Building Tomorrow',
      subtitle: '',
      description: 'Leading sustainable infrastructure projects across 7 countries',
      highlight: '30+ Projects Completed',
      stats: '10,000+ Tons Infrastructure',
      buttonText: 'View Projects',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-green-900/70 to-emerald-900/70',

      path: "infrastructure"
    },
    {
      type: 'image',
      imageUrl: 'Production.png',
      badge: '🎬 Anand Cinemaz',
      title: 'Entertainment Universe',
      subtitle: 'Creating Magic on Screen',
      description: 'Award-winning films and digital content production',
      highlight: '50+ Productions',
      stats: '10 Million Audience Reach',
      buttonText: 'Watch Latest',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-purple-900/70 to-pink-900/70',
     
      path: "production"
    },
    {
      type: 'image',
      imageUrl: 'infra.png',
      badge: '🏢 Anand Realty',
      title: 'Premium Living Spaces',
      subtitle: 'Your Dream Home Awaits',
      description: 'Residential, Commercial & Industrial Development',
      highlight: '1,000+ Units Delivered',
      stats: '2M+ Sq Ft Developed',
      buttonText: 'Explore Properties',
      textColor: 'text-white',
      overlayColor: 'bg-gradient-to-br from-green-900/70 to-emerald-900/70',
    
      path: "real-estate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % carouselSlides.length;
      setCurrentSlide(nextSlide);
      setCurrentBackground(carouselSlides[nextSlide].imageUrl);
      setCurrentOverlay(carouselSlides[nextSlide].overlayColor);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, carouselSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setCurrentBackground(carouselSlides[index].imageUrl);
    setCurrentOverlay(carouselSlides[index].bgOverlay);
  };

  return (
   <section
  className="relative text-white overflow-hidden min-h-[calc(100vh-4rem)] transition-all duration-1000 ease-in-out"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${currentBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}
>
  {/* Dynamic Overlay */}
  <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentOverlay}`} />

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-yellow-500/20" />
  </div>

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-4rem)]">

      {/* Left Content - Text Section */}
      <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-white/90 text-blue-900 rounded-full text-xs sm:text-sm font-bold shadow-lg w-fit backdrop-blur-sm">
          <span>🏆</span>
          <span>Multi-Sector Enterprise</span>
        </div>

        {/* Main Heading */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
            Building <span className="text-yellow-400">Legacies</span>,
            <br className="hidden md:block" />
            Creating <span className="text-blue-300">Value</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-lg opacity-90 leading-relaxed">
            Quality, Trust, and Long-term Value Accessible to All
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/20 shadow-xl max-w-2xl">
          <p className="text-sm sm:text-base lg:text-lg italic mb-2 text-yellow-300 font-medium">
            "Dharmo Rakshati Rakshitah"
          </p>
          <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
            We believe that when we uphold what is right, it protects and strengthens everything we build.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#services"
            className="group bg-white text-blue-900 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
          >
            <span>Our Services</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="group border-2 border-white/80 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center text-sm sm:text-base"
          >
            <span>Get in Touch</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-1">15+</div>
            <div className="text-xs sm:text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-300 mb-1">100+</div>
            <div className="text-xs sm:text-sm opacity-80">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-300 mb-1">1000+</div>
            <div className="text-xs sm:text-sm opacity-80">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Right Content - Carousel Section */}
      <div className="w-full order-1 lg:order-2 flex items-center justify-center mb-4 lg:mb-0">
        <div className="relative w-full max-w-[420px] sm:max-w-sm md:max-w-md lg:max-w-lg h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
          {/* Slide container: absolute slides stacked */}
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10 pointer-events-none'
              }`}
              aria-hidden={index === currentSlide ? 'false' : 'true'}
            >
              {/* Glass Card (mobile-friendly sizing) */}
              <div className="w-full h-full bg-white/20 backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl overflow-hidden border border-white/20 flex items-center justify-center">
                <div className="flex flex-col h-full justify-center p-3 sm:p-4 md:p-5 w-full">
                  <div className="space-y-2 sm:space-y-3 text-center mx-auto max-w-[92%]">
                    {/* Badge */}
                    <div className="inline-flex px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-yellow-400 text-blue-900 shadow-md mx-auto">
                      {slide.badge}
                    </div>

                    {/* Title */}
                    <h2 className={`text-sm sm:text-base lg:text-lg font-bold ${slide.textColor} leading-tight`}>
                      {slide.title}
                    </h2>

                    {/* Subtitle - hide on xs to keep card compact */}
                    {slide.subtitle && (
                      <h3 className={`text-xs sm:text-sm lg:text-base ${slide.textColor} opacity-90 font-semibold hidden sm:block`}>
                        {slide.subtitle}
                      </h3>
                    )}

                    {/* Description - show only from sm and up */}
                    {slide.description && (
                      <p className={`text-xs sm:text-sm ${slide.textColor} opacity-90 leading-relaxed hidden sm:block`}>
                        {slide.description}
                      </p>
                    )}

                    {/* Compact highlights for xs (keeps card meaningful on small screens) */}
                    <div className="flex items-center gap-2 py-0.5 justify-center sm:justify-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse flex-shrink-0" />
                      <p className={`text-xs font-semibold ${slide.textColor} truncate max-w-[160px]`}>
                        {slide.highlight}
                      </p>
                    </div>

                    {/* Stats - show condensed for mobile */}
                    <div className="flex items-center gap-2 py-0.5 justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse flex-shrink-0" />
                      <p className={`text-xs font-semibold ${slide.textColor} truncate max-w-[160px]`}>
                        {slide.stats}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-1 flex justify-center">
                      <Link
                        to={`/${slide.path}`}
                        className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-bold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs sm:text-sm bg-white text-blue-900 hover:bg-yellow-400"
                      >
                        {slide.buttonText}
                        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Dots / Bars */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1 sm:gap-1.5">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide ? 'w-6 h-1.5 sm:w-6 sm:h-1.5 bg-yellow-400 shadow-md' : 'w-2 h-2 sm:w-2 sm:h-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;