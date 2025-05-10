'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Start loading the content
    setContentReady(true);
    
    // Check if images are loaded
    const handleLoad = () => {
      // Set a minimum loading time of 1.5 seconds for the animation to be visible
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    // Add event listener for when the window is fully loaded
    window.addEventListener('load', handleLoad);
    
    // If window already loaded, call handleLoad
    if (document.readyState === 'complete') {
      handleLoad();
    }

    // Use a fallback timer in case the load event doesn't fire
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-blue-600 z-50"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-16 h-16 mb-4 mx-auto"
              >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="5" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#fff" fontSize="20" fontFamily="Arial, sans-serif">FL</text>
                </svg>
              </motion.div>
              <h2 className="text-white text-xl font-bold">FALX LATA</h2>
              <p className="text-blue-100">Loading amazing HR solutions...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children regardless of loading state, but they'll be hidden behind the loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {contentReady && children}
      </motion.div>
    </>
  );
};

export default PageLoader;
