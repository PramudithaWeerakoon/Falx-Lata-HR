'use client'

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const ScrollTriggeredMenu = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            // Show second menu bar when scrolled past a certain point (e.g., 100px)
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

    return (
        <header className="fixed w-full z-50">

            {!scrolled && (<div className="bg-[#111] transition-all duration-300">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-12 py-2">
                    <div className="hidden md:flex items-center gap-5">
                        <a href="mailto:hello@intalent.asia"
                           className="text-white no-underline flex items-center gap-1 text-sm">
                            <i className="far fa-envelope"></i> hello@intalent.asia
                        </a>
                        <a href="tel:+94-70-760-0007"
                           className="text-white no-underline flex items-center gap-1 text-sm">
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
                            <select
                                className="bg-transparent text-white border border-gray-700 rounded px-2 py-1 text-sm appearance-none pr-6">
                                <option>English</option>
                            </select>
                            <i className="fas fa-chevron-down text-white text-xs absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        </div>

                        <button
                            class="bg-gradient-to-r from-[#5C5EFF] to-[#8B5EFF] text-white border-none px-3 md:px-5 py-1 md:py-2 rounded-full text-sm font-bold cursor-pointer hover:bg-[#2a69ff] transition-all">
                            Connect With Us
                        </button>
                    </div>
                </div>
            </div>)}


            {!scrolled && (<nav className="py-3 bg-white/90 border-b border-white/10">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
                    {/* Logo */}
                    <a href="/"
                       className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-gray-800 no-underline">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D560BAQG7k5OHifw4wA/company-logo_200_200/company-logo_200_200/0/1683994128523/falx_lata_logo?e=2147483647&v=beta&t=H_feU7_TuKwnkGeqf8CdxmyADKIqvlmjbsQu7tXeC0U"
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
                           className="text-gray-800 no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Home
                        </a>
                        <a href="/about-us"
                           className="text-gray-800 no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            About Us
                        </a>
                        <a href="/services"
                           className="text-gray-800 no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Our Services
                        </a>
                        <a href="/industries"
                           className="text-gray-800 no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Industries We Serve
                        </a>
                        <a href="/careers"
                           className="text-gray-800 no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Vacancies
                        </a>
                        <a href="/contact"
                           className="text-gray-800 no-underline relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3a79ff] after:transition-all after:duration-300">
                            Contact
                        </a>
                    </div>

                    {/* Search icon and mobile menu toggle */}
                    <div className="flex items-center gap-3">
                        <button className="text-gray-800 text-xl">
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="md:hidden text-gray-800 text-xl">
                            <i className="fas fa-bars"></i>
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
                                <a href="/news-events"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    News
                                </a>
                                <a href="/contact"
                                   className="text-gray-800 hover:text-[#3a79ff] no-underline text-sm font-medium transition-colors">
                                    Contact
                                </a>
                            </div>

                            {/* Quick Action Button */}
                            <div className="flex items-center gap-3">
                                <button
                                    className="bg-[#3a79ff] text-white border-none px-4 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#2a69ff] transition-all">
                                    Hire Talent
                                </button>
                                <button className="md:hidden text-gray-800 text-lg">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ScrollTriggeredMenu;