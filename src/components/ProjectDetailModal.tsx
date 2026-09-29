import React from 'react';
import { X, ArrowRight, Ruler, Award, Layers } from 'lucide-react';
import { CollectionItem } from '../data/interiorData';
import { BlurImage } from './BlurImage';

interface ProjectDetailModalProps {
  item: CollectionItem | null;
  onClose: () => void;
  onInquire: (itemName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  item,
  onClose,
  onInquire,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#F8F7F4] rounded-[24px] shadow-2xl overflow-hidden border border-black/10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#111111] flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Close detail modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Image Container (7 cols) with BlurImage */}
          <div className="md:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-neutral-900">
            <BlurImage
              src={item.image}
              alt={item.name}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-6 left-6 z-20">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                {item.category}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 text-white text-xs font-mono drop-shadow z-20">
              <span>HOUSEFIED Studio · Karachi</span>
            </div>
          </div>

          {/* Right: Technical Specifications (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#5C5C5C] block mb-1">
                HOUSEFIED Architectural Spec
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight tracking-tight">
                {item.name}
              </h2>
              <p className="text-xs text-[#5C5C5C] leading-relaxed mt-3">
                {item.description}
              </p>
            </div>

            {/* Spec Table */}
            <div className="space-y-3 pt-2 border-t border-black/[0.08] text-xs">
              <div className="flex items-start gap-2.5">
                <Ruler className="w-4 h-4 text-[#5C5C5C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#5C5C5C] block text-[10px] uppercase tracking-wider">Configuration</span>
                  <span className="font-mono text-[#111111] font-medium">{item.dimensions}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-[#5C5C5C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#5C5C5C] block text-[10px] uppercase tracking-wider">Premium Finishes</span>
                  <span className="text-[#111111] font-medium">{item.finish}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#5C5C5C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#5C5C5C] block text-[10px] uppercase tracking-wider">Execution Lead</span>
                  <span className="text-[#111111] font-medium">{item.designer}</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-black/[0.08]">
              <button
                onClick={() => {
                  onClose();
                  onInquire(item.name);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-white text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-black transition-colors cursor-pointer shadow-md"
              >
                <span>Book Consultation for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
