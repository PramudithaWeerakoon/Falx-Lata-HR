'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle chat popup
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top contact bar */}
      {!scrolled && (
        <div className="bg-[#111] transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-12 py-2">
            <div className="hidden md:flex items-center gap-5">
              <a href="mailto:hello@intalent.asia" className="text-white no-underline flex items-center gap-1 text-sm">
                <i className="far fa-envelope"></i> hello@intalent.asia
              </a>
              <a href="tel:+94-70-760-0007" className="text-white no-underline flex items-center gap-1 text-sm">
                <i className="fas fa-phone"></i> +94-70-760-0007
              </a>
            </div>

            <div className="flex items-center gap-3 md:gap-5 ml-auto">
              {/* Social icons */}
              <a href="#" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
                <i className="fab fa-tiktok"></i>
              </a>

              {/* Language selector */}
              <div className="relative">
                <select className="bg-transparent text-white border border-gray-700 rounded px-2 py-1 text-sm appearance-none pr-6">
                  <option>English</option>
                </select>
                <i className="fas fa-chevron-down text-white text-xs absolute right-2 top-1/2 transform -translate-y-1/2"></i>
              </div>

              {/* Connect button */}
              <button className="bg-[#3a79ff] text-white border-none px-3 md:px-5 py-1 md:py-2 rounded-full text-sm font-bold cursor-pointer hover:bg-[#2a69ff] transition-all">
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation - Changes style on scroll */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-[#111]/95' 
          : 'py-3 bg-[#111]/80'
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-white no-underline">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQG7k5OHifw4wA/company-logo_200_200/company-logo_200_200/0/1683994128523/falx_lata_logo?e=2147483647&v=beta&t=H_feU7_TuKwnkGeqf8CdxmyADKIqvlmjbsQu7tXeC0U"
              alt="Falx Lata Logo"
              className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
            />
            <span className={`transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
              Falx Lata
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-5 md:gap-8">
            <Link href="/" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              Home
            </Link>
            <Link href="/about-us" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              Our Services
            </Link>
            <Link href="/industries" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              Industries We Serve
            </Link>
            <Link href="/vacancies" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              Vacancies
            </Link>
            <Link href="/news-events" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              News & Events
            </Link>
            <Link href="/contact" className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
              Contact
            </Link>
          </div>

          {/* Search icon and mobile menu toggle */}
          <div className="flex items-center gap-3">
            <button className="text-white text-xl">
              <i className="fas fa-search"></i>
            </button>
            <button className="md:hidden text-white text-xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Chat widget */}
      <div
        className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-md z-50 hover:scale-105 transition-transform"
        onClick={toggleChat}
      >
        <i className="far fa-comment"></i>
        <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs">
          1
        </div>
      </div>

      {/* Chat options popup */}
      {isChatOpen && (
        <div className="fixed bottom-[90px] right-5 w-[300px] bg-white rounded-lg p-5 shadow-lg text-gray-800 z-50 animate-fadeIn">
          <h3 className="text-base mb-4 text-gray-800">
            To help you better, could you please share your name, email, and contact number?
          </h3>

          <div className="py-3 border-b border-gray-200 mb-3">
            <p className="mb-1 text-sm">You can also reach us anytime at:</p>
            <p className="mb-1 text-sm">Email: hello@intalent.asia</p>
            <p className="mb-1 text-sm">Call/WhatsApp: +94-70-760-0007</p>
          </div>

          <a href="#" className="block w-full p-3 mb-3 rounded border border-gray-300 bg-gray-50 text-center text-gray-800 no-underline transition-all duration-300 hover:bg-gray-200">
            I'm a Company looking for recruitment/HR services
          </a>
          <a href="#" className="block w-full p-3 mb-3 rounded border border-gray-300 bg-gray-50 text-center text-gray-800 no-underline transition-all duration-300 hover:bg-gray-200">
            I'm a Candidate looking for a job
          </a>
          <a href="#" className="block w-full p-3 mb-3 rounded border border-gray-300 bg-gray-50 text-center text-gray-800 no-underline transition-all duration-300 hover:bg-gray-200">
            I'm just exploring / Other inquiry
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;