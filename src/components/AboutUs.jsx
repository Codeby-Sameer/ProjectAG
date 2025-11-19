import { Link } from "react-router-dom"



const AboutUs = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="md:pt-28 pt-20  pb-24  bg-gradient-to-br from-navy via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-gold font-semibold">Since 1988</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent">
              Anand Groups
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Building Dreams, Creating Legacies - A Journey of Excellence Since 1995
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { number: "28+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "7", label: "Countries" },
                { number: "50K+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gold">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Enhanced Founder Section */}
<section className="py-20 bg-white relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold"></div>
  
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Founder Image with Enhanced Design */}
        <div className="relative group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
            <img
              src='/founder.jpg'
              alt="Anand - Founder & Chairman"
              className="w-full lg:h-[800px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            {/* Floating Badge - Moved to Bottom Right */}
            <div className="absolute bottom-6 right-6 bg-white text-navy p-4 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-center">
                <div className="text-sm font-semibold">Founder & Chairman</div>
                <div className="text-md font-bold text-navy">ANAND GROUPS</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full filter blur-2xl"></div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full filter blur-2xl"></div>
        </div>

        {/* Founder Story */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Anand
            </h2>
            <div className="text-xl text-navy font-semibold mb-2">
              Founder & Chairman
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mb-6 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            A visionary leader with an unwavering commitment to excellence, Anand founded 
            Anand Group in 1995 with a simple yet powerful vision: to create sustainable 
            businesses that transform communities and inspire generations.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            With a background in engineering and an innate understanding of market dynamics, 
            Mr. Anand has successfully steered the group through economic cycles, expanding 
            from a single real estate venture to a diversified conglomerate with global presence.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 gap-4 py-6">
            {[
              { number: "100+", label: "Projects" },
              { number: "1B+", label: "Assets" },
              { number: "7", label: "Countries" },
              { number: "500+", label: "Team" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-navy">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-gold pl-6 py-4 italic text-gray-600 text-lg bg-gradient-to-r from-gold/5 to-transparent rounded-r-2xl">
            "We don't just build structures; we build dreams. Every project is a commitment 
            to excellence, every development a step towards a better tomorrow."
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Business Verticals Section */}
   <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Our Business Verticals
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Diversified excellence across multiple sectors, united by our commitment to quality and innovation
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Business Verticals Data */}
        {[
          {
            // Anand Realty - Land & Ventures (Green Gradient)
            name: "Anand Realty",
            tagline: "Land Plots & Ventures",
            gradient: "from-green-500 to-green-700",
            // hoverGradient: "from-green-600 to-green-800",
            icon: "🏢",
            features: [
              "Premium Residential Plots",
              "Commercial Ventures",
              "Farm Lands & Estates",
              "Gated Communities",
              "Land Acquisition",
              "Property Development"
            ],
            link: "/real-estate",
            buttonText: "Explore Land Ventures",
            image: "venture.jpg"
          },
          {
            // Anand Cinemaz - Production (Purple Gradient)
            name: "Anand Cinemaz",
            tagline: "Film Production & Entertainment",
            gradient: "from-purple-500 to-purple-700",
            // hoverGradient: "from-purple-600 to-purple-800",
            icon: "🎬",
            features: [
              "Movie Production",
              "Music Direction",
              "Film Distribution",
              "Digital Content",
              "Studio Services",
              "Talent Management"
            ],
            link: "https://anand-cinemas.vercel.app",
            buttonText: "Explore Productions",
            image: "Production.png"
          },
          {
            // Anand Infra - Development (Blue Gradient)
            name: "Anand Infra",
            tagline: "Development & Construction",
            gradient: "from-blue-500 to-blue-700",
            // hoverGradient: "from-blue-600 to-blue-800",
            icon: "🏗️",
            features: [
              "Gated Communities",
              "Township Development",
              "Infrastructure Projects",
              "Commercial Complexes",
              "Smart City Projects",
              "Sustainable Development"
            ],
            link: "https://anand-project-21.vercel.app",
            buttonText: "Explore Projects",
            image: "infra.png"
          }
        ].map((vertical, index) => (
          <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            {/* Header Section with Gradient */}
            <div className={`h-48 bg-gradient-to-br ${vertical.gradient} relative overflow-hidden`}>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${vertical.image})` }}
              ></div>
              <div className="absolute bottom-6 left-6">
                <div className="text-4xl mb-2">{vertical.icon}</div>
                <h3 className="text-2xl font-bold text-white">{vertical.name}</h3>
                <p className={`text-white`}>{vertical.tagline}</p>
              </div>
             
              
            
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {vertical.features.map((item, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span 
                      className={`w-2 h-2 bg-${vertical.gradient.split('-')[1]}-500 rounded-full mr-3 flex-shrink-0`}
                    ></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={vertical.link}
                target="_blank" rel="noopener noreferrer"
                className={`w-full bg-gradient-to-r ${vertical.gradient} text-white py-3 rounded-xl font-semibold text-center block hover:${vertical.hoverGradient} transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                {vertical.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
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
          <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">{info.icon}</div>
            <h4 className="font-bold text-navy text-lg mb-2">{info.title}</h4>
            <p className="text-gray-600 text-sm">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Settlement Development Focus */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                  Land Development Excellence
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mb-6 rounded-full"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Anand Realty specializes in comprehensive land settlement services, handling complex 
                    legal documentation, title verification, and dispute resolution to ensure clear and 
                    marketable property titles for our clients.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: "⚖️", title: "Legal Title Verification", desc: "Comprehensive due diligence" },
                      { icon: "📑", title: "Documentation Support", desc: "Legal proceedings & disputes" },
                      { icon: "🏛️", title: "Government Liaison", desc: "Revenue department coordination" },
                      { icon: "🔍", title: "Encumbrance Verification", desc: "Property legal clearance" }
                    ].map((service, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-lg border border-gray-100">
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <h4 className="font-bold text-navy mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "500+", label: "Land Cases", color: "from-blue-500 to-blue-700" },
                    { number: "50K+", label: "Acres Settled", color: "from-green-500 to-green-700" },
                    { number: "25+", label: "Years Experience", color: "from-purple-500 to-purple-700" },
                    { number: "99%", label: "Success Rate", color: "from-orange-500 to-orange-700" }
                  ].map((metric, index) => (
                    <div key={index} className={`bg-gradient-to-br ${metric.color} text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300`}>
                      <div className="text-2xl md:text-3xl font-bold mb-2">{metric.number}</div>
                      <div className="text-sm opacity-90">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Process Timeline */}
                <div className="bg-gradient-to-br from-navy to-blue-900 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gold mb-4">Our Settlement Process</h3>
                  <div className="space-y-3">
                    {[
                      "Initial Title Search & Due Diligence",
                      "Document Verification & Gap Analysis",
                      "Legal Notice & Dispute Resolution",
                      "Revenue Department Approvals",
                      "Final Title Clearance & Registration"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-blue-100">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-400"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              Start Your Journey With Us
            </h2>
            <p className="md:text-xl text-sm text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're investing in land, producing content, or developing infrastructure, 
              partner with excellence and experience the Anand difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {[
                { 
                  to: "/real-estate", 
                  label: "🏢 Explore Land Ventures", 
                  gradient: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
                  desc: "Premium plots & commercial ventures"
                },
                { 
                  to: "/production", 
                  label: "🎬 Film Production", 
                  gradient: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
                  desc: "Movies, music & digital content"
                },
                { 
                  to: "/infrastructure", 
                  label: "🏗️ Development Projects", 
                  gradient: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
                  desc: "Gated communities & infrastructure"
                }
              ].map((button, index) => (
                <div key={index} className="text-center group">
                  <Link
                    to={button.to}
                    className={`px-5 py-4 bg-gradient-to-r ${button.gradient} text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl block `}
                  >
                    {button.label}
                  </Link>
                  <p className="text-blue-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {button.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-blue-200 mb-4">Ready to discuss your project?</p>
              <div className="flex flex-wrap justify-center md:gap-6 gap-2 text-blue-100">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>info@anandgroups.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏢</span>
                  <span>Visit Our Offices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs