import { useState, useEffect, useRef } from 'react';
import ceoPhoto from '../assets/DSC_7610.JPG';

const Header = ({ onDivisionSelect, selectedDivision, onHomeClick, onContactClick, showContactPage, showDivisionPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const divisionsRef = useRef(null);

  // Logo placeholder - add actual logo image later
  const logoImage = 'https://via.placeholder.com/60x60/D4AF37/0A2E5B?text=AG';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divisionsRef.current && !divisionsRef.current.contains(event.target)) {
        setIsDivisionsOpen(false);
      }
    };

    if (isDivisionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDivisionsOpen]);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="hidden md:flex items-center space-x-4 cursor-pointer group"
            onClick={(e) => {
              e.preventDefault();
              setIsDivisionsOpen(false);
              if (onHomeClick) onHomeClick();
              setTimeout(() => {
                const homeSection = document.getElementById('home');
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            {/* Logo Image */}
            <div className="relative">
              <div className="w-16 h-16 rounded-lg border-2 border-gold shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center">
                <div className="text-2xl font-bold text-navy">AG</div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full border-2 border-white animate-pulse"></div>
            </div>

            {/* CEO Image */}
            <div className="relative hidden md:block">
              <img 
                src={ceoPhoto} 
                alt="CEO" 
                className="w-14 h-14 rounded-full border-3 border-gold shadow-lg group-hover:scale-110 transition-transform duration-300 object-cover"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-navy group-hover:text-gold transition-colors">
                ANAND GROUP
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                Leading Excellence Since 1995
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/home" 
              className="text-navy hover:text-gold transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsDivisionsOpen(false);
                window.location.hash = '#home';
                if (onHomeClick) onHomeClick();
                setTimeout(() => {
                  const homeSection = document.getElementById('home');
                  if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-navy hover:text-gold transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsDivisionsOpen(false);
                window.location.hash = '#about';
                if (onHomeClick) onHomeClick();
                setTimeout(() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              About
            </a>
            
            <div className="relative" ref={divisionsRef}>
              <button
                className="text-navy hover:text-gold transition-colors flex items-center space-x-1 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDivisionsOpen(!isDivisionsOpen);
                }}
              >
                <span>Divisions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDivisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50">
                  <button
                    onClick={() => {
                      onDivisionSelect('production');
                      setIsDivisionsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gold hover:text-white transition-colors ${
                      selectedDivision === 'production' ? 'bg-gold text-white' : 'text-navy'
                    }`}
                  >
                    Production
                  </button>
                  <button
                    onClick={() => {
                      onDivisionSelect('real-estate');
                      setIsDivisionsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gold hover:text-white transition-colors ${
                      selectedDivision === 'real-estate' ? 'bg-gold text-white' : 'text-navy'
                    }`}
                  >
                    Real Estate
                  </button>
                  <button
                    onClick={() => {
                      onDivisionSelect('infrastructure');
                      setIsDivisionsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gold hover:text-white transition-colors ${
                      selectedDivision === 'infrastructure' ? 'bg-gold text-white' : 'text-navy'
                    }`}
                  >
                    Infrastructure
                  </button>
                </div>
              )}
            </div>
            
            <a 
              href="/global" 
              className="text-navy hover:text-gold transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsDivisionsOpen(false);
                window.location.hash = '#global';
                if (onHomeClick) onHomeClick();
                setTimeout(() => {
                  const globalSection = document.getElementById('global');
                  if (globalSection) {
                    globalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Global Presence
            </a>
            <a 
              href="/contact" 
              className={`transition-colors cursor-pointer ${showContactPage ? 'text-gold font-bold' : 'text-navy hover:text-gold'}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#contact';
                if (onContactClick) onContactClick();
              }}
            >
              Contact
            </a>
          </div>

          {/* Mobile Logo - appears only on mobile devices */}
          <div className="md:hidden flex items-center">
            <div className="w-10 h-10 rounded-lg border-2 border-gold shadow-md bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center mr-3">
              <div className="text-lg font-bold text-navy">AG</div>
            </div>
          </div>

          <button
            className="md:hidden text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a 
              href="/home" 
              className="block text-navy hover:text-gold transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.location.hash = '#home';
                if (onHomeClick) onHomeClick();
                setTimeout(() => {
                  const homeSection = document.getElementById('home');
                  if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-navy hover:text-gold transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                if (onHomeClick) onHomeClick();
                setTimeout(() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              About
            </a>
            
            <div>
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className="w-full text-left flex items-center justify-between text-navy hover:text-gold transition-colors"
              >
                <span>Divisions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDivisionsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Opening Production page');
                      if (onDivisionSelect) {
                        onDivisionSelect('production');
                      }
                      setIsMenuOpen(false);
                      setIsDivisionsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded transition-colors text-navy hover:text-gold hover:bg-gray-100 active:bg-gold active:text-white"
                  >
                    🎬 Production
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Opening Real Estate page');
                      if (onDivisionSelect) {
                        onDivisionSelect('real-estate');
                      }
                      setIsMenuOpen(false);
                      setIsDivisionsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded transition-colors text-navy hover:text-gold hover:bg-gray-100 active:bg-gold active:text-white"
                  >
                    🏢 Real Estate
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Opening Infrastructure page');
                      if (onDivisionSelect) {
                        onDivisionSelect('infrastructure');
                      }
                      setIsMenuOpen(false);
                      setIsDivisionsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded transition-colors text-navy hover:text-gold hover:bg-gray-100 active:bg-gold active:text-white"
                  >
                    🏗️ Infrastructure
                  </button>
                </div>
              )}
            </div>
            
            <a 
              href="/global" 
              className="block text-navy hover:text-gold transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                if (onHomeClick) onHomeClick();
                setTimeout(() => {
                  const globalSection = document.getElementById('global');
                  if (globalSection) {
                    globalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Global Presence
            </a>
            <a 
              href="/contact" 
              className={`block transition-colors cursor-pointer ${showContactPage ? 'text-gold font-bold' : 'text-navy hover:text-gold'}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                if (onContactClick) onContactClick();
              }}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
