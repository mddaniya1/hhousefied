/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeaturedDesignSection } from './components/FeaturedDesignSection';
import { StatisticsSection } from './components/StatisticsSection';
import { AboutStudioSection } from './components/AboutStudioSection';
import { FeaturedCollection } from './components/FeaturedCollection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactCTA } from './components/ContactCTA';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CollectionItem, ProjectItem, COLLECTION_ITEMS } from './data/interiorData';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState<CollectionItem | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string>('Luxury Kitchen');

  const handleOpenConsultation = (subject?: string) => {
    if (subject) {
      setInquirySubject(subject);
    } else {
      setInquirySubject('Luxury Kitchen');
    }
    setIsConsultationOpen(true);
  };

  const handleSelectCollectionItem = (item: CollectionItem) => {
    setSelectedPiece(item);
  };

  const handleSelectProject = (project: ProjectItem) => {
    // Map project into CollectionItem schema for detailed spec modal
    setSelectedPiece({
      id: project.id,
      name: project.title,
      category: `${project.category} · ${project.location}`,
      dimensions: `Area: ${project.area}`,
      finish: project.scope,
      designer: 'Hamza · HOUSEFIED Studio',
      year: project.year,
      image: project.image,
      description: `Turnkey execution by HOUSEFIED in ${project.location}. Featuring ${project.highlights.join(', ')} with complete architectural oversight.`,
    });
  };

  const handleSelectFeaturedById = (id: string) => {
    const found = COLLECTION_ITEMS.find((item) => item.id === id);
    if (found) {
      setSelectedPiece(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-[#F8F7F4]">
      {/* 1. Sticky Transparent Navigation: HOUSEFIED Logo Left, Menu Right + Book Consultation Button */}
      <Navigation onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />

      <main className="flex-1">
        {/* 2. Luxury Hero Section: Large rounded image, 'Turning Homes into a Living Paradise', floating glass card, project preview, circular badge, CTA */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />

        {/* 3. Featured Design Section: Large Image Left, Content Right, small floating cards, editorial layout */}
        <FeaturedDesignSection onSelectPiece={handleSelectFeaturedById} />

        {/* 4. Statistics Section: 11K+ Facebook Followers, 50+ Completed Homes, 5.0 Google Rating, 100% Dedicated Execution */}
        <StatisticsSection />

        {/* 5. About Studio Section: Large Image, Editorial Content on Hamza & HOUSEFIED, About Us CTA */}
        <AboutStudioSection onOpenConsultation={() => handleOpenConsultation('About Studio Consultation')} />

        {/* 6. Featured Collection: Luxury Masonry Grid (Luxury Kitchens, Modern TV Walls & Lounges, Bespoke Bathrooms, Smart Wardrobes & Cabinetry) */}
        <FeaturedCollection
          onSelectItem={handleSelectCollectionItem}
          onOpenConsultation={() => handleOpenConsultation('Explore Collection')}
        />

        {/* 7. Project Showcase with Framer Motion Filter Mechanism */}
        <ProjectShowcase
          onSelectProject={handleSelectProject}
          onOpenConsultation={(category) => handleOpenConsultation(category)}
        />

        {/* 8. Services Section: Turnkey execution, kitchens, wardrobes, and TV lounges with deliverable specs */}
        <ServicesSection onOpenConsultation={(svc) => handleOpenConsultation(svc)} />

        {/* 8. Testimonials Section: Real client Google reviews for Hamza & HOUSEFIED */}
        <TestimonialsSection />

        {/* 9. FAQ Section: Smooth accordion answering Karachi studio inquiries */}
        <FAQSection />

        {/* 10. Contact CTA & Footer: Black Section with Karachi addresses, WhatsApp, lead capture form, social handles, and HOUSEFIED wordmark */}
        <ContactCTA onOpenConsultation={(svc) => handleOpenConsultation(svc)} />
      </main>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedItem={inquirySubject}
      />

      <ProjectDetailModal
        item={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onInquire={(name) => handleOpenConsultation(name)}
      />
    </div>
  );
}
