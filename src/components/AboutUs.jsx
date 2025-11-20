import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import {  Hammer, Shield, Target, Users, Heart, Home, Award, Smile } from 'lucide-react';
import ServicesCarousel from "./Sections/serviceCarousel";


const AboutUs = () => {


  
     const services = [
    {
      title: "Anand Realtyy",
      icon: "🏠",
      description: "Built on trust, transparency, and long-term value. We ensure every property rests on strong legal foundations through meticulous document scrutiny and ethical practices.",
      features: ["Legal Transparency", "Vastu-aligned Design", "Quality Construction", "Accessible Luxury"],
      gradient: "from-green-500 to-green-700",
      image: "venture.jpg",
      link: "https://anand-realtyy-new.vercel.app",
      buttonText: "Explore Properties"
    },
    {
      title: "Anand Infra",
      icon: "🏗️",
      description: "Creating infrastructure that endures for generations—strong, precise, and timeless. We handle commercial complexes, townships, industrial structures, and public utilities.",
      features: ["Scientific Planning", "Quality Control", "Vastu Principles", "Large-scale Projects"],
      gradient: "from-blue-500 to-blue-700",
      image: "infra.png",
      link: "https://anand-project-21.vercel.app",
      buttonText: "Explore Projects"
    },
    {
      title: "Anand Cinemaz",
      icon: "🎬",
      description: "Producing meaningful, impactful, and high-quality cinematic content that blends creativity with purpose—crafting films that entertain and inspire.",
      features: ["Meaningful Content", "Social Messages", "Artistic Integrity", "Modern Storytelling"],
      gradient: "from-purple-500 to-purple-700",
      image: "Production.png",
      link: "https://anand-cinemas.vercel.app",
      buttonText: "Explore Productions"
    }
  ];
   // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

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
      

        <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
              variants={itemVariants}
            >
              Building Dreams, <span className="text-blue-700">Creating Legacies</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-blue-700 mx-auto mb-6 rounded-full"
              variants={itemVariants}
            ></motion.div>
            <motion.p 
              className="text-base md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
              variants={itemVariants}
            >
             Anand Group has been more than just a business we've been a trusted partner 
              in growth. From your first home to your biggest investments, we believe everyone deserves 
              quality, transparency, and lasting value that stands the test of time.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Column - Our Story & Stats */}
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Our Story */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold   md: text-navy-900 mb-6 flex items-center gap-3">
                  <div className="p-2  bg-blue-100 rounded-lg">
                    <Heart className="w-6 h-6 md:w-7 md:h-7 text-blue-700" />
                  </div>
                  Our Story
                </h3>
                <div className="space-y-4 text-slate-600 mb-8">
                  <p className="text-sm md:text-lg leading-relaxed">
                    It all started with a simple vision: to create spaces and experiences that enrich lives. 
                    What began as a small real estate venture has blossomed into a multi-sector enterprise, 
                    but our core values have remained unchanged.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed">
                    We understand that trust is earned, not given. That's why every project we undertake, 
                    every home we build, and every film we produce carries the same commitment to excellence 
                    and ethical practices that defined our very first endeavor.
                  </p>
                </div>

                {/* Stats Cards - Small Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  {/* Stat 1 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Home className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">500+</div>
                    <div className="text-sm text-slate-600 font-medium">Projects</div>
                  </motion.div>

                  {/* Stat 2 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">20+</div>
                    <div className="text-sm text-slate-600 font-medium">Years</div>
                  </motion.div>

                  {/* Stat 3 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">10K+</div>
                    <div className="text-sm text-slate-600 font-medium">Clients</div>
                  </motion.div>

                  {/* Stat 4 */}
                  <motion.div 
                    className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-center"
                    variants={statsVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Smile className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">98%</div>
                    <div className="text-sm text-slate-600 font-medium">Satisfaction</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - What Makes Us Different */}
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* What Makes Us Different */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="w-6 h-6 md:w-7 md:h-7 text-blue-700" />
                  </div>
                  What Makes Us Different
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-5 h-5 md:w-6 md-h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">Transparency First</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        No hidden clauses, no surprise costs. We believe in clear documentation and 
                        honest communication from day one.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Hammer className="w-5 h-5 md:w-6 md-h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">Quality That Lasts</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        We use premium materials and follow rigorous construction standards because 
                        your safety and satisfaction are non-negotiable.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-blue-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 md:w-6 md-h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-lg">For Everyone</h4>
                      <p className="text-slate-600 md:text-base text-sm">
                        From first-time homebuyers to established businesses, we create solutions 
                        that are accessible without compromising on quality.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
 
  
        <ServicesCarousel/>

        {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-blue-900 text-white relative overflow-hidden">
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

     
         
    </>
  )
}

export default AboutUs