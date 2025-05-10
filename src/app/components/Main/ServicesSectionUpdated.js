'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service Card Component with clean, minimal design
function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
            viewport={{ once: true }}
            className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                index === 0 ? '-mt-10 md:-mt-16' : 
                index === 1 ? 'mt-8 md:mt-11' : 
                index === 2 ? '-mt-6 md:-mt-12' : 
                'mt-12 md:mt-14'
            } hover:-translate-y-2`}
        >
            <div className="overflow-hidden rounded-t-xl h-56 md:h-64 relative">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-tr ${
                    index === 0 ? 'from-teal-500/20' : 
                    index === 1 ? 'from-blue-500/20' : 
                    index === 2 ? 'from-emerald-500/20' : 
                    'from-cyan-500/20'
                } to-transparent z-10`}></div>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            
            <div className="p-6 md:p-8 relative">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <div className={`absolute bottom-0 left-0 w-1/3 h-1 ${
                    index === 0 ? 'bg-teal-500' : 
                    index === 1 ? 'bg-blue-500' : 
                    index === 2 ? 'bg-emerald-500' : 
                    'bg-cyan-500'
                } rounded-r-full`}></div>
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
            title: "Recruitment & Headhunting",
            description: "Executive search and talent acquisition services to find the right people for your organization",
            image: "/images/req.jpeg",
        },
        {
            title: "HR Function Setup",
            description: "Complete HR department setup for startups and companies reshaping their HR operations",
            image: "/images/hr.jpg",
        },
        {
            title: "HR Process Outsourcing",
            description: "Streamline operations by outsourcing HR functions to our expert team",
            image: "/images/out.jpg",
        },
        {
            title: "Payroll Outsourcing",
            description: "Efficient and accurate payroll management services including EPF/ETF registration",
            image: "/images/Payroll.jpg",
        }
    ];

    return (
        <div id="services" className="py-36 md:py-44 bg-gray-50 relative overflow-hidden">
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
                />
            </div>

            <div className="container mx-6 px-4 md:px-6 lg:px-10 xl:px-26 relative z-15 max-w-screen-2xl">
                {/* Additional top spacing */}
                <div className="h-16 md:h-24"></div>
                <div className="flex flex-col lg:flex-row gap-6 md:gap-46">
                    {/* LEFT SIDE - Text Content Area */}
                    <div className="w-full lg:w-2/5 lg:-ml-30 xl:-ml-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="lg:sticky lg:top-24"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pl-0">
                                comprehensive, one-stop HR solutions
                            </h2>
                            
                            <h3 className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
                                Falx Lata is fully fledged HR business solution provider. We are a fast-growing company who provides extensive and creative solutions in meeting your HR & hiring needs.
                            </h3>
                            
                            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                                Falx Lata understand your business and the actions of ours will support your brand values. Our most focused point in providing solution is Unleashing the Potential and Empowering Success. We partner with you to develop comprehensive, scalable HR strategies and solutions based on industry best practices enhanced for competitive edge.
                            </p>
                            <div className="space-y-6 mt-10">
                                <h4 className="font-semibold text-gray-800 mb-6 text-lg">Our key services include:</h4>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center"
                                >                                        
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-lg">Recruitment, Head Hunting, Executive Search & C-Suite Recruitment Service</span>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex items-center"
                                >                                        
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-lg">HR process outsourcing</span>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex items-center"
                                >                                        
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-lg">HR Function Setup & Consultation</span>
                                </motion.div>
                                
                                <div className="pl-12 space-y-4">
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.35 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                                        <span className="text-gray-700 text-base">Startups or reshaping HR Department</span>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                                        <span className="text-gray-700 text-base">Build Policies & Procedure setup</span>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.45 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                                        <span className="text-gray-700 text-base">Payroll Outsourcing</span>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                                        <span className="text-gray-700 text-base">Training organizing</span>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.55 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                                        <span className="text-gray-700 text-base">Performance Management Process setting for Small Companies</span>
                                    </motion.div>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                                        <span className="text-gray-700 text-base">EPF/ETF Company Registration</span>
                                    </motion.div>
                                </div>
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
                    
                    {/* RIGHT SIDE - Card Grid with staggered layout */}
                    <div className="w-full lg:w-3/5 lg:ml-16 xl:ml-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                            {serviceOfferings.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Additional bottom spacing */}
            <div className="h-20 md:h-32"></div>
        </div>
    );
}
