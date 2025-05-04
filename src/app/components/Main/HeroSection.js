'use client'

import { motion } from 'framer-motion';
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Hero background with shaped corners */}
      <div className="absolute inset-0 z-0">
        {/* Main background image with overlay */}
        <div className="absolute inset-0 bg-black/50">
          <img
            src="./hr.jpeg"
            alt="HR Management background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main curved shape overlay - similar to the pink line */}
        <div className="absolute inset-0 z-2 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1400 800"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,400 Q150,250 400,350 T700,250 T1000,350 T1300,200 L1400,0 L0,0 Z"
              fill="rgba(99, 102, 241, 0.5)"
              className="opacity-70"
            />
            <path
              d="M-100,300 Q150,600 400,400 T900,500 T1400,300 L1400,800 L0,800 L-100,300 Z"
              fill="rgba(236, 72, 153, 0.4)"
              className="opacity-60"
            />
          </svg>
        </div>

        {/* Bottom-left corner shape */}
        <div className="absolute bottom-0 left-0 w-1/3">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 300 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,300 L300,300 C200,200 100,250 0,150 Z"
              fill="#FCBB42"
              fillOpacity="0.6"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            variants={fadeInUp}
          >
            <span className="block">We Empower to </span>
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Elevating the Business
            </span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-8"
          />

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Work with the right team which provides, HR solutions for your Business Growth
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Start connecting with us</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


export default HeroSection;