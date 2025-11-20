// components/VisionMission.js
import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">Our Guiding Principles</h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Vision</h3>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                To evolve as a distinguished multi-sector enterprise that sets timeless benchmarks in 
                integrity, craftsmanship, and value creation across every business we build.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Mission</h3>
              <p className="text-yellow-100 leading-relaxed text-sm sm:text-base">
                To shape premium yet accessible experiences through genuine documentation, superior 
                engineering, Vastu-aligned design, and meticulous attention to detail across all verticals.
              </p>
            </div>

          <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  </div>
  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Guiding Principles</h3>
  <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
    We build on integrity and transparency, delivering quality excellence that earns customer trust. 
    Our commitment extends to social responsibility and sustainable growth for lasting impact.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;