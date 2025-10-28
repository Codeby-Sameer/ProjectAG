import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Divisions from './components/Divisions';
import GlobalPresence from './components/GlobalPresence';
import SocialResponsibility from './components/SocialResponsibility';
import Devocation from './components/Devocation';
import FounderMessage from './components/FounderMessage';
import Footer from './components/Footer'; 
import Production from './components/Pages/Production';
import RealEstate from './components/Pages/RealEstate';
import Infrastructure from './components/Pages/Infrastructure';
import Contact from './components/Pages/Contact';

function App() {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [showDivisionPage, setShowDivisionPage] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);

  const handleDivisionSelect = useCallback((division) => {
    setSelectedDivision(division);
    setShowDivisionPage(true);
    setShowContactPage(false); // Close contact page if it's open
    // Update URL with division name
    window.location.hash = `#${division}`;
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = () => {
    setShowDivisionPage(false);
    setSelectedDivision(null);
    setShowContactPage(false);
    // Update URL to home
    window.location.hash = '#home';
  };

  const handleContactClick = useCallback(() => {
    setShowContactPage(true);
    setShowDivisionPage(false); // Close division page if it's open
    setSelectedDivision(null); // Reset selected division
    // Update URL to contact
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle hash navigation on initial load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const sectionId = hash.substring(1);
        
        // Special handling for contact page
        if (sectionId === 'contact') {
          handleContactClick();
          return;
        }
        
        // Special handling for division pages
        if (sectionId === 'production' || sectionId === 'real-estate' || sectionId === 'infrastructure') {
          handleDivisionSelect(sectionId);
          return;
        }
        
        // Wait a bit for the page to render
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Call on initial load
    handleHashNavigation();

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [handleContactClick, handleDivisionSelect]);

  // Render contact page
  if (showContactPage) {
    return (
      <div className="min-h-screen">
        <Header onDivisionSelect={handleDivisionSelect} selectedDivision={selectedDivision} onHomeClick={handleBackToHome} onContactClick={handleContactClick} showContactPage={showContactPage} showDivisionPage={showDivisionPage} />
        <Contact />
        <button
          onClick={handleBackToHome}
          className="fixed bottom-8 right-8 bg-gold text-navy px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold z-50"
        >
          ← Back to Home
        </button>
        <Footer />
      </div>
    );
  }

  // Render division pages
  if (showDivisionPage) {
  return (
    <div className="min-h-screen">
      <Header onDivisionSelect={handleDivisionSelect} selectedDivision={selectedDivision} onHomeClick={handleBackToHome} onContactClick={handleContactClick} showContactPage={showContactPage} />
      {selectedDivision === 'production' && <Production />}
      {selectedDivision === 'real-estate' && <RealEstate />}
      {selectedDivision === 'infrastructure' && <Infrastructure />}
      <button
        onClick={handleBackToHome}
        className="fixed bottom-8 right-8 bg-gold text-navy px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold z-50"
      >
        ← Back to Home
      </button>
      <Footer />
    </div>
  );
}

// Render main home page
return (
  <div className="min-h-screen">
    <Header onDivisionSelect={handleDivisionSelect} selectedDivision={selectedDivision} onHomeClick={handleBackToHome} onContactClick={handleContactClick} showContactPage={showContactPage} />
    <Hero />
      <About />
      <Divisions selectedDivision={selectedDivision} onDivisionSelect={handleDivisionSelect} />
      <GlobalPresence />
      <SocialResponsibility />
      <Devocation />
      <FounderMessage />
      <Footer />
    </div>
  );
}

export default App;
