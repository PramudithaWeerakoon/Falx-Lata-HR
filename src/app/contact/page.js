'use client'
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

import React, { useState, useEffect } from 'react';

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
            <Navbar />
            <div
                className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden min-h-screen flex items-center">
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

                                        <span className="ml-2 animate-arrow-bounce">
                                            &rarr;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right contact form with floating image */}
                        <div className="lg:w-1/2">
                            <div
                                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden animate-fade-in-up"
                            >
                                {/* Floating image with parallax effect */}
                                <div
                                    className="absolute -bottom-20 -right-20 w-64 h-64 opacity-10 animate-float-diagonal"
                                >
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4F46E5"
                                            d="M45.2,-58.3C58.1,-48.4,67.5,-33.4,70.5,-17.5C73.5,-1.6,70.2,15.2,61.1,29.6C52,44,37.2,56,19.8,65.1C2.4,74.2,-17.6,80.4,-33.1,74.2C-48.6,68,-59.6,49.4,-65.2,30.5C-70.8,11.6,-71,-7.6,-64.3,-23.7C-57.6,-39.8,-44,-52.8,-29.2,-62.1C-14.4,-71.4,1.6,-77.1,17.5,-72.8C33.4,-68.5,48.9,-54.3,45.2,-58.3Z"
                                            transform="translate(100 100)" />
                                    </svg>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                                        <span className="inline-block mr-2 animate-wave">
                                            👋
                                        </span>
                                        Get in touch
                                    </h3>

                                    <div className="space-y-5 mb-8">
                                        <div
                                            className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 relative overflow-hidden hover:translate-x-1 transition-transform">
                                            <div
                                                className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full opacity-20" />
                                            <div className="bg-blue-100 p-3 rounded-full mr-4 z-10">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="z-10">
                                                <p className="text-sm text-gray-500">Email us at</p>
                                                <p className="text-gray-900 font-medium">info@falxlata.com</p>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 relative overflow-hidden hover:translate-x-1 transition-transform">
                                            <div
                                                className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-100 rounded-full opacity-20" />
                                            <div className="bg-purple-100 p-3 rounded-full mr-4 z-10">
                                                <svg className="w-6 h-6 text-purple-600" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div className="z-10">
                                                <p className="text-sm text-gray-500">Call/WhatsApp</p>
                                                <p className="text-gray-900 font-medium">+94 777 937 691</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 pt-6">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center">
                                            <span className="inline-block mr-2 animate-pulse">
                                                ✨
                                            </span>
                                            I am a...
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="hover:scale-105 active:scale-95 transition-transform">
                                                <a href="/company"
                                                    className="block w-full text-left px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg transition-all duration-300 border border-gray-200 text-gray-800 font-medium">
                                                    Company looking for recruitment/HR services
                                                </a>
                                            </div>
                                            <div className="hover:scale-105 active:scale-95 transition-transform">
                                                <a href="/candidate"
                                                    className="block w-full text-left px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg transition-all duration-300 border border-gray-200 text-gray-800 font-medium">
                                                    Candidate looking for a job
                                                </a>
                                            </div>
                                            <div className="hover:scale-105 active:scale-95 transition-transform">
                                                <a href="/contact"
                                                    className="block w-full text-left px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg transition-all duration-300 border border-gray-200 text-gray-800 font-medium">
                                                    Just exploring / Other inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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