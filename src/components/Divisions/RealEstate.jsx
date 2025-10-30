import { Link } from "react-router-dom";

const AnandReality = () => {
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
        Anand Reality
      </h1>
      <p className="text-xl lg:text-2xl text-blue-100 mb-8 drop-shadow-lg">
        Land Settlement & Legal Solutions Experts
      </p>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto drop-shadow-lg">
        Transforming complex land disputes into clear, marketable titles with 25+ years of expertise
      </p>
      
      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
          📞 Get Free Consultation
        </button>
        <button className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105">
          📋 View Our Services
        </button>
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
                    Land Settlement & Legal Solutions
                  </h2>
                  <div className="w-16 lg:w-20 h-1 bg-gold mb-6"></div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Anand Reality specializes in comprehensive land settlement services, handling complex 
                    legal documentation, title verification, and dispute resolution to ensure clear and 
                    marketable property titles for our clients.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      { icon: "⚖️", title: "Legal Title Verification", desc: "Comprehensive due diligence and title clearance" },
                      { icon: "📑", title: "Documentation & Litigation Support", desc: "Handling property disputes and legal proceedings" },
                      { icon: "🏛️", title: "Government Liaison", desc: "Revenue department coordination and approval facilitation" },
                      { icon: "🔍", title: "Encumbrance Certificate Verification", desc: "Ensuring property free from legal hurdles" },
                      { icon: "📊", title: "Survey & Boundary Finalization", desc: "GPS survey and physical demarcation" },
                      { icon: "🤝", title: "Farmer & Landowner Settlements", desc: "Negotiation and agreement finalization" }
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
                    With 25+ years of expertise in land litigation and settlement, we have successfully 
                    resolved over 500 complex land cases and facilitated clear titles for 50,000+ acres 
                    across multiple states.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                {/* Legal Process Steps */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gold/20">
                  <h3 className="text-xl font-bold text-navy mb-4">Our Legal Process</h3>
                  <div className="space-y-4">
                    {[
                      "Initial Title Search & Due Diligence",
                      "Document Verification & Gap Analysis",
                      "Legal Notice & Dispute Resolution",
                      "Revenue Department Approvals",
                      "Final Title Clearance & Registration"
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
                    <div className="text-2xl lg:text-3xl font-bold mb-2">500+</div>
                    <div className="text-xs lg:text-sm">Land Cases Resolved</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">50K+</div>
                    <div className="text-xs lg:text-sm">Acres Settled</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">25+</div>
                    <div className="text-xs lg:text-sm">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-4 lg:p-6 rounded-2xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-2">99%</div>
                    <div className="text-xs lg:text-sm">Success Rate</div>
                  </div>
                </div>

                {/* Key Documents Handled */}
                <div className="bg-navy text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gold mb-4">Documents We Handle</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {[
                      "Sale Deeds", "Gift Deeds", "Partition Deeds", "Will Settlements",
                      "Title Certificates", "Encumbrance Certs", "Survey Records", "Mutation Records",
                      "Pattadar Passbooks", "Land Records", "Succession Certs", "Legal Heir Certs"
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-gold mr-2 text-lg">•</span>
                        <span className="text-white/90">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Legal Services */}
            <div className="mt-12 lg:mt-16 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-2xl p-6 lg:p-8 border border-gold/30">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-6 text-center">Comprehensive Legal Services</h3>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl lg:text-5xl mb-3">⚖️</div>
                  <h4 className="font-bold text-navy mb-2 text-lg">Land Dispute Resolution</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Handling boundary disputes, title conflicts, and inheritance matters with expert legal counsel
                  </p>
                </div>
                <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl lg:text-5xl mb-3">📋</div>
                  <h4 className="font-bold text-navy mb-2 text-lg">Document Authentication</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Verification of property documents and legal heir certificates with government authorities
                  </p>
                </div>
                <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl lg:text-5xl mb-3">🏛️</div>
                  <h4 className="font-bold text-navy mb-2 text-lg">Government Liaison</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Coordination with revenue departments and municipal authorities for seamless approvals
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
                Success Stories
              </h2>
              <div className="w-16 lg:w-20 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real cases where we transformed complex land disputes into clear titles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "50-Acre Agricultural Land",
                  challenge: "Multiple inheritance claims",
                  solution: "Legal heir certificate & partition deed",
                  result: "Clear title for development"
                },
                {
                  title: "Urban Commercial Plot",
                  challenge: "Encumbrance & litigation history",
                  solution: "Dispute resolution & title clearance",
                  result: "Ready for commercial construction"
                },
                {
                  title: "Tribal Land Settlement",
                  challenge: "Government approval hurdles",
                  solution: "Revenue department liaison",
                  result: "Approved for residential project"
                }
              ].map((caseStudy, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <h4 className="text-xl font-bold text-navy mb-3">{caseStudy.title}</h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-700 text-sm">Challenge:</strong>
                      <p className="text-gray-600 text-sm mt-1">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700 text-sm">Solution:</strong>
                      <p className="text-gray-600 text-sm mt-1">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700 text-sm">Result:</strong>
                      <p className="text-gold font-semibold text-sm mt-1">{caseStudy.result}</p>
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
              Ready to Resolve Your Land Issues?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert legal assistance for your property disputes and title clearance needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Contact Our Legal Team
              </Link>
              <button className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300">
                📋 Get Free Consultation
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gold">24/7</div>
                <div className="text-blue-200 text-sm">Legal Support</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-gold">100%</div>
                <div className="text-blue-200 text-sm">Confidential</div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnandReality;