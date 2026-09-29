import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/interiorData';

interface ServicesSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="services" className="px-6 sm:px-10 lg:px-14 py-12 sm:py-20 max-w-[1360px] mx-auto border-t border-black/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div>
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5C5C5C] block mb-2">
            Karachi Turnkey Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] leading-tight tracking-[-0.03em]">
            Bespoke Services & <br className="hidden sm:inline" />
            Disciplined Craft
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          From newly constructed home turnkeys in DHA to custom kitchens in Bahadurabad, every project is personally managed by Hamza with meticulous supervision.
        </p>
      </div>

      {/* Grid of 4 Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES_DATA.map((service: ServiceItem) => (
          <div
            key={service.number}
            className="bg-white rounded-[24px] p-7 sm:p-8 border border-black/[0.06] shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-[#5C5C5C] font-semibold">
                  {service.number}
                </span>
                <button
                  onClick={() => onOpenConsultation?.(service.title)}
                  className="w-8 h-8 rounded-full bg-[#F2EFE9] hover:bg-[#111111] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-[#5C5C5C] font-medium mt-1 mb-3">
                {service.subtitle}
              </p>
              <p className="text-xs text-[#5C5C5C] leading-relaxed mb-5">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#111111] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
