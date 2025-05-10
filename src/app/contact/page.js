'use client'

import React, { useState, useEffect } from 'react';

const WhatsAppRedirect = () => {
  const phoneNumber = "94777937691"; // Your WhatsApp number without the + sign

  const redirectToWhatsApp = (option) => {
    let message = "";

    // Set message based on selected option
    switch(option) {
      case "company":
        message = "Hello, I'm a company looking for recruitment/HR services.";
        break;
      case "candidate":
        message = "Hello, I'm a candidate looking for a job.";
        break;
      case "exploring":
        message = "Hello, I'm just exploring / have another inquiry.";
        break;
      default:
        message = "Hello, I'm interested in Falx Lata services.";
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const directWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in touch</h2>
        <p className="text-gray-600">
          Contact us via WhatsApp{" "}
          <span
            onClick={directWhatsApp}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            +94 777 937 691
          </span>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-3">I AM A...</h3>
        <div className="space-y-3">
          <button
            onClick={() => redirectToWhatsApp('company')}
            className="w-full py-3 px-4 bg-green-50 hover:bg-green-100 text-left border border-green-200 rounded-md flex items-center transition-colors"
          >
            <span className="text-green-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-800">Company looking for recruitment/HR services</span>
          </button>

          <button
            onClick={() => redirectToWhatsApp('candidate')}
            className="w-full py-3 px-4 bg-green-50 hover:bg-green-100 text-left border border-green-200 rounded-md flex items-center transition-colors"
          >
            <span className="text-green-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-800">Candidate looking for a job</span>
          </button>

          <button
            onClick={() => redirectToWhatsApp('exploring')}
            className="w-full py-3 px-4 bg-green-50 hover:bg-green-100 text-left border border-green-200 rounded-md flex items-center transition-colors"
          >
            <span className="text-green-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-800">Just exploring / Other inquiry</span>
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        Click an option above to start a WhatsApp chat with us
      </div>
    </div>
  );
};

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@falxlata.com';
  };

  const handlePhoneClick = () => {
    window.open(`https://wa.me/94777937691`, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-8">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQG7k5OHifw4wA/company-logo_200_200/company-logo_200_200/0/1683994128523/falx_lata_logo?e=2147483647&v=beta&t=H_feU7_TuKwnkGeqf8CdxmyADKIqvlmjbsQu7tXeC0U" alt="Falx Lata" className="h-8" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</a>
            <a href="/services" className="text-gray-800 hover:text-blue-600 transition-colors">Services</a>
            <a href="/about-us" className="text-gray-800 hover:text-blue-600 transition-colors">About</a>
            <a href="industries" className="text-gray-800 hover:text-blue-600 transition-colors">Industries We Serve</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span onClick={handleEmailClick} className="hidden md:inline-block text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
            <i className="far fa-envelope mr-1"></i>
            info@falxlata.com
          </span>
          <span onClick={handlePhoneClick} className="hidden md:inline-block text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
            <i className="fas fa-phone-alt mr-1"></i>
            +94 777 937 691
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Connect With Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function HeroSection() {
    // Create simple animation effects using CSS and React state
    const [floatingElements, setFloatingElements] = useState([]);

    // Initialize floating elements on mount
    useEffect(() => {
        const elements = [...Array(8)].map((_, i) => ({
            id: i,
            color: i % 3 === 0 ? 'bg-blue-200' : i % 2 === 0 ? 'bg-purple-200' : 'bg-teal-200',
            size: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 3}s`
        }));
        setFloatingElements(elements);
    }, []);

    return (
        <>
            {/* Try both the imported Navbar and the custom one */}

            <CustomNavbar />

            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden min-h-screen flex items-center pt-16">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating bubble animation */}
                    {floatingElements.map((element) => (
                        <div
                            key={element.id}
                            className={`absolute rounded-full ${element.color} animate-float`}
                            style={{
                                width: element.size,
                                height: element.size,
                                left: element.left,
                                top: element.top,
                                filter: 'blur(40px)',
                                animationDuration: element.animationDuration,
                                animationDelay: element.animationDelay,
                                opacity: 0.3
                            }}
                        />
                    ))}

                    {/* Floating abstract shapes */}
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-dashed border-blue-300/30 rounded-full animate-spin-slow"
                    />

                    <div
                        className="absolute bottom-1/3 right-1/4 w-96 h-96 border-8 border-dotted border-purple-300/20 rounded-full animate-spin-reverse"
                    />
                </div>

                {/* Hero content */}
                <div className="container mx-auto px-4 py-35 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left content */}
                        <div className="lg:w-1/2 relative">
                            {/* Floating 3D sphere animation */}
                            <div
                                className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 blur-xl animate-spin-slow"
                            />

                            <div className="animate-fade-in-left">
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    <span className="block">Time to</span>
                                    <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        Contact Us .
                                    </span>
                                </h1>

                                <div
                                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 animate-expand-width"
                                    style={{ width: '120px' }}
                                />

                                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                                    Work with the best HR services and recruitment in the region
                                </p>

                                <div className="inline-block relative group">
                                    <div
                                        className="absolute -inset-2 bg-blue-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                                    <a
                                        href="/contact"
                                        className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center transform hover:scale-105 active:scale-95"
                                    >
                                        Contact Us
                                        <span className="ml-2 animate-arrow-bounce">
                                            &rarr;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <WhatsAppRedirect/>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(20px, -20px);
                        }
                    }

                    @keyframes spin-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes spin-reverse {
                        from {
                            transform: rotate(360deg);
                        }
                        to {
                            transform: rotate(0deg);
                        }
                    }

                    @keyframes fade-in-left {
                        from {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes expand-width {
                        from {
                            width: 0;
                        }
                        to {
                            width: 120px;
                        }
                    }

                    @keyframes arrow-bounce {
                        0%, 100% {
                            transform: translateX(0);
                        }
                        50% {
                            transform: translateX(5px);
                        }
                    }

                    @keyframes wave {
                        0%, 100% {
                            transform: rotate(0deg);
                        }
                        25% {
                            transform: rotate(10deg);
                        }
                        75% {
                            transform: rotate(-10deg);
                        }
                    }

                    @keyframes float-diagonal {
                        0%, 100% {
                            transform: translate(-20px, -20px) rotate(-5deg);
                        }
                        50% {
                            transform: translate(20px, 20px) rotate(5deg);
                        }
                    }

                    .animate-float {
                        animation: float 8s ease-in-out infinite;
                    }

                    .animate-spin-slow {
                        animation: spin-slow 15s linear infinite;
                    }

                    .animate-spin-reverse {
                        animation: spin-reverse 20s linear infinite;
                    }

                    .animate-fade-in-left {
                        animation: fade-in-left 0.8s ease-out;
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out 0.3s both;
                    }

                    .animate-expand-width {
                        animation: expand-width 0.8s ease-out 0.4s both;
                    }

                    .animate-arrow-bounce {
                        animation: arrow-bounce 1.5s ease-in-out infinite;
                    }

                    .animate-wave {
                        animation: wave 2s ease-in-out infinite;
                    }

                    .animate-float-diagonal {
                        animation: float-diagonal 8s ease-in-out infinite;
                    }
                `}</style>
            </div>
        </>
    );
}