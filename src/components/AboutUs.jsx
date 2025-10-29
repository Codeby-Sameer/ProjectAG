import { Link } from "react-router-dom"
import KeyTopics from "./Hero/KeyTopics"


const AboutUs=()=>{
    return<>
    <section>
        <section  className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            About Anand Group
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Anand Group is a globally recognized conglomerate with operations across seven countries.
            With leadership in Real Estate, Film Production, Imports & Exports, Trust Services,
            Youth Empowerment, and Spiritual Travel, the Group continues to redefine industries
            through innovation, integrity, and social impact.
          </p>
          <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to explore our divisions in detail?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/production"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎬 Explore Production
            </Link>
            <Link
              to="/real-estate"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏢 Explore Real Estate
            </Link>
            <Link
              to="/infrastructure"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏗️ Explore Infrastructure
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
        <KeyTopics/>

        </section></>
}
export default AboutUs