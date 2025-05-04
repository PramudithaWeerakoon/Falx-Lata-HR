'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import HomePage from '@/app/components/Main/Main';
import ScrollTriggeredMenu from './components/NavBar/ScrollTriggeredMenu';
import CareersSection from './careers/page';
import AboutSection from '@/app/about-us/page'
import Services from '@/app/services/page'
import Industries from '@/app/industries/page'
import Contact from '@/app/contact/page'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Loading component to be reused
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </motion.div>
      <h2 className="text-white text-xl font-bold">FALX LATA</h2>
      <p className="text-blue-100">Loading amazing HR solutions...</p>
    </div>
  </motion.div>
);

// App wrapper for routing
const AppWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the page resources
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // If still loading, show the loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollTriggeredMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersSection />} />
        <Route path="/about-us" element={<AboutSection />} />
         <Route path="/services" element={<Services />} />
         <Route path="/industries" element={<Industries />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

// Main Page Component
export default function Page() {
  return (
    <>
      <Head>
        <title>Falx Lata | HR Solutions Provider</title>
        <meta name="description" content="Falx Lata is a fully fledged HR solution provider specialized in Headhunting, Recruitment, HR functions setup, and Consultation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BrowserRouter>
            <AppWrapper />
          </BrowserRouter>
        </motion.div>
      </AnimatePresence>
    </>
  );
}