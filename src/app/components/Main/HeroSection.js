'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -15px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, 15px); }
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
      `;
      document.head.appendChild(style);
      return () => {
        if (style.parentNode) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  return (
    <div className="relative overflow-visible min-h-screen flex items-center justify-center">
      {/* Hero background with photo */}      <div className="absolute inset-0 z-0">
        {/* Main background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm">
          <img
            src="./images/young-students-learning-together-group-study.jpg"
            alt="HR Management background"
            className="w-full h-full object-cover filter brightness-80"
          />
        </div>
        
        {/* Bottom overlay image that sits at the end of the hero background */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-[1] translate-y-[3%]">
          <img 
            src="/images/Wave_White_bottom_left_shape_01.png" 
            alt="Bottom overlay" 
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Floating images in corners - only visible on PC */}
      <div className="absolute top-0 right-0 w-[33rem] h-[33rem] pointer-events-none hidden md:block" 
        style={isMounted ? { animation: 'float 6s ease-in-out infinite' } : {}}>
        <img 
          src="/images/floating_image_01.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform translate-x-1/4 -translate-y-1/4" 
        />
      </div>
      <div className="absolute top-0 left-0 w-[28rem] h-[28rem] pointer-events-none hidden md:block" 
        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
        <img 
          src="/images/floating_image_02.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform -translate-x-1/4 -translate-y-1/4" 
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-20 translate-y-[15%]" 
        style={isMounted ? { animation: 'float 6s ease-in-out infinite' } : {}}>
        <img 
          src="/images/floating_image_03-1.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform translate-x-1/5 translate-y-1/5" 
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-20 translate-y-[15%]" 
        style={isMounted ? { animation: 'floatReverse 6s ease-in-out infinite' } : {}}>
        <img 
          src="/images/floating_image_04-1.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform -translate-x-1/5 translate-y-1/5" 
        />
      </div>      <div className="container mx-auto px-4 py-16 pt-28 md:pt-36 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-extrabold mb-8 leading-tight text-white font-['Poppins',sans-serif] tracking-tight">
            <span className="block mb-2">We Empower to<span className="text-white">.</span></span>
            <span className="block text-white">
              Elevating the Business<span className="text-white">.</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-[20px] mb-10 text-[#EDEDED] max-w-2xl mx-auto font-normal font-['Poppins',sans-serif] leading-relaxed">
            Work with the right team which provides, HR solutions for your Business Growth
          </p>          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border border-white text-white font-medium rounded-full transition-all duration-300 font-['Poppins',sans-serif] px-[32px] py-[16px] hover:bg-white hover:text-black"
            >
              Start connecting with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;