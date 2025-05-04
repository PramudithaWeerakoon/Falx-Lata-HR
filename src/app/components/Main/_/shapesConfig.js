'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Shapes configuration for different sections
const shapesConfig = {
  hero: [
    {
      type: 'blob',
      position: { top: '10%', left: '15%' },
      size: { width: 300, height: 300 },
      colors: 'from-rose-400 to-pink-300',
      opacity: 0.7,
      blur: 'blur-xl',
      animation: {
        y: [-10, 10],
        duration: 15,
        delay: 0
      }
    },
    {
      type: 'circle',
      position: { top: '30%', right: '10%' },
      size: { width: 400, height: 400 },
      colors: 'from-cyan-400 to-blue-300',
      opacity: 0.6,
      blur: 'blur-xl',
      animation: {
        y: [10, -15],
        duration: 18,
        delay: 2
      }
    },
    {
      type: 'blob',
      position: { bottom: '10%', left: '5%' },
      size: { width: 350, height: 350 },
      colors: 'from-amber-300 to-orange-200',
      opacity: 0.5,
      blur: 'blur-xl',
      animation: {
        y: [0, 20],
        duration: 20,
        delay: 5
      }
    }
  ],
  about: [
    {
      type: 'circle',
      position: { top: '5%', right: '-5%' },
      size: { width: 250, height: 250 },
      colors: 'from-teal-200 to-blue-200',
      opacity: 0.4,
      blur: 'blur-lg',
      animation: {
        x: [0, -20],
        duration: 25,
        delay: 0
      }
    },
    {
      type: 'blob',
      position: { bottom: '10%', left: '-10%' },
      size: { width: 400, height: 400 },
      colors: 'from-amber-200 to-orange-100',
      opacity: 0.3,
      blur: 'blur-xl',
      animation: {
        x: [-5, 15],
        duration: 30,
        delay: 3
      }
    }
  ]
};

const FloatingShapes = ({ section = 'hero', scrollFactor = 0.1 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get the appropriate shapes configuration based on the section
  const shapes = shapesConfig[section] || [];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => {
        // Calculate parallax offset based on scroll
        const yOffset = scrollY * scrollFactor * (index % 2 === 0 ? 1 : -1);

        return (
          <motion.div
            key={index}
            className={`absolute ${shape.blur} rounded-full bg-gradient-to-br ${shape.colors}`}
            style={{
              ...shape.position,
              width: shape.size.width,
              height: shape.size.height,
              opacity: shape.opacity,
              translateY: yOffset
            }}
            animate={{
              y: shape.animation.y,
              x: shape.animation.x || [0, 0]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: shape.animation.duration,
              delay: shape.animation.delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

// Specialized shape components - SVG blobs for more organic shapes
const BlobShape = ({ className, colors, ...props }) => {
  // Random selection of blob SVG paths for variety
  const blobPaths = [
    "M45.5,-58.1C61.2,-47.1,77.5,-33.6,79.9,-17.8C82.3,-2.1,70.8,15.9,58.7,30.3C46.6,44.7,34,55.5,18.8,63.1C3.7,70.7,-13.9,75.1,-30.2,70.4C-46.5,65.7,-61.5,51.9,-68.2,35.1C-74.9,18.3,-73.2,-1.6,-65.8,-17.4C-58.4,-33.2,-45.1,-45,-31.2,-56.2C-17.2,-67.4,-2.6,-78,9.6,-77.1C21.7,-76.1,29.9,-69.1,45.5,-58.1Z",
    "M50,-67.5C64.2,-55.1,75.3,-38,78.9,-19.8C82.5,-1.5,78.8,18,69.8,34C60.8,50,46.6,62.5,29.7,70.4C12.8,78.2,-6.9,81.4,-25.3,76.6C-43.7,71.8,-60.9,59.1,-71.3,42.1C-81.7,25,-85.3,3.6,-80.4,-15C-75.5,-33.6,-62,-49.3,-46.3,-61.8C-30.6,-74.2,-12.7,-83.3,3.7,-81.1C20,-78.9,35.8,-79.9,50,-67.5Z",
    "M54.7,-72.8C68.9,-62.1,77.5,-43.2,80.4,-24.6C83.3,-6,80.5,12.4,72.2,26.7C63.9,41.1,50,51.5,35.2,59.3C20.3,67.2,4.5,72.5,-10.4,70.9C-25.3,69.2,-39.2,60.6,-50.8,49C-62.4,37.4,-71.6,22.8,-73.3,7.2C-75,-8.4,-69.1,-25,-59.1,-36.5C-49.1,-48,-35,-54.3,-21.2,-64.7C-7.5,-75.1,5.9,-89.6,20.9,-87.8C35.9,-86,51.4,-67.9,54.7,-72.8Z"
  ];

  // Pick a random path
  const randomPath = blobPaths[Math.floor(Math.random() * blobPaths.length)];

  return (
    <div className={`absolute ${className}`} {...props}>
      <svg
        viewBox="-100 -100 200 200"
        className="w-full h-full"
      >
        <path
          d={randomPath}
          className={`fill-current ${colors || 'text-pink-300'} opacity-70`}
        />
      </svg>
    </div>
  );
};

export { FloatingShapes, BlobShape };