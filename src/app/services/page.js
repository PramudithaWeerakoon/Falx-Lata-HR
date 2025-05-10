'use client'

import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

// Import the styled ServiceCard component
import ServicesSection from '../components/Main/ServicesSection';

// Service Card Component for detailed service pages
function ServiceCard({service, index}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.1}}
            viewport={{once: true}}
            whileHover={{y: -3}}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
        >
            {/* Decorative elements */}
            <motion.div
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 0.07}}
                transition={{duration: 0.6, delay: 0.2}}
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"
            />
            
            <div className="p-6">
                <div className="flex items-start mb-4">
                    <div
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        {service.icon}
                    </div>
                    <div>
                        <motion.h3 
                            whileHover={{x: 3}}
                            className="text-xl font-bold text-gray-900 mb-2"
                        >
                            {service.title}
                        </motion.h3>
                        <p className="text-gray-600">{service.shortDescription}</p>
                    </div>
                </div>

                {service.features && service.features.length > 0 && (
                    <motion.button
                        whileHover={{scale: 1.01}}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center focus:outline-none transition-colors duration-300 group"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                        <motion.svg
                            animate={{rotate: isExpanded ? 180 : 0}}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </motion.svg>
                    </motion.button>
                )}

                {isExpanded && service.features && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="mt-4 border-t pt-4"
                    >
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <motion.span
                                animate={{scale: [1, 1.1, 1]}}
                                transition={{duration: 1.5, repeat: Infinity}}
                                className="mr-2"
                            >
                                ✅
                            </motion.span>
                            Key Features:
                        </h4>
                        <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <motion.li 
                                    key={idx} 
                                    initial={{x: -10, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{delay: idx * 0.07}}
                                    className="flex items-start"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-teal-500 mr-2 mt-0.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-600">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

// Main Services Page Component
export default function ServicesPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    
    useEffect(() => {
        setIsMounted(true);
        
        // Auto-rotate testimonials
        const interval = setInterval(() => {
            setActiveTestimonial(prev => 
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 8000);
        
        return () => clearInterval(interval);
    }, []);
    
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
    
    // Service showcases with images
    const serviceShowcases = [
        {
            title: "Recruitment & Headhunting",
            description: "Our specialized recruitment services help you find the perfect talent for your organization, from entry-level positions to executive roles.",
            image: "/images/Recruitment & Headhunting.png",
            highlights: [
                "Specialized industry recruitment",
                "Executive search services",
                "Comprehensive candidate screening",
                "Cultural fit assessment"
            ]
        },
        {
            title: "HR Process Outsourcing",
            description: "Focus on your core business while we handle your HR operations with efficiency and expertise.",
            image: "/images/HR Process Outsourcing.png",
            highlights: [
                "Complete HR administration",
                "Performance management",
                "Employee relations",
                "Regulatory compliance"
            ]
        },
        {
            title: "Payroll Management",
            description: "Accurate and timely payroll processing with full compliance to local regulations and tax requirements.",
            image: "/images/Payroll Outsourcing.jpg",
            highlights: [
                "Salary processing",
                "Tax calculations",
                "Statutory compliance",
                "Custom reporting"
            ]
        }
    ];
    
    // Client testimonials
    const testimonials = [
        {
            quote: "Falx Lata transformed our HR processes completely. Their team's expertise helped us build an efficient HR department from scratch.",
            name: "Sarah Johnson",
            position: "CEO, TechStart Solutions",
            company: "TechStart Solutions"
        },
        {
            quote: "The recruitment services provided by Falx Lata were exceptional. They understood our requirements perfectly and found candidates who were not just qualified but also perfect cultural fits.",
            name: "Michael Chen",
            position: "HR Director",
            company: "Global Finance Corp"
        },
        {
            quote: "Outsourcing our payroll to Falx Lata was one of the best business decisions we've made. Their attention to detail and commitment to compliance is impressive.",
            name: "Priya Sharma",
            position: "Operations Manager",
            company: "Innovate Manufacturing"
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

                {/* Hero Section with Image */}
                <section className="relative h-[500px] md:h-[700px] mb-16">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/images/services/hr-services-hero.jpg" 
                            alt="Falx Lata Services" 
                            className="w-full h-full object-cover object-[center_0%]"
                        />
                        {/* No overlay to show natural image colors */}
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
                                Our Services
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
                            >
                                Optimize your business operations with our comprehensive, one-stop HR solutions tailored
                                to your company's unique needs
                            </motion.p>
                        </div>
                    </div>
                    
                    {/* Floating decorations positioned below header but above other content */}
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
                          src="/images/floating_image_02.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5" 
                        />
                    </div>
                    <div className="absolute top-[520px] left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_04-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5" 
                        />
                    </div>
                    
                    {/* Wave Bottom Shape */}
                    <div className="absolute bottom-0 top-101 left-0 right-0 z-20 w-full">
                        <img 
                            src="/images/Wave_White_bottom_left_shape_01.png" 
                            alt="Wave Shape" 
                            className="w-full"
                        />
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

                {/* Services Showcase */}
                <section className="container mx-auto px-4 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {serviceShowcases.map((showcase, index) => (
                            <motion.div 
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                                viewport={{once: true}}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                                        <img 
                                            src={showcase.image} 
                                            alt={showcase.title} 
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{showcase.title}</h3>
                                    <p className="text-gray-600 mb-6">{showcase.description}</p>
                                    <ul className="space-y-3">
                                        {showcase.highlights.map((highlight, idx) => (
                                            <motion.li 
                                                key={idx}
                                                initial={{opacity: 0, x: -10}}
                                                whileInView={{opacity: 1, x: 0}}
                                                transition={{delay: 0.1 * idx}}
                                                viewport={{once: true}}
                                                className="flex items-center"
                                            >
                                                <span className="h-6 w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700">{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <motion.div 
                                        className="mt-8"
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{delay: 0.4}}
                                        viewport={{once: true}}
                                    >
                                        <a 
                                            href="/contact" 
                                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                                        >
                                            Learn more about this service
                                            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Services Grid */}
                <section className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Complete Service Offering</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Explore our full range of HR services designed to meet all your business needs
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index}/>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 relative z-10">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                We take pride in delivering exceptional HR services that make a difference for our clients
                            </p>
                        </motion.div>
                        
                        <div className="max-w-4xl mx-auto relative">
                            {/* Testimonial Cards */}
                            <div className="overflow-hidden">
                                <div className="testimonial-container relative" style={{ height: '250px' }}>
                                    {testimonials.map((testimonial, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, x: 100}}
                                            animate={{
                                                opacity: activeTestimonial === index ? 1 : 0,
                                                x: activeTestimonial === index ? 0 : 100,
                                                position: activeTestimonial === index ? 'relative' : 'absolute'
                                            }}
                                            transition={{duration: 0.7, ease: "easeInOut"}}
                                            className="bg-white rounded-xl shadow-lg p-8 md:p-10 w-full"
                                            style={{
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                display: activeTestimonial === index ? 'block' : 'none'
                                            }}
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div className="mb-6">
                                                    <svg className="h-12 w-12 text-gray-300" fill="currentColor" viewBox="0 0 32 32">
                                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700 mb-6 text-lg italic">{testimonial.quote}</p>
                                                <div>
                                                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Testimonial Navigation */}
                            <div className="flex justify-center mt-8">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`h-3 w-3 mx-1 rounded-full ${
                                            activeTestimonial === index 
                                            ? 'bg-blue-600' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        } transition-colors duration-300`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                

                {/* Call to Action */}
                <div className="container mx-auto px-4 mb-16 relative z-10">
                    {/* Image with wave decorations */}
                    <div className="relative">
                        {/* Top Wave Decoration - positioned at the top of the image */}
                        <div className="absolute top-0 left-0 right-0 z-10 w-full">
                            <img 
                                src="/images/top_wave_01.png" 
                                alt="Top wave decoration" 
                                className="w-full"
                            />
                        </div>
                        
                        {/* Main Image */}
                        <div className="mt-6">
                            <img 
                                src="/images/hrsev.jpg" 
                                alt="Professional HR Team" 
                                className="w-full"
                            />
                        </div>
                        
                        {/* Bottom Wave Decoration - positioned at the bottom of the image */}
                        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
                            <img 
                                src="/images/bottom_wave_02_gray.png" 
                                alt="Bottom wave decoration" 
                                className="w-full"
                            />
                        </div>
                         {/* Floating decorations positioned below header but above other content */}
                    <div className="absolute top-[270px] right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'float 10s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_03-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform translate-x-1/5" 
                        />
                    </div>
                    <div className="absolute left-0 top-[0px] left-0 w-[21rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 10s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_02.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5" 
                        />
                    </div>
                    <div className="absolute top-[520px] left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 10s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_04-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5" 
                        />
                    </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center mt-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Don't See the Right Fit?
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                We're always looking for talented individuals to join our team. Send us your resume and we'll keep
                                you in mind for future opportunities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                                >
                                    Submit Your Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-600" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414z"
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
                    </div>
                </div>


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
                    
                    .testimonial-container > div {
                        transition: all 0.7s ease-in-out;
                    }
                `}</style>
            </div>
        </>
    );
}