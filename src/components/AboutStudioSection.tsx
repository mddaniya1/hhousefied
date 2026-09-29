import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BlurImage } from './BlurImage';

interface AboutStudioSectionProps {
  onOpenConsultation?: () => void;
}

export const AboutStudioSection: React.FC<AboutStudioSectionProps> = ({ onOpenConsultation }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 sm:px-10 lg:px-14 py-8 sm:py-12 max-w-[1360px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left: Rounded Modern Living Room Photo with BlurImage placeholder */}
        <div className="lg:col-span-6 relative rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[1.12/1] bg-[#E8E5DF]">
          <BlurImage
            src="/src/assets/images/modern_style_living_1790676237762.jpg"
            alt="HOUSEFIED Luxury Living Room by Hamza"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Editorial Content matching reference */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:pl-6">
          
          <div className="text-[12px] sm:text-[13px] font-normal text-[#5C5C5C] tracking-normal">
            Elegance · Timeless Execution
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] leading-[1.08] tracking-[-0.03em]">
            Modern Style <br />
            Timeless Charm
          </h2>

          <p className="text-[12px] sm:text-[13px] text-[#5C5C5C] leading-[1.7] max-w-lg pt-1">
            Founded by Hamza, HOUSEFIED is Karachi’s trusted name in turnkey interior design. We specialize in newly constructed luxury residences across DHA, Clifton, and Bahadurabad, bringing bespoke European cabinetry, monolithic quartz kitchens, and custom TV lounges to life with disciplined precision.
          </p>

          <div className="space-y-2 pt-1 pb-1">
            <div className="flex items-center gap-2 text-xs text-[#111111] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#111111]" />
              <span>Direct oversight by owner Hamza on every project</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#111111] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#111111]" />
              <span>Full turnkey execution: design, carpentry, electrical & finishes</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 bg-[#111111] text-white hover:bg-black text-[11px] font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              <span>About Us</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
