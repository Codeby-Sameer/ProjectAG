// components/Services.js
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Anand Realtyy",
      icon: "🏠",
      description: "Built on trust, transparency, and long-term value. We ensure every property rests on strong legal foundations through meticulous document scrutiny and ethical practices.",
      features: ["Legal Transparency", "Vastu-aligned Design", "Quality Construction", "Accessible Luxury"],
      gradient: "from-green-500 to-green-700",
      image: "venture.jpg",
      link: "https://anand-realtyy-new.vercel.app",
      buttonText: "Explore Properties"
    },
    {
      title: "Anand Infra",
      icon: "🏗️",
      description: "Creating infrastructure that endures for generations—strong, precise, and timeless. We handle commercial complexes, townships, industrial structures, and public utilities.",
      features: ["Scientific Planning", "Quality Control", "Vastu Principles", "Large-scale Projects"],
      gradient: "from-blue-500 to-blue-700",
      image: "infra.png",
      link: "https://anand-project-21.vercel.app",
      buttonText: "Explore Projects"
    },
    {
      title: "Anand Cinemaz",
      icon: "🎬",
      description: "Producing meaningful, impactful, and high-quality cinematic content that blends creativity with purpose—crafting films that entertain and inspire.",
      features: ["Meaningful Content", "Social Messages", "Artistic Integrity", "Modern Storytelling"],
      gradient: "from-purple-500 to-purple-700",
      image: "Production.png",
      link: "https://anand-cinemas.vercel.app",
      buttonText: "Explore Productions"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">Our Services</h2>
          <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Across all our verticals, we maintain uncompromised standards and deliver value that lasts for generations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Header Section with Gradient and Image */}
              <div className={`h-48 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <span 
                        className={`w-2 h-2 bg-${service.gradient.split('-')[1]}-500 rounded-full mr-3 flex-shrink-0`}
                      ></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={service.link}
                  target="_blank" rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold text-center block hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            {
              icon: "📍",
              title: "Strategic Locations",
              description: "Prime land parcels in developing corridors with high growth potential"
            },
            {
              icon: "🎥",
              title: "Creative Excellence",
              description: "Award-winning production house with global recognition"
            },
            {
              icon: "🏆",
              title: "Quality Construction",
              description: "ISO certified construction standards with premium materials"
            }
          ].map((info, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">{info.title}</h4>
              <p className="text-slate-600 text-sm">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;