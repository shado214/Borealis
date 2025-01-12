import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AuroraBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  useEffect(() => {
    // Performance monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;
    
    const checkPerformance = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = time;
        
        // Disable animations if FPS drops below 30
        if (fps < 30) {
          setShouldAnimate(false);
        }
      }
      if (shouldAnimate) {
        requestAnimationFrame(checkPerformance);
      }
    };
    
    // Start monitoring
    const supportsWebGL = (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    })();
    
    if (supportsWebGL) {
      requestAnimationFrame(checkPerformance);
    } else {
      setShouldAnimate(false);
    }
    
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  // Fallback for reduced motion or performance issues
  if (prefersReducedMotion || !shouldAnimate) {
    return (
      <div className="absolute inset-0 bg-aurora-light dark:bg-aurora-dark opacity-80 dark:opacity-60" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Aurora Layer */}
      <motion.div
        className="absolute inset-0 bg-aurora-light dark:bg-aurora-dark opacity-80 dark:opacity-60"
        animate={{
          scale: [1, 1.4, 1.2, 1],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          filter: [
            'hue-rotate(0deg) brightness(1) saturate(1)',
            'hue-rotate(90deg) brightness(1.5) saturate(2)',
            'hue-rotate(180deg) brightness(1.4) saturate(1.8)',
            'hue-rotate(0deg) brightness(1) saturate(1)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary Aurora Layer */}
      <motion.div
        className="absolute inset-0 bg-aurora-light dark:bg-aurora-dark opacity-60 dark:opacity-40 rotate-180"
        animate={{
          scale: [1.4, 1, 1.5, 1.4],
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          filter: [
            'hue-rotate(180deg) brightness(1) saturate(1)',
            'hue-rotate(270deg) brightness(1.5) saturate(2)',
            'hue-rotate(360deg) brightness(1.4) saturate(1.8)',
            'hue-rotate(180deg) brightness(1) saturate(1)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/30"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}