import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/interiorData';
import { BlurImage } from './BlurImage';

interface ProjectShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: (category?: string) => void;
}

type FilterCategory = 'All' | 'Luxury Kitchens' | 'Modern Wardrobes' | 'Full Home Turnkey' | 'TV Walls & Lounges' | 'Bespoke Bathrooms';

const CATEGORIES: FilterCategory[] = [
  'All',
  'Luxury Kitchens',
  'Modern Wardrobes',
  'Full Home Turnkey',
  'TV Walls & Lounges',
  'Bespoke Bathrooms',
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category === activeCategory);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 sm:px-10 lg:px-14 py-12 sm:py-20 max-w-[1360px] mx-auto border-t border-black/[0.06]"
    >
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div>
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5C5C5C] flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
            HOUSEFIED Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] leading-tight tracking-[-0.03em]">
            Project Showcase
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          Filter our completed executions across newly constructed homes, luxury kitchens, modern wardrobes, and turnkey living spaces throughout Karachi.
        </p>
      </div>

      {/* Filter Tabs Mechanism with Framer Motion Layout Pill */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
        {CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-tight transition-colors duration-200 cursor-pointer whitespace-nowrap select-none ${
                isSelected ? 'text-white' : 'text-[#5C5C5C] hover:text-[#111111] hover:bg-black/[0.03]'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-[#111111] rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span>{category}</span>
              {category !== 'All' && (
                <span className={`ml-1.5 text-[10px] tabular-nums ${isSelected ? 'text-white/70' : 'text-[#5C5C5C]/60'}`}>
                  ({PROJECTS_DATA.filter((p) => p.category === category).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Animated Projects Grid with Framer Motion AnimatePresence & BlurImage */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.06] shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Frame with BlurImage */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E5DF]">
                <BlurImage
                  src={project.image}
                  alt={project.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[11px] font-medium text-white/95 border border-white/30 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Right Floating Action Arrow */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-lg group-hover:bg-[#111111] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 z-20">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#5C5C5C] mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#5C5C5C]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#5C5C5C] mt-1.5 line-clamp-1">
                    {project.scope}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="mt-4 pt-4 border-t border-black/[0.05] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-[10px] font-medium bg-[#F8F7F4] text-[#5C5C5C] px-2.5 py-0.5 rounded-full border border-black/[0.04]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#5C5C5C] pt-1">
                    <span className="font-mono text-[11px]">{project.year}</span>
                    <span className="font-semibold text-[#111111]">{project.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA for Project Inquiry */}
      <div className="mt-10 sm:mt-12 text-center">
        <button
          onClick={() => onOpenConsultation(activeCategory === 'All' ? undefined : activeCategory)}
          className="inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-black text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
        >
          <span>Book Consultation for {activeCategory === 'All' ? 'Your Project' : activeCategory}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </motion.section>
  );
};
