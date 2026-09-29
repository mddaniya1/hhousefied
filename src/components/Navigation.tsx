import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavigationProps {
  onOpenConsultation?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F8F7F4] sticky top-0 z-40 border-b border-black/[0.04]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Brand Wordmark matching reference layout: HOUSEFIED */}
        <a
          href="#"
          className="flex items-baseline tracking-[-0.03em] text-2xl sm:text-[26px] font-extrabold text-[#111111]"
          aria-label="HOUSEFIED Karachi Homepage"
        >
          <span>HOUSEFIED</span>
        </a>

        {/* Right Menu Links matching structure: Home, About, Projects, Services, Contact, Book Consultation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium text-[#111111]">
          <a href="#" className="hover:opacity-60 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#collection" className="hover:opacity-60 transition-opacity">Collection</a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          
          {/* Main Book Consultation CTA button */}
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 bg-[#111111] text-white hover:bg-black text-[12px] font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger & Quick Call */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://wa.me/923394122544"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-[#111111] text-white"
            aria-label="Direct WhatsApp helpline"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#111111] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F7F4] border-b border-black/[0.08] px-6 py-5 space-y-3">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#111111] py-1.5"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#111111] py-1.5"
          >
            About
          </a>
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#111111] py-1.5"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#111111] py-1.5"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#111111] py-1.5"
          >
            Contact
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white text-xs font-semibold py-3 rounded-xl"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
