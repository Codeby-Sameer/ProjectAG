// components/CaseStudies.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Green Valley Township",
      client: "Anand Realtyy",
      category: "Real Estate",
      results: "500+ Plots | 98% Satisfaction",
      image: "/venture.jpg",
      gradient: "from-green-500 to-green-700",
      challenge: "Developing sustainable township with modern amenities",
      achievement: "Successfully delivered 500+ Vastu-aligned residential plots with 40% green cover"
    },
    {
      id: 2,
      title: "Smart Infrastructure Corridor",
      client: "Anand Infra",
      category: "Infrastructure",
      results: "25km Corridor | 50% Traffic Reduced",
      image: "/infra.png",
      gradient: "from-blue-500 to-blue-700",
      challenge: "Connecting industrial zones with minimal environmental impact",
      achievement: "Built intelligent corridor with EV charging and reduced peak traffic by 50%"
    },
    {
      id: 3,
      title: "Blockbuster Film Production",
      client: "Anand Cinemaz",
      category: "Entertainment",
      results: "10M+ Audience | 5 Awards",
      image: "/Production.png",
      gradient: "from-purple-500 to-purple-700",
      challenge: "Creating socially relevant content with commercial appeal",
      achievement: "Produced award-winning film reaching 10M+ viewers globally"
    },
    {
      id: 4,
      title: "Premium Commercial Complex",
      client: "Anand Realtyy",
      category: "Commercial",
      results: "95% Occupancy | 50+ Brands",
      image: "/venture.jpg",
      gradient: "from-green-500 to-green-700",
      challenge: "Creating futuristic commercial space with premium amenities",
      achievement: "Achieved 95% occupancy with 50+ premium brands in 6 months"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [caseStudies.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="case-studies" className="py-2 sm:py-3 ">
      <div >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming visions into remarkable achievements across all our business verticals
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[500px] sm:h-[500px]">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 translate-x-0 z-10'
                    : 'opacity-0 scale-95 translate-x-10 z-0'
                }`}
              >
                {/* Case Study Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-slate-200">
                  {/* Header with Image */}
                  <div className={`h-40 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{ backgroundImage: `url(${study.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-800 mb-2 inline-block">
                            {study.category}
                          </span>
                          <h3 className="text-xl font-bold text-white">{study.title}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-white/90 text-sm">{study.client}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Results Badge */}
                    <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-200">
                      <div className="text-sm font-semibold text-slate-800 text-center">
                        {study.results}
                      </div>
                    </div>

                    {/* Challenge & Achievement */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                          <h4 className="font-semibold text-slate-800 text-sm">Challenge</h4>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <h4 className="font-semibold text-slate-800 text-sm">Achievement</h4>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {study.achievement}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:flex hidden justify-between mt-6 pt-4 border-t border-slate-200">
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${study.gradient.split('-')[1]}-600`}>
                          {study.results.split('|')[0].split(' ')[0]}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">
                          {study.results.split('|')[0].split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${study.gradient.split('-')[1]}-600`}>
                          {study.results.split('|')[1].split(' ')[1]}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">
                          {study.results.split('|')[1].split(' ').slice(2).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-6 h-2 bg-yellow-500'
                      : 'w-2 h-2 bg-slate-400 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

        
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="py-12 mt-9 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Create Your Success Story
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              {/* Join thousands of satisfied families who have made Anand Realtyy their trusted partner in real estate. 
              Let's build your legacy together. */}
               Let's collaborate to achieve remarkable results for your project. Let's build your legacy together.
            
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Start Your Project
              </Link>
              <Link 
                to="/projects" 
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base"
              >
                Browse All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </section>
  );
};

export default CaseStudies;