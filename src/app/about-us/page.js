'use client'

import {useState} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

function VisionMissionValues() {
    const [activeTab, setActiveTab] = useState('vision');

    const content = {
        vision: {
            title: 'Our Vision',
            description: 'To be the premier 360º HR solutions & HR Recruitment provider in the country by providing extra ordinary services with high-quality results.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" fill="none"
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
            description: 'To act as the organizations in-house HR solution provider to empower them effectively and efficiently by providing fully fledge HR Solutions while partnering them with our highly resourceful & fully equipped HR provider - FALX LATA.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
            ),
        },
        values: {
            title: 'Our Values',
            description: '',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            ),
            list: [
                'Client-Centric Partnership',
                'Confidentiality',
                'Empowerment',
                'Excellence',
            ],
        },
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision, Mission & Values</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg bg-gray-100 p-1">
                        <button
                            onClick={() => setActiveTab('vision')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeTab === 'vision' ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 shadow' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Vision
                        </button>
                        <button
                            onClick={() => setActiveTab('mission')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeTab === 'mission' ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 shadow' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Mission
                        </button>
                        <button
                            onClick={() => setActiveTab('values')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeTab === 'values' ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 shadow' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Values
                        </button>
                    </div>
                </div>

                {/* Content */}
                <motion.div
                    key={activeTab}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3}}
                    className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
                >
                    <div className="text-center">
                        <div className="mb-6 flex justify-center">
                            {content[activeTab].icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{content[activeTab].title}</h3>
                        {content[activeTab].description && (
                            <p className="text-gray-600 mb-6 text-lg">{content[activeTab].description}</p>
                        )}
                        {activeTab === 'values' && content[activeTab].list && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                {content[activeTab].list.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                        className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mr-3"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-gray-900 font-medium">{value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// Leadership Team Component
function LeadershipTeam() {
    const leaders = [
        {
            name: 'John Doe',
            position: 'Chief Executive Officer',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200',
            bio: 'With over 20 years of experience in HR and business management, John leads Falx Lata with vision and expertise.',
            linkedin: '#',
        },
        {
            name: 'Jane Smith',
            position: 'Director of Operations',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200',
            bio: 'Jane brings 15 years of operational excellence to ensure our services maintain the highest quality standards.',
            linkedin: '#',
        },
        {
            name: 'Michael Johnson',
            position: 'Head of Recruitment',
            image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1200',
            bio: 'Michael specializes in executive search and has successfully placed hundreds of candidates in key positions.',
            linkedin: '#',
        },
        {
            name: 'Sarah Williams',
            position: 'HR Consultant Lead',
            image: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1200',
            bio: 'Sarah leads our consulting team with expertise in HR strategy and organizational development.',
            linkedin: '#',
        },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our leadership team brings together decades of experience in HR solutions,
                        technology, and business management to guide Falx Lata towards excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.4, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-64">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium mb-3">{leader.position}</p>
                                <p className="text-gray-600 mb-4">{leader.bio}</p>
                                <a
                                    href={leader.linkedin}
                                    className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:text-purple-800 transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24"
                                         fill="currentColor">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                    Connect
                                </a>
                            </div>
                        </motion.div>
                    ))}
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
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
            description: 'Successful candidates receive an offer letter with details about-us the position.',
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
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our structured hiring process ensures we find the best talent while providing a
                        positive experience for all candidates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.4, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div
                                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {step.number}
                            </div>
                            <div className="ml-4">
                                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Main About Component
export default function AboutSection() {
    return (
        <>
            <Navbar/>
            <div className="pt-13 bg-white relative overflow-hidden">
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

                <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-29 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center text-white">
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="text-4xl md:text-5xl font-bold mb-6"
                            >
                                About Falx Lata
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                            >
                                We Empower to Elevating the Business
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Company Overview */}
                <section className="py-16 relative">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                            <p className="text-gray-600 text-lg mb-8">
                                Falx Lata is a fully fledged HR solution provider, specialized in Headhunting,
                                Recruitment, HR functions set up, Policies & Procedure setup, HR Consultation,
                                Payroll Outsourcing and Training organizing. We are a fast-growing company with
                                experienced staff and consultants who are highly qualified and experienced in all
                                HR functions.
                            </p>
                            <p className="text-gray-600 text-lg">
                                We have founded Falx Lata with passion and responsibility to support organizations
                                that need timely support with expertise. We understand your business and our actions
                                will support your brand values.
                            </p>
                        </div>
                    </div>
                </section>

                <VisionMissionValues/>
                <LeadershipTeam/>
                <HiringProcess/>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Transform Your HR Operations?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Partner with Falx Lata for comprehensive HR solutions that drive business growth and
                            success.
                        </p>
                         <a
                                href="/contact"
                                className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Contact Us
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
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
                `}</style>
            </div>
        </>
    );
}