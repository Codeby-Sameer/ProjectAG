import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMultiFormModal } from './Context/ModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isMobileDivisionsOpen, setIsMobileDivisionsOpen] = useState(false);

  // refs for click-outside & focus management
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileDivisionsRef = useRef(null);
  const menuButtonRef = useRef(null);

  const { openModal } = useMultiFormModal();
  const location = useLocation();

  // Divisions data
  const divisions = [
    {
      name: "Anand Cinemaz",
      url: "https://anand-cinemas.vercel.app",
      icon: "🎬",
      description: "Cinema & Entertainment"
    },
    {
      name: "Anand Realtyy",
      url: "https://anand-realtyy-new.vercel.app",
      icon: "🏢",
      description: "Real Estate"
    },
    {
      name: "Anand Infra",
      url: "https://anand-project-21.vercel.app",
      icon: "🏗️",
      description: "Infrastructure"
    },
    {
      name: "Anand Events, Media & Awards",
      url: "https://anand-events-media-awards.vercel.app",
      icon: "🎪",
      description: "Events & Media"
    },
    {
      name: "Anand Imports & Exports",
      url: "https://import-and-exports.vercel.app/",
      icon: "🌐",
      description: "International Trade"
    },
    {
      name: "Anand Technology & Safety",
      url: "https://anand-transport-12.vercel.app",
      icon: "🔒",
      description: "Tech Solutions"
    },
    {
      name: "Anand Pharma",
      url: "https://anand-pharma.vercel.app",
      icon: "💊",
      description: "Pharmaceuticals"
    },
    {
      name: "Anand Devocation",
      url: "https://anand-devocation.vercel.app",
      icon: "🙏",
      description: "Spiritual Services"
    },
    {
      name: "Anand Yatra",
      url: "https://anand-yathra.vercel.app",
      icon: "✈️",
      description: "Travel & Tourism"
    },
    {
      name: "Anand Celebrity Service",
      url: "https://anand-ceelebrity.vercel.app",
      icon: "⭐",
      description: "Celebrity Management"
    },
    {
      name: "Anand Lockers",
      url: "https://anand-lockers-safety.vercel.app",
      icon: "🗄️",
      description: "Secure Storage"
    },
    {
      name: "Anand Share Broking",
      url: "https://anand-share-brokering.vercel.app",
      icon: "📈",
      description: "Stock Trading"
    },
    {
      name: "Anand Wealth Consultancy",
      url: "https://anand-wealth-consultancy.vercel.app/",
      icon: "💰",
      description: "Financial Advisory"

    },
    {
  name: "Anand Shipping",
  url: "#",
  icon: "📦", 
  description: "Premium Logistics"
},
{
  name: "Anand Bank NBFC", 
  url: "https://anand-bank-nbfc.vercel.app/",
  icon: "🏦",
  description: "Financial Services"
},
{
  name: "Anand Youth",
  url: "https://anand-youth.vercel.app", 
  icon: "🌱",
  description: "Social Welfare"
},
{
  name: "Anand Religious Trust",
  url: "https://anand-religious-trust.vercel.app",
  icon: "🕉️",
  description: "Vedic Spiritual Guidance"
},
{
  name: "Anand Seva Trust",
  url: "https://anand-seva-trust.vercel.app",
  icon: "🤝",
  description: "Compassionate Social Support"
},
{
  name: "Anand Foods",
  url: "https://anand-foods.vercel.app",
  icon: "🍽️",
  description: "Pure Milk & Regional Flavors"
}
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      // Desktop divisions dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDivisionsOpen(false);
      }

      // Mobile menu
      if (
        isMenuOpen &&
        mobileDropdownRef.current && 
        !mobileDropdownRef.current.contains(target) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
        setIsMobileDivisionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menus when route changes
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

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDivisionsOpen(false);
        setIsMobileDivisionsOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const isActiveLink = (path) => location.pathname === path;
  const isDivisionActive = () => {
  const currentPath = location.pathname;
  // Only consider divisions active when on actual division pages
  // and explicitly exclude home and other main pages
  const excludedPaths = ['/', '/about', '/contact', '/crm'];
  
  if (excludedPaths.includes(currentPath)) {
    return false;
  }
  
  return divisions.some(division => {
    const divisionPath = division.url.replace(/^https?:\/\/[^/]+/, '');
    return currentPath === divisionPath || currentPath === divisionPath + '/';
  });
};

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    setIsMobileDivisionsOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDivisionsOpen(false);
  };

  const openProblemForm = () => {
    openModal('problem-solution', { prefillData: 'some data' });
    closeMenu();
  };

  const DivisionLink = ({ division, onClick, isMobile = false }) => (
    <a
      href={division.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full text-left transition-all duration-200 border-b border-blue-100 hover:bg-blue-50 ${
        isMobile 
          ? `px-3 py-2.5 rounded-lg text-base font-semibold ${
              isActiveLink(division.url) 
                ? "text-blue-700 bg-blue-100 border border-blue-200" 
                : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
            }`
          : `px-4 py-3 hover:pl-6 ${
              isActiveLink(division.url) ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-blue-800'
            }`
      }`}
      onClick={onClick}
    >
      <div className={`flex items-center gap-3 ${isMobile ? 'flex-row' : ''}`}>
        <span className="text-xl">{division.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm leading-tight">{division.name}</div>
          {!isMobile && (
            <div className="text-xs text-blue-600 mt-1">{division.description}</div>
          )}
        </div>
      </div>
    </a>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white text-navy shadow-lg backdrop-blur-sm border-b border-gold/20">
      <nav className="max-w-7xl mx-auto py-4 lg:py-3 px-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="/img/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/img/logo.png"
                  alt="Anand Logo"
                  className="w-8 h-10 md:w-10 md:h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg md:text-xl font-bold m-0 ">
                    <span className="text-orange-500">ANAND GROUP </span>
                  </h1>
                  <p className="sm:text-xs text-xxs text-gray-600 italic mt-1">
                    "Dharmo Rakshati Rakshitah"
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/"
              className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                isActiveLink('/') 
                  ? "text-blue-700 bg-blue-100 border border-blue-200" 
                  : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                isActiveLink('/about') 
                  ? "text-blue-700 bg-blue-100 border border-blue-200" 
                  : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              About
            </Link>

            {/* Divisions Dropdown (desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDivisionsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isDivisionsOpen}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                  isDivisionActive() 
                    ? "text-blue-700 bg-blue-100 border border-blue-200" 
                    : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <span>Divisions</span>
                <svg className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDivisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white border border-blue-200 shadow-2xl rounded-lg py-2 z-50 backdrop-blur-sm">
                  {divisions.map((division, index) => (
                    <DivisionLink
                      key={index}
                      division={division}
                      onClick={() => setIsDivisionsOpen(false)}
                    />
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/crm/login" 
              className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                isActiveLink('/crm') 
                  ? "text-blue-700 bg-blue-100 border border-blue-200" 
                  : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              CRM
            </Link>

            <Link 
              to="/contact" 
              className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                isActiveLink('/contact') 
                  ? "text-blue-700 bg-blue-100 border border-blue-200" 
                  : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Contact
            </Link>

            <div className="">
              <button
                onClick={openProblemForm}
                className="px-6 py-3 rounded-lg text-base font-semibold bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
              >
                <span className="text-lg">📝</span>
                <span>Problem Submission Form</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              className="p-2 rounded-lg text-blue-800 hover:bg-blue-50 transition-all duration-200"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 z-40 bg-black/50" 
              onClick={closeMenu} 
              aria-hidden="true" 
            />

            <div
              id="mobile-menu"
              ref={mobileDropdownRef}
              className="lg:hidden fixed top-20 left-4 right-4 bg-white border border-blue-200 rounded-xl shadow-2xl z-50 py-4 overflow-auto max-h-[80vh]"
            >
              <div className="space-y-1 px-2">
                <Link 
                  to="/" 
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActiveLink('/') 
                      ? "text-blue-700 bg-blue-100 border border-blue-200" 
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`} 
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <Link 
                  to="/about" 
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActiveLink('/about') 
                      ? "text-blue-700 bg-blue-100 border border-blue-200" 
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`} 
                  onClick={closeMenu}
                >
                  About
                </Link>

                {/* Mobile Divisions Dropdown */}
                <div ref={mobileDivisionsRef}>
                  <button
                    onClick={() => setIsMobileDivisionsOpen((v) => !v)}
                    className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                      isDivisionActive() 
                        ? "text-blue-700 bg-blue-100 border border-blue-200" 
                        : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                    aria-expanded={isMobileDivisionsOpen}
                  >
                    <span>Divisions</span>
                    <svg className={`w-4 h-4 transition-transform ${isMobileDivisionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMobileDivisionsOpen && (
                    <div className="ml-2 mt-1 space-y-1 border-l-2 border-blue-200 pl-3 py-1 max-h-64 overflow-y-auto">
                      {divisions.map((division, index) => (
                        <DivisionLink
                          key={index}
                          division={division}
                          onClick={closeMenu}
                          isMobile={true}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/crm/login" 
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActiveLink('/crm') 
                      ? "text-blue-700 bg-blue-100 border border-blue-200" 
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`} 
                  onClick={closeMenu}
                >
                  CRM
                </Link>

                <Link 
                  to="/contact" 
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActiveLink('/contact') 
                      ? "text-blue-700 bg-blue-100 border border-blue-200" 
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`} 
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <div className="px-2 pt-3 border-t border-blue-200 mt-2">
                  <button 
                    onClick={openProblemForm}
                    className="w-full px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg">📝</span>
                    <span>Problem Submission Form</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}