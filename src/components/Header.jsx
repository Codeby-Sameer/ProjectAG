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
  const menuButtonRef = useRef(null);
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
      if (mobileDropdownRef.current && 
          !mobileDropdownRef.current.contains(event.target) &&
          !menuButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      // Mobile divisions dropdown
      if (mobileDivisionsRef.current && !mobileDivisionsRef.current.contains(event.target)) {
        setIsMobileDivisionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDivisionsOpen(false);
    setIsMobileDivisionsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isDivisionActive = () => {
    return ['/production', '/real-estate', '/infrastructure'].includes(location.pathname);
  };

  const openAppointmentForm = (division) => {
    console.log(`Opening appointment form for ${division}`);
    openModal('real-estate', { prefillData: 'some data' });
    setIsMenuOpen(false);
  };

  const handleMobileDivisionClick = () => {
    setIsMobileDivisionsOpen(!isMobileDivisionsOpen);
  };

  const handleDivisionLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileDivisionsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDivisionsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white text-navy shadow-lg backdrop-blur-sm border-b border-gold/20">
      {/* Top Bar */}
      <div className=' bg-navy text-white lg:px-20 md:px-20 sm:px-10 px-3'>
        <div className='flex justify-between'>
          <div className='text-md md:text-sm sm:text-xs'>
            Born in 1988
          </div>
          <div className='text-md md:text-sm sm:text-xs'>
            Established in 2025
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="container mx-auto lg:py-3 py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3 lg:space-x-1"
            onClick={closeMenu}
          >
            {/* CEO Image */}
            <div className="relative">
              <img
                src={ceoPhoto}
                alt="CEO"
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg object-cover object-top transition-transform duration-300"
              />
            </div>
            
            {/* Logo Image */}
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full   flex items-center justify-center transition-transform duration-300">
                <img src={logo} alt="logo" className='w-full p-3 md:p-4' />
              </div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="text-lg md:text-xl font-bold text-orange-500">ANAND</div>
                <div className="text-lg md:text-xl font-bold text-orange-500">GROUP</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              to="/"
              className={`transition-colors px-3 py-2 rounded-lg font-medium ${
                isActiveLink('/')
                  ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                  : 'text-navy/90 hover:text-navy hover:bg-gold/10'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors px-3 py-2 rounded-lg font-medium ${
                isActiveLink('/about')
                  ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                  : 'text-navy/90 hover:text-navy hover:bg-gold/10'
              }`}
            >
              About
            </Link>

            {/* Divisions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className={`transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg font-medium ${
                  isDivisionActive()
                    ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                    : 'text-navy/90 hover:text-navy hover:bg-gold/10'
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gold/30 shadow-2xl rounded-lg py-2 z-50 backdrop-blur-sm">
                  <Link
                    to="/production"
                    className={`block w-full text-left px-4 py-3 transition-all border-b border-gold/10 hover:bg-orange-50 hover:pl-6 ${
                      isActiveLink('/production') 
                        ? 'bg-navy text-white font-semibold' 
                        : 'text-navy hover:text-navy'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold flex items-center gap-2">
                      <span>🎬</span>
                      <span>Anand Cinemas</span>
                    </div>
                  </Link>
                  <Link
                    to="/real-estate"
                    className={`block w-full text-left px-4 py-3 transition-all border-b border-gold/10 hover:bg-orange-50 hover:pl-6 ${
                      isActiveLink('/real-estate') 
                        ? 'bg-navy text-white font-semibold' 
                        : 'text-navy hover:text-navy'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold flex items-center gap-2">
                      <span>🏢</span>
                      <span>Anand Reality</span>
                    </div>
                  </Link>
                  <Link
                    to="/infrastructure"
                    className={`block w-full text-left px-4 py-3 transition-all hover:bg-orange-50 hover:pl-6 ${
                      isActiveLink('/infrastructure') 
                        ? 'bg-navy text-white font-semibold' 
                        : 'text-navy hover:text-navy'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold flex items-center gap-2">
                      <span>🏗️</span>
                      <span>Anand Infra</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors px-3 py-2 rounded-lg font-medium ${
                isActiveLink('/contact')
                  ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                  : 'text-navy/90 hover:text-navy hover:bg-gold/10'
              }`}
            >
              Contact
            </Link>

            {/* Appointment Button */}
            <button
              onClick={() => openModal('real-estate', { prefillData: 'some data' })}
              className="bg-green-500 text-white  px-5 py-2.5 rounded-lg font-semibold  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 "
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden text-navy p-2 hover:bg-gold/20 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0  backdrop-blur-sm z-40 mt-20"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu Content */}
            <div
              ref={mobileDropdownRef}
              className="lg:hidden fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-lg border border-gold/30 rounded-xl shadow-2xl z-50 py-4 transform transition-all duration-300"
            >
              <div className="space-y-1 px-2">
                <Link
                  to="/"
                  className={`block transition-all px-4 py-3 rounded-lg font-medium hover:bg-blue-100 ${
                    isActiveLink('/')
                      ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                      : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={`block transition-all px-4 py-3 rounded-lg font-medium  hover:bg-blue-100 ${
                    isActiveLink('/about')
                      ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                      : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>

                {/* Mobile Divisions Dropdown */}
                <div ref={mobileDivisionsRef}>
                  <button
                    onClick={handleMobileDivisionClick}
                    className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg transition-all font-medium hover:bg-blue-100 ${
                      isDivisionActive()
                        ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                        : 'text-navy/90 hover:text-navy hover:bg-gold/10'
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
                    <div className="ml-2 mt-1 space-y-1 border-l-2 border-gold/40 pl-3 py-1">
                      <Link
                        to="/production"
                        className={`block transition-all px-3 py-2.5 rounded-lg font-medium  hover:bg-blue-100 ${
                          isActiveLink('/production')
                            ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                            : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                        }`}
                        onClick={closeMenu}
                      >
                        <div className="font-semibold flex items-center gap-2">
                          <span>🎬</span>
                          <span>Anand Cinemas</span>
                        </div>
                      </Link>
                      <Link
                        to="/real-estate"
                        className={`block transition-all px-3 py-2.5 rounded-lg font-medium hover:bg-blue-100 ${
                          isActiveLink('/real-estate')
                            ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                            : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                        }`}
                        onClick={closeMenu}
                      >
                        <div className="font-semibold flex items-center gap-2">
                          <span>🏢</span>
                          <span>Anand Reality</span>
                        </div>
                      </Link>
                      <Link
                        to="/infrastructure"
                        className={`block transition-all px-3 py-2.5 rounded-lg font-medium  hover:bg-blue-100 ${
                          isActiveLink('/infrastructure')
                            ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                            : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                        }`}
                        onClick={closeMenu}
                      >
                        <div className="font-semibold flex items-center gap-2">
                          <span>🏗️</span>
                          <span>Anand Infra</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={`block transition-all px-4 py-3 rounded-lg font-medium hover:bg-blue-100 ${
                    isActiveLink('/contact')
                      ? 'text-navy font-bold bg-gold/20 border border-gold/30'
                      : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                  }`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                {/* Mobile Appointment Button */}
                <div className="px-2 pt-3 border-t border-gold/20 mt-2">
                  <button
                    onClick={() => openAppointmentForm('general')}
                    className="w-full bg-navy text-white px-4 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg text-center active:scale-95"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;