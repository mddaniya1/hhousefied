import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/interiorData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-12 sm:py-20 max-w-[1360px] mx-auto border-t border-black/[0.06]">
      
      <div className="max-w-xl mx-auto text-center mb-10 sm:mb-14">
        <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5C5C5C] block mb-2">
          Verified Google Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] leading-tight tracking-[-0.03em]">
          Client Testimonials
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5C5C] mt-2">
          Rated 5.0 Stars by luxury homeowners across Karachi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[24px] p-7 sm:p-8 border border-black/[0.06] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#111111]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#111111]" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] text-[#5C5C5C] font-medium bg-[#F2EFE9] px-2 py-0.5 rounded">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  {item.source}
                </span>
              </div>
              <Quote className="w-7 h-7 text-[#111111]/15 mb-3" />
              <p className="text-[13px] sm:text-[14px] text-[#111111] leading-relaxed font-normal mb-6">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-5 border-t border-black/[0.06]">
              <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">{item.client}</h4>
              <p className="text-[11px] text-[#5C5C5C] mt-0.5">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
