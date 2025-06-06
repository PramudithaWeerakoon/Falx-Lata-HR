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
              <a href="mailto:info@falxlata.com" className="text-white no-underline flex items-center gap-1 text-sm">
                <i className="far fa-envelope"></i> info@falxlata.com
              </a>
              <a href="tel:+94 777 937 691" className="text-white no-underline flex items-center gap-1 text-sm">
                <i className="fas fa-phone"></i> +94 777 937 691
              </a>
            </div>

            <div className="flex items-center gap-3 md:gap-5 ml-auto">
              {/* Social icons */}
              <a href="https://web.facebook.com/profile.php?id=100092400323170" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/falx-lata/?viewAsMember=true" className="text-white text-sm md:text-base no-underline hover:text-gray-300">
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
          ? 'py-2 bg-white shadow-md border-b border-gray-200' 
          : 'py-3 bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'} no-underline`}>
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
            <Link href="/" className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300`}>
              Home
            </Link>
            <Link href="/about-us" className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300`}>
              About Us
            </Link>
            <Link href="/services" className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300`}>
              Our Services
            </Link>
            <Link href="/industries" className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300`}>
              Industries We Serve
            </Link>
            <Link href="/vacancies" className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300`}>
              Vacancies
            </Link>
            <Link href="/contact" className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu toggle - search icon removed */}
          <div className="flex items-center gap-3">
            <button className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'} text-xl`}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>


      
    </header>
  );
}

export default Header;
