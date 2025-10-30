import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ceoPhoto from '../assets/founder.jpg';
import logo from '../assets/logo.png'
import { useMultiFormModal } from './Context/ModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isMobileDivisionsOpen, setIsMobileDivisionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileDivisionsRef = useRef(null);
  const { openModal } = useMultiFormModal();
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
      // Mobile divisions dropdown
      if (mobileDivisionsRef.current && !mobileDivisionsRef.current.contains(event.target)) {
        setIsMobileDivisionsOpen(false);
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
    setIsMobileDivisionsOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isDivisionActive = () => {
    return ['/production', '/real-estate', '/infrastructure'].includes(location.pathname);
  };

  const openAppointmentForm = (division) => {
    console.log(`Opening appointment form for ${division}`);
    openModal('real-estate', { prefillData: 'some data' });
  };

  const handleMobileDivisionClick = () => {
    setIsMobileDivisionsOpen(!isMobileDivisionsOpen);
  };

  const handleDivisionLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileDivisionsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-navy text-gold shadow-lg backdrop-blur-sm border-b border-gold/20">
      <nav className="container mx-auto lg:py-5 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Logo & Brand - Show on lg screens and above */}
          <Link
            to="/"
            className="hidden lg:flex items-center space-x-4 group"
          >
            {/* Logo Image */}
            <div className="relative">
              <div className="w-14 h-14 rounded-lg shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               <img src={logo} alt="logo" className='w-full p-3' />
              </div>
            </div>

            {/* CEO Image */}
            <div className="relative">
              <img
                src={ceoPhoto}
                alt="CEO"
                className="w-14 h-14 rounded-full shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <div className="text-xl font-bold text-white">ANAND</div>
                <div className="text-xl font-light text-gold">GROUP</div>
              </div>
              <div className="text-sm text-gold/80 font-medium">
                Born in 1988
              </div>
            </div>
          </Link>

          {/* Mobile & Tablet Logo & Brand - Show on screens below lg */}
          <Link
            to="/"
            className="lg:hidden flex items-center space-x-3  ms-2"
          >
            {/* Mobile Logo Image */}
            <div className="relative">
              <div className="w-12 h-12 rounded-lg shadow-md flex items-center justify-center ">
                <img src={logo} alt="logo" className='w-full p-2' />
              </div>
            </div>

            {/* Mobile CEO Image */}
            <div className="relative">
              <img
                src={ceoPhoto}
                alt="CEO"
                className="w-14 h-14 rounded-full  shadow-md object-cover"
              />
            </div>

            {/* Mobile Company Name */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <div className="text-md font-bold text-gold">ANAND</div>
                <div className="text-md font-light text-gold">GROUP</div>
              </div>
              <div className="text-xs text-gold/80 font-medium">
                Since 1995
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Show only on lg screens and above */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-colors px-3 py-2 rounded-lg ${
                isActiveLink('/') 
                  ? 'text-gold font-bold bg-gold/10' 
                  : 'text-gold/90 hover:text-gold hover:bg-gold/5'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors px-3 py-2 rounded-lg ${
                isActiveLink('/about') 
                  ? 'text-gold font-bold bg-gold/10' 
                  : 'text-gold/90 hover:text-gold hover:bg-gold/5'
              }`}
            >
              About
            </Link>

            {/* Divisions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className={`transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg ${
                  isDivisionActive() 
                    ? 'text-gold font-bold bg-gold/10' 
                    : 'text-gold/90 hover:text-gold hover:bg-gold/5'
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gold shadow-xl rounded-lg py-2 z-50">
                  <Link
                    to="/production"
                    className={`block w-full text-left px-4 py-3 hover:bg-gold hover:text-navy transition-colors border-b border-gold/10 ${
                      isActiveLink('/production') ? 'bg-gold/20 text-navy' : 'text-gold/90'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold">🎬 Anand Cinemas</div>
                  </Link>
                  <Link
                    to="/real-estate"
                    className={`block w-full text-left px-4 py-3 hover:bg-gold hover:text-navy transition-colors border-b border-gold/10 ${
                      isActiveLink('/real-estate') ? 'bg-gold/20 text-navy' : 'text-gold/90'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold">🏢 Anand Reality</div>
                  </Link>
                  <Link
                    to="/infrastructure"
                    className={`block w-full text-left px-4 py-3 hover:bg-gold hover:text-navy transition-colors ${
                      isActiveLink('/infrastructure') ? 'bg-gold/20 text-navy' : 'text-gold/90'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold">🏗️ Anand Infra</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors px-3 py-2 rounded-lg ${
                isActiveLink('/contact') 
                  ? 'text-gold font-bold bg-gold/10' 
                  : 'text-gold/90 hover:text-gold hover:bg-gold/5'
              }`}
            >
              Contact
            </Link>

            {/* Appointment Button */}
            <button
              onClick={() => openModal('real-estate', { prefillData: 'some data' })}
              className="bg-gold text-navy px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile & Tablet Menu Button - Show on screens below lg */}
          <button
            className="lg:hidden text-gold p-2 hover:bg-gold/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile & Tablet Menu - Show on screens below lg */}
        {isMenuOpen && (
          <div 
            ref={mobileDropdownRef}
            className="lg:hidden mt-4 pb-4 space-y-2 bg-navy/95 rounded-lg p-4 border border-gold/20 backdrop-blur-lg"
          >
            <Link
              to="/"
              className={`block transition-colors px-4 py-3 rounded-lg ${
                isActiveLink('/') 
                  ? 'text-gold font-bold bg-gold/10' 
                  : 'text-gold/90 hover:text-gold hover:bg-gold/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block transition-colors px-4 py-3 rounded-lg ${
                isActiveLink('/about') 
                  ? 'text-gold font-bold bg-gold/10' 
                  : 'text-gold/90 hover:text-gold hover:bg-gold/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Divisions Dropdown */}
            <div ref={mobileDivisionsRef}>
              <button
                onClick={handleMobileDivisionClick}
                className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  isDivisionActive() 
                    ? 'text-gold font-bold bg-gold/10' 
                    : 'text-gold/90 hover:text-gold hover:bg-gold/5'
                }`}
              >
                <span>Divisions</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isMobileDivisionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileDivisionsOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-gold/30 pl-4">
                  <Link
                    to="/production"
                    className={`block transition-colors px-3 py-2 rounded-lg ${
                      isActiveLink('/production') 
                        ? 'text-gold font-bold bg-gold/10' 
                        : 'text-gold/90 hover:text-gold hover:bg-gold/5'
                    }`}
                    onClick={handleDivisionLinkClick}
                  >
                    <div className="font-semibold">🎬 Anand Cinemas</div>
                  </Link>
                  <Link
                    to="/real-estate"
                    className={`block transition-colors px-3 py-2 rounded-lg ${
                      isActiveLink('/real-estate') 
                        ? 'text-gold font-bold bg-gold/10' 
                        : 'text-gold/90 hover:text-gold hover:bg-gold/5'
                    }`}
                    onClick={handleDivisionLinkClick}
                  >
                    <div className="font-semibold">🏢 Anand Reality</div>
                  </Link>
                  <Link
                    to="/infrastructure"
                    className={`block transition-colors px-3 py-2 rounded-lg ${
                      isActiveLink('/infrastructure') 
                        ? 'text-gold font-bold bg-gold/10' 
                        : 'text-gold/90 hover:text-gold hover:bg-gold/5'
                    }`}
                    onClick={handleDivisionLinkClick}
                  >
                    <div className="font-semibold">🏗️ Anand Infra</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`block transition-colors px-4 py-3 rounded-lg ${
                isActiveLink('/contact') 
                  ? 'text-gold font-bold bg-gold/10' 
                  : 'text-gold/90 hover:text-gold hover:bg-gold/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Appointment Button */}
            <button
              onClick={() => {
                openAppointmentForm('general');
                setIsMenuOpen(false);
              }}
              className="w-full bg-gold text-navy px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg text-center mt-2"
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;