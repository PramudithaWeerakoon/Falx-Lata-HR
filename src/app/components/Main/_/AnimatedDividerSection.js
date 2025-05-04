'use client'

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HRIcons } from './HRIcons';

const AnimatedDividerSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for different elements
  const wave1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const wave2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const shape1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shape2 = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.7, 1, 1, 0.7]);

  // Animation for the floating shapes
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimationSlow = {
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity
          }}
          className="h-full w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5JTIwZW1wbG95ZWVzfGVufDB8fDB8fHww"
            alt="HR Management Team"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Wave shapes - animated */}
      <motion.div
        style={{ y: wave1 }}
        className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 255, 255, 0.05)"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,192C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      <motion.div
        style={{ y: wave2 }}
        className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 255, 255, 0.07)"
            d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,154.7C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* Floating colored shapes */}
      <motion.div
        className="absolute -top-20 -left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-orange-300/20 to-red-300/10 blur-3xl opacity-60"
        animate={floatAnimation}
      />

      <motion.div
        style={{ y: shape1 }}
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full opacity-60 blur-3xl"
        animate={floatAnimationSlow}
      />

      <motion.div
        style={{ y: shape2 }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/20 to-teal-500/20 rounded-full opacity-50 blur-3xl"
        animate={floatAnimation}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-cyan-300/10 to-blue-400/20 blur-3xl opacity-40"
        animate={floatAnimationSlow}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
        <motion.div
          style={{ y: textY }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Unlocking Human Potential, Driving Business Forward
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
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

      {/* Bottom decorative icons */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center gap-12 md:gap-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <HRIcons.Recruitment />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <HRIcons.Database />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <HRIcons.Process />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <HRIcons.Reports />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedDividerSection;