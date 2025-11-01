import { useState, useEffect } from 'react';

const GlobalPresence = () => {
  const [activeCountry, setActiveCountry] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);

  const countries = [
    {
      name: 'India',
     
      year: '1995',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
      projects: 15,
      keyProject: 'Metro Rail System',
      description: 'Leading infrastructure development with multiple landmark projects',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'USA',
     
      year: '2005',
      cities: ['New York', 'Los Angeles', 'Chicago'],
      projects: 12,
      keyProject: 'Commercial Complexes',
      description: 'Expanding real estate portfolio in key metropolitan areas',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'UK',
 
      year: '2010',
      cities: ['London', 'Manchester', 'Birmingham'],
      projects: 8,
      keyProject: 'Mixed-Use Developments',
      description: 'Sustainable residential and commercial projects',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'UAE',
    
      year: '2012',
      cities: ['Dubai', 'Abu Dhabi'],
      projects: 10,
      keyProject: 'Luxury Residences',
      description: 'Premium real estate developments in Dubai',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Singapore',
    
      year: '2014',
      cities: ['Singapore'],
      projects: 5,
      keyProject: 'Smart Buildings',
      description: 'Technology-integrated sustainable infrastructure',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      name: 'Australia',
    
      year: '2016',
      cities: ['Sydney', 'Melbourne'],
      projects: 6,
      keyProject: 'Eco-Friendly Homes',
      description: 'Environmentally conscious development projects',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Canada',
      
      year: '2018',
      cities: ['Toronto', 'Vancouver'],
      projects: 4,
      keyProject: 'Urban Regeneration',
      description: 'Transforming urban landscapes with innovative designs',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  const globalStats = [
    { icon: '🌍', value: '7', suffix: '+', label: 'Countries', description: 'Global Footprint' },
    { icon: '🏗️', value: '60', suffix: '+', label: 'Projects', description: 'Completed' },
    { icon: '💰', value: '$5', suffix: 'B+', label: 'Investment', description: 'Total Value' },
    { icon: '👥', value: '50k', suffix: '+', label: 'Employed', description: 'Workforce' },
    { icon: '🎬', value: '500', suffix: '+', label: 'Productions', description: 'Content Created' },
    { icon: '🏆', value: '100', suffix: '+', label: 'Awards', description: 'Recognition' }
  ];

  const milestones = [
    { year: '1995', title: 'Founded in Mumbai', description: 'Started operations in India', icon: '🚀' },
    { year: '2005', title: 'Expanded to USA', description: 'International presence began', icon: '🌎' },
    { year: '2010', title: 'European Entry', description: 'UK operations established', icon: '🏰' },
    { year: '2015', title: 'Middle East Expansion', description: 'Dubai hub inaugurated', icon: '🏙️' },
    { year: '2020', title: 'Digital Transformation', description: 'AI and tech integration', icon: '🤖' },
    { year: '2024', title: 'Sustainable Future', description: '100% green initiatives', icon: '🌱' }
  ];

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const nextCountry = () => {
    setActiveCountry((prev) => (prev + 1) % countries.length);
  };

  const prevCountry = () => {
    setActiveCountry((prev) => (prev - 1 + countries.length) % countries.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
       {/* Global Impact Section */}
        <div className=" rounded-3xl p-8 md:p-12 text-navy shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Making a Global Impact
              </h3>
              <p className="text-xl mb-8 leading-relaxed">
                From infrastructure to entertainment, we're creating lasting value across continents. 
                Our projects touch lives, transform communities, and build a better tomorrow.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">✅</div>
                  <div>
                    <div className="font-bold text-2xl">99.9%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </div>
              
                <div className="flex items-center gap-3">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <div className="font-bold text-2xl">100+</div>
                    <div className="text-sm">Awards</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🏗️', title: 'Infrastructure', value: '30+' },
                { icon: '🏢', title: 'Real Estate', value: '100+' },
                { icon: '🎬', title: 'Production', value: '50+' },
                { icon: '💡', title: 'Innovation', value: '24/7' }
              ].map((item, index) => (
                <div key={index} className="bg-navy bg-opacity-10 rounded-2xl p-6 text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-navy mb-2">{item.value}</div>
                  <div className="text-sm font-semibold">{item.title}</div>
            </div>
          ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default GlobalPresence;
