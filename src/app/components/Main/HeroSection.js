'use client'

import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative overflow-visible min-h-screen flex items-center justify-center">
      {/* Hero background with photo */}
      <div className="absolute inset-0 z-0">
        {/* Main background image with overlay */}
        <div className="absolute inset-0 bg-black/50">
          <img
            src="./images/young-students-learning-together-group-study.jpg"
            alt="HR Management background"
            className="w-full h-full object-cover"
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
      <div className="absolute top-0 right-0 w-[33rem] h-[33rem] pointer-events-none hidden md:block floating-animation">
        <img 
          src="/images/floating_image_01.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform translate-x-1/4 -translate-y-1/4" 
        />
      </div>
      <div className="absolute top-0 left-0 w-[28rem] h-[28rem] pointer-events-none hidden md:block floating-animation-reverse">
        <img 
          src="/images/floating_image_02.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform -translate-x-1/4 -translate-y-1/4" 
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-20 translate-y-[15%] floating-animation">
        <img 
          src="/images/floating_image_03-1.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform translate-x-1/5 translate-y-1/5" 
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-20 translate-y-[15%] floating-animation-reverse">
        <img 
          src="/images/floating_image_04-1.png" 
          alt="Floating decoration" 
          className="w-full h-full object-contain transform -translate-x-1/5 translate-y-1/5" 
        />
      </div>

      <div className="container mx-auto px-4 py-16 pt-28 md:pt-36 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="block">We Empower to </span>
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Elevating the Business
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-8" />

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Work with the right team which provides, HR solutions for your Business Growth
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @keyframes floatReverse {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(15px); }
  }

  .floating-animation {
    animation: float 6s ease-in-out infinite;
  }

  .floating-animation-reverse {
    animation: floatReverse 6s ease-in-out infinite;
  }
`}</style>