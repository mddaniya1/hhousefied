export interface CollectionItem {
  id: string;
  name: string;
  category: string;
  dimensions: string;
  finish: string;
  designer: string;
  year: string;
  image: string;
  description: string;
  spanClass?: string;
  badge?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Luxury Kitchens' | 'Modern Wardrobes' | 'Full Home Turnkey' | 'TV Walls & Lounges' | 'Bespoke Bathrooms';
  location: string;
  year: string;
  image: string;
  area: string;
  scope: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  role: string;
  source: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// 4 Specific Category Cards specified in client prompt + 2 architectural highlights matching 6-card grid
export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: 'luxury-kitchens',
    name: 'Luxury Kitchens',
    category: 'Culinary Architecture',
    dimensions: 'Custom Modular Configuration',
    finish: 'Monolith Quartz, Matt Acrylic & Fluted Wood',
    designer: 'Hamza · HOUSEFIED Studio',
    year: '2026',
    image: '/src/assets/images/luxury_kitchen_pakistan_1790676616074.jpg',
    description: 'Smart, stylish, and highly functional culinary spaces crafted for modern Karachi residences. Integrated Blum soft-close mechanics, scratch-resistant finishes, and concealed LED channel illumination.',
    spanClass: 'col-span-12 md:col-span-4 h-[380px]',
  },
  {
    id: 'tv-walls-lounges',
    name: 'Modern TV Walls & Lounges',
    category: 'Living Space Sanctuary',
    dimensions: 'Wall-to-Wall Custom Precision',
    finish: 'Warm Fluted Panels, Porcelain Slabs & Smoked Glass',
    designer: 'Hamza · HOUSEFIED Studio',
    year: '2026',
    image: '/src/assets/images/tv_wall_lounge_1790676633483.jpg',
    description: 'Timeless and elegant living area entertainment centers designed to conceal all wiring, integrate architectural display niches, and elevate daily family relaxation.',
    spanClass: 'col-span-12 md:col-span-4 md:row-span-2 h-[520px] md:h-auto',
  },
  {
    id: 'bespoke-bathrooms',
    name: 'Bespoke Bathrooms',
    category: 'Private Wellness Suite',
    dimensions: 'Custom Architectural Layout',
    finish: 'Travertine Slabs, Matt Fixtures & Fluted Glass',
    designer: 'Hamza · HOUSEFIED Studio',
    year: '2025',
    image: '/src/assets/images/bespoke_bathroom_1790676649637.jpg',
    description: 'Where luxury meets comfort and premium hardware. Spa-inspired master ensuites with moisture-sealed joinery, rain heads, and stone vanities.',
    spanClass: 'col-span-12 md:col-span-4 h-[380px]',
  },
  {
    id: 'smart-wardrobes',
    name: 'Smart Wardrobes & Cabinetry',
    category: 'Storage Engineering',
    dimensions: 'Floor-to-Ceiling Custom Millwork',
    finish: 'Smoked Glass, Aluminium Profiles & Leather Drawers',
    designer: 'Hamza · HOUSEFIED Studio',
    year: '2026',
    image: '/src/assets/images/smart_wardrobe_1790676667100.jpg',
    description: 'Organized, elevated, and custom storage design with sensor lighting, velvet-lined watch and jewellery trays, and dust-proof perimeter seals.',
    spanClass: 'col-span-12 md:col-span-4 h-[380px]',
  },
  {
    id: 'turnkey-dining',
    name: 'Curated Dining Suites',
    category: 'Formal Hospitality',
    dimensions: 'Bespoke Sizing',
    finish: 'Italian Marble, Polished Brass & Solid Hardwood',
    designer: 'Hamza · HOUSEFIED Studio',
    year: '2025',
    image: '/src/assets/images/editorial_modern_salon_1790675606930.jpg',
    description: 'Statement dining salons created for memorable gatherings, boasting custom lighting fixtures, ergonomic dining chairs, and architectural buffet credenzas.',
    spanClass: 'col-span-12 md:col-span-4 h-[380px]',
  },
  {
    id: 'private-reading-nook',
    name: 'Executive Study & Libraries',
    category: 'Focused Workspaces',
    dimensions: 'Architectural Built-in Joinery',
    finish: 'Rich Walnut, Warm Task Lighting & Linen Upholstery',
    designer: 'Hamza · HOUSEFIED Studio',
    year: '2026',
    image: '/src/assets/images/nirnia_armchair_1790676323295.jpg',
    description: 'Bespoke residential studies designed with acoustically buffered wooden wall slats, integrated book shelving, and comfortable ergonomic seating.',
    spanClass: 'col-span-12 md:col-span-4 h-[380px]',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'The way Hamza, the owner, replicates the design and turns a home into a living paradise, I can vouch for him and recommend his expertise forever. The best designer in Karachi.',
    client: 'Satisfied Homeowner',
    role: 'Luxury Villa Patron',
    source: 'Verified Google Review',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Quite satisfied with Housefied. They worked quite professionally, their work is timeless and elegant. Long way to go 👏👏',
    client: 'Private Resident',
    role: 'Turnkey Apartment Renovation',
    source: 'Verified Google Review',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'Amazing experience.........worked with complete dedication........keep it up',
    client: 'Commercial Client',
    role: 'Modern Executive Space',
    source: 'Verified Google Review',
    rating: 5,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'DHA Phase VIII Modernist Villa',
    category: 'Full Home Turnkey',
    location: 'DHA Phase 8, Karachi',
    year: '2026',
    area: '1,000 Sq. Yards',
    scope: 'Complete Turnkey Architecture & Interiors',
    image: '/src/assets/images/hero_luxury_living_1790675570421.jpg',
    highlights: ['Bespoke Millwork', 'Monolithic Stone', 'Full Automation'],
  },
  {
    id: 'proj-2',
    title: 'Bahadurabad Monolith Island Kitchen',
    category: 'Luxury Kitchens',
    location: 'Bahadurabad, Karachi',
    year: '2025',
    area: '600 Sq. Yards',
    scope: 'Custom Modular Kitchen & Island System',
    image: '/src/assets/images/luxury_kitchen_pakistan_1790676616074.jpg',
    highlights: ['Monolith Quartz Island', 'Blum Soft-Close', 'Concealed LED Channels'],
  },
  {
    id: 'proj-3',
    title: 'Clifton Seafront Fluted TV Wall',
    category: 'TV Walls & Lounges',
    location: 'Clifton Block 2, Karachi',
    year: '2025',
    area: '4,500 Sq. Ft.',
    scope: 'Complete Living Room Entertainment Suite',
    image: '/src/assets/images/tv_wall_lounge_1790676633483.jpg',
    highlights: ['Acoustic Wooden Slats', 'Concealed Wire Raceway', 'Floating Credenza'],
  },
  {
    id: 'proj-4',
    title: 'Adamjee Nagar Smoked Glass Dressing Suite',
    category: 'Modern Wardrobes',
    location: 'Adamjee Nagar Society, Karachi',
    year: '2026',
    area: '500 Sq. Yards',
    scope: 'Walk-In Dressing Suites & Bespoke Storage',
    image: '/src/assets/images/smart_wardrobe_1790676667100.jpg',
    highlights: ['Smoked Glass Doors', 'Sensor Illumination', 'Velvet Trays'],
  },
  {
    id: 'proj-5',
    title: 'KDA Officers Master Spa Ensuite',
    category: 'Bespoke Bathrooms',
    location: 'KDA Scheme 1, Karachi',
    year: '2025',
    area: '350 Sq. Ft.',
    scope: 'Spa Ensuite with Honed Travertine Slabs',
    image: '/src/assets/images/bespoke_bathroom_1790676649637.jpg',
    highlights: ['Freestanding Stone Tub', 'Moisture-Sealed Millwork', 'Brushed Bronze'],
  },
  {
    id: 'proj-6',
    title: 'Emaar Oceanfront Turnkey Penthouse',
    category: 'Full Home Turnkey',
    location: 'DHA Phase 8 Emaar, Karachi',
    year: '2026',
    area: '3,800 Sq. Ft.',
    scope: 'Modern Minimalist Full-Home Execution',
    image: '/src/assets/images/editorial_modern_salon_1790675606930.jpg',
    highlights: ['Panoramic Sea View', 'Custom Acrylic Joinery', 'Turnkey Handover'],
  },
  {
    id: 'proj-7',
    title: 'PECHS Culinary Suite & Chef Kitchen',
    category: 'Luxury Kitchens',
    location: 'PECHS Block 6, Karachi',
    year: '2025',
    area: '500 Sq. Yards',
    scope: 'Dual Wet & Dry Kitchen Engineering',
    image: '/src/assets/images/curated_bespoke_kitchen_1790675619176.jpg',
    highlights: ['Anti-Scratch Matt Acrylic', 'Built-in Appliances', 'Integrated Breakfast Bar'],
  },
  {
    id: 'proj-8',
    title: 'DHA Phase 6 Master Walk-In Wardrobe',
    category: 'Modern Wardrobes',
    location: 'DHA Phase 6, Karachi',
    year: '2026',
    area: '420 Sq. Ft.',
    scope: 'Floor-to-Ceiling Luxury Wardrobe Architecture',
    image: '/src/assets/images/smart_wardrobe_1790676667100.jpg',
    highlights: ['Aluminium Fluted Frame', 'Biometric Lock Drawer', 'Integrated Full-Height Mirrors'],
  },
  {
    id: 'proj-9',
    title: 'Sindhi Muslim Contemporary Residence',
    category: 'Full Home Turnkey',
    location: 'SMCHS, Karachi',
    year: '2025',
    area: '800 Sq. Yards',
    scope: 'Newly Constructed Villa Full Turnkey Fitout',
    image: '/src/assets/images/modern_minimalist_living_1790677019221.jpg',
    highlights: ['False Ceilings & Lighting', 'Custom Furniture Manufacturing', 'Strict QC by Hamza'],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Complete Turnkey Home Execution',
    subtitle: 'From grey structure hand-off to key handover',
    description: 'We oversee every trade in-house: civil work, false ceilings, lighting design, high-end woodwork, stone polishing, and furniture production. One accountable team from day one.',
    deliverables: ['3D Spatial Photo-realistic Renders', 'Detailed Architectural & Electrical Blueprints', 'Dedicated Site Supervision & Material QC', 'Fixed Price Turnkey Contract'],
  },
  {
    number: '02',
    title: 'Luxury Kitchen Engineering',
    subtitle: 'Custom European & acrylic modular kitchen systems',
    description: 'High-durability moisture-proof carcasses, anti-scratch soft-touch matt finishes, silent Blum hardware, quartz waterfall countertops, and discreet ventilation.',
    deliverables: ['Custom Island Layouts', 'Appliance Integration Specs', 'Concealed LED Strip Lighting', 'Pantry & Spice Organization Solutions'],
  },
  {
    number: '03',
    title: 'Smart Wardrobes & Walk-In Closets',
    subtitle: 'Tailored wardrobe architecture that protects your wardrobe',
    description: 'Fluted aluminium glass doors, micro-velvet jewellery inserts, integrated biometric safes, and motion-activated vertical light tracks tailored to Karachi lifestyles.',
    deliverables: ['Floor-to-Ceiling Max Storage', 'Tinted Smoked Glass Systems', 'Sensor Illuminated Drawers', 'Acoustic Soft-Close Dampeners'],
  },
  {
    number: '04',
    title: 'Modern TV Walls & Feature Lounges',
    subtitle: 'Centerpiece media installations with zero visible cabling',
    description: 'Sleek fluted timber panels, Italian porcelain tiles, warm indirect ambient lighting, and bespoke media consoles designed to accommodate state-of-the-art OLED setups.',
    deliverables: ['Hidden Wire Raceway Channels', 'Acoustic Wooden Slats', 'Floating Storage Consoles', 'Integrated Display Niches'],
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Where is the HOUSEFIED studio located in Karachi?',
    answer: 'Our main corporate office is located at Office no 201, 2nd Floor, Qurtuba Market/Mall, near Grappetite Chowrangi, Bahadurabad, Karachi (74800). We also maintain a satellite design presence in Block B, Adamjee Nagar Society, Karachi.',
  },
  {
    question: 'What sets HOUSEFIED apart from other Karachi interior firms?',
    answer: 'Under the personal supervision of Hamza, HOUSEFIED manages design AND turnkey execution together. We do not pass designs off to third-party sub-contractors; our dedicated in-house craftsmen build every millimeter with strict quality control, transparent pricing, and timely delivery.',
  },
  {
    question: 'How do I start a project with HOUSEFIED?',
    answer: 'You can book a free consultation online or reach out directly on WhatsApp at +92 339 4122544. We will review your floor plans, discuss your preferred style (Luxury Kitchens, TV Lounges, Wardrobes, or Full Home), and schedule an on-site evaluation.',
  },
  {
    question: 'Do you take on newly constructed homes and villas in DHA / Bahria / Clifton?',
    answer: 'Yes, our primary core niche is newly constructed premium homes and luxury renovations across DHA, Clifton, Bahadurabad, PECHS, KDA Scheme 1, and Adamjee Nagar Society.',
  },
  {
    question: 'What are your studio working hours?',
    answer: 'We operate Monday through Saturday starting at 10:00 AM. Inquiries received over the weekend are attended to first thing Monday morning.',
  },
];
