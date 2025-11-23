import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ServicesCarousel = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const controls = useAnimation();

  const services = [
    { title: "Anand Realty", icon: "🏢", image: "img/venture.jpg", gradient: "from-green-400 to-green-700", dotColor: "bg-green-500", features: ["100% Clear Titles", "Vastu Compliant", "Premium Locations"], link: "https://anand-realtyy-new.vercel.app", buttonText: "Explore Land" },
    { title: "Anand Cinemaz", icon: "🎬", image: "img/Production.png", gradient: "from-purple-400 to-purple-700", dotColor: "bg-purple-500", features: ["Film Production", "Global Distribution", "OTT Content"], link: "https://anand-cinemas.vercel.app", buttonText: "Watch Productions" },
    { title: "Anand Infra", icon: "🏗️", image: "img/infra.png", gradient: "from-blue-400 to-blue-700", dotColor: "bg-blue-500", features: ["Gated Communities", "Smart Cities", "ISO Standards"], link: "https://anand-project-21.vercel.app", buttonText: "View Projects" },
    
  ];

  // Duplicate services for seamless loop
  const loopServices = [...services, ...services];

  useEffect(() => {
    if (trackRef.current && containerRef.current) {
      const totalWidth = trackRef.current.scrollWidth / 2; // width of one set
      setWidth(totalWidth);

      // Start infinite loop
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 20, // adjust speed
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls]);

  return (
    <section className=" mb-5 mx-auto max-w-7xl overflow-hidden">
      <div className="px-4 mb-6">
        <h3 className="text-2xl font-bold text-navy opacity-50">Seamless Auto Carousel →</h3>
      </div>

      <motion.div ref={containerRef} className="overflow-hidden p-4">
        <motion.div
          ref={trackRef}
          animate={controls}
          className="flex flex-nowrap gap-6 sm:gap-8"
          style={{ width: "max-content" }}
        >
          {loopServices.map((service, index) => (
            <div
              key={index}
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[380px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className={`h-48 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute bottom-6 left-6">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <span className={`w-2 h-2 ${service.dotColor} rounded-full mr-3`} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold text-center block hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesCarousel;