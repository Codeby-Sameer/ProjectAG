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

          </div>
        </div>
      </section>

     
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
    </>
  )
}

export default AboutUs