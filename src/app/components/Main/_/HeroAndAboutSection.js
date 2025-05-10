'use client'

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroAndAboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for shapes
  const shapeOneY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const shapeTwoY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const shapeThreeY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Ensure wave effect is properly triggered
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const height = window.innerHeight;
        containerRef.current.style.minHeight = `${height}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>

        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80"></div>
        </div>

        {/* Animated Shapes - following your reference image */}
        <motion.div
          className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-gradient-to-br from-rose-400 to-pink-300 rounded-full opacity-70 blur-xl"
          style={{ y: shapeOneY }}
        />

        <motion.div
          className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-gradient-to-tl from-cyan-400 to-blue-300 rounded-full opacity-60 blur-xl"
          style={{ y: shapeTwoY }}
        />

        <motion.div
          className="absolute bottom-[15%] left-[10%] w-[250px] h-[250px] bg-gradient-to-tr from-amber-300 to-orange-200 rounded-full opacity-50 blur-xl"
          style={{ y: shapeThreeY }}
        />

        {/* Content */}
        <div className="container mx-auto relative z-10 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl ml-0 md:ml-16 lg:ml-24 text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafting The Way To Your Business With The Right Person
            </h1>
            <div className="mt-10">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-full text-lg font-medium transition-colors"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Wave transition - seamless connection to About section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{
              filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.1))',
              transform: 'translateY(1px)' // Ensure no gap by slight overlap
            }}
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* About Section - No image, just content with styled UI */}
      <section className="relative bg-white py-12 md:py-20 z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Content only - no image as requested */}
              <div className="w-full">
                <span className="inline-block text-sm font-semibold text-teal-600 mb-2">WHO WE ARE</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Company</h2>

                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-blue-500 mb-8"></div>

                <p className="text-gray-700 text-lg mb-8">
                  In Falx Lata has been transforming HR solutions since 2015, with a dedicated team of professionals
                  committed to delivering exceptional talent acquisition and management services across multiple industries.
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <a href="/about" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 group">
                  Learn our full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-gradient-to-br from-teal-200 to-blue-200 opacity-70 blur-xl"></div>
          <div className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-200 to-orange-100 opacity-50 blur-xl"></div>
        </div>
      </section>
    </div>
  );
};

export default HeroAndAboutSection;