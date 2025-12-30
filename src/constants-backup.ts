import { Product, BlogPost, CompanyInfo } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Rahimi Investment & Business S.P.C",
  address: "Muscat, Oman",
  phone: ["+968-91239037"],
  email: ["msgus@rahimiholding.com"],
  copyright: "© 2024 Rahimi Holding. <strong>Oil & Gas Trading</strong>, <strong>Petrochemical Solutions</strong> & <strong>Industrial Safety Services</strong> in GCC & Global Markets. All Rights Reserved."
};

export const CONTENT_BASE = (import.meta as any)?.env?.VITE_CONTENT_BASE || 'https://rahimiholding.com/content';

export const SITE_IMAGES = {
  aboutSection: `${CONTENT_BASE}/Body-content1-1.jpg`,
  statsBackground: `${CONTENT_BASE}/Body-content1-2.jpg`,
  contactBackground: `${CONTENT_BASE}/Body-content1-7.jpg`,
  aboutHeader: `${CONTENT_BASE}/about-header.jpg`,
  productHeader: `${CONTENT_BASE}/product-header.jpg`,
  blogHeader: `${CONTENT_BASE}/blog-header.jpg`,
  contactHeader: `${CONTENT_BASE}/contact-header.jpg`,
  officeOman: `${CONTENT_BASE}/About-Us.jpg`,
  officeIran: `${CONTENT_BASE}/About-Us-1.webp`,
  galleryImage1: `${CONTENT_BASE}/gallery1.jpg`,
  galleryImage2: `${CONTENT_BASE}/gallery2.jpg`,
  galleryImage3: `${CONTENT_BASE}/gallery3.jpg`,
  mapPlaceholder: "https://maps.googleapis.com/maps/api/staticmap?center=23.6100,58.5400&zoom=13&size=1600x400&sensor=false",
  logo: `${CONTENT_BASE}/cropped-cropped-RahimiHolding-Logo.png`,
  heroSlider1: `${CONTENT_BASE}/Hero-Slider-1.jpg`,
  heroSlider2: `${CONTENT_BASE}/Hero-Slider-6.jpg`,
  heroSlider3: `${CONTENT_BASE}/Hero-Slider-7.jpg`,
  heroSlider4: `${CONTENT_BASE}/Hero-Slider-8.jpg`
};

export const HERO_IMAGES = [
  `${CONTENT_BASE}/Hero-Slider-1.jpg`,
  `${CONTENT_BASE}/Hero-Slider-6.jpg`,
  `${CONTENT_BASE}/Hero-Slider-7.jpg`,
  `${CONTENT_BASE}/Hero-Slider-8.jpg`,
  `${CONTENT_BASE}/Hero-Slider-10.jpg`,
  `${CONTENT_BASE}/Hero-Slider-9.jpg`
];

export const PRODUCTS: Product[] = [
  // --- TRADING PRODUCTS (9) ---
  {
    id: 1,
    title: "Base Oil SN 170 – Premium Group I",
    description: "High-quality Group I Base Oil SN 170 for lubricant blending. Trusted in GCC & global markets for industrial and automotive applications.",
    content: `Base Oil SN 170 is a premium Group I paraffinic base oil with excellent solvency and oxidation stability—ideal for diverse lubricant formulations.

**Key Applications:**
* Hydraulic and industrial gear oils
* Passenger car and heavy-duty engine oils
* Metalworking fluids and process oils

**Technical Advantages:**
Low volatility and consistent flash point support reliable high-temperature performance. COA available upon request.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`]
  },
  {
    id: 2,
    title: "Base Oil SN 500 – High Viscosity Group I",
    description: "Heavy-grade Group I base oil with superior thermal stability. Ideal for heavy-duty lubricants, marine oils, and industrial greases.",
    content: `SN 500 is a premium heavy-grade paraffinic base oil engineered for strong film strength and resistance to thermal degradation.

**Key Applications:**
* Heavy-duty engine and marine lubricants
* Industrial gear oils and greases
* Rubber process oils and chemical feedstocks

**Quality Performance:**
High viscosity index and excellent solubility ensure reliable blending for complex formulations. COA available upon request.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`]
  },
  {
    id: 3,
    title: "EN 590 Diesel 10PPM – Ultra-Low Sulfur",
    description: "Premium EN 590 ULSD refined to <10 ppm sulfur. Optimized for modern high-performance engines with reduced environmental impact.",
    content: `EN 590 ULSD is engineered for automotive and industrial diesel engines, refined to under 10 ppm sulfur to cut emissions.

**Key Features:**
* Higher Cetane for ignition quality
* Enhanced lubricity for injection system protection
* Cold climate additives for reliable operation
* Compliance with GCC & international regulations

**Quality Assurance:**
Consistent, certified supply supporting fleets and industrial operations.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-EN-590.jpeg`,
    gallery: [`${CONTENT_BASE}/product-EN-590.jpeg`]
  },
  {
    id: 4,
    title: "Heavy Crude Oil – High-Density Hydrocarbon",
    description: "Dense, high-viscosity heavy crude for advanced refinery processing. Ideal for bitumen, fuel oils, and heavy distillates.",
    content: `Preferred by complex refineries, heavy crude is an excellent feedstock for residual fuels, asphalt, and petrochemical derivatives.

**Refinery Yields:**
* High output of fuel oils/residuals
* Primary source for industrial bitumen
* Suitable for specialized cracking

**Supply Assurance:**
Reliable chains ensuring consistent quality for large-scale consumers.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`]
  },
  {
    id: 5,
    title: "Jet Fuel A1 – Aviation-Grade Kerosene",
    description: "Refined to AFQRJOS international standards. Certified performance and safety for turbine engines.",
    content: `Kerosene-type fuel used globally in turbine engines, meeting stringent AFQRJOS standards.

**Characteristics:**
* High flash point for safety
* Low freezing point for altitude performance
* Anti-static and anti-corrosion additives

**Industry Reliability:**
Supporting commercial airlines, private aviation, and logistics with consistent quality.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`]
  },
  {
    id: 6,
    title: "Kerosene – Refined Industrial Fuel",
    description: "High-purity kerosene for heating, lighting, and solvent applications. Clean-burning and efficient.",
    content: `Versatile hydrocarbon liquid known for clean-burning properties and high energy density.

**Industrial Uses:**
* Space heaters (domestic & industrial)
* Cleaning agents and degreasers
* Paints and pesticides manufacturing

**Quality Assurance:**
Strict safety and performance standards for diverse commercial uses.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Kerosene.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Kerosene.jpeg`]
  },
  {
    id: 7,
    title: "Light Crude Oil – High API Gravity",
    description: "Low-density sweet crude optimized for high yields of gasoline, diesel, and petrochemical feedstocks.",
    content: `Highly valued for ease of refining and high percentage of light distillates.

**Refining Value:**
* Maximum yields of gasoline, jet fuel, diesel
* High naphtha concentration for petrochemicals
* Lower refining costs vs. heavy grades

**Supply Advantage:**
High-value feedstock enabling maximized output and consistent quality.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`]
  },
  {
    id: 8,
    title: "Light Virgin Naphtha (LVN) – Petrochemical Feedstock",
    description: "Premium LVN for steam crackers and high-octane gasoline blending. Essential for olefin production.",
    content: `Critical feedstock for steam cracking to produce ethylene and propylene; also used in high-octane blending.

**Applications:**
* Olefin production (ethylene & propylene)
* Solvent in chemical/rubber industries
* High-octane blending in refineries

**Quality Assurance:**
Strict paraffinic/naphthenic specifications for optimal yields.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`,
    gallery: [`${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`]
  },
  {
    id: 9,
    title: "Bitumen (Penetration Grades) – Industrial Asphalt",
    description: "High-quality bitumen for road construction and waterproofing. Meeting international infrastructure standards.",
    content: `Premium bitumen in various penetration grades (60/70, 80/100) for demanding infrastructure projects.

**Applications:**
* Road paving and asphalt construction
* Waterproofing membranes and coatings
* Pipeline protection and industrial sealing

**Performance:**
Engineered for GCC climate extremes ensuring long-lasting durability and reduced maintenance costs.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-bitumen-1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-bitumen-1.jpeg`, `${CONTENT_BASE}/product-bitumen.jpeg`]
  },

  // --- SERVICES (5) ---
  {
    id: 12,
    title: "Tank Explosion-Proofing – Advanced Safety Engineering",
    description: "Cutting-edge systems for refinery and storage tanks. Mitigation of vapor hazards and explosion risks.",
    content: `Advanced engineering and certified technologies to reduce catastrophic risks in oil & gas storage.

**Approach:**
* Flame arrestors & pressure-vacuum valves
* Inert gas blanketing systems
* Specialized anti-static coatings

**Compliance:**
Aligned with GCC & international safety standards.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=1200",
      "https://images.unsplash.com/photo-1505250469679-253c7379f673?q=80&w=1200"
    ]
  },
  {
    id: 13,
    title: "Risk Assessment – Operational Safety Consulting",
    description: "Comprehensive hazard analysis for refineries, terminals, and petrochemical plants.",
    content: `Detailed risk studies using industry methodologies.

**Includes:**
* HAZOP studies
* Quantitative Risk Assessment (QRA)
* Safety system audits & optimization

**Outcome:**
Identify vulnerabilities early; ensure regulatory compliance.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1200",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
    ]
  },
  {
    id: 14,
    title: "Tank Maintenance & Integrity – Lifecycle Solutions",
    description: "Full-cycle cleaning, inspection, NDT, and corrosion control for storage tanks.",
    content: `Extend asset life and prevent environmental risks.

**Core Services:**
* Robotic/manual tank cleaning
* NDT and API 653 inspections
* Protective coatings & corrosion control

**Assurance:**
Compliance with GCC & international requirements.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
      "https://images.unsplash.com/photo-1581093588401-fbb07366f555?q=80&w=1200"
    ]
  },
  {
    id: 15,
    title: "Safety Parts Manufacturing – Precision Engineering",
    description: "Explosion-proof and high-performance components for oil, gas, and petrochemical sectors.",
    content: `Precision-engineered parts for hazardous environments.

**Range:**
* Gaskets & sealing solutions
* Explosion-proof fittings & electrical
* Safety valves & emergency shut-offs

**Quality Control:**
Full-process assurance for critical infrastructure.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
      "https://images.unsplash.com/photo-1537462713505-a1ceac92fa89?q=80&w=1200"
    ]
  },
  {
    id: 16,
    title: "Consulting & Negotiations – Strategic Partnerships",
    description: "Branding, marketing, trade negotiations, and supply chain strategy for energy markets.",
    content: `Establish regional presence and secure high-value contracts.

**Expertise:**
* International trade & supply chain
* Energy branding & marketing
* Strategic negotiation & contract management

**Advantage:**
Bridge GCC insights with global goals for sustainable growth.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Oil & Gas in GCC: Opportunities and Smart Investments",
    excerpt: "GCC nations strengthen their role in the global energy market through strategic planning and long-term investments.",
    content: `Oil & gas remain central to GCC economies despite energy transitions. Strategic planning and long-term investments reinforce resilience.

**Strategic Position & Investment**
Saudi Arabia, the UAE, and Qatar focus on operational efficiency and digital transformation. National programs like Vision 2030 and Energy Strategy 2050 attract investment in upstream and refining.`,
    date: "December 20, 2024",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle1.jpg`
  },
  {
    id: 2,
    title: "Advanced Petrochemicals in GCC: From Raw Exports to High Value Creation",
    excerpt: "Petrochemicals drive diversification in GCC economies, shifting toward high value-added products.",
    content: `Policymakers prioritize moving from raw exports to specialty petrochemicals to ensure sustainable growth.

**Competitive Advantage**
Abundant feedstock and advanced infrastructure position GCC as a global hub. Downstream investments boost profitability, reduce crude exposure, and create skilled jobs.`,
    date: "December 18, 2024",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle2.jpg`
  },
  {
    id: 3,
    title: "Major Oil, Gas & Petrochemical Projects in GCC: Collaboration Opportunities",
    excerpt: "A new generation of large-scale energy projects in GCC creates strong collaboration opportunities for global partners.",
    content: `Upcoming projects set new benchmarks in scale and technical complexity.

**Key Focus Areas**
Gas field development, LNG expansion, and integrated oil-to-petrochemical facilities. Stability and investment frameworks make GCC attractive for partnerships.`,
    date: "December 16, 2024",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle3.jpg`
  }
];
