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
  const firstMobileFocusableRef = useRef(null);

  const { openModal } = useMultiFormModal();
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      // Desktop divisions dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDivisionsOpen(false);
      }

      // Mobile menu (and mobile dropdown)
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
        setIsMobileDivisionsOpen(false);
      }

      // Mobile divisions dropdown only
      if (mobileDivisionsRef.current && !mobileDivisionsRef.current.contains(target)) {
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

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDivisionsOpen(false);
    setIsMobileDivisionsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow || 'unset';
    }
    return () => {
      document.body.style.overflow = previousOverflow || 'unset';
    };
  }, [isMenuOpen]);

  // Close on Escape, and manage focus when mobile menu opens
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDivisionsOpen(false);
        setIsMobileDivisionsOpen(false);
      }
      // Optional: close divisions with ArrowLeft/ArrowRight - not implemented
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // when mobile menu opens, focus the first interactive element for accessibility
    if (isMenuOpen) {
      const el = mobileDropdownRef.current?.querySelector('a, button');
      if (el) el.focus();
    }
  }, [isMenuOpen]);

  const isActiveLink = (path) => location.pathname === path;
  const isDivisionActive = () => ['/production', '/real-estate', '/infrastructure'].includes(location.pathname);

  const openAppointmentForm = (division) => {
    openModal('real-estate', { prefillData: division });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDivisionsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white text-navy shadow-lg backdrop-blur-sm border-b border-gold/20">
      <nav className="max-w-7xl mx-auto py-4 lg:py-3 px-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
            aria-label="Go to home"
          >
            <div className="flex-shrink-0 ">
              <img
                src='founder.jpg'
                alt="Founder"
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg object-cover object-top"
              />
            </div>

            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
                <img src='logo.png' alt="Anand group logo" className="w-full p-2 md:p-3" />
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1 text-base md:text-lg font-bold text-orange-500">
                <span>ANAND</span>
                <span>GROUP</span>
              </div>
              <p className="text-micro lg:text-xs md:text-xs italic -mt-0.5">"Dharmo Rakshati Rakshitah"</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isActiveLink('/') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isActiveLink('/about') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'
              }`}
            >
              About
            </Link>

            {/* Divisions Dropdown (desktop)
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDivisionsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isDivisionsOpen}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                  isDivisionActive() ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                }`}
              >
                <span>Divisions</span>
                <svg className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDivisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gold/30 shadow-2xl rounded-lg py-2 z-50 backdrop-blur-sm">
                  <Link
                    to="/production"
                    className={`block w-full text-left px-4 py-3 transition-all border-b border-gold/10 hover:bg-orange-50 hover:pl-6 ${
                      isActiveLink('/production') ? 'bg-navy text-white font-semibold' : 'text-navy'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold flex items-center gap-2">
                      <span>🎬</span>
                      <span>Anand Cinemaz</span>
                    </div>
                  </Link>

                  <Link
                    to="/real-estate"
                    className={`block w-full text-left px-4 py-3 transition-all border-b border-gold/10 hover:bg-orange-50 hover:pl-6 ${
                      isActiveLink('/real-estate') ? 'bg-navy text-white font-semibold' : 'text-navy'
                    }`}
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    <div className="font-semibold flex items-center gap-2">
                      <span>🏢</span>
                      <span>Anand Realty</span>
                    </div>
                  </Link>

                  <Link
                    to="/infrastructure"
                    className={`block w-full text-left px-4 py-3 transition-all hover:bg-orange-50 hover:pl-6 ${
                      isActiveLink('/infrastructure') ? 'bg-navy text-white font-semibold' : 'text-navy'
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
            </div> */}

            <Link to="/crm/login" className={`px-3 py-2 rounded-lg font-medium transition-colors ${isActiveLink('/crm') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`}>
              CRM
            </Link>

            <Link to="/contact" className={`px-3 py-2 rounded-lg font-medium transition-colors ${isActiveLink('/contact') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`}>
              Contact
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => openModal('real-estate', { prefillData: 'some data' })}
                className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold transition-transform duration-200 shadow-lg hover:scale-105"
              >
                Land Information Form
              </button>

              <button
                onClick={() => openModal('problem-solution', { prefillData: 'some data' })}
                className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold transition-transform duration-200 shadow-lg hover:scale-105"
              >
                Problem Submission Form
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
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
            <div className="lg:hidden fixed inset-0 z-40 bg-black/20" onClick={closeMenu} aria-hidden />

            <div
              id="mobile-menu"
              ref={mobileDropdownRef}
              className="lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-lg border border-gold/30 rounded-xl shadow-2xl z-50 py-4 overflow-auto max-h-[70vh]"
            >
              <div className="space-y-1 px-2">
                <Link to="/" className={`block px-4 py-3 rounded-lg font-medium ${isActiveLink('/') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                  Home
                </Link>

                <Link to="/about" className={`block px-4 py-3 rounded-lg font-medium ${isActiveLink('/about') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                  About
                </Link>

                {/* Mobile Divisions Dropdown */}
                {/* <div ref={mobileDivisionsRef}>
                  <button
                    onClick={() => setIsMobileDivisionsOpen((v) => !v)}
                    className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg font-medium ${
                      isDivisionActive() ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'
                    }`}
                    aria-expanded={isMobileDivisionsOpen}
                  >
                    <span>Divisions</span>
                    <svg className={`w-4 h-4 transition-transform ${isMobileDivisionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMobileDivisionsOpen && (
                    <div className="ml-2 mt-1 space-y-1 border-l-2 border-gold/40 pl-3 py-1">
                      <Link to="/production" className={`block px-3 py-2.5 rounded-lg font-medium ${isActiveLink('/production') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                        <div className="font-semibold flex items-center gap-2">
                          <span>🎬</span>
                          <span>Anand Cinemaz</span>
                        </div>
                      </Link>

                      <Link to="/real-estate" className={`block px-3 py-2.5 rounded-lg font-medium ${isActiveLink('/real-estate') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                        <div className="font-semibold flex items-center gap-2">
                          <span>🏢</span>
                          <span>Anand Realty</span>
                        </div>
                      </Link>

                      <Link to="/infrastructure" className={`block px-3 py-2.5 rounded-lg font-medium ${isActiveLink('/infrastructure') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                        <div className="font-semibold flex items-center gap-2">
                          <span>🏗️</span>
                          <span>Anand Infra</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div> */}

                <Link to="/crm/login" className={`block px-4 py-3 rounded-lg font-medium ${isActiveLink('/crm') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                  CRM
                </Link>

                <Link to="/contact" className={`block px-4 py-3 rounded-lg font-medium ${isActiveLink('/contact') ? 'text-navy font-bold bg-gold/20 border border-gold/30' : 'text-navy/90 hover:text-navy hover:bg-gold/10'}`} onClick={closeMenu}>
                  Contact
                </Link>

                <div className="px-2 pt-3 border-t border-gold/20 mt-2 space-y-2">
                  <button onClick={() => openModal('real-estate', { prefillData: 'some data' })} className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg">
                    Land Information Form
                  </button>

                  <button onClick={() => openModal('problem-solution', { prefillData: 'some data' })} className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg">
                    Problem Submission Form
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
