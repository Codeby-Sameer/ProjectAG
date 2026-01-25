import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight,
  FaTimes,
  FaExternalLinkAlt,

  // Divisions & Business Icons
  FaFilm,
  FaBuilding,
  FaHardHat,
  FaTheaterMasks,
  FaPills,
  FaUniversity,
  FaGlobeAmericas,
  FaShieldAlt,
  FaPray,
  FaPlane,
  FaStar,
  FaLock,
  FaChartLine,
  FaMoneyBillWave,
  FaShippingFast,
  FaSeedling,
  FaOm,
  FaHandsHelping,
  FaUtensils
} from "react-icons/fa";

import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  // Modal content data
  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Last Updated:</strong> January 2025</p>
          
          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">1. Information We Collect</h3>
            <p class="text-gray-600">We collect information that you provide directly to us, including:</p>
            <ul class="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Business information and inquiries</li>
              <li>Communication preferences</li>
              <li>Website usage data and analytics</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">2. How We Use Your Information</h3>
            <p class="text-gray-600">We use the information we collect to:</p>
            <ul class="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and updates</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">3. Data Security</h3>
            <p class="text-gray-600">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">4. Your Rights</h3>
            <p class="text-gray-600">You have the right to:</p>
            <ul class="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify or update your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">5. Contact Us</h3>
            <p class="text-gray-600">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p class="text-navy font-medium mt-2">info.anandrealtyy@gmail.com</p>
          </div>
        </div>
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Effective Date:</strong> January 2025</p>
          
          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">1. Acceptance of Terms</h3>
            <p class="text-gray-600">By accessing and using Anand Group's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">2. Use License</h3>
            <p class="text-gray-600">Permission is granted to temporarily access the materials on Anand Group's website for personal, non-commercial transitory viewing only.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">3. User Responsibilities</h3>
            <p class="text-gray-600">You agree not to:</p>
            <ul class="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
              <li>Use the website in any way that is unlawful or fraudulent</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Introduce any viruses or malicious code</li>
              <li>Reproduce, duplicate, or copy any material without permission</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">4. Intellectual Property</h3>
            <p class="text-gray-600">All content, features, and functionality on this website are owned by Anand Group and are protected by international copyright, trademark, and other intellectual property laws.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">5. Limitation of Liability</h3>
            <p class="text-gray-600">Anand Group shall not be held liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">6. Governing Law</h3>
            <p class="text-gray-600">These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          </div>
        </div>
      `
    },
    sitemap: {
      title: "Website Sitemap",
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-navy mb-3">Main Pages</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <a href="/" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt class="w-3 h-3 mr-2" />
                  Home
                </a>
                <a href="/about" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt class="w-3 h-3 mr-2" />
                  About Us
                </a>
                <a href="/contact" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt class="w-3 h-3 mr-2" />
                  Contact
                </a>
              </div>
              <div class="space-y-2">
                <a href="/divisions" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt class="w-3 h-3 mr-2" />
                  All Divisions
                </a>
                <a href="/global" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt class="w-3 h-3 mr-2" />
                  Global Presence
                </a>
                <a href="/careers" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt class="w-3 h-3 mr-2" />
                  Careers
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-3">Our Divisions</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <a href="https://anandrealty.vercel.app

/" class="text-blue-600 hover:text-blue-800 transition-colors block">Anand Realtyy</a>
              <a href="https://anand-cinemas.vercel.app" class="text-blue-600 hover:text-blue-800 transition-colors block">Anand Cinemaz</a>
              <a href="https://anandinfra.vercel.app
" class="text-blue-600 hover:text-blue-800 transition-colors block">Anand Infra</a>
              <a href="https://anand-events-media-awards.vercel.app" class="text-blue-600 hover:text-blue-800 transition-colors block">Anand Events</a>
              <a href="https://anand-pharma-12.vercel.app" class="text-blue-600 hover:text-blue-800 transition-colors block">Anand Pharma</a>
              <a href="https://anand-bank-nbfc.vercel.app" class="text-blue-600 hover:text-blue-800 transition-colors block">Anand Bank NBFC</a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-3">Legal Pages</h3>
            <div class="space-y-2">
              <button onclick="document.getElementById('privacy-modal').click()" class="text-blue-600 hover:text-blue-800 transition-colors text-left">Privacy Policy</button>
              <button onclick="document.getElementById('terms-modal').click()" class="text-blue-600 hover:text-blue-800 transition-colors text-left">Terms of Service</button>
              <button onclick="document.getElementById('disclaimer-modal').click()" class="text-blue-600 hover:text-blue-800 transition-colors text-left">Disclaimer</button>
            </div>
          </div>
        </div>
      `
    },
    disclaimer: {
      title: "Disclaimer",
      content: `
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">General Information</h3>
            <p class="text-gray-600">The information contained on this website is for general information purposes only. The information is provided by Anand Group and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">No Professional Advice</h3>
            <p class="text-gray-600">The content on this website does not constitute professional advice and should not be relied upon for making business, legal, or other decisions. Always consult with appropriate professionals for specific advice tailored to your situation.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">External Links</h3>
            <p class="text-gray-600">Through this website you are able to link to other websites which are not under the control of Anand Group. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">Limitation of Liability</h3>
            <p class="text-gray-600">In no event will Anand Group be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-navy mb-2">Updates and Changes</h3>
            <p class="text-gray-600">Anand Group reserves the right to make changes to this disclaimer at any time without prior notice. Your continued use of the website following any changes indicates your acceptance of the new terms.</p>
          </div>
        </div>
      `
    }
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-navy">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

 const divisions = [
  { name: "Anand Cinemaz", url: "https://anand-cinemas.vercel.app", icon: FaFilm },
  { name: "Anand Realtyy", url: "https://anandrealty.vercel.app", icon: FaBuilding },
  { name: "Anand Infra", url: "https://anandinfra.vercel.app", icon: FaHardHat },
  { name: "Anand Events & Media", url: "https://anand-events-media-awards.vercel.app", icon: FaTheaterMasks },
  { name: "Anand Imports & Exports", url: "https://anand-imports-and-exports.vercel.app", icon: FaGlobeAmericas },
  { name: "Anand Technology & Safety", url: "https://anandtechnologiesandsafety.vercel.app", icon: FaShieldAlt },
  { name: "Anand Pharma", url: "https://anand-shipping-hvbr.vercel.app", icon: FaPills },
  { name: "Anand Devocation", url: "https://ananddevocation.vercel.app", icon: FaPray },
  { name: "Anand Yatra", url: "https://anand-celebrity-ez6a.vercel.app", icon: FaPlane },
  { name: "Anand Celebrity Service", url: "https://anand-celebrity.vercel.app", icon: FaStar },
  { name: "Anand Lockers", url: "https://anandrealty-6q19.vercel.app", icon: FaLock },
  { name: "Anand Share Broking", url: "https://anandsharebrokering.vercel.app", icon: FaChartLine },
  { name: "Anand Wealth Consultancy", url: "https://anandwealthconsulting.vercel.app", icon: FaMoneyBillWave },
  { name: "Anand Shipping", url: "https://anand-shipping.vercel.app", icon: FaShippingFast },
  { name: "Anand Bank NBFC", url: "https://anandbank-nbfc.vercel.app", icon: FaUniversity },
  { name: "Anand Youth", url: "https://anand-youth.vercel.app", icon: FaSeedling },
  { name: "Anand Religious Trust", url: "https://anand-religious.vercel.app", icon: FaOm },
  { name: "Anand Seva Trust", url: "https://anand-seva-trust-1.vercel.app", icon: FaHandsHelping },
  { name: "Anand Foods", url: "https://anandfoods.vercel.app", icon: FaUtensils }
];


  return (
    <footer className="bg-navy text-white">
      <div className="md:p-8 p-5">
        {/* Main Footer Content */}
        <div className="md:flex  ">  
          {/* Company Info */}
          <div className='md:w-1/3 '>
            <div className='mb-4 '>
              <div className="relative flex items-center ">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center me-3">
                  <img
                    src="/img/logo.jpg"
                    alt="Anand Group Logo"
                    className="w-full p-2"
                  />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">ANAND GROUP</div>
              </div>
              
            
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Anand Group is a future-focused enterprise committed to innovation, integrity, and inclusive growth across real estate, infrastructure, technology, finance, media, healthcare, travel, and social initiatives.
              Together, we create lasting value while building a stronger, smarter, and more compassionate tomorrow.
            </p>

          </div>

          {/* Quick Links */}
          <div className='md:w-1/6  md:p-3 p-1'>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm " >

              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors block py-1 flex items-center group">
                  <FaChevronRight className="w-3 h-3 mr-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="text-gray-300 hover:text-gold transition-colors block py-1 flex items-center group">
                  <FaChevronRight className="w-3 h-3 mr-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  About
                </Link>
              </li>


              <li>
                <Link to="contact" className="text-gray-300 hover:text-gold transition-colors block py-1 flex items-center group">
                  <FaChevronRight className="w-3 h-3 mr-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>


            </ul>
          </div>    

          {/* OUR DIVISIONS */}
          <div className='md:w-2/4  md:p-3 p-1'>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:text-center ">
              Our Divisions
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-sm">
              {divisions.map((division, index) => {
                const Icon = division.icon;

                return (
                  <li key={index}>
                    <a
                      href={division.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group"
                    >
                      <span className="text-gold group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="truncate">{division.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className=' md:w-1/4 md:p-3 p-1'>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">info@anandgroup.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 1800 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-2 pt-2 md:pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center gap-3 sm:gap-4 ">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300 group"
              >
                <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300 group"
              >
                <FaXTwitter className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300 group"
              >
                <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300 group"
              >
                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy;2025 Anand Group. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                onClick={() => openModal('privacy')}
                className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap"
                id="privacy-modal"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal('terms')}
                className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap"
                id="terms-modal"
              >
                Terms of Service
              </button>

              <button
                onClick={() => openModal('disclaimer')}
                className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap"
                id="disclaimer-modal"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title={modalContent.privacy.title}
        content={modalContent.privacy.content}
      />
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title={modalContent.terms.title}
        content={modalContent.terms.content}
      />

      <Modal
        isOpen={activeModal === 'disclaimer'}
        onClose={closeModal}
        title={modalContent.disclaimer.title}
        content={modalContent.disclaimer.content}
      />
    </footer>
  );
};

export default Footer;