import { useState, useEffect } from 'react';

const Production = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredDream, setHoveredDream] = useState(null);

  const dreamCards = [
    {
      title: 'Director and Writer',
      icon: '🎬',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
      description: 'Submit your synopsis or pitch deck. Join our filmmaker program and bring your vision to the big screen.',
      buttonText: 'Submit Details',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Cinematographer',
      icon: '📹',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      description: 'Share your portfolio and showcase your visual storytelling skills. We\'re looking for talented cinematographers.',
      buttonText: 'Show Your Work',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Producer',
      icon: '🎥',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
      description: 'Experienced in managing projects? Join our production team and oversee exciting film projects.',
      buttonText: 'Join Our Team',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Music Director',
      icon: '🎵',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
      description: 'Compose the soundtrack for our films. Share your musical portfolio and let\'s create magic together.',
      buttonText: 'Share Portfolio',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Lyricist',
      icon: '✍️',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      description: 'Craft meaningful lyrics for our productions. Submit your work and become part of our creative journey.',
      buttonText: 'Submit Lyrics',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Other Roles',
      icon: '🌟',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
      description: 'Have a unique skill in film production? We welcome all creative talents. Reach out to explore opportunities.',
      buttonText: 'Contact Us',
      gradient: 'from-blue-500 to-cyan-600'
    }
  ];

  const services = [
    'Full-service film production from pre-production to post-production',
    'State-of-the-art editing facilities and cutting-edge equipment',
    'Award-winning directors, cinematographers, and creative teams',
    'International distribution networks',
    'Documentary filmmaking and storytelling',
    'Commercial advertising production',
    'Music video production',
    'Event coverage and corporate videos'
  ];

  const achievements = [
    'Produced over 100 films across multiple genres',
    'International film festival recognition and awards',
    'Collaborations with global streaming platforms',
    'Award-winning documentaries and commercial films',
    'Partnerships with leading production houses worldwide',
    'State-of-the-art studio facilities spanning 50,000 sq ft'
  ];

  const recentProjects = [
    {
      title: 'Epic Adventure Series',
      description: 'A groundbreaking series that captivated audiences globally',
      year: '2024',
      awards: 'International Best Drama Award',
      image: '🎬',
      color: 'from-purple-500 to-pink-600',
      rating: '9.5/10',
      duration: '120 min'
    },
    {
      title: 'Documentary: The Silent Warriors',
      description: 'An inspiring documentary about unsung heroes',
      year: '2023',
      awards: 'Best Documentary at Film Festival',
      image: '🎞️',
      color: 'from-blue-500 to-cyan-600',
      rating: '9.8/10',
      duration: '95 min'
    },
    {
      title: 'Corporate Success Stories',
      description: 'A series showcasing business achievements',
      year: '2023',
      awards: 'Industry Excellence Award',
      image: '📺',
      color: 'from-green-500 to-emerald-600',
      rating: '8.9/10',
      duration: '45 min'
    }
  ];

  const teamMembers = [
    { name: 'Rajesh Kumar', role: 'Director', experience: '15 Years', image: '👨‍💼', expertise: 'Feature Films' },
    { name: 'Priya Sharma', role: 'Cinematographer', experience: '12 Years', image: '👩‍💼', expertise: 'Visual Storytelling' },
    { name: 'Amit Patel', role: 'Editor', experience: '10 Years', image: '👨‍💻', expertise: 'Post-Production' },
    { name: 'Sonia Mehta', role: 'Producer', experience: '18 Years', image: '👩‍⚖️', expertise: 'Project Management' }
  ];

  const visionSections = [
    {
      section: 'WHAT YOU WILL HAVE',
      title: 'Creative Freedom',
      description: 'We believe in giving filmmakers the freedom to explore their creativity without constraints, allowing their distinct voices and visions to shine through on screen.',
      features: [
        { icon: '🎬', title: 'Unrestricted Expression', description: "We support each creator's unique storytelling approach, encouraging authenticity and originality." },
        { icon: '💡', title: 'Limitless Innovation', description: 'With no creative boundaries, filmmakers can experiment, innovate, and push the boundaries of cinematic art.' }
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      layout: 'image-left'
    },
    {
      section: 'WHAT YOU WILL GAIN',
      title: 'Industry Mentorship',
      description: 'Gain personalized mentorship from experienced professionals in the film industry, helping you refine your skills and advance your career.',
      features: [
        { icon: '📈', title: 'Expert Insights', description: 'Receive hands-on advice and industry knowledge from mentors who understand the nuances of filmmaking.' },
        { icon: '🚀', title: 'Career Development', description: 'Our mentorship empowers you to make informed decisions, build your network, and elevate your craft.' }
      ],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      layout: 'image-right'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recentProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [recentProjects.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🎬</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Film Production</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Creating compelling stories that entertain and inspire audiences worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Feature Films</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Documentaries</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Commercials</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Music Videos</span>
            </div>
          </div>
        </div>
      </section>

          {/* Stats Section */}
          <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Films Produced</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">500M+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">50K</div>
              <div className="text-gray-600">Studio Sq Ft</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#EA580C' }}>
              What's Your Dream?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dreamCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 border-2 border-transparent hover:border-orange-500 transition-all duration-500"
                  onMouseEnter={() => setHoveredDream(index)}
                  onMouseLeave={() => setHoveredDream(null)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Background */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content - Appears on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} p-6 transition-all duration-500 ${
                    hoveredDream === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
                        <p className="text-white text-opacity-95 leading-relaxed mb-6 text-lg">
                          {card.description}
                        </p>
                      </div>
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transform transition-transform hover:scale-105 shadow-xl">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  {/* Title Label Below Card */}
                  <div className="bg-gray-800 p-4 border-t-2 border-gray-700 group-hover:border-orange-500 transition-colors">
                    <p className="text-center font-semibold" style={{ color: '#EA580C' }}>
                      - {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    {/* Vision Sections */}
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          {visionSections.map((section, index) => (
            <div key={index} className="mb-20 last:mb-0">
              {section.layout === 'image-left' ? (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image Left */}
                  <div className="relative group">
                    <div className="border-4 border-orange-500 rounded-lg overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Text Right */}
                  <div className="text-white">
                    <p className="text-gray-400 uppercase text-sm mb-3">{section.section}</p>
                    <h3 className="text-5xl md:text-6xl font-bold mb-6">{section.title}</h3>
                    <p className="text-xl text-gray-300 mb-8">{section.description}</p>
                    
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="mb-6 flex items-start">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-2xl">{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Text Left */}
                  <div className="text-white">
                    <p className="text-gray-400 uppercase text-sm mb-3">{section.section}</p>
                    <h3 className="text-5xl md:text-6xl font-bold mb-6">{section.title}</h3>
                    <p className="text-xl text-gray-300 mb-8">{section.description}</p>
                    
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="mb-6 flex items-start">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-2xl">{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Image Right */}
                  <div className="relative group">
                    <div className="border-4 border-orange-500 rounded-lg overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Achievements & Milestones</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-800 text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Carousel */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
            
            {/* Carousel */}
            <div className="relative h-[500px] overflow-hidden rounded-3xl">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 z-10 scale-100'
                      : 'opacity-0 z-0 scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-12 h-full flex flex-col justify-between text-white shadow-2xl`}>
                    <div>
                      <div className="text-9xl mb-6 animate-bounce-slow">{project.image}</div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h3>
                      <p className="text-xl text-white text-opacity-90 mb-6">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-2xl font-bold">⭐ {project.rating}</span>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-2xl font-bold">⏱️ {project.duration}</span>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-2xl font-bold">📅 {project.year}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-sm bg-white bg-opacity-30 px-4 py-2 rounded-full">{project.awards}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {recentProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-10 h-3 bg-white'
                        : 'w-3 h-3 bg-white bg-opacity-40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with 3D Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Our Creative Team</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Meet the talented professionals behind our productions</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white transform transition-all duration-500 ${
                      hoveredCard === index
                        ? 'rotate-y-12 scale-105 shadow-2xl'
                        : 'rotate-y-0 scale-100'
                    }`}
                    style={{
                      transform: hoveredCard === index ? 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' : 'perspective(1000px)',
                    }}
                  >
                    <div className="text-6xl mb-4 text-center">{member.image}</div>
                    <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                    <p className="text-purple-200 text-center mb-3">{member.role}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between bg-white bg-opacity-20 px-3 py-2 rounded-lg">
                        <span>Experience:</span>
                        <span className="font-bold">{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-between bg-white bg-opacity-20 px-3 py-2 rounded-lg">
                        <span>Expertise:</span>
                        <span className="font-bold text-xs">{member.expertise}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Your Dream Section */}
      

  

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's bring your vision to life with our world-class production team
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;

