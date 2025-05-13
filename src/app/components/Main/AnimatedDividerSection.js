'use client'

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HRIcons } from './HRIcons';

// Mobile-specific styles
const mobileBackgroundStyle = `
  @media (max-width: 767px) {
    .mobile-background-adjust {
      background-size: cover !important;
      background-position: center center !important;
      transform: none !important;
    }

    html, body {
      overflow-x: hidden;
    }

    * {
      box-sizing: border-box;
    }
  }
`;

const AnimatedDividerSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const wave1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const wave2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const shape1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shape2 = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[70vh] md:h-[80vh] w-full overflow-visible text-black ${isMobile ? 'mb-32' : ''}`}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <style jsx global>{mobileBackgroundStyle}</style>

      {/* Floating shape top-left */}
      <motion.div 
        className="absolute top-[12.5rem] left-[2.5rem] w-80 h-80 md:w-[35rem] md:h-96 z-[200] opacity-100 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 8, ease: 'easeInOut' }}
      >
        <img src="/images/floating_image_03-1.png" alt="Decorative shape" className="w-full h-auto" />
      </motion.div>

      {/* Background image */}
      <div
        className="absolute inset-0 z-0 mobile-background-adjust"
        style={{
          top: '-12rem',
          bottom: '-5rem',
          backgroundImage: "url('/images/2nd.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Floating shape bottom-right */}
      <motion.div 
        className="absolute bottom-[17.5rem] right-0 w-64 h-74 md:w-[30rem] md:h-[35rem] z-30 opacity-100 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -7, 0], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10, ease: 'easeInOut' }}
      >
        <img src="/images/floating_image_01.png" alt="Decorative shape" className="w-full h-auto" />
      </motion.div>

      {/* Floating shape center */}
      <motion.div 
        className="absolute top-[20rem] left-[21.25rem] transform -translate-x-1/2 w-72 h-72 md:w-100 md:h-80 z-60 opacity-100 hidden md:block"
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 9, ease: 'easeInOut' }}
      >
        <img src="/images/floating_image_04-1.png" alt="Decorative shape" className="w-full h-auto" />
      </motion.div>

      {/* Bottom wave (fixed) */}
      <div
        className="absolute left-0 right-0 w-full z-50"
        style={{
          bottom: isMobile ? '-7.9rem' : '-5.5rem'
        }}
      >
        <img
          src="/images/Wave_White_bottom_left_shape_01.png"
          alt="Bottom wave"
          className="w-full object-cover"
          style={{ display: 'block' }}
        />
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 w-full z-10 -mt-[15rem]">
        <img src="/images/top_wave_01.png" alt="Top wave" className="w-full object-cover" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center" style={{ transform: 'translateY(-3rem)' }}>
        <motion.div style={{ y: textY }} className="max-w-3xl mx-10 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            Unlocking Human Potential, Driving Business Forward
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black mb-8"
          >
            We are a young and creative company and we offer you fresh HR ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-[#3a79ff] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Spacer for mobile */}
      {isMobile && <div className="h-16"></div>}
    </section>
  );
};

export default AnimatedDividerSection;
