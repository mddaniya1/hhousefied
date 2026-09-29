import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactCTAProps {
  onOpenConsultation?: (service?: string) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceNeeded: 'Luxury Kitchen',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#111111] text-white pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Upper Conversation Box: Headline & Text on Left, Form/Photo on Right matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 sm:pb-20 border-b border-white/10">
          
          {/* Left Column: Heading and Contact Information matching reference */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7">
            <div>
              <span className="text-white/60 text-[11px] uppercase tracking-widest font-semibold block mb-2">
                Executive Contact Desk
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.06] tracking-[-0.03em]">
                Engage with Us in <br />
                Conversation.
              </h2>
            </div>

            <p className="text-[12px] sm:text-[13px] text-white/70 font-light leading-[1.75] max-w-lg">
              Have a newly constructed home or looking to remodel your luxury kitchen, modern wardrobes, or TV lounge in Karachi? Reach out to Hamza and the HOUSEFIED engineering team.
            </p>

            {/* Client Real Contact Info Block */}
            <div className="space-y-3.5 pt-2 text-xs text-white/80 border-t border-white/10">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Corporate Head Office:</span>
                  <span className="text-white/70">Office no 201, 2nd Floor, Qurtuba Market/Mall, near Grappetite Chowrangi, Bahadurabad, Karachi, 74800</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Satellite Presence:</span>
                  <span className="text-white/70">Block B, Adamjee Nagar Society, Karachi</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="https://wa.me/923394122544"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white hover:text-amber-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">+92 339 4122544</span>
                </a>

                <a
                  href="mailto:info.housefied@gmail.com"
                  className="flex items-center gap-2 text-white hover:text-amber-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/60" />
                  <span>info.housefied@gmail.com</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/50 pt-1">
                <Clock className="w-3.5 h-3.5 text-white/40" />
                <span>Closed · Opens 10:00 AM on Monday</span>
              </div>

            </div>
          </div>

          {/* Right Column: Lead Capture Form matching prompt specifications */}
          <div className="lg:col-span-6 bg-[#1A1A1A] rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Hamza from HOUSEFIED will call you directly at {formData.phone} to discuss your {formData.serviceNeeded} consultation.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/923394122544"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Connect</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold block mb-1">
                    Book a Free Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Schedule Your Karachi Site Visit
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Lead Capture Form Field 1: Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-semibold mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Khan"
                      className="w-full px-4 py-3 bg-[#242424] rounded-xl border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                    />
                  </div>

                  {/* Lead Capture Form Field 2: Phone Number */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-semibold mb-1.5">
                      Phone Number (WhatsApp Preferred)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 bg-[#242424] rounded-xl border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                    />
                  </div>

                  {/* Lead Capture Form Field 3: Service Needed Dropdown */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-semibold mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 bg-[#242424] rounded-xl border border-white/10 text-xs text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="Luxury Kitchen">Luxury Kitchen</option>
                      <option value="Bespoke Bathroom">Bespoke Bathroom</option>
                      <option value="Custom Wardrobes">Custom Wardrobes</option>
                      <option value="TV Wall/Lounge">TV Wall/Lounge</option>
                      <option value="Full Home Turnkey">Full Home Turnkey</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-bold rounded-xl transition-all duration-200 cursor-pointer shadow-lg"
                    >
                      <span>Book Free Consultation Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>

        {/* Lower Footer Navigation Grid matching reference with HOUSEFIED data */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Col 1: About & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-white text-[13px] tracking-tight">About HOUSEFIED</h4>
            <ul className="space-y-2 text-[12px] text-white/60 font-normal">
              <li><a href="#about" className="hover:text-white transition-colors">Our Founder Hamza</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Turnkey Execution Model</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Bahadurabad Studio</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Adamjee Nagar Presence</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers at HOUSEFIED</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-white text-[13px] tracking-tight">Core Services</h4>
            <ul className="space-y-2 text-[12px] text-white/60 font-normal">
              <li><a href="#collection" className="hover:text-white transition-colors">Luxury Kitchens</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Modern TV Walls & Lounges</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Bespoke Bathrooms</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Smart Wardrobes & Cabinetry</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Full Home Turnkey Execution</a></li>
            </ul>
          </div>

          {/* Col 3: Social Media Handles specified by client */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-white text-[13px] tracking-tight">Social Media</h4>
            <ul className="space-y-2 text-[12px] text-white/60 font-normal">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Facebook:</span>
                  <span className="text-white font-medium">Housefied Karachi</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Instagram:</span>
                  <span className="text-white font-medium">@housefied</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923394122544" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>WhatsApp:</span>
                  <span className="text-white font-medium">+92 339 4122544</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Massive Brand Wordmark at bottom right matching reference */}
          <div className="lg:col-span-3 flex flex-col lg:items-end justify-between pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-[-0.04em] text-white leading-none">
              HOUSEFIED
            </span>
            <span className="text-[11px] text-white/50 mt-2 block font-mono">
              Turning Homes into a Living Paradise
            </span>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
          <p>© {new Date().getFullYear()} HOUSEFIED. All rights reserved. Registered Interior Architecture Practice in Karachi, Pakistan.</p>
          <p>Supervised by Hamza · Elite Residential & Commercial</p>
        </div>

      </div>
    </section>
  );
};
