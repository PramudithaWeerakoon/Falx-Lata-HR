'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function WaveSeparator({ backgroundColor = 'white', waveColor = 'white' }) {
  const wavesRef = useRef(null);

  // Animation for moving waves on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!wavesRef.current) return;

      // Calculate scroll position relative to viewport height
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const scrollProgress = scrollY / viewport;

      // Apply subtle translation based on scroll
      wavesRef.current.style.transform = `translateY(${scrollProgress * 15}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor }}>
      {/* Top wave section */}
      <div
        ref={wavesRef}
        className="relative w-full h-32 md:h-48"
      >
        {/* Main wave - smooth curved transition */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill={waveColor}
            fillOpacity="1"
            d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Animated shapes */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: [20, 0, 10, 0],
            opacity: 1
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-orange-300/10 to-red-300/10 blur-lg mix-blend-overlay"
        />

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: [-10, 10, 0, 5],
            opacity: 1
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-300/10 to-purple-300/10 blur-lg mix-blend-overlay"
        />

        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: [5, -5, 15, 5],
            opacity: 1
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-300/10 to-orange-300/10 blur-lg mix-blend-overlay"
        />
      </div>
    </div>
  );
}

export default WaveSeparator;