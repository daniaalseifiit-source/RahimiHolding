import { Product, BlogPost, CompanyInfo } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Rahimi Investment & Business S.P.C",
  address: "Muscat, Oman",
  phone: ["+968-91239037"],
  email: ["info@rahimiholding.com"],
  copyright: "© 2024 Rahimi Holding. Oil & Gas Trading, Petrochemical Solutions & Industrial Safety Services in GCC & Global Markets. All Rights Reserved."
};

// --- MEDIA PATHS - Hosted in /content folder on cPanel or CDN ---
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
  // --- Commodities / Trading ---
  {
    id: 1,
    title: "Base Oil SN 170",
    description: "Premium Group I Base Oil SN 170 for high-performance lubricant blending. Excellent solvency and oxidation stability for industrial and automotive use.",
    content: `Base Oil SN 170 is a high-grade Group I paraffinic base oil, widely recognized for its excellent solvency and superior oxidation stability. It serves as a fundamental building block for a variety of lubricant formulations.

**Key Applications:**
* Manufacturing of hydraulic oils and industrial gear oils.
* Blending stock for passenger car and heavy-duty engine oils.
* Formulating metalworking fluids and process oils.

**Technical Advantages:**
It offers low volatility and a consistent flash point, ensuring reliable performance in high-temperature environments. Full technical specifications and COA are available upon request.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`]
  },
  {
    id: 2,
    title: "Base Oil SN 500",
    description: "High-viscosity Group I Base Oil SN 500. Ideal for heavy-duty lubricants, marine oils, and industrial grease applications requiring thermal stability.",
    content: `Base Oil SN 500 is a heavy-grade Group I base oil characterized by its high viscosity and excellent thermal stability. It is specifically designed for applications requiring a robust lubricant film and resistance to degradation.

**Key Applications:**
* Heavy-duty engine oils and marine lubricant formulations.
* High-performance industrial gear oils and greases.
* Rubber process oils and chemical industry feedstocks.

**Quality Performance:**
Our SN 500 provides a high viscosity index and superior solubility, making it the preferred choice for complex blending requirements in the GCC and international markets.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`]
  },
  {
    id: 3,
    title: "Bitumen (Penetration Grades)",
    description: "Industrial-grade Bitumen for road construction and waterproofing. High-durability asphalt binder meeting international infrastructure standards.",
    content: `We supply high-quality Bitumen in various penetration grades (such as 60/70 and 80/100) suitable for demanding infrastructure projects. Our bitumen is sourced to ensure maximum durability and adhesion properties.

**Usage Areas:**
* Paving and road construction (Asphalt Binder).
* Waterproofing membranes for roofing and foundations.
* Pipe coating and industrial insulation.

**Performance:**
Designed to withstand extreme temperature fluctuations typical of the GCC region, our bitumen ensures long-lasting pavement life and reduced maintenance costs.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-bitumen-1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-bitumen-1.jpeg`, `${CONTENT_BASE}/product-bitumen.jpeg`]
  },
  {
    id: 4,
    title: "EN 590 (Diesel 10PPM)",
    description: "Ultra-Low Sulfur Diesel (ULSD) meeting EN 590 standards. Optimized for modern high-performance engines with reduced environmental impact.",
    content: `EN 590 is the standard for ultra-low sulfur diesel (ULSD) intended for use in automotive and industrial diesel engines. It is refined to contain less than 10 ppm of sulfur, significantly reducing emissions.

**Features:**
* Higher Cetane number for improved ignition and engine performance.
* Enhanced lubricity to protect fuel injection systems.
* Cold climate performance additives for global distribution.

As a reliable energy partner, we ensure that our EN 590 supplies meet strict environmental regulations and international quality benchmarks.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-EN-590.jpeg`,
    gallery: [`${CONTENT_BASE}/product-EN-590.jpeg`]
  },
  {
    id: 5,
    title: "Heavy Crude Oil",
    description: "High-density heavy crude oil for specialized refinery processing. Ideal for producing bitumen, fuel oils, and heavy distillates.",
    content: `Our Heavy Crude Oil is a dense, high-viscosity hydrocarbon source preferred by refineries equipped for complex processing. It is an excellent feedstock for the production of heavy distillates and asphalt products.

**Refinery Yields:**
* High output of fuel oils and residual products.
* Primary source for industrial-grade bitumen.
* Suitable for specialized petrochemical cracking.

We provide reliable supply chains for heavy crude, ensuring consistent quality for large-scale industrial consumers.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`]
  },
  {
    id: 6,
    title: "Jet Fuel A1",
    description: "Aviation-grade Jet Fuel A1. Kerosene-type fuel optimized for turbine engines with international safety and performance certifications.",
    content: `Jet A1 is a kerosene-type fuel used globally in jet turbine engines. It is manufactured to meet stringent international standards (AFQRJOS), ensuring safety and efficiency in aviation.

**Product Characteristics:**
* High flash point for increased safety.
* Low freezing point for high-altitude operations.
* Contains anti-static and anti-corrosion additives.

Our Jet A1 supply meets the rigorous demands of the modern aviation industry, from commercial airlines to private logistics.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`]
  },
  {
    id: 7,
    title: "Kerosene",
    description: "Highly refined Kerosene for industrial heating, lighting, and chemical solvent applications. Clean-burning and efficient energy source.",
    content: `Kerosene is a versatile combustible hydrocarbon liquid used widely in heating, lighting, and as a solvent in various industrial processes. It is known for its clean-burning properties and high energy density.

**Industrial Uses:**
* Fuel for domestic and industrial space heaters.
* Base component for cleaning agents and degreasers.
* Component in the manufacturing of paints and pesticides.

We ensure high-purity kerosene distribution that meets both safety and performance standards for diverse commercial uses.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Kerosene.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Kerosene.jpeg`]
  },
  {
    id: 8,
    title: "Light Crude Oil",
    description: "Low-density Light Crude Oil with high API gravity. Optimized for high yields of gasoline, diesel, and high-value petrochemical feedstocks.",
    content: `Light Crude Oil is highly sought after due to its low density and high API gravity. It is "sweet" and easy to refine, producing a high percentage of valuable transportation fuels.

**Refining Value:**
* Maximum yields of premium gasoline and jet fuel.
* High concentration of naphtha for petrochemical production.
* Lower refining costs compared to heavier grades.

Our light crude offerings provide refineries with a high-value feedstock to maximize their output of light distillates.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`]
  },
  {
    id: 9,
    title: "Light Virgin Naphtha (LVN)",
    description: "Premium Light Virgin Naphtha feedstock for steam crackers and high-octane gasoline blending. Essential for the petrochemical industry.",
    content: `Light Virgin Naphtha (LVN) is a critical feedstock for the petrochemical industry, particularly for steam cracking to produce ethylene and propylene. It is also used as a blending component for motor gasoline.

**Applications:**
* Primary feedstock for olefin production.
* Solvent in the chemical and rubber industries.
* High-octane blending component for refinery operations.

We supply LVN that meets specific paraffinic and naphthenic requirements to ensure optimal yields for our petrochemical partners.`,
    category: "Trading",
    image: `${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`,
    gallery: [`${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`]
  },

  // --- Services ---
  {
    id: 12,
    title: "Tank Explosion-Proofing",
    description: "Advanced safety engineering to prevent refinery and storage tank hazards. Specialized systems for vapor control and explosion mitigation.",
    content: `Safety is paramount in the energy sector. Our Tank Explosion-Proofing services utilize cutting-edge technology to mitigate the risk of catastrophic failures in oil and gas storage facilities.

**Our Approach:**
* Installation of advanced flame arrestors and pressure-vacuum valves.
* Implementation of inert gas blanketing systems.
* Use of specialized materials and coatings to reduce electrostatic risks.

We help operators comply with global safety standards and protect their most critical assets.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=1200",
      "https://images.unsplash.com/photo-1505250469679-253c7379f673?q=80&w=1200"
    ]
  },
  {
    id: 13,
    title: "Risk Assessment",
    description: "Detailed operational risk analysis and safety enhancement for energy facilities. Expert consulting to identify and manage industrial hazards.",
    content: `Our Risk Assessment services provide a comprehensive analysis of potential operational hazards within refineries, terminals, and petrochemical plants. We utilize industry-standard methodologies to ensure safety and continuity.

**Services Include:**
* HAZOP (Hazard and Operability) studies.
* Quantitative Risk Assessment (QRA).
* Safety management system auditing and optimization.

By identifying vulnerabilities before they become incidents, we empower companies to operate with confidence and regulatory compliance.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1200",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
    ]
  },
  {
    id: 14,
    title: "Tank Maintenance & Integrity",
    description: "Full-cycle maintenance and safety systems for storage tanks. Expert cleaning, inspection, and repair services for energy infrastructure.",
    content: `Regular maintenance is essential to extend the life of storage assets and prevent environmental contamination. Our Tank Maintenance services cover the entire lifecycle of industrial storage tanks.

**Core Services:**
* Robotic and manual tank cleaning for sludge removal.
* Non-destructive testing (NDT) and API 653 inspections.
* Corrosion control and protective coating applications.

We ensure your storage infrastructure remains compliant with environmental regulations and operational requirements.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    gallery: [
       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
       "https://images.unsplash.com/photo-1581093588401-fbb07366f555?q=80&w=1200"
    ]
  },
  {
    id: 15,
    title: "Safety Parts Manufacturing",
    description: "Manufacturing of high-quality safety components for the energy sector. Precision-engineered parts designed for hazardous environments.",
    content: `Our manufacturing division specializes in the production of high-performance safety parts tailored for the oil, gas, and petrochemical sectors. Every component is engineered to withstand extreme pressures and corrosive environments.

**Product Range:**
* Specialized gaskets and sealing solutions.
* Explosion-proof fittings and electrical components.
* Custom-engineered safety valves and emergency shut-off parts.

By controlling the manufacturing process, we guarantee the highest quality standards for critical safety infrastructure.`,
    category: "Services",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
      "https://images.unsplash.com/photo-1537462713505-a1ceac92fa89?q=80&w=1200"
    ]
  },
  {
    id: 16,
    title: "Consulting & Negotiations",
    description: "Expert international branding, marketing, and trade negotiation services. Facilitating strategic partnerships in the global energy market.",
    content: `Navigating the complexities of the global energy market requires deep expertise and strategic insight. Our consulting services help companies establish a strong regional presence and secure high-value contracts.

**Expertise Areas:**
* International trade and supply chain strategy.
* Branding and marketing for energy holdings.
* Strategic negotiation and contract management.

We act as a bridge between local regional insights and international business goals, ensuring sustainable growth for our partners.`,
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