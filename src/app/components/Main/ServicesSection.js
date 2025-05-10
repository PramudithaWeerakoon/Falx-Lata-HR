'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service Card Component with clean, minimal design
function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                index === 0 || index === 3 ? '-mt-8 md:-mt-10' : ''
            }`}
        >
            <div className="overflow-hidden rounded-t-xl h-56 md:h-64">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            
            <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <Link href="/services" className="inline-flex items-center text-sm md:text-base font-medium text-teal-600 hover:text-teal-700 transition-colors duration-300">
                    READ MORE →
                </Link>
            </div>
        </motion.div>
    );
}

export default function ServicesSection() {    // Service offerings with images
    const serviceOfferings = [
        {
            title: "Staff Augmentation",
            description: "Extend your team with skilled professionals on demand",
            image: "/images/cop-image.jpg", // Image of people working at laptops
        },
        {
            title: "Build Operate Transfer (BOT)",
            description: "We build, operate, and transfer complete business functions",
            image: "/images/services/hr-services-hero.jpg", // Image of business meeting
        },
        {
            title: "Professional Employer Organization (PEO)",
            description: "Let us handle your HR while you focus on your core business",
            image: "/images/young-students-learning-together-group-study.jpg", // Image of team collaboration
        },
        {
            title: "Employer of Record (EOR)",
            description: "Expand globally without establishing your own entity",
            image: "/images/team.jpg", // Image of diverse team discussion
        }    ];    return (        <div id="services" className="py-36 md:py-44 bg-gray-50 relative overflow-hidden">
            {/* Background with subtle abstract accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-screen-2xl mx-auto">
                {/* Subtle dots pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="#4db6ac" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>
                
                {/* Subtle abstract shapes */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-20 w-40 h-40 rounded-full border border-teal-200 opacity-20"
                />
                
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-40 left-20 w-24 h-24 rounded-full border border-teal-200 opacity-15"
                />            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-26 relative z-10 max-w-screen-2xl">                {/* Additional top spacing */}
                <div className="h-16 md:h-24"></div>                <div className="flex flex-col lg:flex-row gap-6 md:gap-46">
                    {/* LEFT SIDE - Text Content Area */}                    <div className="w-full lg:w-2/5 lg:-ml-30 xl:-ml-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="lg:sticky lg:top-24"
                        ><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pl-0">
                                HR Solutions for your company
                            </h2>
                            
                            <h3 className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
                                We are a young and creative company delivering exceptional HR services
                            </h3>
                            
                            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                                At Falx Lata, we understand that every business has unique HR challenges. Our approach 
                                combines flexibility and expertise to deliver results aligned with your specific business 
                                objectives. We partner with you to understand your organization's culture and vision, developing 
                                tailored HR solutions that drive sustainable growth.
                            </p>
                              <div className="space-y-6 mt-10">
                                <h4 className="font-semibold text-gray-800 mb-6 text-lg">Our services include:</h4>
                                
                                {serviceOfferings.map((service, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >                                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-lg">{service.title}</span>
                                    </motion.div>
                                ))}
                                  <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex items-center"
                                >
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-lg">Recruitment, Head Hunting & Executive Search</span>
                                </motion.div>
                            </div>
                              <div className="mt-16">
                                <Link href="/services" className="inline-flex items-center px-6 py-4 border border-teal-500 text-lg font-medium rounded-md text-teal-600 hover:bg-teal-50 transition-colors duration-300">
                                    Explore All Services
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>                    
                    {/* RIGHT SIDE - Card Grid with staggered layout */}                    <div className="w-full lg:w-3/5 lg:ml-16 xl:ml-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                            {serviceOfferings.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>                    </div>
                </div>
            </div>
              {/* Additional bottom spacing */}
            <div className="h-20 md:h-32"></div>
        </div>
    );
}
