
const About = () => {
  return (
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
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="#divisions"
              className="px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg"
            >
              Learn More About Anand Group
            </a>
            <a
              href="#divisions"
              className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300 shadow-lg"
            >
              Our Divisions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
