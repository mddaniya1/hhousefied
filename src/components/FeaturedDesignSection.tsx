import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BlurImage } from './BlurImage';

interface FeaturedDesignSectionProps {
  onSelectPiece?: (id: string) => void;
}

export const FeaturedDesignSection: React.FC<FeaturedDesignSectionProps> = ({ onSelectPiece }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 sm:px-10 lg:px-14 py-4 sm:py-6 max-w-[1360px] mx-auto"
    >
      {/* 2-Column Grid: Left Large Living Room (~7.2 cols) + Right Stacked (~4.8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        
        {/* Left: Large Architectural Feature with bottom-left rounded notch/cutout */}
        <div className="lg:col-span-8 relative rounded-[28px] overflow-hidden min-h-[460px] sm:min-h-[530px] lg:min-h-[580px] bg-[#E8E5DF] select-none group">
          {/* Main Large Image with blur-up placeholder */}
          <BlurImage
            src="/src/assets/images/modern_minimalist_living_1790677019221.jpg"
            alt="Modern Minimalist Living Room - Gorgeous Interior"
            containerClassName="w-full h-full min-h-[460px] sm:min-h-[530px] lg:min-h-[580px]"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />

          {/* Integrated Modern Minimalist Card at Bottom-Left */}
          <div className="absolute bottom-0 left-0 bg-[#F8F7F4] rounded-tr-[28px] pt-5 pr-8 pb-6 pl-6 sm:pt-6 sm:pr-10 sm:pb-7 sm:pl-8 max-w-[320px] sm:max-w-[360px] z-20">
            {/* Pill tag matching reference: "Gorgeous Interior" */}
            <div className="inline-block text-[11px] font-normal text-[#111111] border border-black/20 bg-transparent px-3 py-0.5 rounded-full mb-3 tracking-normal">
              Gorgeous Interior
            </div>
            {/* Bold Headline matching reference typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] leading-[1.05] tracking-[-0.035em]">
              Modern <br />
              Minimalist
            </h2>
          </div>
        </div>

        {/* Right: 2 Stacked Cards matching reference screenshot */}
        <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
          
          {/* Right Top Card: Warm Sand Background (#EAE6DF / #EFECE6) */}
          <div className="bg-[#EFECE6] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              {/* Pill tag: "Aesthetic" */}
              <div className="inline-block text-[11px] font-normal text-[#111111] border border-black/20 bg-transparent px-3.5 py-0.5 rounded-full mb-3 tracking-normal">
                Aesthetic
              </div>
              {/* Subtitle text matching reference */}
              <p className="text-[12px] sm:text-[13px] text-[#5C5C5C] leading-snug max-w-[240px]">
                Aesthetic furniture where every piece tells a story of style
              </p>
            </div>

            {/* Headline matching reference */}
            <div className="pt-8 sm:pt-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-[1.12] tracking-[-0.03em]">
                Into a gallery <br />
                of elegance
              </h3>
            </div>
          </div>

          {/* Right Bottom Card: Terrace Outdoor Armchair with BlurImage */}
          <div
            onClick={() => onSelectPiece?.('tv-walls-lounges')}
            className="relative rounded-[28px] overflow-hidden h-[250px] sm:h-[270px] bg-neutral-900 group cursor-pointer"
          >
            {/* Terracotta/Rust armchair image with blur-up placeholder */}
            <BlurImage
              src="/src/assets/images/terrace_red_armchair_1790677039582.jpg"
              alt="Indulge in the artistry of everyday living"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle scrim for typography readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent z-10 pointer-events-none" />

            {/* Top-Left text & tag matching reference */}
            <div className="absolute top-5 left-5 z-20">
              <span className="inline-block text-[11px] font-medium text-white/95 border border-white/35 bg-black/25 backdrop-blur-sm px-3 py-0.5 rounded-full mb-2">
                Best Furniture
              </span>
              <p className="text-white text-[12px] sm:text-[13px] font-normal max-w-[170px] leading-snug drop-shadow-sm">
                Indulge in the artistry of everyday living
              </p>
            </div>

            {/* Bottom-Right black circular arrow icon button */}
            <div className="absolute bottom-5 right-5 z-20">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
