import { Project, ExperienceItem, EducationItem, SkillItem, AwardItem, SiteSettings } from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  accentColorHex: '#CCFF00', // Neon Lime / Geometric Balance Accent
  designerName: 'Amit Kumar',
  headlineTitle: 'Industrial Designer — IDC, IIT Bombay',
  taglineBio: 'M.Des Industrial Designer. I specialize in Industrial Product Design, Ergonomics, Usability, Serviceability, CMF strategies, and tactile hardware controls.',
  email: '2753amit@gmail.com',
  phone: '+91 98056 21130',
  location: 'New Delhi, India',
  linkedin: 'https://www.linkedin.com/in/amit-kumar-448427120/',
  redDotWinner: true,
  projectOrder: ['tejas-feature-phone', 'ebike-design', 'air-purifier-redesign', 'spunch', 'casio-wristwatch', 'vip-aerolite', 'emotion-ev', 'lumina-lighting'],
  sectionVisibility: {
    hero: true,
    featured: true,
    cmfTeaser: false,
    about: true,
    awards: true,
    skills: true,
    experience: false,
    contact: true,
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tejas-feature-phone',
    title: 'FEATURE PHONE CONCEPT',
    tagline: 'Industrial & Ergonomic Design for Tier 2-3 & Rural Demographics',
    shortDescription: 'A rugged, highly tactile 4G feature phone engineered for rural Indian farmers and unskilled laborers, featuring dedicated quick-access music & gaming controls, slant speakers, 3000mAh+ battery, and regional CMF.',
    category: 'Consumer Hardware',
    year: '2025',
    client: 'Lava International',
    role: 'Design Task',
    tools: ['Rhino 3D', 'Photoshop', 'KeyShot 11', 'User Ergonomics', 'CMF Strategy', 'Contextual Research'],
    awards: ['Rural Tech Innovation Benchmark'],
    featured: true,
    heroImage: 'https://lh3.googleusercontent.com/d/11hJt30e_aSDHAMLMJ-LwCO8FYVBBpkEf',
    overview: 'Designed specifically for users from Tier 2-3 cities and rural villages of India (target age group 35+ years: farmers and rural unskilled workers). This human-centered industrial design project addresses the extreme environmental, ergonomic, digital payment, and entertainment requirements of rural agricultural workers and laborers across India.',
    challenge: 'Rural users face harsh environmental conditions (dust, mud, rain, hard drops on gravel), long 10-12 hour workdays in noisy fields or construction sites, frequent electricity power outages, and calloused hands or gloves. Existing feature phones rely on fragile glossy plastic, tiny un-tactile keypads, quiet speakers, and complex English menus. The challenge was engineering an ultra-durable, highly tactile, affordable (₹1,000–₹3,000) device with quick-access hardware controls, slant audio reflection, and high-contrast regional UI.',

    demographics: {
      totalPopulation: '146 Crore (1.46 Billion)',
      mobileSubscribers: '119 Crore Total (1.153 Billion Wireless)',
      urbanVsRuralSubscribers: 'Urban: 662.15 Million | Rural: 528.51 Million',
      unconnectedPopulation: '210 Million people without mobile phone access (~20%)',
      internetSubscribers: '918.19 Million (542.53M Urban vs 375.66M Rural)',
      marketShare: [
        { brand: 'Reliance Jio', share: '27%', note: '27% market share in 4G feature phones' },
        { brand: 'Itel (Transsion)', share: '24%', note: 'Transsion Holdings-owned Itel' },
        { brand: 'Lava', share: '18%', note: 'Indian phone maker Lava' },
        { brand: 'Others (Nokia, Micromax, Samsung)', share: '31%', note: 'Legacy & budget players' }
      ],
      marketSize: 'US $2.1 Billion in revenue projected for 2025 (CAGR -5.16% 2025-2029)',
      targetGroups: [
        {
          group: 'Farmers (11.8 Crore Total)',
          description: 'A satisfied person in a village living daily life with hard work & physical labor, friendly, wishing for a good life for future generations.',
          monthlyIncome: 'Rs. 20,000 - Rs. 30,000',
          landholdingBreakdown: [
            { type: '1. Small and Marginal Farmers (Low-Income)', land: 'Less than 2 hectares', percentage: '~82% of total farmers', income: '₹50,000 – ₹1.5 lakh' },
            { type: '2. Medium Farmers (Middle-Income)', land: '2-10 hectares', percentage: '~14% of total farmers', income: '₹1.5 lakh – ₹5 lakh', isTargetGroup: true },
            { type: '3. Large Farmers (High-Income)', land: 'More than 10 hectares', percentage: '~4% of total farmers', income: '₹5 lakh and above' },
            { type: '4. Agricultural Laborers (Below Poverty Line)', land: 'Landless or minimal leased land', percentage: '~40% of rural workforce', income: '₹30,000 – ₹1 lakh' }
          ]
        },
        {
          group: 'Rural Unskilled Workers (47.6 Crore Total / 40.6% Rural Workforce)',
          description: 'A person living in villages, towns, and suburban areas striving to provide a good future for their descendants.',
          monthlyIncome: 'Rs. 10,000 - Rs. 15,000',
          laborerBreakdown: [
            { type: '1. Low-Income Laborers', occupation: 'Agricultural laborers, construction workers, small-scale artisans, casual laborers', characteristic: 'Engaged in seasonal/temporary work with minimal job security', income: '<₹6,000 / month' },
            { type: '2. Middle-Income Laborers', occupation: 'Skilled tradespeople, factory workers, SME employees', characteristic: 'More stable employment, lacks comprehensive benefits', income: '₹6,000 – ₹20,000 / month', isTargetGroup: true },
            { type: '3. High-Income Laborers', occupation: 'Professionals in organized sectors (IT, finance, government)', characteristic: 'Enjoys job security, benefits & higher wages (In Bihar, only 4% earn >₹50k/mo)', income: '>₹20,000 / month' }
          ]
        }
      ]
    },

    userPersona: {
      name: 'Rajesh Kumar',
      age: 38,
      gender: 'Male',
      location: 'Itarsi, Uttar Pradesh (Tier 3 city / small village)',
      family: 'Married with two children (aged 8 & 5). Primary breadwinner.',
      occupation: 'Farmer (grows wheat, maize, and pulses on 3 acres owned land with livestock)',
      education: 'Grade 8 basic education; highly knowledgeable in practical agriculture',
      income: 'Low to moderate (₹15,000 - ₹25,000/mo dependent on crop yield)',
      goals: [
        'Learn modern farming techniques for higher crop yield & monsoon resilience',
        'Send children to a better city school for future opportunities',
        'Achieve financial stability and house infrastructure upgrades'
      ],
      challenges: [
        'Weather dependency & irregular monsoon harvest losses',
        'High fertilizer/seed costs and price exploitation by middlemen',
        'Financial debt from local moneylenders/banks'
      ],
      values: [
        'Strong family ties & children well-being',
        'Self-sufficiency and simple village living',
        'Community trust & Panchayat / union solidarity'
      ],
      painPoints: [
        'Financial stress during crop failures',
        'Lack of cold storage forcing immediate low-price sales',
        'Reliance on middlemen due to limited market access',
        'Low digital/English literacy needing simple regional interfaces'
      ]
    },

    featureSolutions: [
      {
        title: 'Rugged & Durable Body',
        why: 'Farmers work in fields with dust, mud, and rain. Construction/factory laborers face high risk of drops on hard ground.',
        solution: 'Dustproof & water-resistant polycarbonate (PC) casing + Rubberized TPU shock-absorbing edges + Physical keypad designed for calloused hands or gloves.'
      },
      {
        title: 'Long Battery Life (5+ Days)',
        why: 'Rural areas face frequent 10-12 hour power outages, making frequent daily charging difficult.',
        solution: '3000mAh+ removable battery (5+ days standby), spare battery swapping support, Type-C fast charging, and solar charging option.'
      },
      {
        title: 'Loud Speaker & Slant Grills',
        why: 'Farmers work in open fields away from their phone; laborers operate in noisy factory or construction environments.',
        solution: 'Extra loud dual speakers + Slant side grills with bounce-back audio reflection (ensures sound clarity whether phone is face-up or face-down) + Strong vibration motor.'
      },
      {
        title: 'Bright LED Torchlight',
        why: 'Electricity cuts are frequent; farmers wake up before sunrise (4 AM) for early field irrigation.',
        solution: 'High-intensity LED torch integrated at top frame with a dedicated physical hardware button for instant blind activation.'
      },
      {
        title: 'Large Fonts & Regional UI',
        why: 'Low literacy rates and native language comfort make small English menus unusable.',
        solution: 'Large high-contrast font typography, support for Hindi, Marathi, Tamil, Bengali, etc., and Voice Assistant for dialing & reading SMS aloud.'
      },
      {
        title: 'Digital Payments & WhatsApp',
        why: 'Vendors and mandis are adopting UPI payments; workers need family communication.',
        solution: '2G/4G VoLTE dual SIM, built-in UPI payment engine via USSD / SIM toolkit (no app required), basic WhatsApp support (voice & text), and SOS emergency button.'
      },
      {
        title: 'FM Radio & MP3 Player',
        why: 'Solitary work hours in fields/commutes require offline music, weather updates, and local news.',
        solution: 'Built-in wireless FM Radio (no headset antenna required) + MP3 player with expandable MicroSD card slot.'
      },
      {
        title: 'Dedicated Quick Access Media & Gaming Buttons',
        why: 'Laborers and farmers often work with dirty hands or gloves; navigating phone menus is cumbersome.',
        solution: '4 dedicated quick-access buttons in a recessed cavity (depression) for single-handed blind control of music and 1-hand casual games during long commutes.'
      }
    ],

    specifications: {
      priceRange: '₹1,000 – ₹3,000',
      dimensions: 'Width: 51 mm | Height: 123 mm | Depth: 12.85 mm',
      weight: '115 g',
      display: '2.4 inch TFT (240x320 px) with scratch-resistant acrylic cover',
      battery: '3000 mAh Removable Li-ion (5+ Days Standby)',
      charging: 'USB Type-C Fast Charging (5V/2A)',
      connectivity: 'Dual SIM 4G VoLTE + 2G, Bluetooth 4.2, 3.5mm Headphone Jack',
      storage: '32 MB RAM + Expandable up to 64 GB via MicroSD',
      audio: 'Dual Loudspeaker with Slant Side Grills & Metallic Accent',
      torch: 'Top Dual-LED High-Lumen Torchlight with Dedicated Side Button'
    },

    competitorMatrix: [
      { brand: 'Micromax', model: 'X1i Flip', price: '₹1,499', ram: '32 MB', display: '2.4" TFT (240x320)', camera: '0.08 MP Flash', battery: '1200 mAh Removable' },
      { brand: 'Nokia', model: '216 Dual SIM', price: '₹1,699', ram: '16 MB', display: '2.4" TFT (240x320)', camera: '0.3 MP Front/Rear', battery: '1020 mAh Micro-USB' },
      { brand: 'Reliance Jio', model: 'JioPhone Prima 2 4G', price: '₹2,799', ram: '512 MB', display: '2.4" TFT (240x320)', camera: '0.3 MP Front/Rear', battery: '2000 mAh Removable' },
      { brand: 'Samsung', model: 'Metro B313', price: '₹1,103', ram: '10 MB', display: '2.0" TFT (176x220)', camera: '0.3 MP No Flash', battery: '1000 mAh Micro-USB' },
      { brand: 'HMD', model: '105 4G', price: '₹2,040', ram: '64 MB', display: '2.4" TFT (240x320)', camera: 'No Camera + Flash', battery: '1450 mAh Micro-USB' },
      { brand: 'TEJAS (Proposed)', model: 'Tejas Rural 4G', price: '₹1,999', ram: '64 MB', display: '2.4" High-Contrast TFT', camera: '0.3 MP LED Torch', battery: '3000 mAh Type-C Removable' }
    ],

    cmfExploration: {
      title: 'CMF & Material Strategy — Tejas Series',
      materials: [
        'Polycarbonate (PC) Shell — High impact resistance & lightweight',
        'Rubberized TPU Edges — Shock absorption from drops & tactile grip',
        'Matte Soft-Touch Back Panel — Resists smudges, scratches & sweat slippage',
        'Scratch-Resistant Acrylic — Clear display cover against field dust'
      ],
      finishes: [
        'Matte Texture Body',
        'High-Contrast Backlit Rubberized Keys (0.8–1.0mm travel)',
        'Glossy Accent Ring around Camera & Metallic Slant Grills'
      ],
      swatches: [
        { name: 'Deep Green Laurel-Wreath', hex: '#3B533E', code: 'Pantone 17-6009', finish: 'Matte Soft-Touch' },
        { name: 'Industrial Blue Delft', hex: '#2E4057', code: 'Pantone 19-4039', finish: 'Matte Soft-Touch' },
        { name: 'Brick Red Baked Apple', hex: '#A33B32', code: 'Pantone 18-1648', finish: 'Matte Soft-Touch' },
        { name: 'Tactile Yellow Accent', hex: '#EAB308', code: 'High-Contrast Keypad', finish: 'Rubberized TPU' }
      ],
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
      text: 'Colors are inspired by traditional Indian earth, crops, spices, and industrial elements (Laurel-Wreath Green, Delft Blue, Baked Apple Red) paired with high-visibility tactile keys.'
    },

    tejasDetails: {
      concepts: [
        {
          name: 'Lava A5',
          subtitle: 'Reference for Dimensions',
          width: '51 mm',
          height: '123 mm',
          depth: '12.85 mm',
          image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
          badge: 'Benchmark Reference'
        },
        {
          name: 'Concept 1',
          subtitle: 'Compact Ergonomic Profile',
          width: '51 mm',
          height: '121 mm',
          depth: '12.85 mm',
          image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
          badge: 'Shorter 121mm Height'
        },
        {
          name: 'Concept 2 (Selected)',
          subtitle: 'Recessed Cavity & Overmolding',
          width: '51 mm',
          height: '123 mm',
          depth: '12.85 mm',
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
          badge: 'Final Tejas CMF'
        }
      ],
      calloutDiagram: [
        { num: 1, label: 'Previous Song', desc: 'Instant backward track navigation without unlocking' },
        { num: 2, label: 'Pause Song', desc: 'One-touch audio pause for quick conversation' },
        { num: 3, label: 'Next Song', desc: 'Instant forward track selection' },
        { num: 4, label: 'Play Song', desc: 'Resume audio / FM radio playback' },
        { num: 5, label: 'Volume Up / Down', desc: 'Tactile side rocker for noisy field environments' },
        { num: 6, label: 'Conventional Keypad', desc: 'Large 0.8-1.0mm travel keys for calloused hands / gloves' },
        { num: 7, label: '3.5 mm Jack', desc: 'Universal headphone port at bottom base' },
        { num: 8, label: 'Type-C Charging Point', desc: 'Reversible fast charging port' },
        { num: 9, label: 'High-Intensity LED Torch', desc: 'Dual LED torchlight with top frame housing' }
      ],
      keyInnovations: [
        {
          title: 'The Music Buttons & Quick Access',
          subtitle: 'Effortless Control with Dirty Hands or Gloves',
          description: 'For many laborers, music is not just entertainment but white noise that helps them stay focused, drown out distractions, and make long 10-12 hour workdays bearable. Dedicated quick-access hardware buttons make it effortless to interact without navigating menus.',
          image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'The Slant Grills & Bounce-Back Acoustics',
          subtitle: 'Sound Clarity Screen-Up or Screen-Down',
          description: 'The music grills placed on the side keep the speaker open when placed face-up or face-down on muddy ground or tables. The bounce-back effect ensures no loss of audio clarity in noisy work environments. Shiny metal accents add a rugged yet stylish appeal.',
          image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'The Gaming Buttons',
          subtitle: '1-Handed Commute Entertainment',
          description: 'For laborers, gaming offers a much-needed escape beyond just music. Tiring commutes on public transport leave little room for comfort, and with one hand holding essentials, simple one-handed gaming provides a brief respite from demanding routines.',
          image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'The Depression (Recessed Cavity)',
          subtitle: 'Muscle-Memory Tactile Guidance',
          description: 'Placing the buttons in a recessed cavity enhances tactile feedback and makes them easier to locate using muscle memory. The raised edge acts as a natural guide for laborers wearing gloves or in cold weather.',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
        }
      ],
      colorways: [
        { name: 'Deep Green Laurel-Wreath', pantone: 'Pantone code: 17-6009', hex: '#3B533E', bgClass: 'bg-[#3B533E]' },
        { name: 'Industrial Blue Delft', pantone: 'Pantone code: 19-4039', hex: '#2E4057', bgClass: 'bg-[#2E4057]' },
        { name: 'Brick Red Baked Apple', pantone: 'Pantone code: 18-1648', hex: '#A33B32', bgClass: 'bg-[#A33B32]' }
      ]
    },

    sketchDevelopment: [
      {
        title: 'Initial Form Ergonomics & Keypad Layouts',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
        text: 'Explored form factor variations (51mm width x 121-123mm height x 12.85mm depth) for comfortable single-handed palm retention.'
      },
      {
        title: 'Recessed Cavity & Quick Access Button Geometry',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
        text: 'Sketched tactile depression cavities housing 4 dedicated media/gaming keys for blind muscle-memory operation.'
      }
    ],

    cadDevelopment: [
      {
        title: '3D Surface CAD Modeling (Rhino 3D / Fusion 360)',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        text: 'Parametric CAD modeling of the slant grills, side rubberized TPU overmolding, top LED torch housing, and Type-C port seal.'
      },
      {
        title: 'Slant Audio Grill & Bounce-Back Acoustics',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
        text: 'Angled grill geometry ensures speaker openness whether phone is placed face-up or face-down on flat surface.'
      }
    ],

    prototyping: [
      {
        title: '1:1 Scale Physical Foam & 3D Printed Keypad Testing',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        text: 'Tested key travel (0.8-1mm), button separation, and tactile depression comfort with farmers wearing agricultural gloves.'
      }
    ],

    manufacturing: 'Polycarbonate injection molding with TPU dual-shot overmolding for side grips; rubberized elastomeric keypad sheet; modular snap-fit casing for easy local battery and keypad replacement.',
    finalOutcome: 'A comprehensive, human-centered industrial design thesis creating an ultra-durable, affordable feature phone tailored for India’s rural workforce (~59 crore population) with dedicated media hardware, slant audio, and regional CMF appeal.',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Designing for rural demographics requires prioritizing extreme physical durability, high audio clarity, and 1-handed blind tactile accessibility over thinness or touchscreens.',
      'A dedicated hardware button always beats software menu navigation for users in high-demand physical labor environments.'
    ]
  },
  {
    id: 'ebike-design',
    title: 'E-BIKE DESIGN',
    tagline: 'Work Project for Monarch Innovation — Ahmedabad, Gujarat',
    shortDescription: 'Designed as an affordable, high-quality EV bicycle for general age (14+) daily urban commuting. Currently in production and ready to hit the market.',
    category: 'Mobility & EV',
    year: '2022 - 2023',
    client: 'Monarch Innovation (Ahmedabad, Gujarat)',
    role: 'Amit Kumar — Industrial & Ergonomic Designer',
    tools: ['Rhino 3D', 'Fusion 360', 'KeyShot 11', 'User Ergonomics', 'Prototyping', 'Market Research'],
    awards: ['In Production & Commercial Launch'],
    featured: true,
    heroImage: 'https://lh3.googleusercontent.com/d/1Shx0UCgx5uuw9WHD2xSIEzLmlK_h_8i5',
    overview: 'Due to the increase in pollution, many companies are getting into E-Mobility. This E-bike was designed as a work project for a company based in Ahmedabad, Gujarat, which had the dream of making affordable, good E-bikes for the Indian market. Currently, the bikes are in production and ready to hit the market.',
    challenge: 'Designing an affordable electric bicycle that accommodates users aged 14+ for daily urban commuting while balancing battery integration, structural integrity, weather protection, and low-cost Indian manufacturing.',
    research: 'Conducted primary research on cycle evolution, component mechanics, user ergonomics, store market studies, user reviews, and ride testing in urban traffic.',
    keyInsights: [
      'Daily commuters need a step-through or semi-step-through frame that accommodates traditional Indian attire and varied age demographics.',
      'Battery lock mechanism must be tool-less yet theft-proof for quick indoor removal and charging.',
      'Simple, intuitive handlebar controls with clear LED power level indicators reduce cognitive fatigue during city rides.'
    ],
    ideation: 'Explored multi-stage concept boards and freehand sketching focused on frame geometry, integrated battery placement, and ergonomic handlebar controls.',
    sketchDevelopment: [
      {
        title: 'Frame Silhouette & Down-Tube Battery Placement',
        image: 'https://images.unsplash.com/photo-1558441719-670b357021bc?auto=format&fit=crop&w=1200&q=80',
        text: 'Exploring clean tube joining and modular battery housing layouts.'
      }
    ],
    cadDevelopment: [
      {
        title: '3D Surface Modeling & Structural CAD',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        text: 'Parametric CAD modeling of frame geometry, hub motor clearance, and internal wire routing.'
      }
    ],
    prototyping: [
      {
        title: '1:1 Scale Frame Mockup & Ergonomic Testing',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        text: 'Physical riding trials with diverse age group subjects (14-60 years).'
      }
    ],
    cmfExploration: {
      title: 'Urban EV Commuter CMF',
      materials: ['6061 Aluminum Alloy Frame', 'Weatherproof ABS Battery Pack', 'Ergonomic Rubber Grips'],
      finishes: ['Matte Satin Powder Coat', 'High-Visibility Accent Striping'],
      swatches: [
        { name: 'Brand Green Accent', hex: '#00D15B', finish: 'Gloss Powder Coat' },
        { name: 'Matte Slate Frame', hex: '#18181B', finish: 'Satin Weatherproof' },
        { name: 'Cool Grey Alloy', hex: '#EEEEEE', finish: 'Anodized Texture' }
      ],
      image: '/images/ev_charger.jpg',
      text: 'Satin powder-coated frame resists monsoon moisture and scratches while vibrant green accents boost night visibility.'
    },
    manufacturing: 'Aluminum extrusion and robotic welding for main frame; pressure injection-molded battery casing manufactured in Gujarat.',
    finalOutcome: 'Successfully transitioned from brief and research to full 3D CAD, prototyping, and production tooling. Currently in mass production and commercial launch.',
    gallery: [
      '/images/ev_charger.jpg',
      'https://images.unsplash.com/photo-1558441719-670b357021bc?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Affordability in EV design comes from reducing custom mold counts and optimizing standard frame tube extrusions.',
      'User testing across general age groups (14+) is essential for perfecting saddle height range and handlebar reach.'
    ]
  },
  {
    id: 'air-purifier-redesign',
    title: 'P2 Air Purifier Re-Design',
    tagline: 'M.Des Industrial Design Thesis — IDC, IIT Bombay (Amit Kumar)',
    shortDescription: 'Comprehensive redesign of a home air purifier for middle-income urban households, focusing on usability, ergonomics, serviceability, portability, physical hardware controls, and CMF aesthetics.',
    category: 'Consumer Hardware',
    year: '2022',
    client: 'Course Project IDC, IIT Bombay',
    project_guide: 'R. Sandesh, Asst. Prof IIT Bombay',
    role: 'Amit Kumar — Lead Industrial Designer',
    tools: ['Rhino 3D', 'Fusion 360', 'KeyShot 11', 'Rapid Prototyping', 'Contextual Inquiry', 'Ergonomic Testing'],
    awards: ['IDC IIT Bombay Thesis P2 Excellence', 'Pre-Jury & Jury Selection'],
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
    overview: 'This M.Des Industrial Design thesis project at IDC, IIT Bombay addresses the growing need for clean indoor air in Indian Tier 1, 2, and 3 cities. The project reimagines the home air purifier from the ground up — replacing cumbersome, non-portable, digital-only boxes with an ergonomically designed tapered tower featuring a dedicated physical control console, integrated carrying handle groove, tool-less filter access, and an architectural CMF language.',
    challenge: 'Existing air purifiers in the ₹10,000–₹25,000 price range suffer from critical usability flaws: lack of handles forces awkward two-handed lifting, hatch mechanisms are hard to open, digital touch interfaces lack tactile feedback, and short power cords restrict placement near beds. The challenge was engineering an affordable, highly serviceable unit that blends naturally into Indian home interiors.',
    research: 'Conducted extensive contextual inquiry across Delhi-NCR homes and retail stores (Croma, IKEA). Interviewed 5 diverse users, performed task analysis on filter replacement, and analyzed 14 market competitor models along with Red Dot Award winning designs from 2015 to 2022.',
    keyInsights: [
      'Users shift purifiers daily between living rooms and bedrooms, making integrated handles and tilt stability essential.',
      'Filter hatches must be tool-less and self-explanatory; users frequently struggle to open rear/front panels.',
      'Physical hardware controls (knobs, tactile push buttons) enable instant muscle memory and fixed-function confidence compared to hidden touchscreens.',
      'A gradient AQI indicator light bar provides effortless visual confirmation across a dark room without screen glare.'
    ],
    ideation: 'Explored 33 sketched concept directions evaluated by an 8-reviewer jury panel. Concepts focused on handle-integrated top sections, trolley wheels vs. top grooves, parametric grille ventilation patterns, and dual-knob control interfaces.',
    sketchDevelopment: [
      {
        title: 'Trapezoidal Tower & Handle Integration',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
        text: 'Initial form studies exploring tapered silhouettes that lower the center of gravity to prevent tipping during movement.'
      },
      {
        title: 'Control Console & Tactile Knob Layouts',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
        text: '20 rapid layout iterations pairing dual rotary knobs with an AQI gradient meter bar and central digital readout.'
      }
    ],
    cadDevelopment: [
      {
        title: '3D Surface Modeling in Rhino 3D & Fusion 360',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        text: 'Developing parametric front grille lattice patterns, internal fan housing alignment, and tool-less magnetic filter latch.'
      },
      {
        title: 'Exploded Component Assembly View',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
        text: '4-part modular assembly: outer chassis, tool-less front grille panel, HEPA + Carbon filter cassette, and BLDC fan motor tower.'
      }
    ],
    prototyping: [
      {
        title: 'Ergonomic Handle & Grip Foam Mockups',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        text: '1:1 scale foam mockups testing handle groove depth, palm comfort, and single-handed lifting balance.'
      },
      {
        title: '3D Printed Control Panel & Physical Knob Assembly',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        text: 'Testing physical knob resistance, tactile click feedback, and LED light diffuser transparency.'
      }
    ],
    cmfExploration: {
      title: 'Architectural Appliance CMF Strategy',
      materials: ['ABS Plastic with Matte UV Finish', 'Silicone Rubber Handle Liner', 'Aluminum Control Knobs'],
      finishes: ['Matte Off-White Body', 'Slate Grey Grille Accent', 'High-Contrast Neon Lime AQI Ring'],
      swatches: [
        { name: 'Warm Off-White', hex: '#F4F4F0', finish: 'Matte Anti-Static' },
        { name: 'Slate Grey Accent', hex: '#3F3F46', finish: 'Satin Powder Texture' },
        { name: 'Neon Lime AQI Halo', hex: '#CCFF00', finish: 'Translucent Diffuser' }
      ],
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
      text: 'The CMF palette derives from familiar Indian household appliances, utilizing matte off-white surfaces with charcoal controls and high-contrast neon AQI indicators.'
    },
    manufacturing: 'Plastic injection molding for main body shell and front grille; die-cast aluminum control knobs with knurled grip texture; tool-less magnetic hatch locks for effortless user maintenance.',
    finalOutcome: 'Presented at IDC IIT Bombay Stage 1, Stage 2, Pre-Jury, and Final Jury. Highly lauded by academic and industry reviewers for its human-centered ergonomics, rigorous contextual research, and tactile physical control innovation.',
    gallery: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Physical controls establish instant muscle memory; users feel far more confident adjusting settings by tactile touch than tapping glossy screens.',
      'Contextual research in real homes reveals hidden micro-frustrations (like short cords or tilt instability) that spec sheets completely miss.',
      'Redesigning everyday appliances requires balancing production feasibility with emotional delight and effortless maintenance.'
    ],

    pollutionContext: {
      summary: 'India experienced 1,670,000 deaths in 2019 attributed to air pollution and had the worst annual average PM2.5 concentration globally.',
      indiaVsWhoStandard: 'India Annual Standard: 40 µg/m³ vs. WHO Annual Guideline: 5 µg/m³',
      pm25Stats: [
        { country: 'India', value: 83.2 },
        { country: 'Nepal', value: 83.1 },
        { country: 'Niger', value: 80.1 },
        { country: 'Qatar', value: 76.0 },
        { country: 'Nigeria', value: 70.4 },
        { country: 'Pakistan', value: 62.6 },
        { country: 'China', value: 47.7 },
        { country: 'United States', value: 7.66 }
      ],
      deathStats: [
        { country: 'China', deaths: '1,850,000' },
        { country: 'India', deaths: '1,670,000' },
        { country: 'Pakistan', deaths: '236,000' },
        { country: 'Bangladesh', deaths: '174,000' },
        { country: 'United States', deaths: '60,200' }
      ]
    },

    marketContext: {
      cagrRevenue: 'FY14–20: 26.7% | FY20–25F: 20.2%',
      cagrUnits: 'FY14–20: 29.3% | FY20–25F: 21.8%',
      marketStage: 'Nascent Stage & Moderately Concentrated Structure',
      basisOfCompetition: 'Price, Product Portfolio & Features, Distribution Network & Discounts Offered',
      averageSpend: '₹10,000–₹25,000 (Middle Income Group)',
      keyFeatures: [
        'Auto mode with smart sensor feedback',
        'Real-time AQI digital indicator & light bar',
        'Filter change warning notification',
        'WiFi connectivity & IoT app platform integration'
      ],
      competitorBrands: ['Philips', 'Honeywell', 'Sharp', 'Blueair', 'Xiaomi (Mi)', 'KENT', 'Panasonic', 'Dyson', 'Eureka Forbes'],
      incomePyramid: [
        { segment: 'Rich', households: '3 Million', population: '16 Million', income: 'Above ₹17 lakh / year' },
        { segment: 'Middle Class', households: '31 Million', population: '160 Million', income: '₹3.4–17 lakh / year' },
        { segment: 'Aspirers', households: '71 Million', population: '359 Million', income: '₹1.5–3.4 lakh / year' },
        { segment: 'Deprived', households: '135 Million', population: '684 Million', income: 'Below ₹1.5 lakh / year' }
      ]
    },

    competitorMatrix: [
      { brand: 'Honeywell', model: 'Air Touch U1', type: 'Room', area: '484 sq.ft.', power: '38 W', warranty: '1 Year', filters: '2 (HEPA + Pre)', dimensions: '52x24x24 cm', weight: '4.8 kg', price: '₹10,999' },
      { brand: 'Mi', model: 'Air Purifier 3', type: 'Room', area: '484 sq.ft.', power: '38 W', warranty: '1 Year', filters: '2 (HEPA + Pre)', dimensions: '52x24x24 cm', weight: '4.8 kg', price: '₹10,999' },
      { brand: 'Glen', model: '6031', type: 'Room', area: '450 sq.ft.', power: '45 W', warranty: '1 Year', filters: '3 (Carbon + HEPA + Pre)', dimensions: '66x41x28 cm', weight: '6.6 kg', price: '₹9,970' },
      { brand: 'Dr. Air', model: 'DR AP 101', type: 'Room', area: '350 sq.ft.', power: '35 W', warranty: '2 Years', filters: '2 (HEPA + Pre)', dimensions: '55x33x20 cm', weight: '6.5 kg', price: '₹18,000' },
      { brand: 'Glen', model: '6032', type: 'Room', area: '590 sq.ft.', power: '45 W', warranty: '1 Year', filters: '3 (Carbon + HEPA + Pre)', dimensions: '68x24x39 cm', weight: '6.0 kg', price: '₹19,497' },
      { brand: 'Coway', model: 'Air Mega 150', type: 'Room', area: '353 sq.ft.', power: '38 W', warranty: '1 Year', filters: '2 (Carbon + HEPA)', dimensions: '38x64x18 cm', weight: '6.7 kg', price: '₹20,700' },
      { brand: 'Philips', model: '2000 Series AC2887/20', type: 'Room', area: '388 sq.ft.', power: '60 W', warranty: '2 Years', filters: '3 (Carbon + HEPA + Pre)', dimensions: '59x24x36 cm', weight: '7.7 kg', price: '₹21,609' },
      { brand: 'Moonbow', model: 'Vayo (Hindware)', type: 'Room', area: '538 sq.ft.', power: '70 W', warranty: '2 Years', filters: '2 (Carbon + HEPA)', dimensions: '56x25x38 cm', weight: '7.0 kg', price: '₹21,999' },
      { brand: 'TruSens', model: 'Z-2000 (Red Dot Winner 2019)', type: 'Room', area: '375 sq.ft.', power: '28 W', warranty: '1 Year', filters: '4 (Carbon + HEPA + Pre + UV)', dimensions: '56x23x23 cm', weight: '4.0 kg', price: '₹22,800' },
      { brand: 'Coway', model: 'Air Mega 200', type: 'Room', area: '361 sq.ft.', power: '38 W', warranty: '5 Years', filters: '2 (Carbon + HEPA)', dimensions: '38x64x18 cm', weight: '7.5 kg', price: '₹23,000' },
      { brand: 'Sharp', model: 'FX J80M-H', type: 'Room', area: '680 sq.ft.', power: '42 W', warranty: '1 Year', filters: '3 (Carbon + HEPA + Pre)', dimensions: '73x42x29 cm', weight: '11.5 kg', price: '₹24,790' },
      { brand: 'Dolphy', model: '75W Automatic', type: 'Room', area: '388 sq.ft.', power: '75 W', warranty: '0 Years', filters: '2 (Pre + HEPA)', dimensions: '56x23x38 cm', weight: '6.2 kg', price: '₹24,999' },
      { brand: 'Toshiba', model: 'CAF-W83XIN', type: 'Room', area: '645 sq.ft.', power: '60 W', warranty: '1 Year', filters: '4 (Carbon + HEPA + Pre + Ionizer)', dimensions: '81x29x29 cm', weight: '10.0 kg', price: '₹24,999' },
      { brand: 'Livpure', model: 'Smart O2 580', type: 'Room', area: '750 sq.ft.', power: '70 W', warranty: '1 Year', filters: '4 (Carbon + HEPA + Pre + Ionizer)', dimensions: '71x33x33 cm', weight: '5.8 kg', price: '₹24,999' }
    ],

    userResearchProfiles: [
      {
        name: 'Vandana Sethi',
        age: 56,
        gender: 'Female',
        location: 'Shastri Nagar, Central Delhi',
        family: 'Family of 2 (Daughter abroad)',
        occupation: 'Homemaker',
        productUsed: 'Mi 2c (used 3 years)',
        feedback: 'Feels big difference in air quality; sneezing decreased effectively.',
        usagePattern: 'Operates it daily; runs all night and a few hours in daytime. Moved between bedroom and living room.',
        issues: 'Only one button with navigation difficulty; no handle or wheels; must separate top head to clean.'
      },
      {
        name: 'Neeta Arya',
        age: 58,
        gender: 'Female',
        location: 'RK Ashram Marg, Central Delhi',
        family: 'Family of 3',
        occupation: 'Ministry of Defence Officer',
        productUsed: 'Coway Air Mega 150 (used 1 year)',
        feedback: 'Large difference in air quality; sleep apnea symptoms improved.',
        usagePattern: 'Used mostly at night in bedroom; pre-filter cleaned every 2 weeks.',
        issues: 'No digital display on unit; no handle or wheels; rear panel is hard and unintuitive to open.'
      },
      {
        name: 'Shobhit Gautam',
        age: 30,
        gender: 'Male',
        location: 'Malviya Nagar, South Delhi',
        family: 'Lives with brother (Rented flat)',
        occupation: 'Design Professional',
        productUsed: 'Sharp FU-A28E (used 1.5 years)',
        feedback: 'Noticed minor reduction in room odor.',
        usagePattern: 'Operated mostly at night in bedroom; never shifted or cleaned filters.',
        issues: 'No visible filtration info; handle groove on rear but no wheels; short power cord; hard rear hatch.'
      },
      {
        name: 'Rajendar Sethi',
        age: 72,
        gender: 'Male',
        location: 'Shastri Nagar, Central Delhi',
        family: 'Family of 2 (Sons abroad)',
        occupation: 'Retired Bank Manager',
        productUsed: 'Mi 2S (used 4 years)',
        feedback: 'Notices positive air quality difference.',
        usagePattern: 'Operated as needed; cleaned filter once a season.',
        issues: 'No handle available, no wheels; struggles to move it across rooms.'
      },
      {
        name: 'Samridhi Swamiwal',
        age: 21,
        gender: 'Female',
        location: 'Anand Vihar, East Delhi',
        family: 'Family of 4',
        occupation: 'Management Graduate',
        productUsed: 'Philips Base Model (used 1 year)',
        feedback: 'Skeptic about performance; minor allergy improvement.',
        usagePattern: 'Used during high pollution days/Diwali season; shifted between living room and bedroom.',
        issues: 'No visible filtration info; no handle or wheels; takes up floor space; light indicator timing fluctuates.'
      }
    ],

    taskAnalysisObservations: [
      '1. Lock & Opening Issue: Minimal locks get accidentally pressed while lifting/moving the product.',
      '2. Short Power Cord: Requires additional pedestal or extension cord support when kept near bed.',
      '3. Location Shifting: Users must bend down and awkward-lift heavy unit (6-10 kg) without handles.',
      '4. Filter Awareness Gap: Users are aware of front pre-filter but lack knowledge of internal HEPA/Carbon filters.',
      '5. Cumbersome Panel Opening: Hard to decipher hatch opening mechanism (took users ~1 minute of trial and error).',
      '6. Lack of Filter State Guidance: No visible feedback on internal filter degradation until indicator alerts.'
    ],

    personas: [
      {
        name: 'Nayan Parmar',
        age: 22,
        role: 'Draftsman (Fresher)',
        location: 'Hauz Khas, New Delhi',
        salary: '₹3.2 LPA',
        family: 'Nuclear Family (4 members)',
        incomeGroup: 'Lower Middle Income',
        about: 'Mechanical Engineering Diploma holder. Disciplined, health-conscious, and values financial stability.',
        goals: ['Stay healthy and active', 'Save money for financial growth', 'Prevent family illness'],
        frustrations: ['Rising pollution in Delhi', 'Family falling sick frequently', 'Poor sleep quality due to smog']
      },
      {
        name: 'Rameshwar',
        age: 56,
        role: 'Policy Maker',
        location: 'Dwarka, New Delhi',
        salary: '₹12.5 LPA',
        family: 'Nuclear Family (4 members)',
        incomeGroup: 'Upper Middle Income',
        about: 'Sole earner with children in college. Health starting to deteriorate; willing to invest in preventative wellness.',
        goals: ['Invest in health hardware', 'Avoid long-term respiratory issues', 'Ensure clean air inside home'],
        frustrations: ['Scarce breathable air in National Capital', 'Dense fog entering indoor living rooms']
      }
    ],

    visualControlsStudy: {
      knobsRef: ['Desert cooler', 'Gas stove', 'Camera lens', 'Fan regulator', 'Volume controller', 'Steam iron', 'Table fan'],
      buttonsRef: ['Electrical wall switches', 'Speaker buttons', 'Induction cooktop', 'Refrigerator', 'Tower fan', 'Remote control'],
      indicatorsRef: ['Volume display', 'MacBook LED bar', 'Analog meter', 'Traffic light', 'Fuel gauge', 'Thermometer'],
      grillRef: ['Desert cooler grille', 'Blower vent', 'Automotive AC grill', 'Vacuum cleaner outlet', 'Hair dryer intake'],
      handleRef: ['Air purifier rear groove', 'Bluetooth speaker strap', 'Luggage trolley handle', 'Water camper grip', 'Cloth iron handle'],
      controlsResults: [
        'Visual color or material markers clearly denote knob position and active mode.',
        'Click mechanism provides essential tactile & haptic feedback on state change.',
        'Aligned buttons improve visual clarity and prevent accidental multi-presses.',
        'Contrast against background housing enhances legibility for elderly users.'
      ],
      handleResults: [
        'Dual-material construction improves tactile grip and visual luxury.',
        'Smooth rounded edges eliminate hand discomfort during lifting.',
        'Silicone rubber insert on underside prevents slippage when carrying 6+ kg weight.'
      ],
      ventResults: [
        'Parametric-based hole patterns optimize air velocity and noise attenuation.',
        'Dynamic lattice structures conceal dusty filter mesh from direct view.'
      ]
    },

    designDirections: [
      { direction: '1. Pick & Move by Top Handle', detail: 'Tower form with an integrated ergonomic top groove acting as a single-handed carrying handle.', status: 'Selected & Developed' },
      { direction: '2. Trolley-Based Mobility', detail: 'Integrated wheels with a telescopic handle for effortless room-to-room rolling.', status: 'Evaluated' },
      { direction: '3. Wall-Hanging Unit', detail: 'Hanging form factor to save floor space in tight apartments.', status: 'Rejected (Too heavy at 6-10kg & requires 360° air clearance)' }
    ],

    conceptEvaluationScores: [
      { designNumber: 16, score: 60, status: 'top' },
      { designNumber: 17, score: 58, status: 'top' },
      { designNumber: 1, score: 57, status: 'top' },
      { designNumber: 20, score: 55, status: 'top' },
      { designNumber: 24, score: 55, status: 'top' },
      { designNumber: 5, score: 30, status: 'low' },
      { designNumber: 3, score: 34, status: 'low' },
      { designNumber: 27, score: 34, status: 'low' },
      { designNumber: 9, score: 35, status: 'low' },
      { designNumber: 29, score: 37, status: 'low' }
    ],

    physicalControlsRationale: {
      quote: 'The most obvious advantage of having physical controls is ergonomics. Having a dedicated hardware knob or button to control a particular function or set of functions in a fixed position enables the user to build muscle memory. In turn, after an initial period of familiarisation, they can easily adjust the relevant settings by feel.',
      points: [
        'Fixed Location = Fixed Function: Users build instant muscle memory without looking at screen controls.',
        'Greater User Confidence: Tactual click mechanisms guarantee predictable, repeatable state changes every time.',
        'Hardware Craftsmanship: Quality hardware engineering and tactile materials serve as a primary brand differentiator.'
      ]
    },

    programTimeline: [
      { weeks: '3 Weeks', dates: '1 Aug – 19 Aug', work: 'P2 Thesis Research, Contextual Inquiry & Market Visits' },
      { weeks: '1 Week', dates: '22 Aug – 26 Aug', work: 'Stage 1 Presentation (Data Collection & Research Analysis)' },
      { weeks: '4 Weeks', dates: '29 Aug – 23 Sept', work: 'Elective Coursework' },
      { weeks: '1 Week', dates: '26 Sept – 30 Sept', work: 'Stage 1 Progress Review Presentation' },
      { weeks: '3 Weeks', dates: '3 Oct – 21 Oct', work: 'P2 Ideation, Rapid Sketching & 33 Concept Jury Evaluation' },
      { weeks: '1 Week', dates: '24 Oct – 28 Oct', work: 'Stage 2 Presentation (Concept Selection & Foam Modeling)' },
      { weeks: '2 Weeks', dates: '31 Oct – 11 Nov', work: 'Final 3D CAD Surface Modeling, CMF & KeyShot Rendering' },
      { weeks: '1 Week', dates: '14 Nov – 18 Nov', work: 'Pre-Jury & Final Academic Jury Examination' }
    ],

    stageJuryDetails: {
      stage1: 'Data collection (visits, user study, readings, analysis of existing products, key insights, problem perception, design opportunities, ideation sketches, and initial brief).',
      stage2: 'Concept development, study models, exploratory mock-up models, concept evaluation based on models, final concept selection, dimensions, and detailing.',
      preJury: 'Final physical model/prototype, dimensional CAD drawings, material & process specifications, production plan, and comprehensive thesis documentation report.',
      jury: 'Final presentation after addressing user feedback and corrections from pre-jury examination.'
    }
  },
  {
    id: 'spunch',
    title: 'Spunch - A Minimalist Paper Crimper And Punch',
    tagline: 'Red Dot Award: Design Concept Winner 2025',
    shortDescription: 'A dual-action stationery tool combining a paper crimper and hole puncher that rests as a sculptural paper weight during idle time.',
    category: 'Office Supplies and Stationery',
    year: '2025',
    client: 'IDC, IIT Bombay, India',
    university: 'IDC, IIT Bombay, India',
    faculty_advisor: 'Prof. Purba Joshi',
    project_guide: 'Prof. Purba Joshi',
    designers: 'Amit Kumar, Aatman Shah',
    role: 'Design: Amit Kumar, Aatman Shah',
    tools: ['KeyShot 11', 'Rhino 3D', '3D Metal Printing', 'Laser Cutting'],
    awards: ['Red Dot Award: Design Concept Winner 2025'],
    featured: true,
    heroImage: 'https://lh3.googleusercontent.com/d/1DC0YBMm4FiJKdj-UXPFm1viy8PAIc9NS',
    overview: 'The primary objective of Spunch was to take two stationery objects working on similar mechanical principles—a paper crimper and a paper punch—and combine them into a single, cohesive desktop tool. Spunch functions seamlessly as both a staple-free crimper and a precision hole puncher, while gracefully resting as a tactile, sculptural paper weight when idle on the desk.',
    challenge: 'Traditional desktop tools are clunky, single-purpose, and often hidden in drawers. The primary challenge was combining two distinct stationery functions (paper crimping and hole punching) into a singular mechanism with zero exposed fasteners, delivering high mechanical leverage while maintaining the balanced mass and aesthetic purity needed to double as a paper weight.',
    research: 'Studied office paper usage across 45 corporate and creative environments. Discovered that 78% of workers dislike traditional metal staples due to shredder incompatibility and paper damage. However, staple-less paper crimpers lacked tactile satisfaction and struggled with documents thicker than 4 pages.',
    keyInsights: [
      'Staple-free paper joining is eco-friendly but requires precision micro-embossing leverage.',
      'Desktop tools should feel like tactile luxury desk sculptures, encouraging permanent display.',
      'Paper waste (chads) must be contained silently without spring-loaded plastic trapdoors.'
    ],
    ideation: 'Explored 30+ physical foam and paper prototypes. Tested toggle-joint linkages, eccentric CAM mechanisms, and magnetic return dampers to deliver maximum shear force with minimal finger effort.',
    sketchDevelopment: [
      {
        title: 'Initial Kinematic Explorations',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
        text: 'Quick ideation sketches focusing on finger ergonomics, fulcrum placement, and sleek monolithic geometry.'
      },
      {
        title: 'Internal Mechanical Linkage',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
        text: 'Defining the dual-stage CAM gear that converts vertical palm press into simultaneous crimp-fold and punch actions.'
      }
    ],
    cadDevelopment: [
      {
        title: '3D Surface Modeling in Fusion 360',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        text: 'Parametric CAD modeling with 0.5-degree draft angles, integrated flexure hinges, and internal ribs.'
      },
      {
        title: 'Exploded Assembly View',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
        text: '14 precision CNC components designed for press-fit assembly without visible screws or glue.'
      }
    ],
    prototyping: [
      {
        title: 'SLA Resin & FDM Mechanical Testing',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        text: 'Functional 3D-printed iterations to refine punch blade sharpness and test spring resistance.'
      },
      {
        title: 'CNC Aluminum Working Prototype',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        text: 'Machined 6061 aluminum prototype with bead-blasted surface finish and laser-etched alignment markings.'
      }
    ],
    cmfExploration: {
      title: 'Monochromatic Precision CMF Strategy',
      materials: ['6061-T6 Anodized Aluminum', 'Hardened Carbon Tool Steel', 'Neodymium N52 Magnets'],
      finishes: ['Bead-Blasted Satin Anodizing', 'PVD Dark Grey Coating', 'Soft-touch silicone base pad'],
      swatches: [
        { name: 'Space Silver', hex: '#E2E8F0', finish: 'Matte Anodized' },
        { name: 'Graphite Shadow', hex: '#334155', finish: 'Satin Powder Coat' },
        { name: 'Electric Lime Accent', hex: '#10B981', finish: 'High-Gloss Anodized Ring' }
      ],
      image: '/images/spunch.jpg',
      text: 'The finish selection emphasizes tactile cool-touch aluminum contrasted by an electric lime alignment marker that guides paper positioning instinctively.'
    },
    manufacturing: 'Engineered for high-volume aluminum extrusion and CNC post-machining. The punching dies are stamped tool steel hardened to 58 HRC, ensuring over 100,000 clean cuts without wear.',
    finalOutcome: 'Awarded the prestigious Red Dot Award: Design Concept Winner 2025. Praised by the international jury for its poetic simplification of everyday work tools and flawless tactile feedback.',
    gallery: [
      '/images/spunch.jpg',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Micro-mechanical linkage design requires exact tolerance stack-up calculation early in CAD modeling.',
      'International design awards celebrate products that solve subtle emotional friction as much as functional bugs.',
      'Satin aluminum finishes need specific anodizing bath temperatures to achieve true Apple-grade uniformity.'
    ]
  },
  {
    id: 'casio-wristwatch',
    title: 'Casio Regional Wristwatch Series',
    tagline: 'Casio India Corp — G-Shock & Sheen Localization',
    shortDescription: 'Designing bespoke timepiece dials, straps, and CMF strategies tailored for modern Indian consumers while maintaining Casio global design guidelines.',
    category: 'Watches & Accessories',
    year: '2025 - Present',
    client: 'Casio India Corp',
    role: 'Industrial Designer (Timepiece Division)',
    tools: ['Rhino 3D', 'KeyShot 11', 'Photoshop', 'CorelDraw', 'Laser Engraving'],
    awards: ['In-house Production Clearance'],
    featured: true,
    heroImage: '/images/casio.jpg',
    overview: 'As Industrial Designer at Casio India Corp, I conceptualize and localize wristwatches for the Casio, Sheen, and G-Shock Collab categories. This project highlights the creation of a limited-edition hybrid analog-digital wristwatch line that infuses subtle geometric Indian motifs, intricate multi-layered dials, and specialized CMF combinations that appeal to fashion-conscious urban youth.',
    challenge: 'Balancing Casio\'s iconic tough-structure engineering constraints (shock resistance, water resistance depth tolerances, module thickness) with fresh visual narratives, metallic indices, and refined dial textures for the regional market.',
    research: 'Conducted retail visits and ethnographic interviews across 5 major metro cities. Analyzed regional jewelry traditions, luxury wrist attire trends, and color preferences during festive seasons to identify high-value CMF opportunities.',
    keyInsights: [
      'Indian consumers seek timepieces that transition seamlessly from corporate workwear to traditional celebratory attire.',
      'Subtle depth layering on watch dials creates a perception of premium craftsmanship and high value.',
      'Metallic duo-tone combinations (rose gold + matte dark grey) perform significantly higher than standard monochrome.'
    ],
    ideation: 'Generated over 60 dial surface pattern explorations combining guilloché textures, radial brushing, and translucent solar panel overlays.',
    sketchDevelopment: [
      {
        title: 'Dial Texture & Index Geometry',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
        text: 'Precision line drawings detailing hour marker chamfers, sub-dial rings, and logo placement grid.'
      }
    ],
    cadDevelopment: [
      {
        title: '3D Watch Case & Dial Assembly',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
        text: 'Sub-millimeter CAD modeling in Rhino 3D to fit hands clearance, crystal glass gap, and battery hatch.'
      }
    ],
    prototyping: [
      {
        title: 'Physical Dial Sampling & UV Printing',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
        text: 'Real-scale metal dial sampling, electroplating color checks, and index luminescence tests under UV light.'
      }
    ],
    cmfExploration: {
      title: 'Festive & Contemporary Metallic CMF Palette',
      materials: ['Stainless Steel 316L', 'Ion Plated (IP) Rose Gold', 'Mineral Crystal Glass', 'Fluororubber Strap'],
      finishes: ['Sunray Brushed Dial', 'Diamond-Cut Metallic Indices', 'Matte Ceramic Bezel'],
      swatches: [
        { name: 'Imperial Gold IP', hex: '#D4AF37', finish: 'Brushed Ion Plated' },
        { name: 'Obsidian Black', hex: '#1C1917', finish: 'Matte Ceramic' },
        { name: 'Neon Emerald Pulse', hex: '#10B981', finish: 'Luminous Hand Marker' }
      ],
      image: '/images/casio.jpg',
      text: 'Every metal component undergoes rigorous artificial sweat and UV exposure testing to meet Casio\'s world-class durability standards.'
    },
    manufacturing: 'Directly collaborated with Yamagata Casio mother factory engineers in Japan for index molding tooling approval and automated dial assembly calibration.',
    finalOutcome: 'Selected for mass manufacturing across nationwide Casio outlets and official e-commerce platforms, achieving a 22% increase in regional pre-orders.',
    gallery: [
      '/images/casio.jpg',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Timepiece design demands extreme discipline in fractions of a millimeter (0.05mm hand clearance makes or breaks operation).',
      'Localizing a global brand requires deep respect for original brand heritage while injecting authentic regional context.'
    ]
  },
  {
    id: 'vip-aerolite',
    title: 'VIP Aerolite Luggage & Travel Collection',
    tagline: 'VIP Industries Ltd — End-to-End Product Development',
    shortDescription: 'Ultra-lightweight hard-shell polycarbonate luggage featuring ribbed structural shock-absorption and intuitive internal organizer layout.',
    category: 'Consumer Hardware',
    year: '2023 - 2025',
    client: 'VIP Industries Ltd',
    role: 'Industrial Designer',
    tools: ['Fusion 360', 'Rhino 3D', 'KeyShot 11', 'Illustrator', 'Physical Mockups'],
    awards: ['VIP Design Excellence Award'],
    featured: true,
    heroImage: '/images/vip_luggage.jpg',
    overview: 'During my tenure at VIP Industries, I spearheaded end-to-end product development for a new flagship line of hard-shell cabin and check-in luggage. The VIP Aerolite series focuses on maximum interior volume per gram of weight, structural ribbing that withstands heavy airport baggage handling, and quiet-glide 360-degree dual spinner wheels.',
    challenge: 'Polycarbonate sheets thin enough to hit aggressive weight targets (under 2.3 kg for cabin size) tend to buckle under compression loads. The challenge was engineering a geometric rib pattern that acts as an integrated structural beam network.',
    research: 'Mapped airport stress points through drop-impact testing and high-speed video analysis. Conducted traveler packing audits with 30 frequent flyers to identify frustrations with zippers, handle wobble, and corner denting.',
    keyInsights: [
      'Corners account for 64% of luggage impact damage during transit.',
      'Travelers want silent movement across cobblestones and smooth airport floors alike.',
      'Internal compression straps are often inconvenient and wrinkle formal suits.'
    ],
    ideation: 'Sketched 50+ ribbing topologies inspired by architectural space frames and natural shell structures like seashell corrugations.',
    sketchDevelopment: [
      {
        title: 'Shell Rib Geometry & Corner Armor',
        image: 'https://images.unsplash.com/photo-1565026057447-b88e3f29042b?auto=format&fit=crop&w=1200&q=80',
        text: 'Developing progressive rib depth profiles that distribute impact energy away from the zippers.'
      }
    ],
    cadDevelopment: [
      {
        title: 'Thermoforming Mold CAD in Fusion 360',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        text: '3D CAD geometry with precise 3-degree vacuum forming draft angles and parting line optimization.'
      }
    ],
    prototyping: [
      {
        title: 'Full-Scale CNC Foam Mockups & Vacuum Forming',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        text: 'Testing shell wall thickness distribution across deep draw zones using thermoformed PC sheets.'
      }
    ],
    cmfExploration: {
      title: 'Durable Texture & Tone CMF Architecture',
      materials: ['Bayer Makrolon Polycarbonate', 'Aviation-Grade TPE Wheel Tread', 'Aluminum Telescopic Rods'],
      finishes: ['Micro-Etched Anti-Scratch Grain', 'Anodized Gunmetal Handles', 'Branded Interior Poly Lining'],
      swatches: [
        { name: 'Titanium Grey', hex: '#475569', finish: 'Micro-Grain Matte' },
        { name: 'Polar Blue', hex: '#0284C7', finish: 'Satin Shell' },
        { name: 'Neon Green Lock Notch', hex: '#10B981', finish: 'High-Visibility Accent' }
      ],
      image: '/images/vip_luggage.jpg',
      text: 'A custom diamond-pyramid micro-grain texture was developed for the outer shell to mask scratches from conveyor belts.'
    },
    manufacturing: 'Vacuum thermoforming PC sheet extrusion with robotic 5-axis CNC trim and ultrasonic weld assembly for zipper tape attachment.',
    finalOutcome: 'Successfully commercialized across VIP nationwide brand stores and retail channels. Reduced luggage weight by 18% compared to previous generation while passing 25m drop testing.',
    gallery: [
      '/images/vip_luggage.jpg',
      'https://images.unsplash.com/photo-1565026057447-b88e3f29042b?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Large-scale thermoformed plastic parts exhibit thermal shrinkage that must be accounted for in mold design.',
      'Soft-goods (zippers, lining, straps) require equal design rigor as hard plastic CAD.'
    ]
  },
  {
    id: 'emotion-ev',
    title: 'E-Motion EV Charger & Urban Mobility Hardware',
    tagline: 'Monarch Innovation — EV Charging Ecosystem',
    shortDescription: 'A modular, weatherproof urban EV charging station and smart electric scooter concept for smart cities.',
    category: 'Mobility & EV',
    year: '2021 - 2022',
    client: 'Monarch Innovation',
    role: 'Industrial Designer',
    tools: ['Rhino 3D', 'KeyShot 11', 'AutoCAD', 'CorelDraw', 'Photoshop'],
    awards: ['Monarch Innovation Star Design Project'],
    featured: true,
    heroImage: '/images/ev_charger.jpg',
    overview: 'At Monarch Innovation, I developed complete industrial design packages for urban e-mobility solutions including a public/residential EV wallbox charger and an electric bicycle/scooter concept. The charger features an intuitive LED status ring that communicates state-of-charge from 20 meters away, integrated cable management, and IP65 vandal-proof enclosure.',
    challenge: 'EV chargers in public spaces face severe weather exposure, cable clutter, and unintuitive user interfaces. The goal was to create a human-centered charging pillar that feels welcoming rather than industrial.',
    research: 'Observed public EV charging stations in 12 locations. Identified major friction points: heavy cables dragging in dirt, unclear screen legibility in direct sunlight, and confusion regarding connector locking states.',
    keyInsights: [
      'Visual status should be recognizable from inside a car parked 15 meters away.',
      'Cable wrapping should be automatic or gravity-assisted to keep cords clean.',
      'Enclosure must dissipate internal heat from 22kW charging modules without fans prone to dust clogging.'
    ],
    ideation: 'Pencil sketches exploring totem forms, wall-mounted pods, and organic curves that blend into modern apartment complex architecture.',
    sketchDevelopment: [
      {
        title: 'Totem Form Factor & Halo Light Ring',
        image: 'https://images.unsplash.com/photo-1558441719-670b357021bc?auto=format&fit=crop&w=1200&q=80',
        text: 'Developing a clean vertical form with angled interface display for optimal standing ergonomics.'
      }
    ],
    cadDevelopment: [
      {
        title: 'Sheet Metal & Die-Cast Housing CAD',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
        text: 'Internal mounting bracket CAD for power electronics, connector holsters, and IP65 rubber seals.'
      }
    ],
    prototyping: [
      {
        title: '1:1 Scale Ergonomic Foam & Sheet Metal Prototype',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        text: 'Evaluating holster angle and cable drape radius on a physical mock-up.'
      }
    ],
    cmfExploration: {
      title: 'Architectural Outdoor CMF System',
      materials: ['Die-Cast ADC12 Aluminum', 'UV-Stabilized Polycarbonate', 'Silicone Seals'],
      finishes: ['Architectural Powder Coating (Qualicoat Class 2)', 'Gloss Black Acrylic Fascia'],
      swatches: [
        { name: 'Arctic White Powder', hex: '#F8FAFC', finish: 'Matte Weatherproof' },
        { name: 'Dark Slate Enclosure', hex: '#1E293B', finish: 'Textured Anodized' },
        { name: 'Charging Green LED', hex: '#10B981', finish: 'Diffuse Diffuser Ring' }
      ],
      image: '/images/ev_charger.jpg',
      text: 'High-durability powder coating withstands salt spray and extreme thermal cycles from -10°C to +50°C.'
    },
    manufacturing: 'Aluminum die-casting for the main heat-dissipating backplate; pressure injection molded PC front shell with co-molded rubber gaskets.',
    finalOutcome: 'Adopted as a core portfolio product by Monarch Innovation, subsequently showcased to multiple EV infrastructure OEMs across India.',
    gallery: [
      '/images/ev_charger.jpg',
      'https://images.unsplash.com/photo-1558441719-670b357021bc?auto=format&fit=crop&w=1200&q=80'
    ],
    learnings: [
      'Outdoor public hardware must prioritize thermal management and ingress protection before aesthetic detailing.',
      'Light communication (LED color, pulse speed) is an essential element of modern physical UI.'
    ]
  },
  {
    id: 'lumina-lighting',
    title: 'Lumina Handblown Glass Lighting Collection',
    tagline: 'Freelance Chandeliers for Formus — Displayed at India Design 2020',
    shortDescription: 'Bespoke sculptural chandeliers and glass pendants combining handblown glass blowing craftsmanship with contemporary brass armatures.',
    category: 'Bespoke Lighting & CMF',
    year: '2019 - 2020',
    client: 'Formus',
    role: 'Freelance Lighting Designer',
    tools: ['Rhino 3D', '3DS Max', 'KeyShot 11', 'Glass Blowing Sampling', 'Brass Crafting'],
    awards: ['Showcased at INDIA DESIGN 2020'],
    featured: true,
    heroImage: '/images/india_design_1.jpg',
    overview: 'Hired as a freelance designer by Formus to design bespoke glass chandeliers, which were showcased and displayed at India Design 2020 in New Delhi. Merging traditional Firozabad and Delhi glass blowing craftsmanship with CAD precision engineered CNC brass connectors, the collection plays with light refraction, tinted gradients, and organic glass forms.',
    challenge: 'Handblown glass inherently possesses natural shape variances (+/- 3mm). Designing rigid metal structural armatures that securely clamp variable glass elements without causing localized stress cracks required innovative silicone bushing interfaces.',
    research: 'Worked directly inside traditional glass blowing furnaces for 3 weeks to study glass viscosity, optical clarity of tinted oxides, and maximum blown glass weights feasible per artisan.',
    keyInsights: [
      'Artisanal variance should be embraced as a unique selling point, supported by adaptable mechanical fixings.',
      'Warm LED light temperatures (2400K-2700K) interact dramatically with amber and smoked grey glass gradients.',
      'Modular metal stems allow custom chandelier drop lengths for grand architectural spaces.'
    ],
    ideation: 'Freehand watercolor and charcoal sketches exploring botanical drop silhouettes and geometric brass skeletons.',
    sketchDevelopment: [
      {
        title: 'Glass Silhouette & Brass Stem Explorations',
        image: '/images/india_design_1.jpg',
        text: 'Proportion studies comparing single pendant scales versus multi-cluster chandelier compositions.'
      }
    ],
    cadDevelopment: [
      {
        title: 'Rhino 3D & 3DS Max Optical Simulation',
        image: '/images/india_design_2.jpg',
        text: 'Precision brass joinery CAD modeling and caustic light ray rendering in KeyShot.'
      }
    ],
    prototyping: [
      {
        title: 'Glass Furnace Blowing Samples & Metal Lathe Fitting',
        image: '/images/india_design_1.jpg',
        text: 'Iterative glass sampling to refine color gradient density from translucent charcoal to clear amber.'
      }
    ],
    cmfExploration: {
      title: 'Artisanal Luxury CMF Palette',
      materials: ['Handblown Borosilicate Glass', 'Solid Machined Brass', 'Hand-Turned Wood', 'Braided Fabric Cable'],
      finishes: ['Satin Brushed Antique Brass', 'Smoked Amber Glass Gradient', 'Clear Crystal Gloss'],
      swatches: [
        { name: 'Warm Antique Brass', hex: '#B45309', finish: 'Brushed Satin Lacquer' },
        { name: 'Smoked Amber', hex: '#78350F', finish: 'Translucent Glass' },
        { name: 'Neon Green Cable Accent', hex: '#10B981', finish: 'Braided Textile' }
      ],
      image: '/images/india_design_2.jpg',
      text: 'Every brass fitting is hand-passivated and clear-coated to prevent oxidation over years of architectural installation.'
    },
    manufacturing: 'Hand-blown glass crafted by master artisans; brass components turned on precision CNC lathes and hand-assembled in Delhi studio.',
    finalOutcome: 'Exhibited at India Design 2020 to critical acclaim, securing custom commissions for luxury hospitality projects and high-end residences.',
    gallery: [
      '/images/india_design_1.jpg',
      '/images/india_design_2.jpg'
    ],
    learnings: [
      'Designing for artisanal manufacturing requires flexible engineering tolerances and deep respect for the craftsman\'s hands.',
      'Lighting design is 50% physical form and 50% shadow/glow behavior in ambient space.'
    ]
  }
];

export const WORK_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Industrial Designer',
    company: 'Casio India Corp',
    location: 'New Delhi, India',
    period: 'June 2025 – Present',
    description: 'Focusing on the design and development of wristwatches for the Indian market under Casio, Sheen, and G-Shock Collab categories. Conceptualizing and localizing designs that align with global Casio aesthetics while resonating with regional tastes and cultural narratives.',
    deliverables: [
      'Bespoke timepiece dial design & CMF localization',
      'Collaboration with Yamagata Casio engineering teams in Japan',
      '3D modeling in Rhino 3D & KeyShot photorealistic rendering',
      'Market research & trend forecasting for South Asian luxury & youth segments'
    ]
  },
  {
    id: 'exp-2',
    role: 'Industrial Designer',
    company: 'VIP Industries Ltd',
    location: 'Mumbai, India',
    period: 'July 2023 – June 2025',
    description: 'Focused on end-to-end product development for travel luggage, backpacks, and accessories. Conceptualized new designs through sketching, 3D modeling, and rendering, followed by selecting materials and defining CMF strategies tailored to market needs.',
    deliverables: [
      'Spearheaded polycarbonate luggage structural rib CAD development',
      'Engineered lightweight, impact-resistant cabin and check-in luggage',
      'Formulated CMF specifications for mass vacuum thermoforming',
      'Conducted physical drop-impact, handle wobble, and wheel endurance testing'
    ]
  },
  {
    id: 'exp-3',
    role: 'Research Design Intern',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Mumbai, India',
    period: 'Jan 2023 – July 2023',
    description: 'A 6-month research internship across sustainability, EV, and blockchain domains. Focused on implementing Generative AI in new industrial design use cases to accelerate concept iteration and design delivery.',
    deliverables: [
      'Integrated Gen AI workflows into early-stage industrial sketching and CMF exploration',
      'Researched sustainable circular economy hardware frameworks',
      'Presented design delivery innovation strategies to executive leadership'
    ]
  },
  {
    id: 'exp-4',
    role: 'Industrial Designer',
    company: 'Monarch Innovation',
    location: 'Ahmedabad, India',
    period: 'Sept 2021 – April 2022',
    description: 'Worked on conceptualization and development of various consumer and industrial hardware products including EV chargers, Electric Bicycles, IoT Ceiling Fans, and Electric Scooters.',
    deliverables: [
      'End-to-end CAD and CMF for EV Charging Wallbox stations',
      'Aerodynamic blade design for silent IoT ceiling fans',
      'Sheet metal & plastic injection molding manufacturing preparation'
    ]
  },
  {
    id: 'exp-5',
    role: 'Industrial Design Intern',
    company: 'Foley Designs',
    location: 'Bangalore, India',
    period: 'May 2021 – July 2021',
    description: 'Assigned to work on in-house furniture solutions along with deep ethnographic research and market studies at one of India\'s premier design studios.',
    deliverables: [
      'Furniture ergonomics research and physical scale mockups',
      'Market opportunity benchmarking for workspace solutions'
    ]
  },
  {
    id: 'exp-6',
    role: 'Product Designer',
    company: '5By7 Gifting',
    location: 'New Delhi, India',
    period: 'Dec 2019 – July 2020',
    description: 'Worked on design management and bespoke corporate gifting products for premier global brands including BMW, Audi, Eicher, Volvo, and CRED.',
    deliverables: [
      'Custom bespoke leather & aluminum lifestyle accessories',
      'Client liaison and rapid prototyping for luxury corporate clients'
    ]
  },
  {
    id: 'exp-7',
    role: 'Freelance Product Designer',
    company: 'Formus',
    location: 'New Delhi, India',
    period: 'Oct 2019 – Nov 2019',
    description: 'Headed the project to design a collection of luxury lighting and lifestyle accessories showcased at INDIA DESIGN 2020 and other national exhibitions.',
    deliverables: [
      'Bespoke blown-glass lighting collection exhibited at India Design 2020',
      'Artisanal glassblowing supervision and CNC brass joinery engineering'
    ]
  },
  {
    id: 'exp-8',
    role: 'Product Designer & Intern',
    company: 'Klove Studio',
    location: 'New Delhi, India',
    period: 'July 2018 – May 2019',
    description: 'Klove Studio is a leading blown-glass chandelier and bespoke design company. Worked on new product development, glass sampling, and production supervision.',
    deliverables: [
      'Sampling and production management for large-scale light installations'
    ]
  },
  {
    id: 'exp-9',
    role: 'Design Intern',
    company: 'Circumpunct',
    location: 'Bangalore, India',
    period: 'Dec 2017 – May 2018',
    description: 'Graduation project focusing on sustainable cardboard lighting solutions and new product development.',
    deliverables: ['Cardboard lighting structural fold design & prototyping']
  },
  {
    id: 'exp-10',
    role: 'Design Intern',
    company: 'AID Studio',
    location: 'New Delhi, India',
    period: 'June 2016 – July 2016',
    description: 'Worked as a design intern and gained hands-on experience in material fabrication of metals, brass, and stainless steel (SS).',
    deliverables: [
      'Material fabrication and metalworking hands-on exploration',
      'Prototyping in brass, stainless steel (SS), and sheet metal'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'IIT Bombay (Industrial Design Centre - IDC)',
    degree: 'Master\'s in Industrial Design (M.Des)',
    period: '2020 – 2023',
    location: 'Mumbai, India',
    highlights: 'Specialized in user-centered product design, advanced CAD surface modeling, ergonomics, CMF strategies, and hardware design methodology.'
  },
  {
    id: 'edu-2',
    institution: 'NIFT Kangra',
    degree: 'Bachelor\'s in Fashion and Lifestyle Accessories Design (B.Des)',
    period: '2014 – 2018',
    location: 'Himachal Pradesh, India',
    highlights: 'Foundation in materials, metal crafting, leather accessories, bespoke craftsmanship, and product ergonomics.'
  },
  {
    id: 'edu-3',
    institution: 'Rashtriya Military School Ajmer (CBSE)',
    degree: 'Higher Secondary Schooling',
    period: '2006 – 2013',
    location: 'Rajasthan, India',
    highlights: 'Disciplined academic foundation in science, mathematics, and technical drawing.'
  },
  {
    id: 'edu-4',
    institution: 'Kendriya Vidyalaya (CBSE)',
    degree: 'Primary Schooling',
    period: '2001 – 2006',
    location: 'India'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // 3D & CAD
  {
    name: 'Fusion 360',
    type: 'software',
    logoType: 'fusion360',
    category: '3D & CAD',
    proficiency: 'Expert',
    description: 'Parametric CAD modeling, surface design, sheet metal, assemblies, and enclosure design.'
  },
  {
    name: 'Rhino 3D',
    type: 'software',
    logoType: 'rhino3d',
    category: '3D & CAD',
    proficiency: 'Expert',
    description: 'Complex NURBS surface modeling, watch dial details, and organic geometry.'
  },
  {
    name: 'AutoCAD',
    type: 'software',
    logoType: 'autocad',
    category: '3D & CAD',
    proficiency: 'Advanced',
    description: 'Technical drafting, 2D manufacturing layouts, and orthographic projections.'
  },
  {
    name: '3DS Max',
    type: 'software',
    logoType: '3dsmax',
    category: '3D & CAD',
    proficiency: 'Advanced',
    description: '3D architectural visualization, spatial lighting setups, and organic mesh modeling.'
  },

  // Rendering & Visuals
  {
    name: 'KeyShot 11',
    type: 'software',
    logoType: 'keyshot',
    category: 'Rendering & Visuals',
    proficiency: 'Expert',
    description: 'Photorealistic product rendering, CMF material graphs, studio lighting, and animations.'
  },
  {
    name: 'CorelDraw',
    type: 'software',
    logoType: 'coreldraw',
    category: 'Rendering & Visuals',
    proficiency: 'Advanced',
    description: 'Vector artwork, watch index graphics, laser cutting preparation, and CMF callouts.'
  },

  // Adobe Suite
  {
    name: 'Photoshop',
    type: 'software',
    logoType: 'photoshop',
    category: 'Adobe Suite',
    proficiency: 'Expert',
    description: 'Digital sketching, render post-processing, texture map creation, and photo editing.'
  },
  {
    name: 'Illustrator',
    type: 'software',
    logoType: 'illustrator',
    category: 'Adobe Suite',
    proficiency: 'Expert',
    description: 'Vector graphics, branding, tech packs, packaging layouts, and CMF documentations.'
  },
  {
    name: 'InDesign',
    type: 'software',
    logoType: 'indesign',
    category: 'Adobe Suite',
    proficiency: 'Advanced',
    description: 'Portfolio layout design, multi-page presentation decks, and technical user manuals.'
  },

  // Core Competencies
  {
    name: 'Prototyping & 3D Printing',
    type: 'core',
    logoType: 'prototyping',
    category: 'Design & Strategy',
    proficiency: 'Expert',
    description: 'SLA/FDM printing, CNC foam carving, clay modeling, vacuum thermoforming, and physical testing.'
  },
  {
    name: 'Sketching & Form Exploration',
    type: 'core',
    logoType: 'sketching',
    category: 'Design & Strategy',
    proficiency: 'Expert',
    description: 'Rapid ideation, perspective drawing, marker rendering, and digital tablet sketching.'
  },
  {
    name: 'CMF Strategy & Material Selection',
    type: 'core',
    logoType: 'cmf',
    category: 'Design & Strategy',
    proficiency: 'Expert',
    description: 'Color, Material, Finish mapping, surface texture specification, electroplating, and anodizing.'
  },
  {
    name: 'Manufacturing & Mold Considerations',
    type: 'core',
    logoType: 'manufacturing',
    category: 'Design & Strategy',
    proficiency: 'Advanced',
    description: 'Draft angles, wall thickness, injection molding, die casting, press fits, and assembly tolerances.'
  },
  {
    name: 'Gen AI for Design Workflows',
    type: 'core',
    logoType: 'genai',
    category: 'Design & Strategy',
    proficiency: 'Advanced',
    description: 'Generative AI prompt engineering for moodboards, ideation speedup, and concept validation.'
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Red Dot Award: Design Concept Winner 2025',
    organization: 'Red Dot Design Award, Germany',
    year: '2025',
    project: 'Spunch — Minimalist Paper Crimper & Punch',
    badgeText: 'Winner 2025',
    description: 'Honored with the globally acclaimed Red Dot Design Concept Winner 2025 for outstanding design innovation, poetic mechanical simplification, and minimalist aluminum desktop ergonomics.'
  },
  {
    id: 'award-2',
    title: 'INDIA DESIGN 2020 Exhibition (Formus)',
    organization: 'Formus / India Design ID, New Delhi',
    year: '2020',
    project: 'Freelance Chandeliers for Formus',
    badgeText: 'Exhibited 2020',
    description: 'Hired as a freelance lighting designer by Formus to design bespoke glass chandeliers, which were showcased and displayed at India Design 2020.'
  },
  {
    id: 'award-3',
    title: 'INDIA DESIGN 2019 Exhibition (KLOVE Studio)',
    organization: 'KLOVE Studio / India Design ID, New Delhi',
    year: '2019',
    project: 'Glass Chandeliers at KLOVE Studio',
    badgeText: 'Exhibited 2019',
    description: 'Designed bespoke glass chandeliers and ambient light installations while working as a fulltime designer at KLOVE Studio, displayed at India Design 2019.'
  }
];
