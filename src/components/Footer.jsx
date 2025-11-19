import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-4">
            <div className="flex flex-row items-start sm:items-center space-y-3 space-x-2 mb-4">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img src='logo.png' alt="logo" className='w-full p-2 sm:p-4' />
                </div>
              </div>
              <div className="flex  flex-row items-baseline space-x-1 sm:space-x-2">
                <div className="text-xl sm:text-2xl font-bold text-white ">ANAND</div>
                <div className="text-xl sm:text-2xl font-bold text-white">GROUP</div>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Building a better tomorrow through innovation, integrity, and social responsibility.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="about" className="text-gray-300 hover:text-gold transition-colors block py-1">About</a></li>
              <li><a href="divisions" className="text-gray-300 hover:text-gold transition-colors block py-1">Divisions</a></li>
              <li><a href="global" className="text-gray-300 hover:text-gold transition-colors block py-1">Global Presence</a></li>
              <li><a href="" className="text-gray-300 hover:text-gold transition-colors block py-1">Careers</a></li>
              <li><a href="contact" className="text-gray-300 hover:text-gold transition-colors block py-1">Contact</a></li>
            </ul>
          </div>

          {/* Our Divisions */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Our Divisions</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/real-estate" className="text-gray-300 hover:text-gold transition-colors block py-1">Real Estate</Link></li>
              <li><Link to="/production" className="text-gray-300 hover:text-gold transition-colors block py-1">Film Production</Link></li>
              <li><Link to="/infrastructure" className="text-gray-300 hover:text-gold transition-colors block py-1">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">info.anandrealtyy@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 1800 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy;2025 Anand Group. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy;Designed by{' '}
              <a 
                href="https://designcareermetrics.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
              >
                Designcareermetrics
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="" className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap">Privacy Policy</a>
              <a href="" className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap">Terms of Service</a>
              <a href="" className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;