'use client'

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import UserMenuButton from './UserMenuButton';
import { useAuth } from '../../context/AuthContext';

const ScrollTriggeredMenu = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            // Show second menu bar when scrolled past a certain point (e.g., 100px)
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Close mobile menu when window is resized to desktop size
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        // Add event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        // Close mobile menu when clicking outside
        const handleClickOutside = (e) => {
            if (mobileMenuOpen && !e.target.closest('.mobile-menu-container') && !e.target.closest('button[aria-label="Toggle navigation menu"]')) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    return (
        <header className="fixed w-full z-50">

            {!scrolled && (<div className="bg-[#111] transition-all duration-300">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-12 py-2">
                    <div className="hidden md:flex items-center gap-5">
                        <a href="mailto:Hr@falxlata.com"
                           className="text-white no-underline flex items-center gap-1 text-sm">
                            <i className="far fa-envelope"></i> Hr@falxlata.com
                        </a>
                        <a href="tel:+94 777 937 691"
                           className="text-white no-underline flex items-center gap-1 text-sm">
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
                            <select
                                className="bg-transparent text-white border border-gray-700 rounded px-2 py-1 text-sm appearance-none pr-6">
                                <option>English</option>
                            </select>
                            <i className="fas fa-chevron-down text-white text-xs absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        </div>                       
                         <a
                            href="/contact"
                            className="bg-gradient-to-r from-[#5C5EFF] to-[#8B5EFF] text-white border-none px-3 md:px-5 py-1 md:py-2 rounded-full text-sm font-bold cursor-pointer hover:bg-[#2a69ff] transition-all inline-block text-center no-underline">
                            Connect With Us
                        </a>
                    </div>
                </div>
            </div>)}


            {!scrolled && (<nav className="py-3 bg-transparent border-b border-white/10">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
                    {/* Logo */}
                    <a href="/"
                       className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-white no-underline">
                        <img
                            src="/hero.png"
                            alt="Falx Lata Logo"
                            className="h-10"
                        />
                        <span className="text-2xl">
              Falx Lata
            </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-5 md:gap-8">
                        <a href="/"
                           className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Home
                        </a>
                        <a href="/about-us"
                           className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            About Us
                        </a>
                        <a href="/services"
                           className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Our Services
                        </a>
                        <a href="/industries"
                           className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Industries We Serve
                        </a>
                        <a href="/careers"
                           className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Vacancies
                        </a>
                        <a href="/contact"
                           className="text-white no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Contact
                        </a>
                    </div>                    {/* Mobile menu toggle - search icon removed */}
                    <div className="flex items-center gap-3">
                        <UserMenuButton />
                        <button
                            onClick={toggleMobileMenu} 
                            className="md:hidden text-white text-xl" 
                            aria-label="Toggle navigation menu"
                        >
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </nav>)}


            <AnimatePresence>
                {scrolled && (
                    <motion.nav
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -100, opacity: 0}}
                        transition={{duration: 0.3}}
                        className="py-2 bg-white shadow-md border-b border-gray-200"
                    >
                        <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
                            {/* Compact Logo */}
                            <a href="/"
                               className="flex items-center gap-2 text-xl font-bold text-gray-900 no-underline">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D560BAQG7k5OHifw4wA/company-logo_200_200/company-logo_200_200/0/1683994128523/falx_lata_logo?e=2147483647&v=beta&t=H_feU7_TuKwnkGeqf8CdxmyADKIqvlmjbsQu7tXeC0U"
                                    alt="Falx LataLogo"
                                    className="h-8"
                                />
                                <span>Falx Lata</span>
                            </a>

                            {/* Compact Navigation Links */}
                            <div className="hidden md:flex gap-6">
                                <a href="/"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    Home
                                </a>
                                <a href="/about-us"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    About Us
                                </a>
                                <a href="/services"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    Our Services
                                </a>
                                <a href="/industries"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    Industries
                                </a>
                                <a href="/careers"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    Vacancies
                                </a>
                                <a href="/contact"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    Contact
                                </a>
                            </div>                            {/* Quick Action Button */}
                            <div className="flex items-center gap-3">
                                <UserMenuButton />
                                <button
                                    className="bg-[#3a79ff] text-white border-none px-4 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#2a69ff] transition-all">
                                    Hire Talent
                                </button>
                                <button 
                                    onClick={toggleMobileMenu} 
                                    className="md:hidden text-gray-800 text-lg"
                                    aria-label="Toggle navigation menu"
                                >
                                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}            </AnimatePresence>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-full mobile-menu-container ${scrolled ? 'bg-white text-gray-800' : 'bg-[#111] text-white'} overflow-hidden shadow-lg md:hidden z-50`}
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="/" onClick={closeMobileMenu}
                                   className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium`}>
                                    Home
                                </a>
                                <a href="/about-us" onClick={closeMobileMenu}
                                   className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium`}>
                                    About Us
                                </a>
                                <a href="/services" onClick={closeMobileMenu}
                                   className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium`}>
                                    Our Services
                                </a>
                                <a href="/industries" onClick={closeMobileMenu}
                                   className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium`}>
                                    Industries We Serve
                                </a>
                                <a href="/careers" onClick={closeMobileMenu}
                                   className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium`}>
                                    Vacancies
                                </a>                                <a href="/contact" onClick={closeMobileMenu}
                                   className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium`}>
                                    Contact
                                </a>
                                
                                {/* Dashboard link - only shown when logged in */}
                                {isAuthenticated && (
                                  <a href="/admin/dashboard" onClick={closeMobileMenu}
                                     className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline text-lg font-medium block py-3 px-4 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition-colors duration-200 my-2`}>
                                    Dashboard
                                  </a>
                                )}
                                
                                {/* Logout link - only shown when logged in */}
                                {isAuthenticated && (
                                  <button onClick={() => {
                                    logout();
                                    closeMobileMenu();
                                  }}
                                    className={`${scrolled ? 'text-gray-800' : 'text-white'} text-left no-underline text-lg font-medium block w-full py-3 px-4 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition-colors duration-200`}>
                                    Logout
                                  </button>
                                )}
                                
                                {/* Mobile contact info */}
                                <div className="pt-4 border-t border-gray-700">
                                    <a href="mailto:info@falxlata.com"
                                       className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline flex items-center gap-2 text-base mb-2`}>
                                        <i className="far fa-envelope"></i> info@falxlata.com
                                    </a>
                                    <a href="tel:+94 777 937 691"
                                       className={`${scrolled ? 'text-gray-800' : 'text-white'} no-underline flex items-center gap-2 text-base`}>
                                        <i className="fas fa-phone"></i> +94 777 937 691
                                    </a>
                                </div>
                                
                                {/* Social icons - mobile view */}                                <div className="flex items-center gap-5 pt-4">
                                    <a href="https://web.facebook.com/profile.php?id=100092400323170" className={`${scrolled ? 'text-gray-800' : 'text-white'} text-base no-underline`}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/falx-lata/?viewAsMember=true" className={`${scrolled ? 'text-gray-800' : 'text-white'} text-base no-underline`}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} text-base no-underline`}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} text-base no-underline`}>
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} text-base no-underline`}>
                                        <i className="fab fa-tiktok"></i>
                                    </a>
                                </div>
                                
                                {/* Mobile CTA Button */}
                                <div className="pt-4">
                                    <a href="/contact"
                                       className="w-full block text-center bg-gradient-to-r from-[#5C5EFF] to-[#8B5EFF] text-white border-none px-5 py-3 rounded-md text-base font-bold cursor-pointer hover:opacity-90 transition-all">
                                        Connect With Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ScrollTriggeredMenu;