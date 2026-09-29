import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, X } from 'lucide-react';
import { BlurImage } from './BlurImage';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 max-w-[1360px] mx-auto"
    >
      {/* Outer Rounded Architectural Frame matching reference: rounded-[28px] */}
      <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#594539] select-none">
        
        {/* Background Image with blur-up placeholder and initial fade-in */}
        <BlurImage
          src="/src/assets/images/hero_luxury_closet_1790679035226.jpg"
          alt="Turning Homes into a Living Paradise - HOUSEFIED Karachi"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center"
          priority
        />

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/30 z-20 pointer-events-none" />

        {/* Massive Center Title matching reference layout with HOUSEFIED Client Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-[14%] sm:top-[16%] flex flex-col items-center pointer-events-none text-center px-4 z-30"
        >
          <span className="text-white/80 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-2">
            Karachi, Pakistan · Founded by Hamza
          </span>
          <h1 className="text-white text-4xl sm:text-6xl md:text-[72px] lg:text-[84px] font-bold tracking-[-0.03em] leading-[1.05] max-w-5xl drop-shadow-sm">
            Turning Homes into a <br className="hidden sm:inline" />
            Living Paradise
          </h1>
        </motion.div>

        {/* Lower Left Card: Dark Translucent Overlay Card with client description & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 max-w-[290px] sm:max-w-[340px] bg-black/55 backdrop-blur-md border border-white/15 p-5 sm:p-6 rounded-[20px] text-white z-30"
        >
          <p className="text-[11px] sm:text-[12px] leading-[1.65] text-white/90 font-normal mb-4">
            Expert interior design and seamless execution services in Karachi. Crafting timeless spaces, luxury kitchens, modern wardrobes, and elegant living areas tailored to elite lifestyles.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white text-[#111111] hover:bg-[#F2EFE9] px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-md"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>

        {/* Lower Center: Floating Thumbnail Card with Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[50%] -translate-x-[50%] bottom-6 sm:bottom-10 hidden sm:flex items-center z-30"
        >
          <div
            onClick={() => setIsPlayingVideo(true)}
            className="relative w-36 h-24 sm:w-44 sm:h-28 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black/40 group cursor-pointer"
          >
            <BlurImage
              src="/src/assets/images/tv_wall_lounge_1790676633483.jpg"
              alt="HOUSEFIED Turnkey Living Room Tour"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
              <div className="w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md">
                <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-1.5 inset-x-0 text-center z-20">
              <span className="text-[10px] text-white/90 font-medium px-2 py-0.5 bg-black/60 rounded">
                Watch Studio Tour
              </span>
            </div>
          </div>
        </motion.div>

        {/* Lower Right: Circular Spinning Badge with curved text matching reference */}
        <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 pointer-events-none z-30">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path
                id="heroCircle"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="transparent"
              />
              <text className="text-[8.2px] uppercase tracking-[0.24em] fill-white font-medium">
                <textPath href="#heroCircle">
                  · HOUSEFIED · LIVING PARADISE · KARACHI ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-neutral-950 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative aspect-video flex flex-col items-center justify-center p-8 text-center bg-neutral-900">
              <BlurImage
                src="/src/assets/images/hero_luxury_closet_1790679035226.jpg"
                alt="HOUSEFIED Preview"
                containerClassName="absolute inset-0 w-full h-full opacity-30"
                className="w-full h-full object-cover"
              />
              <div className="relative z-10 space-y-3 max-w-md">
                <span className="text-xs uppercase tracking-widest text-amber-200 font-medium">HOUSEFIED Project Film</span>
                <h3 className="text-2xl font-bold text-white">Turnkey Luxury Execution in Karachi</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Experience how Hamza replicates architectural vision down to the millimeter across luxury kitchens, modern wardrobes, and bespoke living rooms.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsPlayingVideo(false);
                      onOpenConsultation?.();
                    }}
                    className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:bg-neutral-200 cursor-pointer"
                  >
                    Schedule In-Person Site Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};
