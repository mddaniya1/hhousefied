import React, { useState } from 'react';
import { motion } from 'motion/react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

/**
 * BlurImage replicates Next.js style blur-up placeholder behavior with Framer Motion.
 * It provides an elegant shimmer and blur-dissolve transition upon loading.
 */
export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Warm Ambient Shimmer / Placeholder Skeleton */}
      <div
        className={`absolute inset-0 bg-[#E8E5DF] transition-opacity duration-700 pointer-events-none z-0 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>

      {/* Main Image with Framer Motion fade-in & blur dissolve */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        initial={{ opacity: 0, filter: 'blur(16px)', scale: 1.05 }}
        animate={
          isLoaded
            ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
            : { opacity: 0, filter: 'blur(16px)', scale: 1.05 }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        onLoad={() => setIsLoaded(true)}
        className={`relative z-10 w-full h-full object-cover transition-transform duration-700 ${className}`}
      />
    </div>
  );
};
