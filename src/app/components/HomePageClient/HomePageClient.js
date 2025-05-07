'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePageContent from '@/app/components/Main/Main';
import ScrollTriggeredMenu from '../NavBar/ScrollTriggeredMenu';

// Loading component
const LoadingScreen = () => (
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
        {/* FALX LATA logo SVG or similar - consider making this a separate component if complex */}
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="5" />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#fff" fontSize="20" fontFamily="Arial, sans-serif">FL</text>
        </svg>
      </motion.div>
      <h2 className="text-white text-xl font-bold">FALX LATA</h2>
      <p className="text-blue-100">Loading amazing HR solutions...</p>
    </div>
  </motion.div>
);

export default function HomePageClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollTriggeredMenu />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HomePageContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
