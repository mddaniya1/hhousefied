import React, { useState } from 'react';
import { X, Check, Phone, MapPin, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceNeeded: preselectedItem || 'Luxury Kitchen',
    location: 'DHA Phase 8, Karachi',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#F8F7F4] rounded-[24px] shadow-2xl overflow-hidden border border-black/10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#111111] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#5C5C5C] font-mono">
              Inquiry Ref #HF-{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Consultation Booked
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed max-w-md mx-auto">
              Thank you, {formData.name}. Hamza from HOUSEFIED will connect with you via WhatsApp ({formData.phone}) within a few hours to arrange your on-site meeting or design consultation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/923394122544"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Message on WhatsApp Now</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-9">
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5C5C5C] block mb-1">
                HOUSEFIED · Karachi Studio
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                Book a Free Consultation
              </h3>
              <p className="text-xs text-[#5C5C5C] mt-1.5 leading-relaxed">
                Meet with owner Hamza to explore bespoke kitchens, wardrobes, TV walls, or full turnkey execution for your residence.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#111111] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tariq Khan"
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/10 text-xs focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#111111] mb-1.5">
                  Phone Number (WhatsApp Preferred)
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/10 text-xs focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#111111] mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white rounded-xl border border-black/10 text-xs focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Luxury Kitchen">Luxury Kitchen</option>
                    <option value="Bespoke Bathroom">Bespoke Bathroom</option>
                    <option value="Custom Wardrobes">Custom Wardrobes</option>
                    <option value="TV Wall/Lounge">TV Wall/Lounge</option>
                    <option value="Full Home Turnkey">Full Home Turnkey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#111111] mb-1.5">
                    Property Location in Karachi
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. DHA Phase 8 / Clifton / Bahadurabad"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/10 text-xs focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#111111] mb-1.5">
                  Project Notes or Timeline
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Newly constructed house, renovation, or specific design preference..."
                  className="w-full px-4 py-2 bg-white rounded-xl border border-black/10 text-xs focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#111111] text-white hover:bg-black text-xs uppercase tracking-wider font-bold rounded-xl transition-all duration-200 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Confirm Free Consultation Request'}
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-[#5C5C5C]">
                  Or call directly: <a href="tel:+923394122544" className="font-semibold text-[#111111] underline">+92 339 4122544</a>
                </p>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
