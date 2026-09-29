import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CollectionItem, COLLECTION_ITEMS } from '../data/interiorData';
import { BlurImage } from './BlurImage';

interface FeaturedCollectionProps {
  onSelectItem?: (item: CollectionItem) => void;
  onOpenConsultation?: () => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onSelectItem,
  onOpenConsultation,
}) => {
  return (
    <motion.section
      id="collection"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 sm:px-10 lg:px-14 py-10 sm:py-16 max-w-[1360px] mx-auto"
    >
      
      {/* Section Header matching reference */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] leading-[1.08] tracking-[-0.03em]">
            Explore Our Proudly <br />
            Collection
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3 max-w-sm">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 bg-[#111111] text-white hover:bg-black text-[11px] font-medium px-4 py-1.5 rounded-md transition-colors cursor-pointer"
          >
            <span>View More</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <p className="text-[11px] sm:text-[12px] text-[#5C5C5C] leading-relaxed text-left md:text-right">
            HOUSEFIED showcases its premier portfolio of luxury kitchens, bespoke living spaces, smart wardrobes, and turnkey executions across Karachi.
          </p>
        </div>
      </div>

      {/* Grid: 3 columns matching reference structure exactly with HOUSEFIED categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        
        {/* Column 1 (Left): Card 1 (Luxury Kitchens) & Card 4 (Smart Wardrobes & Cabinetry) */}
        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Card 1: Luxury Kitchens */}
          <div
            onClick={() => onSelectItem?.(COLLECTION_ITEMS[0])}
            className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[1.15/1] bg-[#E8E5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BlurImage
              src={COLLECTION_ITEMS[0].image}
              alt="Luxury Kitchens by HOUSEFIED Karachi"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight block">
                  Luxury Kitchens
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider block mt-0.5">
                  Smart & Stylish Culinary Spaces
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 4: Smart Wardrobes & Cabinetry */}
          <div
            onClick={() => onSelectItem?.(COLLECTION_ITEMS[3])}
            className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[1.15/1] bg-[#E8E5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BlurImage
              src={COLLECTION_ITEMS[3].image}
              alt="Smart Wardrobes & Cabinetry by HOUSEFIED"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight block">
                  Smart Wardrobes & Cabinetry
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider block mt-0.5">
                  Organized & Custom Storage
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

        {/* Column 2 (Center): Card 2: Modern TV Walls & Lounges (Tall) + Curated Dining */}
        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Card 2: Modern TV Walls & Lounges (Taller vertical card matching reference) */}
          <div
            onClick={() => onSelectItem?.(COLLECTION_ITEMS[1])}
            className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[0.92/1] bg-[#E8E5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BlurImage
              src={COLLECTION_ITEMS[1].image}
              alt="Modern TV Walls & Lounges by HOUSEFIED"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight block">
                  Modern TV Walls & Lounges
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider block mt-0.5">
                  Timeless & Elegant Entertainment
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card: Curated Dining Suites */}
          <div
            onClick={() => onSelectItem?.(COLLECTION_ITEMS[4])}
            className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[1.28/1] bg-[#E8E5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BlurImage
              src={COLLECTION_ITEMS[4].image}
              alt="Curated Dining Suites by HOUSEFIED"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight block">
                  Curated Dining Suites
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider block mt-0.5">
                  Turnkey Hospitality Spaces
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

        {/* Column 3 (Right): Card 3: Bespoke Bathrooms (Tall) + Reading Study */}
        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Card 3: Bespoke Bathrooms */}
          <div
            onClick={() => onSelectItem?.(COLLECTION_ITEMS[2])}
            className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[0.92/1] bg-[#E8E5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BlurImage
              src={COLLECTION_ITEMS[2].image}
              alt="Bespoke Bathrooms by HOUSEFIED"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight block">
                  Bespoke Bathrooms
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider block mt-0.5">
                  Where Luxury Meets Comfort
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card: Executive Study & Libraries */}
          <div
            onClick={() => onSelectItem?.(COLLECTION_ITEMS[5])}
            className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[1.28/1] bg-[#E8E5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BlurImage
              src={COLLECTION_ITEMS[5].image}
              alt="Executive Study & Libraries"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight block">
                  Executive Study & Libraries
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider block mt-0.5">
                  Acoustic Wooden Joinery
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </motion.section>
  );
};
