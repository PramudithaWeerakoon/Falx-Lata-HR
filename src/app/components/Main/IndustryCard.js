'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// IndustryCard Component
export default function IndustryCard({ industry, icon, description, image, bgColor = "from-teal-500 to-blue-600", index = 0 }) {    return (        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
            className="relative overflow-hidden bg-white rounded-xl shadow-lg h-full group transform transition-all duration-300 hover:shadow-xl"
        >{/* Card image - top photo section */}
            {image && (                <div className="relative w-full h-48 overflow-hidden">
                    <Image 
                        src={image} 
                        alt={industry}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized={image.startsWith('https://')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            )}
            
            {/* Card content */}
            <div className="p-6">                <div className="mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        {icon}
                    </div><h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                        {industry}
                    </h3>
                    {description && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                            {description}
                        </p>
                    )}
                </div>
                  <div className="mt-auto pt-4">
                    <Link href="/industries" className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-colors duration-300">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
              {/* Decorative bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </motion.div>
    );
}
