'use client'

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Green Wave at the top of footer - only visible on PC/desktop */}
      <div className="w-full hidden md:block">
        <img 
          src="/images/top_wave_01.png"
          alt="Wave Decoration" 
          className="w-full h-20"
        />
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/services/Falx Lata -Logo - Jpg.jpg"
                alt="Falx Lata Logo"
                className="h-10"
              />
              <span className="text-xl font-bold">Falx Lata</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering organizations with innovative HR solutions and talent acquisition strategies since 2020.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3a79ff]">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#recruitment" className="text-gray-400 hover:text-white transition-colors">
                  Recruitment & Headhunting
                </Link>
              </li>
              <li>
                <Link href="/services#hr-outsourcing" className="text-gray-400 hover:text-white transition-colors">
                  HR Process Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/services#payroll" className="text-gray-400 hover:text-white transition-colors">
                  Payroll Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/services#performance" className="text-gray-400 hover:text-white transition-colors">
                  Performance Management
                </Link>
              </li>
              <li>
                <Link href="/services#policies" className="text-gray-400 hover:text-white transition-colors">
                  Policies & Procedure Setup
                </Link>
              </li>
              <li>
                <Link href="/services#hr-function" className="text-gray-400 hover:text-white transition-colors">
                  HR Function Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3a79ff]">
              Quick Links
            </h3>            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/vacancies" className="text-gray-400 hover:text-white transition-colors">
                  Vacancies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                  Login / Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3a79ff]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-[#3a79ff]"></i>
                <span className="text-gray-400">
                  123 Business Park, Colombo 03,<br />Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-[#3a79ff]"></i>
                <a href="tel:+94 777 937 691" className="text-gray-400 hover:text-white transition-colors">
                  +94 777 937 691
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="far fa-envelope text-[#3a79ff]"></i>
                <a href="mailto:info@falxlata.com" className="text-gray-400 hover:text-white transition-colors">
                  info@falxlata.com
                </a>
              </li>
              <li className="mt-6">
                <a href="/contact" className="bg-[#3a79ff] text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-block">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Falx Lata. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;