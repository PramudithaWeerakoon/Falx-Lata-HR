'use client'

import {useState, useEffect, useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import AnimatedDividerSection from "./_/AnimatedDividerSection";
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false });

const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes scaleInOut {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const WhyUsSectionV2 = () => {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for elements
    const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const shapesY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Features data updated with blue-purple gradient colors
    const reasons = [
        {
            title: "Industry Expertise",
            description: "Deep understanding of various industry sectors and their unique HR requirements.",
            icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
            color: "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        },
        {
            title: "Tailored Solutions",
            description: "Customized HR solutions designed specifically for your business needs.",
            icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
            color: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
        },
        {
            title: "Quality Talent",
            description: "Access to a vast pool of pre-screened candidates and top industry talent.",
            icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
            color: "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
        },
        {
            title: "End-to-End Support",
            description: "Comprehensive HR services from recruitment to payroll management.",
            icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504-1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
            color: "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Animated background shapes */}
            <motion.div
                style={{y: shapesY}}
                className="absolute inset-0 pointer-events-none"
            >
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-full opacity-30 blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
                <div
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        style={{y: titleY}}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Why Us?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Unleashing the power of talent, with In Falx Lata
                        </p>
                    </motion.div>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="text-center"
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-16 h-16 flex items-center justify-center rounded-full ${reason.color} shadow-sm mb-5 border border-gray-200/30`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon}/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SectionWrapper = ({children, bgColor = 'bg-white'}) => (
    <motion.section
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        className={`relative py-20 overflow-hidden ${bgColor}`}
    >
        {/* Animated Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, Math.random() * 50 - 25],
                        x: [0, Math.random() * 50 - 25],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 8 + 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className={`absolute rounded-full bg-gradient-to-r ${
                        i % 3 === 0 ? 'from-blue-400/20 to-purple-400/20' :
                            i % 2 === 0 ? 'from-purple-400/20 to-indigo-400/20' :
                                'from-indigo-400/20 to-blue-400/20'
                    }`}
                    style={{
                        width: `${Math.random() * 300 + 100}px`,
                        height: `${Math.random() * 300 + 100}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        filter: 'blur(40px)'
                    }}
                />
            ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
            {children}
        </div>
    </motion.section>
);

const SectionHeader = ({title, subtitle, description}) => (
    <div className="text-center mb-16">
        <motion.span
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className="inline-block text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
        >
            {subtitle}
        </motion.span>
        <motion.h2
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
        >
            {title}
        </motion.h2>
        <motion.div
            initial={{width: 0}}
            whileInView={{width: 80}}
            transition={{delay: 0.4, duration: 0.8}}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
        />
        {description && (
            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5}}
                className="text-gray-600 max-w-2xl mx-auto"
            >
                {description}
            </motion.p>
        )}
    </div>
);

export function AboutSection() {
    return (
        <SectionWrapper bgColor="bg-gray-50">
            <SectionHeader
                title="About Our Company"
                subtitle="WHO WE ARE"
                description="Discover our journey and what makes us different in the HR solutions industry"
            />

            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    className="md:w-1/2"
                >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="/about-team.jpg"
                            alt="Our Team"
                            className="w-full h-auto"
                        />
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-20 blur-xl -z-10"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="md:w-1/2"
                >
                    <p className="text-gray-600 text-lg mb-8">
                        In Falx Lata has been transforming HR solutions since 2015, with a dedicated team of
                        professionals
                        committed to delivering exceptional talent acquisition and management services across multiple
                        industries.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {[
                            {
                                icon: "👑",
                                title: "Our Vision",
                                text: "To redefine HR excellence in Asia through innovation"
                            },
                            {
                                icon: "🎯",
                                title: "Our Mission",
                                text: "Deliver tailored HR solutions that drive success"
                            },
                            {
                                icon: "💎",
                                title: "Core Values",
                                text: "Integrity, Innovation, Impact"
                            },
                            {
                                icon: "🌏",
                                title: "Coverage",
                                text: "Serving clients across 12 countries"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{y: -5}}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link href="/about"
                          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium hover:from-blue-700 hover:to-purple-700 group">
                        Learn our full story
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform text-purple-600"
                             viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}

// Import the updated ServicesSection component
import ServicesSection from './ServicesSection';

// New Service Card component with background images
function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group h-[400px] relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
        >
            {/* Background image or gradient */}
            <div className="absolute inset-0 w-full h-full">
                {service.bgImage ? (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10" />
                        <img 
                            src={service.bgImage}
                            alt={service.title}
                            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </>
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor}`} />
                )}
            </div>
            
            {/* Card content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col h-full justify-end text-white">
                <div className="mb-auto">
                    {/* Icon with circle background */}
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                            {service.icon}
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-2xl font-bold mb-3 transform group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                    <p className="text-white/80 mb-6 transform group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">{service.description}</p>
                    
                    <div className="flex items-center transform group-hover:translate-x-2 transition-transform duration-300">
                        <a href="#" className="text-white inline-flex items-center font-medium group/link">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Import the updated IndustryCard component
import IndustryCard from './IndustryCard';

function IndustriesSection() {
    const [industries] = useState([        {
            name: "IT & Software", 
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Specialized HR solutions for technology companies and software development firms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
                </svg>
            )
        },        {
            name: "Insurance", 
            image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            description: "HR solutions tailored for insurance companies, brokers, and risk management firms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                </svg>
            )
        },        {
            name: "Banking & Finance", 
            image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Comprehensive HR services for banks, financial institutions and investment firms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
                </svg>
            )
        },        {
            name: "BPO/KPO", 
            image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Specialized HR solutions for Business Process Outsourcing and Knowledge Process Outsourcing firms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                </svg>
            )
        },        {
            name: "Engineering", 
            image: "https://images.unsplash.com/photo-1581094794329-c8112c4e25a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Tailored HR services for engineering firms, manufacturing companies, and technical service providers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z"/>
                </svg>
            )
        },        {
            name: "Auto Mobile", 
            image: "https://images.unsplash.com/photo-1552559789-c57c0a79a8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "HR solutions for automotive manufacturers, dealerships, and service centers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                </svg>
            )
        },        {
            name: "Construction", 
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Specialized HR services for construction companies, contractors, and project management firms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/>
                </svg>
            )
        },        {
            name: "Education", 
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "HR solutions for educational institutions, schools, colleges, and training organizations.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                </svg>
            )
        },        {
            name: "Health & Care", 
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Specialized HR solutions for hospitals, clinics, care homes, and other healthcare providers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                </svg>
            )
        },        {
            name: "Printing", 
            image: "https://images.unsplash.com/photo-1603201810469-1f2757437459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "HR solutions for printing companies, publication houses, and commercial printing services.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"/>
                </svg>
            )
        },
    ]);

    return (
        <div className="bg-white pt-32 pb-32 relative overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">INDUSTRIES WE SERVE</span>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Specialized
                        HR Solutions Across
                        Industries</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Falx Lata provides specialized HR solutions across multiple industries,
                        understanding the unique challenges and requirements of each sector.
                    </p>
                </div>                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
                    {industries.map((industry, index) => (
                        <IndustryCard
                            key={index}
                            industry={industry.name}
                            icon={industry.icon}
                            image={industry.image}
                            description={industry.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function StatisticsSection() {
    const stats = [
        {value: "50+", label: "Happy Clients"},
        {value: "40+", label: "Successful Placements"},
        {value: "3+", label: "Years of Experience"},
        {value: "35", label: "Dedicated Professionals"}
    ];

    return (
        <SectionWrapper bgColor="bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: index * 0.1}}
                        className="text-center"
                    >
                        <motion.div
                            whileHover={{scale: 1.05}}
                            className="inline-block"
                        >
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-blue-100">{stat.label}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}

function WhyChooseUsSection() {
    const reasons = [
        {
            title: "Industry Expertise",
            description: "Deep understanding of various industry sectors and their unique HR requirements.",
            icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "Tailored Solutions",
            description: "Customized HR solutions designed specifically for your business needs.",
            icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Quality Talent",
            description: "Access to a vast pool of pre-screened candidates and top industry talent.",
            icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "End-to-End Support",
            description: "Comprehensive HR services from recruitment to payroll management.",
            icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504-1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
            color: "from-blue-500 to-purple-500"
        }
    ];

    return (
        <div className="py-16 bg-gray-50 relative overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">WHY CHOOSE US</span>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Our
                        Competitive Advantages</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        At In Falx Lata, we're committed to providing exceptional HR solutions that empower your
                        business
                        growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div
                                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon}/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link href="/about">
                        <button
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                            Learn More About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function ContactCTASection() {
    return (
        <SectionWrapper bgColor="bg-gray-50">
            <div
                className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
                {/* Animated background shapes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-2xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-2xl"
                />

               
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    className="relative z-10"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your HR Strategy?</h2>
                    <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how we can help your organization achieve its HR goals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                            >
                                Get a Free Consultation
                            </motion.button>
                        </Link>
                        <Link href="/services">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                            >
                                Explore Services
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}

export default function HomePage() {
    // State to track if the page has loaded
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Mark as loaded after component mounts
        setIsLoaded(true);

        // Ensure document-specific code only runs on the client
        if (typeof window !== 'undefined') {
            // Add Font Awesome from CDN if not already present
            if (!document.getElementById('font-awesome-cdn')) {
                const fontAwesomeLink = document.createElement('link');
                fontAwesomeLink.id = 'font-awesome-cdn';
                fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
                fontAwesomeLink.rel = 'stylesheet';
                document.head.appendChild(fontAwesomeLink);
            }

            // Add animation styles
            if (!document.getElementById('animation-styles')) {
                const styleElement = document.createElement('style');
                styleElement.id = 'animation-styles';
                styleElement.innerHTML = animationStyles;
                document.head.appendChild(styleElement);
            }
        }
    }, []);

    if (!isLoaded && typeof window === 'undefined') {
        // During SSR, if not yet "loaded" (which is a client-side concept here),
        // return null or a basic placeholder to avoid running further client-side specific logic
        // or trying to render components that might also have client-side dependencies not yet handled.
        // This helps prevent errors during the build when `document` is not available.
        return null; 
    }
    
    if (!isLoaded && typeof window !== 'undefined') {
        // On the client, if still loading, return null to prevent flash of unstyled content
        return null;
    }

    return (
        <div className="overflow-hidden bg-white">

            <main>
                <HeroSection/>
                <ServicesSection/>
                <AnimatedDividerSection/>
                <IndustriesSection/>
                <StatisticsSection/>
                <WhyUsSectionV2/>
                
                
                {/* Floating blob images with animations */}
                                <div className="relative py-20">
                                    {/* Left blob image with animation */}
                                    <motion.div 
                                        className="absolute left-20 top-0 transform -translate-y-1/2 -translate-x-1/2 z-10"
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, 15, 0],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <img 
                                            src="/images/floating_image_01.png" 
                                            alt="Green blob" 
                                            className="w-[33rem] h-[33rem] hidden md:block"
                                        />
                                    </motion.div>

                                    {/* Right blob image with animation */}
                                    <motion.div 
                                        className="absolute right-30 bottom-30 transform -translate-y-1/2 translate-x-1/2 z-10"
                                        animate={{
                                            y: [0, 20, 0],
                                            x: [0, -15, 0],
                                            rotate: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut", 
                                            delay: 1.5
                                        }}
                                    >
                                        <img 
                                            src="/images/floating_image_03-1.png" 
                                            alt="Red blob" 
                                            className="w-[33rem] h-[33rem] hidden md:block"
                                        />
                                    </motion.div>
                                </div>
                                <ContactCTASection/>
                                <div className="relative py-20">
                                    

                                    {/* Right blob image with animation */}
                                    <motion.div 
                                        className="absolute right-30 bottom-30 transform -translate-y-1/2 translate-x-1/2 z-10"
                                        animate={{
                                            y: [0, 20, 0],
                                            x: [0, -15, 0],
                                            rotate: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut", 
                                            delay: 1.5
                                        }}
                                    >
                                        <img 
                                            src="/images/floating_image_05.png" 
                                            alt="Red blob" 
                                            className="w-[33rem] h-[33rem] hidden md:block"
                                        />
                                    </motion.div>
                                </div>
                            </main>

                            {/* Footer would go here */}
        </div>
    );
}