'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

function VisionMissionValues() {
    const [activeTab, setActiveTab] = useState('vision');

    const content = {
        vision: {
            title: 'Our Vision',
            description: 'To be the nation\'s premier 360° HR solutions provider and trusted recruitment partner—delivering extraordinary services and consistently high-quality results that empower organizations to thrive.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
            ),
        },
        mission: {
            title: 'Our Mission',
            description: 'To serve as a trusted in-house HR partner, empowering organizations to operate more effectively and efficiently by delivering comprehensive, end-to-end HR solutions. Through our highly skilled and fully equipped team at FALX LATA, we are committed to driving sustainable growth and excellence for every client we serve.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
            ),
        },
        values: {
            title: 'Our Values',
            description: 'The core principles that guide our approach to business and client partnerships.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            ),
            list: [
                {
                    title: 'Client-Centric Partnership',
                    description: 'We believe in building strong, collaborative relationships with our clients—working as an extension of their team to deliver tailored HR solutions that truly make a difference.'
                },
                {
                    title: 'Confidentiality',
                    description: 'We uphold the highest standards of integrity and discretion, ensuring that all client and candidate information is handled with the utmost confidentiality and professionalism.'
                },
                {
                    title: 'Empowerment',
                    description: 'We are committed to empowering both organizations and individuals by creating value-driven HR strategies that unlock potential and foster growth.'
                },
                {
                    title: 'Excellence in Delivery',
                    description: 'We strive for excellence in every engagement—delivering results with precision, consistency, and a relentless focus on quality.'
                },
            ],
        },
    };

    return (
        <div className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision, Mission & Values</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The guiding principles that define who we are and how we serve our clients
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center mb-12">
                    <div className="inline-flex rounded-xl bg-white p-2 shadow-lg">
                        {Object.keys(content).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                                    activeTab === tab 
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105' 
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                {content[tab].title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <motion.div
                    key={activeTab}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="max-w-5xl mx-auto"
                >
                    {activeTab === 'values' ? (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
                                <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-4 backdrop-blur-sm mb-6">
                                    {content[activeTab].icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{content[activeTab].title}</h3>
                                <p className="text-blue-100 text-lg">{content[activeTab].description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                                {content[activeTab].list.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                        className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm"
                                    >
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 mr-4 flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">{value.title}</h4>
                                                <p className="text-gray-700">{value.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-gradient-to-r from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                                <div className="bg-white/20 rounded-full p-6 backdrop-blur-sm">
                                    {content[activeTab].icon}
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8">
                                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">{content[activeTab].title}</h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {content[activeTab].description}
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

// Leadership Team Component
function LeadershipTeam() {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const leaders = [
        {
            name: 'Ambigha Gajendren',
            position: 'Co-Founder & Chief Executive Officer',
            image: '/images/Ambigha Gajendren.jpg', // Replace with actual image of Ambigha when available
            bio: 'Ambigha Gajendren, MBA (UWTSD – UK), ACIPM (Sri Lanka), holder of Chartered and National Diplomas in Human Resource Management from CIPM, is the visionary Co-Founder and CEO of FALX LATA (Pvt) Ltd. With over 15 years of dynamic experience across diverse industries, Ambigha brings a wealth of strategic insight and leadership to the forefront of HR and organizational transformation.',
            extendedBio: 'Driven by a deep passion for human capital development and business innovation, she founded FALX LATA to empower organizations with expert HR solutions tailored to fuel growth and excellence. With a strong background in executive search, recruitment, and HR consulting, Ambigha brings a results-driven approach to every engagement. Her commitment to excellence and client satisfaction has set a benchmark for professionalism in the industry.',
            linkedin: 'https://www.linkedin.com/in/ambigha-gajendren-acipm-801b6b64/',

        }
    ];

    return (
        <div className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute bottom-20 left-0 w-[30rem] h-[30rem] pointer-events-none hidden lg:block z-40" 
                style={isMounted ? { animation: 'float 7s ease-in-out infinite' } : {}}>
                <img 
                    src="/images/floating_image_03-1.png" 
                    alt="Floating decoration" 
                    className="w-full h-full object-contain transform -translate-x-1/4 opacity-60" 
                />
            </div>
            <div className="absolute top-20 right-0 w-[34rem] h-[34rem] pointer-events-none hidden lg:block z-40" 
                style={isMounted ? { animation: 'floatReverse 8s ease-in-out infinite' } : {}}>
                <img 
                    src="/images/floating_image_05.png" 
                    alt="Floating decoration" 
                    className="w-full h-full object-contain transform translate-x-1/4 opacity-60" 
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Meet the visionary leadership behind Falx Lata's mission to transform HR solutions and empower organizations
                    </p>
                </motion.div>

                {/* Featured Leader - Larger Profile */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-16 relative"
                >
                    {/* Small decorative circle elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-70"></div>
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 opacity-70"></div>
                    
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-gradient-to-r from-blue-50 to-purple-50">
                            <div className="relative h-64 md:h-full overflow-hidden">
                                <img
                                    src={leaders[0].image}
                                    alt={leaders[0].name}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-xl font-bold mb-1">{leaders[0].name}</h3>
                                    <p className="font-medium text-blue-100">{leaders[0].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 md:w-2/3">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">About Our CEO</h3>
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-4"></div>
                            </div>
                            <p className="text-gray-700 mb-4">{leaders[0].bio}</p>
                            <p className="text-gray-700 mb-6">{leaders[0].extendedBio}</p>
                            <a
                                href={leaders[0].linkedin}
                                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-transform duration-300 hover:scale-105"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24"
                                     fill="currentColor">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Company Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
                    {/* Decorative connecting lines between cards (visible on larger screens) */}
                    <div className="absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-100 to-purple-100 hidden md:block"></div>
                    
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, delay: 0.1}}
                        viewport={{once: true}}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md text-center relative z-10"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Knowledge</h3>
                        <p className="text-gray-600">Our team brings deep industry expertise and hands-on experience in all aspects of HR management.</p>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, delay: 0.2}}
                        viewport={{once: true}}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md text-center relative z-10"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Client-First Approach</h3>
                        <p className="text-gray-600">We prioritize understanding your unique needs and delivering tailored solutions that drive business success.</p>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, delay: 0.3}}
                        viewport={{once: true}}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md text-center relative z-10"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven</h3>
                        <p className="text-gray-600">Our commitment to excellence ensures we deliver measurable, impactful results for every client we serve.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Hiring Process Component
function HiringProcess() {
    const steps = [
        {
            number: '01',
            title: 'Submit Application',
            description: 'Review job openings and submit your application with resume and cover letter.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Initial Screening',
            description: 'Our HR team reviews your application and assesses your qualifications for the role.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4"/>
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Interview Process',
            description: 'Selected candidates undergo interviews with HR and hiring managers.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Assessment',
            description: 'Participate in skill assessments and aptitude tests relevant to the position.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
            ),
        },
        {
            number: '05',
            title: 'Final Interview',
            description: 'Meet with senior management and discuss your role, expectations, and compensation.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
            ),
        },
        {
            number: '06',
            title: 'Job Offer',
            description: 'Successful candidates receive an offer letter with details about the position.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            ),
        },
    ];

    return (
        <div className="py-16 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-blue-50 to-purple-50 rounded-full opacity-30 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-blue-50 to-purple-50 rounded-full opacity-30 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our structured hiring process ensures we find the best talent while providing a
                        positive experience for all candidates.
                    </p>
                </motion.div>                {/* Ladder-style process */}                <div className="max-w-5xl mx-auto relative">
                    {/* Step blocks */}
                    <div className="space-y-20 md:space-y-28 relative">
                        {/* Main vertical ladder line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden md:block"></div>
                        
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="relative"
                            >
                                {/* Content layout with alternating sides */}
                                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    {/* Left or Right content based on index */}
                                    <div className={`w-full md:w-[45%] mb-5 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <motion.div
                                            initial={{opacity: 0, x: index % 2 === 0 ? -20 : 20}}
                                            whileInView={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5}}
                                            viewport={{once: true}}
                                            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block w-full max-w-md ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}
                                        >
                                            <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : ''}`}>
                                                <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-3 flex-shrink-0 ${index % 2 === 0 ? 'md:ml-4' : 'mr-4'}`}>
                                                    <div className="text-blue-600">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">
                                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{step.title}</span>
                                                    </h3>
                                                    <p className="text-gray-700">{step.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                    
                                    {/* Center circle with number */}
                                    <div className="w-16 md:w-[10%] flex items-center justify-center relative z-10">
                                        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg border-4 border-white">
                                            <span className="text-white font-bold text-xl">{step.number}</span>
                                        </div>
                                        
                                        {/* Horizontal connector lines */}
                                        <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'right-full' : 'left-full'} w-10 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`} style={{transform: 'translateY(-50%)'}}></div>
                                    </div>
                                    
                                    {/* Spacer for opposite side */}
                                    <div className="hidden md:block md:w-[45%]"></div>
                                </div>
                                
                                {/* Mobile vertical connector */}
                                <div className="md:hidden absolute h-14 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 left-1/2 transform -translate-x-1/2 -bottom-14"></div>
                            </motion.div>
                        ))}
                        
                        {/* Top and bottom decorations */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block shadow-lg"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hidden md:block shadow-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main About Component
export default function AboutSection() {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Navbar/>
            <div className="py-13 bg-gray-50 relative overflow-hidden">
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
                <section className="relative h-[500px] md:h-[700px] mb-16">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/images/aboutus.jpg" 
                            alt="Falx Lata About Us" 
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Dark overlay with reduced opacity */}
                        <div></div>
                    </div>
                  
                    {/* Hero Content */}
                    <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center">
                        <div className="text-center text-white">
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
                            >
                                About Falx Lata
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
                            >
                                Empowering Organizations to Elevate Their Business
                            </motion.p>
                        </div>
                    </div>
                    
                    {/* Floating decorations */}
                    <div className="absolute top-[270px] right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'float 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_03-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform translate-x-1/5" 
                        />
                    </div>
                    <div className="absolute left-0 top-[0px] left-0 w-[21rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_04-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5" 
                        />
                    </div>
                    <div className="absolute top-[520px] left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_02.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5" 
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

                {/* Company Overview */}
                <section className="container mx-auto px-4 mb-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="text-3xl font-bold text-gray-900 mb-4"
                        >
                            Who We Are
                        </motion.h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <motion.p 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.1}}
                            viewport={{once: true}}
                            className="text-gray-600 text-lg mb-6"
                        >
                            Falx Lata is a comprehensive HR solutions provider specializing in headhunting, recruitment, HR function setup, policy and procedure development, HR consulting, payroll outsourcing, and corporate training facilitation.
                        </motion.p>
                        <motion.p 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            viewport={{once: true}}
                            className="text-gray-600 text-lg mb-6"
                        >
                            As a fast-growing firm, we are powered by a team of highly qualified and experienced professionals dedicated to delivering exceptional HR services with precision and care. Our consultants bring deep industry knowledge and hands-on expertise across all facets of human resource management.
                        </motion.p>
                        <motion.p 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.3}}
                            viewport={{once: true}}
                            className="text-gray-600 text-lg"
                        >
                            Founded with passion and a strong sense of responsibility, Falx Lata was established to support organizations that require timely, expert-driven HR solutions to strengthen their operations and achieve sustainable growth.
                        </motion.p>
                    </div>
                </section>

                <VisionMissionValues/>
                <LeadershipTeam/>
                <HiringProcess/>

                {/* Call to Action */}
                <section className="container mx-auto px-4 mt-16 relative z-10 mb-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your HR Operations?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Partner with Falx Lata for comprehensive HR solutions that drive business growth and success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Contact Us
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-600" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a
                                href="/services"
                                className="bg-transparent hover:bg-blue-700 hover:bg-opacity-40 text-white border-2 border-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </section>

                <style jsx global>{`
                    .bubble {
                        position: absolute;
                        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
                        border-radius: 50%;
                        animation: float 15s infinite ease-in-out;
                    }
                    
                    .bubble-1 {
                        width: 100px;
                        height: 100px;
                        left: 10%;
                        top: 20%;
                        animation-delay: 0s;
                    }
                    
                    .bubble-2 {
                        width: 60px;
                        height: 60px;
                        left: 80%;
                        top: 50%;
                        animation-delay: 2s;
                    }
                    
                    .bubble-3 {
                        width: 120px;
                        height: 120px;
                        left: 30%;
                        top: 70%;
                        animation-delay: 4s;
                    }
                    
                    .bubble-4 {
                        width: 80px;
                        height: 80px;
                        left: 70%;
                        top: 10%;
                        animation-delay: 6s;
                    }
                    
                    .bubble-5 {
                        width: 50px;
                        height: 50px;
                        left: 50%;
                        top: 85%;
                        animation-delay: 8s;
                    }
                    
                    .bubble-6 {
                        width: 90px;
                        height: 90px;
                        left: 20%;
                        top: 50%;
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
                `}</style>
            </div>
        </>
    );
}