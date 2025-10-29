import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ceoPhoto from '../assets/DSC_7610.JPG';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDivisionsOpen(false);
      }
      // Mobile menu
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDivisionsOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isDivisionActive = () => {
    return ['/production', '/real-estate', '/infrastructure'].includes(location.pathname);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md backdrop-blur-sm ">
      <nav className="container mx-auto px-6 lg:py-4 py-5" ref={mobileDropdownRef}>
        <div className="flex items-center justify-between">
          {/* Desktop Logo & Brand */}
          <Link
            to="/"
            className="hidden md:flex items-center space-x-4 "
          >
            {/* Logo Image */}
            <div className="relative">
              <div className="w-16 h-16 rounded-lg border-2 border-gold shadow-lg  bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center">
                <div className="text-2xl font-bold text-navy">AG</div>
              </div>
            </div>

            {/* CEO Image */}
            <div className="relative hidden md:block">
              <img
                src={ceoPhoto}
                alt="CEO"
                className="w-16 h-16  border-3 border-gold shadow-lg  object-cover"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
             <div className="flex items-center space-x-2 group cursor-pointer">
  <div className="text-2xl font-bold text-navy group-hover:text-gold transition-colors duration-300">ANAND</div>
  <div className="text-2xl font-light text-gold group-hover:text-navy transition-colors duration-300">GROUP</div>
</div>
              <div className="text-sm text-gray-700 font-semibold">
                Leading Excellence Since 1995
              </div>
            </div>
          </Link>

          {/* Mobile Logo & Brand */}
          <Link
            to="/"
            className="md:hidden flex items-center space-x-3"
          >
            {/* Mobile Logo Image */}
            <div className="relative">
              <div className="w-12 h-12 rounded-lg border-2 border-gold shadow-md bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center">
                <div className="text-xl font-bold text-navy">AG</div>
              </div>
            </div>

            {/* Mobile CEO Image */}
            <div className="relative">
              <img
                src={ceoPhoto}
                alt="CEO"
                className="w-10 h-10 rounded-full border-2 border-gold shadow-md object-cover"
              />
            </div>

            {/* Mobile Company Name */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <div className="text-lg font-bold text-navy">ANAND</div>
                <div className="text-lg font-light text-gold">GROUP</div>
              </div>
              <div className="text-xs text-gray-700 font-medium">
                Since 1995
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActiveLink('/') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors ${isActiveLink('/about') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                }`}
            >
              About
            </Link>

            {/* Divisions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className={`transition-colors flex items-center space-x-1 ${isDivisionActive() ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                  }`}
              >
                <span>Divisions</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDivisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-200">
                  <Link
                    to="/production"
                    className={`block w-full text-left px-4 py-2 hover:bg-gold hover:text-white transition-colors ${isActiveLink('/production') ? 'bg-gold text-white' : 'text-navy'
                      }`}
                  >
                    Production
                  </Link>
                  <Link
                    to="/real-estate"
                    className={`block w-full text-left px-4 py-2 hover:bg-gold hover:text-white transition-colors ${isActiveLink('/real-estate') ? 'bg-gold text-white' : 'text-navy'
                      }`}
                  >
                    Real Estate
                  </Link>
                  <Link
                    to="/infrastructure"
                    className={`block w-full text-left px-4 py-2 hover:bg-gold hover:text-white transition-colors ${isActiveLink('/infrastructure') ? 'bg-gold text-white' : 'text-navy'
                      }`}
                  >
                    Infrastructure
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors ${isActiveLink('/contact') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className={`block transition-colors ${isActiveLink('/') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block transition-colors ${isActiveLink('/about') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                }`}
            >
              About
            </Link>

            {/* Mobile Divisions Dropdown */}
            <div>
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className="w-full text-left flex items-center justify-between text-navy hover:text-gold transition-colors"
              >
                <span className={isDivisionActive() ? 'text-gold font-bold' : ''}>
                  Divisions
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDivisionsOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-gold pl-4">
                  <Link
                    to="/production"
                    className={`block transition-colors ${isActiveLink('/production') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                      }`}
                  >
                    🎬 Production
                  </Link>
                  <Link
                    to="/real-estate"
                    className={`block transition-colors ${isActiveLink('/real-estate') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                      }`}
                  >
                    🏢 Real Estate
                  </Link>
                  <Link
                    to="/infrastructure"
                    className={`block transition-colors ${isActiveLink('/infrastructure') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                      }`}
                  >
                    🏗️ Infrastructure
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={`block transition-colors ${isActiveLink('/contact') ? 'text-gold font-bold' : 'text-navy hover:text-gold'
                }`}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;