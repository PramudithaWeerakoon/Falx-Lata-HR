'use client'

import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

// Animated Background Shape component
function AnimatedShape({className}) {
    const [position, setPosition] = useState({
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 0.5
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition({
                x: Math.random() * 100,
                y: Math.random() * 100,
                scale: 0.5 + Math.random() * 0.5
            });
        }, 10000 + Math.random() * 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className={`absolute rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-600 opacity-10 ${className}`}
            animate={{
                x: `${position.x}%`,
                y: `${position.y}%`,
                scale: position.scale
            }}
            initial={{
                x: `${position.x}%`,
                y: `${position.y}%`,
                scale: position.scale
            }}
            transition={{
                duration: 15,
                ease: "easeInOut"
            }}
        />
    );
}

// Icons for industries (unchanged)
const IndustryIcons = {
    IT: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
        </svg>
    ),
    Insurance: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
        </svg>
    ),
    Banking: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
        </svg>
    ),
    BPO: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
        </svg>
    ),
    Engineering: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4.867 19.125h.008v.008h-.008v-.008Z"/>
        </svg>
    ),
    Automotive: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
        </svg>
    ),
    Construction: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
        </svg>
    ),
    Education: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
        </svg>
    ),
    Healthcare: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
        </svg>
    ),
    Printing: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"/>
        </svg>
    ),
};

// Main Industries Component
export default function IndustriesSection() {
    const [activeTab, setActiveTab] = useState('overview');
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const industries = [
        {
            name: "Information Technology (IT) & Software",
            icon: IndustryIcons.IT,
            description: "Specialized recruitment for software development, IT infrastructure, cybersecurity, and digital transformation roles."
        },
        {
            name: "Insurance",
            icon: IndustryIcons.Insurance,
            description: "Comprehensive HR solutions for insurance companies, including actuarial, underwriting, and claims management positions."
        },
        {
            name: "Banking & Financial Institution",
            icon: IndustryIcons.Banking,
            description: "Expert recruitment for banking, finance, risk management, and compliance professionals across all levels."
        },
        {
            name: "BPO/KPO",
            icon: IndustryIcons.BPO,
            description: "End-to-end HR services for business and knowledge process outsourcing companies, including large-scale recruitment."
        },
        {
            name: "Engineering Industry",
            icon: IndustryIcons.Engineering,
            description: "Technical recruitment for engineering sectors including mechanical, electrical, civil, and industrial engineering."
        },
        {
            name: "Auto Mobile",
            icon: IndustryIcons.Automotive,
            description: "Specialized HR services for automotive industry including manufacturing, supply chain, and automotive technology roles."
        },
        {
            name: "Construction",
            icon: IndustryIcons.Construction,
            description: "Recruitment solutions for construction industry covering project management, site supervision, and skilled trades."
        },
        {
            name: "Education",
            icon: IndustryIcons.Education,
            description: "HR services for educational institutions including academic staff, administrative personnel, and support roles."
        },
        {
            name: "Health & Care",
            icon: IndustryIcons.Healthcare,
            description: "Healthcare recruitment covering medical professionals, nurses, allied health, and healthcare administration."
        },
        {
            name: "Printing",
            icon: IndustryIcons.Printing,
            description: "Specialized recruitment for printing and publishing industry including pre-press, press operations, and digital printing."
        }
    ];

    const clientLogos = [
        "TechCorp",
        "FinanceHub",
        "HealthPro",
        "EduSystems",
        "BuildRight",
        "AutoInnovate",
        "InsureTrust",
        "PrintMasters",
        "BPO Global",
        "EngiTech"
    ];

    // Content for tabs
    const tabContent = {
        overview: {
            title: 'Industry Overview',
            description: 'At Falx Lata, we understand that different industries have unique HR challenges and requirements. Our industry-specific expertise enables us to provide tailored solutions that address the distinct needs of each sector, helping our clients successfully navigate their human resource challenges.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        approach: {
            title: 'Our Approach',
            description: 'We employ a sector-specific approach to recruitment and HR services, drawing on our deep understanding of industry dynamics, talent landscapes, and regulatory requirements. This enables us to deliver precise solutions that align with the strategic goals and operational needs of businesses across various industries.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
            ),
        },
        expertise: {
            title: 'Our Expertise',
            description: 'Our team brings specialized knowledge in each industry we serve, allowing us to understand the nuanced skills, qualifications, and cultural fit required for roles within specific sectors. This expertise translates into more effective recruitment, higher quality placements, and tailored HR solutions that drive organizational success.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            ),
        },
    };

    // Background shapes for sections with white background
    const BackgroundShapes = () => (
        <>
            <AnimatedShape className="w-64 h-64 top-20 -left-16"/>
            <AnimatedShape className="w-96 h-96 bottom-20 -right-16"/>
            <AnimatedShape className="w-48 h-48 top-96 right-1/4"/>
        </>
    );

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
                <section className="relative h-[500px] md:h-[750px] mb-16">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/images/industries serve.jpg" 
                            alt="Falx Lata Industries" 
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Dark overlay with reduced opacity */}
                        <div className=""></div>
                    </div>
                  
                    {/* Hero Content */}
                    <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center">
                        <div className="text-center text-white">
                            <motion.span
                                initial={{opacity: 0, y: -15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4}}
                                className="inline-block text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-2"
                            >
                                INDUSTRIES WE SERVE
                            </motion.span>
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.1}}
                                className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
                            >
                                Specialized HR Solutions Across Industries
                            </motion.h1>
                            <motion.div                                initial={{width: 0}}
                                animate={{width: "120px"}}
                                transition={{duration: 0.8, delay: 0.3}}
                                className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-6"
                            />
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg mb-8"
                            >
                                Understanding the unique challenges and requirements of each sector
                            </motion.p>
                        </div>
                    </div>
                    
                    {/* Floating decorations */}
                    <div className="absolute top-[270px] right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-30" 
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
                          className="w-full h-full object-contain transform -translate-x-1/5 opacity-90" 
                        />
                    </div>
                    <div className="absolute left-10 top-[550px] w-[31rem] h-[31rem] pointer-events-none hidden md:block z-30" 
                        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
                        <img 
                          src="/images/floating_image_03-1.png" 
                          alt="Floating decoration" 
                          className="w-full h-full object-contain transform -translate-x-1/5 opacity-90" 
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

                {/* Industry Overview */}
                <section className="container mx-auto px-4 mb-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="text-3xl font-bold text-gray-900 mb-4"
                        >
                            Diverse Industry Expertise
                        </motion.h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <motion.p 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.1}}
                            viewport={{once: true}}
                            className="text-gray-600 text-lg mb-8"
                        >
                            Falx Lata has extensive experience providing HR solutions across various industries.
                            Our deep understanding of sector-specific requirements enables us to deliver targeted
                            recruitment and HR services that meet the unique needs of each industry.
                        </motion.p>
                    </div>
                </section>

                {/* Tab Navigation Like About-Us Page */}
                <section className="py-20 bg-gray-50 relative overflow-hidden mb-16">
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Our tailored approach to industry-specific HR challenges
                            </p>
                        </motion.div>

                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center mb-12">
                            <div className="inline-flex rounded-xl bg-white p-2 shadow-lg">
                                {Object.keys(tabContent).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                                            activeTab === tab 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tabContent[tab].title}
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
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3 bg-gradient-to-r from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                                    <div className="bg-white/20 rounded-full p-6 backdrop-blur-sm">
                                        {tabContent[activeTab].icon}
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">{tabContent[activeTab].title}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {tabContent[activeTab].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>                {/* Industries Grid */}
                <section className="container mx-auto px-4 mb-16 relative">                    <div className="text-center mb-12">
                        <motion.h2 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="text-3xl font-bold text-gray-900 mb-4"
                        >
                            Industries We Serve
                        </motion.h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Decorative background shapes */}
                                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                    <AnimatedShape className="w-24 h-24 -top-4 -left-4"/>
                                    <AnimatedShape className="w-16 h-16 bottom-12 right-4"/>
                                </div>

                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-indigo-600">
                                        {industry.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-3 relative z-10">{industry.name}</h3>
                                <p className="text-gray-600 text-center relative z-10">{industry.description}</p>

                                {/* Bottom gradient bar */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                

                {/* Statistics Section */}
                <section className="container mx-auto px-4 mt-16 relative mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                        {/* Add animated shapes inside the white box */}
                        <div className="absolute inset-0 overflow-hidden">
                            <AnimatedShape className="w-32 h-32 top-4 left-4"/>
                            <AnimatedShape className="w-24 h-24 bottom-8 right-8"/>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</h3>
                                <p className="text-gray-600">Industries Served</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</h3>
                                <p className="text-gray-600">Client Companies</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">30+</h3>
                                <p className="text-gray-600">Successful Placements</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">95%</h3>
                                <p className="text-gray-600">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="container mx-auto px-4 mt-16 relative z-10 mb-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Looking for Industry-Specific HR Solutions?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let us leverage our industry expertise to help you find the right talent and optimize
                            your HR operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Contact Us Today
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-600"
                                     viewBox="0 0 20 20"
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