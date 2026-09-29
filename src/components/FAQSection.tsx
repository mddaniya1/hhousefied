import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/interiorData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="px-6 sm:px-10 lg:px-14 py-12 sm:py-20 max-w-[1360px] mx-auto border-t border-black/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5C5C5C] block">
            Client Inquiries & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] leading-tight tracking-[-0.03em]">
            Frequently Asked <br />
            Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed max-w-md pt-1">
            Learn more about our turnkey process, working directly with owner Hamza, and executing elite interior projects across Karachi.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 divide-y divide-black/[0.08]">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#5C5C5C] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 text-[#111111] transition-transform duration-200">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8 text-xs sm:text-sm text-[#5C5C5C] leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
