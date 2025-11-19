// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="md:text-4xl  text-xl font-bold text-gray-800 md:mb-6 mb-2">About Anand Group</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="md:text-xl  text-sm text-gray-600  leading-relaxed">
            Anand Group is a multi-sector enterprise built on one core belief: that quality, trust, 
            and lasting value should be accessible to everyone—from the common individual to the 
            accomplished businessman.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-6">Our Foundation</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p className='md:text-md text-sm'>Ethical practices and genuine documentation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p>Uncompromised construction standards</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p>Scientific Vastu-aligned design principles</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p>Accessible luxury for all segments</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Our Verticals</h4>
            <div className="md:space-y-4 space-y-6">
              <div className="flex items-center space-x-4 md:p-4 p-2 bg-amber-50 rounded-lg">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Anand Realtyy</h5>
                  <p className="text-sm text-gray-600">Transparent real estate ventures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 md:p-4 p-2 bg-amber-50 rounded-lg">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Anand Infra</h5>
                  <p className="text-sm text-gray-600">Enduring infrastructure projects</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 md:p-4 p-2 bg-amber-50 rounded-lg">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Anand Cinemaz</h5>
                  <p className="text-sm text-gray-600">Meaningful film production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;