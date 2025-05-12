'use client'
import Navbar from '../components/NavBar/ScrollTriggeredMenu';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [activeTab, setActiveTab] = useState('contactForm');
    const [isMounted, setIsMounted] = useState(false);
    const [floatingElements, setFloatingElements] = useState([]);    // Tab content configuration
    const tabContent = {
        contactForm: {
            title: 'Contact Form',
            description: 'Reach out to us using our online form and we\'ll get back to you promptly.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        locations: {
            title: 'Our Locations',
            description: 'Find information about our office locations and how to reach us in person.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        faq: {
            title: 'FAQ',
            description: 'Find answers to frequently asked questions about our services.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        }
    };

    // Initialize floating elements on mount
    useEffect(() => {
        setIsMounted(true);
        
        const elements = [...Array(8)].map((_, i) => ({
            id: i,
            color: i % 3 === 0 ? 'bg-blue-200' : i % 2 === 0 ? 'bg-purple-200' : 'bg-teal-200',
            size: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 3}s`
        }));
        setFloatingElements(elements);
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 relative overflow-hidden min-h-screen">
                {/* Animated Bubbles Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="bubble bubble-1"></div>
                    <div className="bubble bubble-2"></div>
                    <div className="bubble bubble-3"></div>
                    <div className="bubble bubble-4"></div>
                    <div className="bubble bubble-5"></div>
                    <div className="bubble bubble-6"></div>
                    <div className="bubble bubble-7"></div>
                    <div className="bubble bubble-8"></div>
                </div>

                {/* Hero Section with Image */}
                <section className="relative h-[500px] md:h-[890px] mb-16">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/images/contact.jpg" 
                            alt="Falx Lata Contact Us" 
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Dark overlay with reduced opacity */}
                        <div ></div>
                    </div>
                  
                    {/* Hero Content */}
                    <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center">
                        <div className="text-center text-black">
                            <motion.span
                                initial={{opacity: 0, y: -15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4}}
                                className="inline-block text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-2"
                            >
                                GET IN TOUCH
                            </motion.span>
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.1}}
                                className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
                            >
                                Contact Falx Lata
                            </motion.h1>
                            <motion.div
                                initial={{width: 0}}
                                animate={{width: "120px"}}
                                transition={{duration: 0.8, delay: 0.3}}
                                className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-6"
                            />                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-black max-w-3xl mx-auto drop-shadow-lg mb-8"
                            >
                                Work with the best HR services and recruitment in the region
                            </motion.p>
                        </div>
                    </div>
                    
                    {/* Floating decorations */}
                    <div className="absolute top-[250px] right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'float 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_05.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform translate-x-1/5" 
                        />
                    </div>
                    <div className="absolute left-0 top-[0px] w-[21rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_04-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5 opacity-60" 
                        />
                    </div>
                    
                    {/* Wave Bottom Shape */}
                    <div className="absolute bottom-0 md:bottom-0 -bottom-10 left-0 right-0 z-20 w-full">
                        <img 
                            src="/images/Wave_White_bottom_left_shape_01.png" 
                            alt="Wave Shape" 
                            className="w-full"
                        />
                    </div>
                </section>
                
                {/* Contact Form Section */}
                <section className="container mx-auto px-4 mb-16 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                                We're here to provide you with more information, answer any questions you may have and create effective HR solutions for your organization.
                            </p>
                        </motion.div>                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-12">
                            <div className="flex flex-col sm:flex-row rounded-xl bg-white p-2 shadow-lg w-120 max-w-md sm:max-w-xl">
                                {Object.keys(tabContent).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 sm:px-6 py-3 sm:py-4 mb-2 sm:mb-0 mx-1 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 ${
                                            activeTab === tab 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-[1.02]' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tabContent[tab].title}
                                    </button>
                                ))}
                            </div>
                        </div>
                          {/* Tab Content */}
                        <motion.div
                            key={activeTab}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="max-w-4xl mx-auto"
                        >                            {/* Contact Form Tab */}
                            {activeTab === 'contactForm' && (
                                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
                                    {/* Contact Info */}
                                    <motion.div
                                        initial={{opacity: 0, y: 30}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        viewport={{once: true}}
                                        className="lg:w-1/3"
                                    >
                                        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 h-full">
                                            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 sm:mb-6 flex items-center">
                                                <span className="inline-block mr-2 animate-wave">
                                                    👋
                                                </span>
                                                Get in touch
                                            </h3>
                                            
                                            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                                                <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200 relative overflow-hidden hover:translate-x-1 transition-transform">
                                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 z-10">
                                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="z-10">
                                                        <p className="text-xs sm:text-sm text-gray-500">Email us at</p>
                                                        <p className="text-gray-900 font-medium text-sm sm:text-base">info@falxlata.com</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200 relative overflow-hidden hover:translate-x-1 transition-transform">
                                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 z-10">
                                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none"
                                                            stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="z-10">
                                                        <p className="text-xs sm:text-sm text-gray-500">Call/WhatsApp</p>
                                                        <p className="text-gray-900 font-medium text-sm sm:text-base">+94 777 937 691</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200 relative overflow-hidden hover:translate-x-1 transition-transform">
                                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 z-10">
                                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none"
                                                            stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <div className="z-10">
                                                        <p className="text-xs sm:text-sm text-gray-500">Office Location</p>
                                                        <p className="text-gray-900 font-medium text-sm sm:text-base">Colombo, Sri Lanka</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="pt-4 sm:pt-6 border-t border-gray-200">
                                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Follow Us</h4>
                                                <div className="flex space-x-3 sm:space-x-4">
                                                    <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-transform">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-transform">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-transform">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Contact Form */}
                                    <motion.div
                                        initial={{opacity: 0, y: 30}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: 0.2}}
                                        viewport={{once: true}}
                                        className="lg:w-2/3"
                                    >
                                        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 relative overflow-hidden">
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-10">
                                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="#4F46E5"
                                                        d="M45.2,-58.3C58.1,-48.4,67.5,-33.4,70.5,-17.5C73.5,-1.6,70.2,15.2,61.1,29.6C52,44,37.2,56,19.8,65.1C2.4,74.2,-17.6,80.4,-33.1,74.2C-48.6,68,-59.6,49.4,-65.2,30.5C-70.8,11.6,-71,-7.6,-64.3,-23.7C-57.6,-39.8,-44,-52.8,-29.2,-62.1C-14.4,-71.4,1.6,-77.1,17.5,-72.8C33.4,-68.5,48.9,-54.3,45.2,-58.3Z"
                                                        transform="translate(100 100)" />
                                                </svg>
                                            </div>
                                            
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h3>
                                            
                                            <form>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Your Name</label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="mb-4 sm:mb-6">
                                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Subject</label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="How can we help you?"
                                                    />
                                                </div>
                                                
                                                <div className="mb-4 sm:mb-6">
                                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Message</label>
                                                    <textarea
                                                        id="message"
                                                        rows="4"
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="Your message here..."
                                                    ></textarea>
                                                </div>
                                                
                                                <div className="mb-4 sm:mb-6">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">I am a...</label>
                                                    <div className="space-y-2 sm:space-y-3">
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="company"
                                                                name="inquiry_type"
                                                                className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                            />
                                                            <label htmlFor="company" className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">
                                                                Company looking for recruitment/HR services
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="candidate"
                                                                name="inquiry_type"
                                                                className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                            />
                                                            <label htmlFor="candidate" className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">
                                                                Candidate looking for a job
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="other"
                                                                name="inquiry_type"
                                                                className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                            />
                                                            <label htmlFor="other" className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">
                                                                Just exploring / Other inquiry
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <button 
                                                    type="submit"
                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                                                >
                                                    Send Message
                                                </button>
                                            </form>
                                        </div>
                                    </motion.div>
                                </div>
                            )}                            {/* Locations Tab */}
                            {activeTab === 'locations' && (
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
                                        <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-3 sm:p-4 backdrop-blur-sm mb-4 sm:mb-6">
                                            {tabContent[activeTab].icon}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{tabContent[activeTab].title}</h3>
                                        <p className="text-blue-100 text-base sm:text-lg">{tabContent[activeTab].description}</p>
                                    </div>
                                    
                                    <div className="p-4 sm:p-8">
                                        <div className="mb-8 sm:mb-12">
                                            <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Headquarters</h4>
                                            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                                                <div className="flex-1 max-w-lg mx-auto md:mx-0">
                                                    <div className="rounded-xl overflow-hidden h-48 sm:h-64 mb-4">
                                                        <iframe 
                                                            className="w-full h-full"
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80394618799!2d79.82118315!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1683900148345!5m2!1sen!2sus" 
                                                            allowFullScreen="" 
                                                            loading="lazy"
                                                        ></iframe>
                                                    </div>
                                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                                                        <h5 className="font-semibold text-gray-900 mb-2">Colombo Office</h5>
                                                        <p className="text-gray-700 mb-1">dehiwala, Colombo, Sri Lanka</p>
    
                                                        <p className="text-gray-700 mb-3">Sri Lanka</p>
                                                        <div className="flex items-center text-gray-600 mb-1">
                                                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                            </svg>
                                                            +94 777 937 691
                                                        </div>
                                                        <div className="flex items-center text-gray-600">
                                                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                            info@falxlata.com
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-1 max-w-lg mx-auto md:mx-0">
                                                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
                                                        <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4">Office Hours</h5>
                                                        <div className="space-y-3">
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-600">Monday - Friday</span>
                                                                <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-600">Saturday</span>
                                                                <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-600">Sunday</span>
                                                                <span className="font-medium text-gray-800">Closed</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 text-white shadow-md">
                                                        <h5 className="font-semibold mb-3 sm:mb-4">Visit Us</h5>
                                                        <p className="mb-4 text-sm sm:text-base">We'd love to meet you in person. Schedule an appointment with our team for personalized HR consultation.</p>
                                                        <a 
                                                            href="#"
                                                            className="inline-flex items-center justify-center bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                                                        >
                                                            Schedule Appointment
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}                            {/* FAQ Tab */}
                            {activeTab === 'faq' && (
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto">
                                    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
                                        <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-3 sm:p-4 backdrop-blur-sm mb-4 sm:mb-6">
                                            {tabContent[activeTab].icon}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{tabContent[activeTab].title}</h3>
                                        <p className="text-blue-100 text-base sm:text-lg">{tabContent[activeTab].description}</p>
                                    </div>
                                    
                                    <div className="p-4 sm:p-8">
                                        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
                                            {[
                                                {
                                                    question: "What services does Falx Lata offer?",
                                                    answer: "Falx Lata offers comprehensive HR solutions including recruitment, payroll management, HR process outsourcing, HR function setup, performance management, and policy & procedure development."
                                                },
                                                {
                                                    question: "How can I start the recruitment process with Falx Lata?",
                                                    answer: "To start the recruitment process, you can contact us via our contact form, email, or phone. Our team will arrange a consultation to understand your requirements and provide a tailored recruitment solution."
                                                },
                                                {
                                                    question: "What industries do you specialize in?",
                                                    answer: "We specialize in multiple industries including IT & Software, Banking & Finance, Insurance, BPO/KPO, Engineering, Automotive, Construction, Education, Healthcare, and Printing."
                                                },
                                                {
                                                    question: "How long does the recruitment process typically take?",
                                                    answer: "The recruitment timeline varies depending on the position, industry, and specific requirements. Generally, we aim to present qualified candidates within 2-3 weeks. Our team will provide you with a more accurate timeline during our initial consultation."
                                                },
                                                {
                                                    question: "Do you offer services for small businesses?",
                                                    answer: "Yes, we provide tailored HR solutions for businesses of all sizes. For small businesses, we offer scalable services that can grow with your company, helping you build a strong HR foundation without the need for a full in-house team."
                                                },
                                                {
                                                    question: "How do you ensure candidate quality?",
                                                    answer: "We have a rigorous screening process that includes thorough skills assessment, multiple interviews, reference checks, and cultural fit evaluation. Our experienced recruiters are specialists in their fields and understand the nuances of each industry's requirements."
                                                },
                                            ].map((faq, index) => (
                                                <motion.div 
                                                    key={index}
                                                    initial={{opacity: 0, y: 10}}
                                                    animate={{opacity: 1, y: 0}}
                                                    transition={{duration: 0.3, delay: index * 0.1}}
                                                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-gray-200"
                                                >
                                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-start">
                                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">
                                                            Q
                                                        </span>
                                                        {faq.question}
                                                    </h4>
                                                    <div className="pl-8 sm:pl-11">
                                                        <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        
                                        <div className="mt-8 sm:mt-10 text-center">
                                            <p className="text-gray-700 mb-4">Don't see your question here?</p>
                                            <button 
                                                onClick={() => setActiveTab('contactForm')}
                                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-md"
                                            >
                                                Contact Us Directly
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                
            </div>

            {/* CSS for bubbles animation */}
            <style jsx>{`
                .bubble {
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0.4;
                    animation: bubbleRise 25s linear infinite;
                    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(203, 213, 225, 0.4));
                }
                
                @keyframes bubbleRise {
                    0% {
                        transform: translateY(100vh) scale(0);
                        opacity: 0;
                    }
                    5% {
                        opacity: 0.4;
                    }
                    95% {
                        opacity: 0.4;
                    }
                    100% {
                        transform: translateY(-100vh) scale(1);
                        opacity: 0;
                    }
                }
                
                .bubble-1 {
                    width: 150px;
                    height: 150px;
                    left: 10%;
                    top: 40%;
                    animation-delay: 0s;
                }
                
                .bubble-2 {
                    width: 100px;
                    height: 100px;
                    left: 20%;
                    top: 80%;
                    animation-delay: 2s;
                }
                
                .bubble-3 {
                    width: 80px;
                    height: 80px;
                    left: 30%;
                    top: 20%;
                    animation-delay: 4s;
                }
                
                .bubble-4 {
                    width: 60px;
                    height: 60px;
                    left: 50%;
                    top: 70%;
                    animation-delay: 6s;
                }
                
                .bubble-5 {
                    width: 90px;
                    height: 90px;
                    left: 70%;
                    top: 50%;
                    animation-delay: 8s;
                }
                
                .bubble-6 {
                    width: 120px;
                    height: 120px;
                    left: 80%;
                    top: 40%;
                    animation-delay: 10s;
                }
                
                .bubble-7 {
                    width: 70px;
                    height: 70px;
                    left: 90%;
                    top: 30%;
                    animation-delay: 12s;
                }
                
                .bubble-8 {
                    width: 110px;
                    height: 110px;
                    left: 60%;
                    top: 60%;
                    animation-delay: 14s;
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(20px, -20px) rotate(5deg);
                    }
                    50% {
                        transform: translate(-20px, 20px) rotate(-5deg);
                    }
                    75% {
                        transform: translate(10px, -10px) rotate(3deg);
                    }
                }
                
                @keyframes floatReverse {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(-15px, 15px) rotate(-3deg);
                    }
                    50% {
                        transform: translate(15px, -15px) rotate(3deg);
                    }
                    75% {
                        transform: translate(-10px, 10px) rotate(-2deg);
                    }
                }
                
                @keyframes wave {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    25% {
                        transform: rotate(10deg);
                    }
                    75% {
                        transform: rotate(-10deg);
                    }
                }
                
                .animate-wave {
                    animation: wave 2s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
