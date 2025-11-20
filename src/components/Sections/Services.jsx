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
  <>
   {/* Enhanced Business Verticals Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Business Verticals
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diversified excellence across multiple sectors, united by our commitment to quality and innovation
              </p>
            </div>

            {/* Anand Realty - Enhanced Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="/venture.jpg"
                      alt="Anand Realty - Land Ventures"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl mb-2">🏢</div>
                      <h3 className="text-3xl font-bold text-white">Anand Realtyy</h3>
                      <p className="text-green-200 text-lg">Land Plots & Ventures</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-navy">Premium Real Estate Development</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Anand Realty stands as a beacon of trust and transparency in the real estate sector. 
                    We specialize in transforming landscapes into thriving communities through meticulous 
                    planning and ethical practices.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🔒", title: "Legal Assurance", desc: "100% clear titles" },
                      { icon: "📐", title: "Vastu Compliant", desc: "Scientific design" },
                      { icon: "💰", title: "Best Value", desc: "Premium locations" },
                      { icon: "⚡", title: "Quick Possession", desc: "Timely delivery" }
                    ].map((feature, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="/real-estate"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Land Ventures →
                  </a>
                </div>
              </div>

              {/* Realty Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Residential Plots",
                    description: "Premium plotted developments in strategic locations with all modern amenities",
                    icon: "🏡",
                    color: "from-green-400 to-green-600"
                  },
                  {
                    title: "Commercial Ventures",
                    description: "High-return commercial properties in developing business corridors",
                    icon: "🏪",
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    title: "Farm Lands & Estates",
                    description: "Agricultural and recreational land parcels for sustainable investments",
                    icon: "🌳",
                    color: "from-emerald-400 to-emerald-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className={`bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Anand Cinemaz - Enhanced Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="lg:order-2 relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="/Production.png"
                      alt="Anand Cinemaz - Film Production"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl mb-2">🎬</div>
                      <h3 className="text-3xl font-bold text-white">Anand Cinemaz</h3>
                      <p className="text-purple-200 text-lg">Film Production & Entertainment</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:order-1 space-y-6">
                  <h3 className="text-3xl font-bold text-navy">Creative Storytelling Excellence</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Anand Cinemaz brings compelling stories to life through cutting-edge production 
                    techniques and artistic vision. We create meaningful cinema that entertains, 
                    inspires, and leaves a lasting impact on audiences worldwide.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🎭", title: "Creative Vision", desc: "Artistic storytelling" },
                      { icon: "🌟", title: "Talent Excellence", desc: "Best in industry" },
                      { icon: "💫", title: "Global Reach", desc: "International distribution" },
                      { icon: "📱", title: "Digital Content", desc: "Multi-platform presence" }
                    ].map((feature, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="https://anand-cinemas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Productions →
                  </a>
                </div>
              </div>

              {/* Cinemaz Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Movie Production",
                    description: "Full-scale film production from script to screen with industry experts",
                    icon: "🎥",
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    title: "Music Direction",
                    description: "Original soundtracks and musical scores that elevate storytelling",
                    icon: "🎵",
                    color: "from-pink-400 to-pink-600"
                  },
                  {
                    title: "Digital Content",
                    description: "OTT platforms and digital media content for modern audiences",
                    icon: "📺",
                    color: "from-red-400 to-red-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className={`bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Anand Infra - Enhanced Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="/infra.png"
                      alt="Anand Infra - Development & Construction"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl mb-2">🏗️</div>
                      <h3 className="text-3xl font-bold text-white">Anand Infra</h3>
                      <p className="text-blue-200 text-lg">Development & Construction</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-navy">Building Tomorrow's Infrastructure</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Anand Infra is at the forefront of creating sustainable, future-ready infrastructure 
                    that stands the test of time. Our projects combine innovative engineering with 
                    environmental consciousness to build communities that thrive.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🏆", title: "Quality First", desc: "ISO standards" },
                      { icon: "🌱", title: "Sustainable", desc: "Eco-friendly practices" },
                      { icon: "⚡", title: "Innovation", desc: "Modern technology" },
                      { icon: "🤝", title: "Partnership", desc: "Collaborative approach" }
                    ].map((feature, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-bold text-navy text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="https://anand-project-21.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Projects →
                  </a>
                </div>
              </div>

              {/* Infra Features Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Gated Communities",
                    description: "Secure, well-planned residential townships with premium amenities",
                    icon: "🏘️",
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    title: "Commercial Complexes",
                    description: "Modern commercial spaces designed for business success and growth",
                    icon: "🏢",
                    color: "from-cyan-400 to-cyan-600"
                  },
                  {
                    title: "Smart City Projects",
                    description: "Future-ready urban developments with smart technology integration",
                    icon: "🏙️",
                    color: "from-indigo-400 to-indigo-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className={`bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Services;