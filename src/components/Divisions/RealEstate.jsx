import { Link } from "react-router-dom";
import { useMultiFormModal } from "../Context/ModalContext";

const AnandReality = () => {
  const{openModal}=useMultiFormModal()
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
   <section className="relative py-16 lg:py-24 min-h-[80vh] flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 w-full h-full">
 <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
>
  <source src="https://assets.mixkit.co/videos/preview/mixkit-construction-site-overview-41568-large.mp4" type="video/mp4" />
</video>
    {/* Fallback gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-blue-900/70 to-navy/90"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="text-6xl lg:text-7xl mb-6">🏢</div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
        Anand Realtyy
      </h1>
      <p className="text-xl lg:text-2xl text-blue-100 mb-8 drop-shadow-lg">
        Plot & Venture Development Experts
      </p>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto drop-shadow-lg">
        Transforming raw land into premium residential plots and successful ventures with 25+ years of expertise
      </p>
      
      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => openModal('real-estate', { prefillData: 'some data' })}
        className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
          📞 Book Plot Consultation
        </button>
        <Link to={'/about'} className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105">
          🏡 View Our Projects
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <div className="w-8 h-8 border-r-2 border-b-2 border-gold rotate-45"></div>
  </div>
</section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                    Plot Development & Venture Solutions
                  </h2>
                  <div className="w-16 lg:w-20 h-1 bg-gold mb-6"></div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Anand Reality specializes in transforming raw land into premium residential plots and 
                    successful ventures. We handle complete plot development from land acquisition to 
                    ready-to-build plots with all necessary approvals.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      { icon: "🏗️", title: "Plot Development", desc: "Complete land development into residential plots" },
                      { icon: "📊", title: "Venture Planning", desc: "Strategic planning for successful land ventures" },
                      { icon: "📍", title: "Plot Layout & Survey", desc: "Professional surveying and optimal plot layout" },
                      { icon: "⚡", title: "Infrastructure Development", desc: "Roads, drainage, electricity, and water supply" },
                      { icon: "📑", title: "Approval Management", desc: "Handling all government approvals and clearances" },
                      { icon: "🤝", title: "Joint Ventures", desc: "Partnership opportunities for land development" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-2xl mr-3 flex-shrink-0">{item.icon}</span>
                        <div>
                          <strong className="text-navy block text-sm lg:text-base">{item.title}</strong>
                          <span className="text-gray-600 text-sm">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    With 25+ years of expertise in plot development, we have successfully transformed 
                    over 50,000+ acres into premium residential plots and completed 100+ successful 
                    land ventures across multiple states.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                {/* Development Process Steps */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gold/20">
                  <h3 className="text-xl font-bold text-navy mb-4">Our Development Process</h3>
                  <div className="space-y-4">
                    {[
                      "Land Acquisition & Due Diligence",
                      "Feasibility Study & Master Planning",
                      "Layout Design & Plot Sizing",
                      "Infrastructure Development",
                      "Approvals & Legal Clearances",
                      "Plot Marketing & Handover"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">100+</div>
                    <div className="text-xs lg:text-sm">Ventures Completed</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">50K+</div>
                    <div className="text-xs lg:text-sm">Plots Developed</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">25+</div>
                    <div className="text-xs lg:text-sm">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">99%</div>
                    <div className="text-xs lg:text-sm">Customer Satisfaction</div>
                  </div>
                </div>

                {/* Plot Types */}
                <div className="bg-navy text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gold mb-4">Plot Types We Develop</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {[
                      "Residential Plots", "Farm Plots", "Commercial Plots", "Gated Community Plots",
                      "Corner Plots", "Premium Facing Plots", "Budget Plots", "Luxury Plots",
                      "Agricultural Plots", "Investment Plots", "NRI Plots", "Joint Venture Plots"
                    ].map((plot, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-gold mr-2 text-lg">•</span>
                        <span className="text-white/90">{plot}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Development Services */}
            <div className="mt-12 lg:mt-16 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-2xl p-6 lg:p-8 border border-gold/30">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-6 text-center">Comprehensive Plot Services</h3>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl lg:text-5xl mb-3">🏡</div>
                  <h4 className="font-bold text-navy mb-2 text-lg">Plot Development</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Complete transformation of raw land into premium residential plots with all amenities
                  </p>
                </div>
                <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl lg:text-5xl mb-3">📈</div>
                  <h4 className="font-bold text-navy mb-2 text-lg">Venture Planning</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Strategic planning and execution of successful land development ventures
                  </p>
                </div>
                <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl lg:text-5xl mb-3">🤝</div>
                  <h4 className="font-bold text-navy mb-2 text-lg">Joint Ventures</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Partnership opportunities for landowners and investors in plot development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                Successful Ventures
              </h2>
              <div className="w-16 lg:w-20 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real projects where we transformed raw land into premium plots
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Green Valley Plots",
                  challenge: "100-acre agricultural land conversion",
                  solution: "Master planning & infrastructure development",
                  result: "200+ premium residential plots sold"
                },
                {
                  title: "Lakeview Ventures",
                  challenge: "Complex terrain development",
                  solution: "Terrain-specific layout & drainage solutions",
                  result: "Luxury gated community success"
                },
                {
                  title: "City Edge Project",
                  challenge: "Urban fringe development",
                  solution: "Strategic plot sizing & pricing",
                  result: "Rapid plot sales with 40% appreciation"
                }
              ].map((venture, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <h4 className="text-xl font-bold text-navy mb-3">{venture.title}</h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-700 text-sm">Challenge:</strong>
                      <p className="text-gray-600 text-sm mt-1">{venture.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700 text-sm">Solution:</strong>
                      <p className="text-gray-600 text-sm mt-1">{venture.solution}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700 text-sm">Result:</strong>
                      <p className="text-gray-600 font-semibold text-sm mt-1">{venture.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Develop Your Land?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Transform your raw land into profitable plots with our expert development services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🏡 Start Your Venture
              </Link>
              <Link to={'/about'} className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300">
                View Our Plots
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gold">Free</div>
                <div className="text-blue-200 text-sm">Site Evaluation</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-gold">100%</div>
                <div className="text-blue-200 text-sm">Approval Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnandReality;