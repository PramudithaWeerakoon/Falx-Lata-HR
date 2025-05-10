'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Redesigned Service Card Component with hexagonal design elements
function ServiceCard({ service, index, isActive, setActiveIndex }) {
    const colors = [
        { bg: "from-indigo-500 to-purple-600", icon: "text-indigo-300", hover: "group-hover:text-indigo-100" },
        { bg: "from-emerald-500 to-teal-600", icon: "text-emerald-300", hover: "group-hover:text-emerald-100" },
        { bg: "from-blue-500 to-cyan-600", icon: "text-blue-300", hover: "group-hover:text-blue-100" },
        { bg: "from-rose-500 to-pink-600", icon: "text-rose-300", hover: "group-hover:text-rose-100" },
    ];
    
    const colorSet = colors[index % colors.length];
    
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
            onMouseEnter={() => setActiveIndex(index)}
        >
            <motion.div 
                className={`relative overflow-hidden border-2 ${isActive ? 'scale-105 z-10' : 'scale-100 z-0'} 
                transition-all duration-500 ease-in-out border-gray-100 bg-white shadow-xl 
                rounded-[32px] transform`}
                animate={{ 
                    y: isActive ? -10 : 0,
                    boxShadow: isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.08)' : '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
                }}
                transition={{ duration: 0.4 }}
            >
                {/* Full image at the top */}
                <div className="w-full h-64 overflow-hidden">
                    <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black/40 pointer-events-none`}></div>
                </div>
            
                {/* Service hexagon icon */}
                <div className={`absolute -top-14 right-10 w-28 h-28 p-0.5 rotate-[30deg] transform`}>
                    <div className={`w-full h-full rounded-[30%] bg-gradient-to-br ${colorSet.bg} flex items-center justify-center p-5 shadow-lg`}>
                        {/* Icon matching the service */}
                        <svg 
                            className={`w-12 h-12 rotate-[-30deg] ${colorSet.icon} ${colorSet.hover}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={1.5}
                        >
                            {index === 0 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            )}
                            {index === 1 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            )}
                            {index === 2 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            )}
                            {index === 3 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            )}
                        </svg>
                    </div>
                </div>
                
                <div className="pt-6 pl-8 pr-8 pb-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="mt-auto">
                        <Link 
                            href="/services" 
                            className={`inline-flex items-center font-semibold transition-all duration-300 text-gray-700 group-hover:text-indigo-600`}
                        >
                            <span>Learn More</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Service offerings with images
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
            image: "/images/payroll.jpg",
        }
    ];    return (
        <div id="services" className="py-20 md:py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 md:px-10 relative z-10">                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                        Transformative HR Solutions
                    </h2>
                    <div className="w-24 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-700 leading-relaxed mb-10">
                        Falx Lata delivers comprehensive, innovative HR solutions, empowering businesses to focus on growth while we handle people management.
                    </p>
                    
                    <div className="flex justify-center">
                        <Link href="/services" className="group relative py-5 px-10 overflow-hidden rounded-full bg-white border-2 border-indigo-600 shadow-md">
                            <span className="absolute inset-0 w-full h-full bg-indigo-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
                            <span className="relative text-lg font-semibold text-indigo-600 group-hover:text-white transition-colors duration-300 flex items-center">
                                Explore All HR Services
                                <svg className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>                </motion.div>                
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 max-w-7xl mx-auto pb-32 pt-10">
                    {serviceOfferings.map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            service={service} 
                            index={index} 
                            isActive={activeIndex === index}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

