// components/Founder.js
import React from 'react';

const Founder = () => {
  return (
    <section id="founder" className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">Leadership</h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5  p-6 sm:p-8 flex items-center justify-center">
                <div className="text-center">
                  
                  <img src="src/assets/founder.jpg" alt="" />
                </div>
              </div>
              
              <div className="md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 sm:mb-2">Visionary Leadership</h3>
                  <p className="text-yellow-600 font-semibold text-sm sm:text-base">Guiding Anand Group to New Horizons</p>
                </div>
                
                <div className="text-slate-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    Under the visionary leadership of our Founder & Chairperson, Anand Group has 
                    grown from its initial ventures in realty and infrastructure to a diversified 
                    multi-sector enterprise.
                  </p>
                  <p>
                    Guided by the principle of <strong className="text-blue-900">"Dharmo Rakshati Rakshitah"</strong>, our leadership 
                    has instilled a culture of ethical practices, transparency, and uncompromised quality 
                    across all business verticals.
                  </p>
                  <p>
                    The Founder's commitment to creating meaningful impact across every industry we enter 
                    has been the driving force behind our success in delivering quality, trust, and 
                    long-term value.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-blue-900 text-sm sm:text-base mb-1 sm:mb-2">Leadership Philosophy</h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    "True success lies not just in building businesses, but in building trust, 
                    creating opportunities, and leaving a lasting legacy that benefits generations to come."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;