import { Link } from "react-router-dom"
import KeyTopics from "./Hero/KeyTopics"
import ceoPhoto from '../assets/founder.jpg'; // Make sure to import your CEO photo

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-blue-900 to-navy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Anand Group
            </h1>
            <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Building Dreams, Creating Legacies - A Journey of Excellence Since 1995
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={ceoPhoto}
                    alt="Anand - Founder "
                    className="w-full h-[720px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-xl font-bold">Founder OF</div>
                    <div className="text-lg font-semibold">Anand Group</div>
                  </div>
                </div>
              </div>

              {/* Founder Story */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-navy mb-4">
                Anand
                  </h2>
                  <div className="text-xl text-navy font-semibold mb-2">
                    Founder
                  </div>
                  <div className="w-20 h-1 bg-navy mb-6"></div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  A visionary leader with an unwavering commitment to excellence, Anand founded 
                  Anand Group in 2025 with a simple yet powerful vision: to create sustainable 
                  businesses that transform communities and inspire generations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  With a background in engineering and an innate understanding of market dynamics, 
                  Mr.Anand has successfully steered the group through economic cycles, expanding 
                  from a single real estate venture to a diversified conglomerate with global presence.
                </p>

                <div className="grid grid-cols-2 gap-4 py-6">
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy">100+</div>
                    <div className="text-sm text-gray-900">Projects</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy">1B+</div>
                    <div className="text-sm text-gray-900">Assets</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-gray-600 text-lg">
                  "We don't just build structures; we build dreams. Every project is a commitment 
                  to excellence, every development a step towards a better tomorrow."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              From humble beginnings in 2025, Anand Group has evolved into a multifaceted 
              conglomerate with a presence across seven countries. Our journey began with 
              a single real estate project and has since expanded to encompass diverse 
              sectors including entertainment, infrastructure, and community development.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-navy mb-3">Anand Reality</h3>
                <p className="text-gray-600">
                  Creating premium residential and commercial spaces that redefine urban living 
                  with sustainable practices and modern amenities.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-navy mb-3">Anand Cinemas</h3>
                <p className="text-gray-600">
                  Producing compelling stories that entertain and inspire audiences worldwide 
                  through innovative filmmaking and digital content.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-navy mb-3">Anand Infra</h3>
                <p className="text-gray-600">
                  Building the foundations of tomorrow with cutting-edge infrastructure 
                  projects that connect communities and drive progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement Development Focus */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-navy mb-6">
            Anand Reality: Land Settlement & Legal Solutions
          </h2>
          <div className="w-20 h-1 bg-gold mb-6"></div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Anand Reality specializes in comprehensive land settlement services, handling complex 
              legal documentation, title verification, and dispute resolution to ensure clear and 
              marketable property titles for our clients.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gold mr-3">⚖️</span>
                <span><strong>Legal Title Verification</strong> - Comprehensive due diligence and title clearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">📑</span>
                <span><strong>Documentation & Litigation Support</strong> - Handling property disputes and legal proceedings</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">🏛️</span>
                <span><strong>Government Liaison</strong> - Revenue department coordination and approval facilitation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">🔍</span>
                <span><strong>Encumbrance Certificate Verification</strong> - Ensuring property free from legal hurdles</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">📊</span>
                <span><strong>Survey & Boundary Finalization</strong> - GPS survey and physical demarcation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">🤝</span>
                <span><strong>Farmer & Landowner Settlements</strong> - Negotiation and agreement finalization</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              With 25+ years of expertise in land litigation and settlement, we have successfully 
              resolved over 500 complex land cases and facilitated clear titles for 50,000+ acres 
              across multiple states.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Legal Process Steps */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gold/20">
            <h3 className="text-xl font-bold text-navy mb-4">Our Legal Process</h3>
            <div className="space-y-3">
              {[
                "1. Initial Title Search & Due Diligence",
                "2. Document Verification & Gap Analysis",
                "3. Legal Notice & Dispute Resolution",
                "4. Revenue Department Approvals",
                "5. Final Title Clearance & Registration"
              ].map((step, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-gold text-navy rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm">Land Cases Resolved</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm">Acres Settled</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>

          {/* Key Documents Handled */}
          <div className="bg-navy text-white rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gold mb-4">Documents We Handle</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Sale Deeds", "Gift Deeds", "Partition Deeds", "Will Settlements",
                "Title Certificates", "Encumbrance Certs", "Survey Records", "Mutation Records",
                "Pattadar Passbooks", "Land Records", "Succession Certs", "Legal Heir Certs"
              ].map((doc, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gold mr-2">•</span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Legal Services */}
      <div className="mt-16 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-2xl p-8 border border-gold/30">
        <h3 className="text-2xl font-bold text-navy mb-6 text-center">Comprehensive Legal Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl mb-3">⚖️</div>
            <h4 className="font-bold text-navy mb-2">Land Dispute Resolution</h4>
            <p className="text-gray-600 text-sm">Handling boundary disputes, title conflicts, and inheritance matters</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">📋</div>
            <h4 className="font-bold text-navy mb-2">Document Authentication</h4>
            <p className="text-gray-600 text-sm">Verification of property documents and legal heir certificates</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🏛️</div>
            <h4 className="font-bold text-navy mb-2">Government Liaison</h4>
            <p className="text-gray-600 text-sm">Coordination with revenue departments and municipal authorities</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking for your dream home, interested in infrastructure 
              development, or want to collaborate on entertainment projects, we're here 
              to build the future together.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/production"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎬 Explore Anand Cinemas
              </Link>
              <Link
                to="/real-estate"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🏢 Explore Anand Reality
              </Link>
              <Link
                to="/infrastructure"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🏗️ Explore Anand Infra
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs