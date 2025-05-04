'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const WaveTransition = ({
  topColor = 'transparent',
  bottomColor = 'white',
  height = 150,
  wavePattern = 'gentle', // 'gentle', 'wavy', or 'curved'
  animated = true,
  position = 'bottom', // 'bottom' or 'top'
  className = ''
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Dynamic transform based on scroll position
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    animated ? [10, -10] : [0, 0]
  );

  // Different SVG paths for different wave patterns
  const getWavePath = () => {
    switch(wavePattern) {
      case 'wavy':
        return "M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,112C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
      case 'curved':
        return "M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";
      case 'gentle':
      default:
        return "M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
    }
  };

  // Flip the SVG if positioned at the top
  const flipSvg = position === 'top';

  useEffect(() => {
    // Ensure no gaps by adding slight negative margin
    if (containerRef.current) {
      const el = containerRef.current;
      el.style.marginBottom = position === 'bottom' ? '-2px' : '0';
      el.style.marginTop = position === 'top' ? '-2px' : '0';
    }
  }, [position]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${className}`}
      style={{
        height: `${height}px`,
        zIndex: 10,
        backgroundColor: topColor
      }}
    >
      <motion.div
        style={{ y: translateY }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          style={{
            transform: flipSvg ? 'rotate(180deg)' : 'rotate(0deg)',
            filter: 'drop-shadow(0 -2px 5px rgba(0,0,0,0.05))'
          }}
        >
          <path
            fill={bottomColor}
            fillOpacity="1"
            d={getWavePath()}
          ></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default WaveTransition;