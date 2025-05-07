'use client'

import {useState, useEffect, useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {FloatingShapes} from './shapesConfig';
import WaveTransition from './WaveTransition';

const IntegratedPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const heroRef = useRef(null);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    // Toggle chat popup
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    // Parallax scrolling effect
    const {scrollYProgress} = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <main>
                {/* Hero Section */}
                <motion.section
                    ref={heroRef}
                    style={{opacity: heroOpacity}}
                    className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
                >
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 opacity-40 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80"></div>
                    </div>

                    {/* Animated Floating Shapes */}
                    <FloatingShapes section="hero" scrollFactor={0.1}/>

                    {/* Hero Content */}
                    <div className="container mx-auto relative z-10 px-4 mt-10 md:mt-0">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            className="max-w-3xl ml-0 md:ml-16 lg:ml-24 text-white"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Crafting The Way To Your Business With The Right Person
                            </h1>
                            <div className="mt-10">
                                <motion.button
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.3, duration: 0.6}}
                                    className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg font-medium"
                                >
                                    Contact Us
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Wave Transition - No Gap with Next Section */}
                    <div className="absolute bottom-0 left-0 w-full z-20">
                        <WaveTransition
                            topColor="transparent"
                            bottomColor="white"
                            height={120}
                            wavePattern="gentle"
                            animated={true}
                            position="bottom"
                        />
                    </div>
                </motion.section>

                {/* About Section - NO GAP between this and hero */}
                <section className="relative bg-white py-16 md:py-20 z-20">
                    <div className="container mx-auto px-4 md:px-12">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-12">
                                {/* Content only - no image as requested */}
                                <div className="w-full">
                                    <motion.div
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6}}
                                        viewport={{once: true}}
                                    >
                                        <span className="inline-block text-sm font-semibold text-teal-600 mb-2">WHO WE ARE</span>
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our
                                            Company</h2>

                                        <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-blue-500 mb-8"></div>

                                        <p className="text-gray-700 text-lg mb-8">
                                            InTalent Asia has been transforming HR solutions since 2015, with a
                                            dedicated team of professionals
                                            committed to delivering exceptional talent acquisition and management
                                            services across multiple industries.
                                        </p>
                                    </motion.div>

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
                                                initial={{opacity: 0, y: 20}}
                                                whileInView={{opacity: 1, y: 0}}
                                                transition={{delay: index * 0.1, duration: 0.5}}
                                                viewport={{once: true}}
                                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                                            >
                                                <div className="text-3xl mb-3">{item.icon}</div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm">{item.text}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{delay: 0.4, duration: 0.5}}
                                        viewport={{once: true}}
                                    >
                                        <a href="/about"
                                           className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 group">
                                            Learn our full story
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration elements */}
                    <FloatingShapes section="about" scrollFactor={0.05}/>
                </section>
            </main>

            {/* Chat widget */}
            <div
                className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-md z-50 hover:scale-105 transition-transform"
                onClick={toggleChat}
            >
                <i className="far fa-comment"></i>
                <div
                    className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs">
                    1
                </div>
            </div>

            {/* Chat options popup */}
            {isChatOpen && (
                <div
                    className="fixed bottom-[90px] right-5 w-[300px] bg-white rounded-lg p-5 shadow-lg text-gray-800 z-50 animate-fadeIn">
                    <h3 className="text-base mb-4 text-gray-800">
                        To help you better, could you please share your name, email, and contact number?
                    </h3>

                    <div className="py-3 border-b border-gray-200 mb-3">
                        <p className="mb-1 text-sm">You can also reach us anytime at:</p>
                        <p className="mb-1 text-sm">Email: info@falxlata.com</p>
                        <p className="mb-1 text-sm">Call/WhatsApp: +94 777 937 691</p>
                    </div>

                    <a href="#"
                       className="block w-full p-3 mb-3 rounded border border-gray-300 bg-gray-50 text-center text-gray-800 no-underline transition-all duration-300 hover:bg-gray-200">
                        I'm a Company looking for recruitment/HR services
                    </a>
                    <a href="#"
                       className="block w-full p-3 mb-3 rounded border border-gray-300 bg-gray-50 text-center text-gray-800 no-underline transition-all duration-300 hover:bg-gray-200">
                        I'm a Candidate looking for a job
                    </a>
                    <a href="#"
                       className="block w-full p-3 mb-3 rounded border border-gray-300 bg-gray-50 text-center text-gray-800 no-underline transition-all duration-300 hover:bg-gray-200">
                        I'm just exploring / Other inquiry
                    </a>
                </div>
            )}
        </div>
    );
};

export default IntegratedPage;