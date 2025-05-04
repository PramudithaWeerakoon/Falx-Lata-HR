'use client'

import {useState} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

// Service Card Component
function ServiceCard({service, index}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.1}}
            viewport={{once: true}}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            <div className="p-6">
                <div className="flex items-start mb-4">
                    <div
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                        {service.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.shortDescription}</p>
                    </div>
                </div>

                {service.features && service.features.length > 0 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-800 hover:to-purple-800 font-medium flex items-center mt-4"
                    >
                        {isExpanded ? 'Show Less' : 'Learn More'}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''} text-blue-600`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                )}

                {isExpanded && service.features && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="mt-4 border-t pt-4"
                    >
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

// Main Services Section Component
export default function ServicesSection() {
    const services = [
        {
            title: "Recruitment, Head Hunting & Executive Search",
            shortDescription: "Comprehensive talent acquisition services including C-Suite recruitment, specialized headhunting, and executive search solutions tailored to your organizational needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            ),
            features: [
                "Executive Search for C-Suite positions",
                "Industry-specific headhunting",
                "Talent mapping and market research",
                "Confidential search assignments",
                "International recruitment capabilities",
                "Candidate assessment and profiling"
            ]
        },
        {
            title: "HR Process Outsourcing",
            shortDescription: "End-to-end HR process management allowing you to focus on core business activities while we handle your HR operations efficiently.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
            ),
            features: [
                "Complete HR administration",
                "Employee lifecycle management",
                "HR compliance and reporting",
                "Benefits administration",
                "Time and attendance management",
                "HR analytics and insights"
            ]
        },
        {
            title: "HR Function Setup & Consultation",
            shortDescription: "Strategic HR consulting services to establish, optimize, and transform your HR department for maximum effectiveness.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
            ),
            features: [
                "Build HR for Startups",
                "HR Department reshaping",
                "Organization structure design",
                "HR strategy development",
                "Change management support",
                "HR technology implementation"
            ]
        },
        {
            title: "Policies & Procedure Setup",
            shortDescription: "Development of comprehensive HR policies and procedures that align with legal requirements and industry best practices.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            ),
            features: [
                "Employee handbook creation",
                "Policy development and review",
                "Standard operating procedures",
                "Compliance documentation",
                "Code of conduct guidelines",
                "Disciplinary procedures"
            ]
        },
        {
            title: "Payroll Outsourcing",
            shortDescription: "Efficient payroll management services ensuring accurate and timely salary processing while maintaining compliance with regulations.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
            ),
            features: [
                "Salary processing and disbursement",
                "Tax calculations and filing",
                "Statutory compliance management",
                "Payslip generation",
                "Leave and attendance integration",
                "Year-end tax reporting"
            ]
        },
        {
            title: "EPF/ETF Company Registration",
            shortDescription: "Complete assistance with EPF/ETF registration and ongoing compliance management for your organization.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
            ),
            features: [
                "New company registration",
                "EPF/ETF compliance advisory",
                "Monthly return submissions",
                "Registration documentation",
                "Compliance audit support",
                "Employee enrollment assistance"
            ]
        },
        {
            title: "Performance Management Setup",
            shortDescription: "Design and implementation of performance management systems specifically tailored for small and medium-sized companies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
            ),
            features: [
                "Performance appraisal system design",
                "KPI framework development",
                "360-degree feedback implementation",
                "Goal setting methodology",
                "Performance review templates",
                "Employee development planning"
            ]
        },
        {
            title: "Training & Development",
            shortDescription: "Comprehensive training solutions to enhance employee skills and drive organizational growth through targeted development programs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
            ),
            features: [
                "Training needs assessment",
                "Custom training program design",
                "Leadership development",
                "Soft skills training",
                "Technical skills workshops",
                "Training effectiveness evaluation"
            ]
        }
    ];

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

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-27 mb-16 relative">
                    <div className="container mx-auto px-9">
                        <div className="text-center text-white">
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="text-4xl md:text-5xl font-bold mb-6"
                            >
                                Our Services
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                            >
                                Optimize your business operations with our comprehensive, one-stop HR solutions tailored
                                to your company's unique needs
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Services Introduction */}
                <section className="container mx-auto px-4 mb-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Comprehensive HR Solutions for Business Excellence
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Falx Lata provides extensive and creative solutions in meeting your HR & hiring needs.
                            We understand your business and our actions will support your brand values. Our most
                            focused point in providing solutions is Unleashing the Potential and Empowering Success.
                        </p>
                        <p className="text-gray-600 text-lg">
                            We partner with you to develop comprehensive, scalable HR strategies and solutions based
                            on industry best practices enhanced for competitive edge.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index}/>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="container mx-auto px-4 mt-16 relative z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your HR Operations?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our comprehensive HR solutions can help your business grow and succeed.
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
                                href="/about"
                                className="bg-transparent hover:bg-blue-700 hover:bg-opacity-40 text-white border-2 border-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Learn About Us
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
                `}</style>
            </div>
        </>
    );
}