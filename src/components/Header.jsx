import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-navy">ANAND</div>
            <div className="text-2xl font-light text-gold">GROUP</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-navy hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-navy hover:text-gold transition-colors">About</a>
            <a href="#divisions" className="text-navy hover:text-gold transition-colors">Divisions</a>
            <a href="#global" className="text-navy hover:text-gold transition-colors">Global Presence</a>
            <a href="#contact" className="text-navy hover:text-gold transition-colors">Contact</a>
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
            <a href="#home" className="block text-navy hover:text-gold transition-colors">Home</a>
            <a href="#about" className="block text-navy hover:text-gold transition-colors">About</a>
            <a href="#divisions" className="block text-navy hover:text-gold transition-colors">Divisions</a>
            <a href="#global" className="block text-navy hover:text-gold transition-colors">Global Presence</a>
            <a href="#contact" className="block text-navy hover:text-gold transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
