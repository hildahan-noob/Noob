import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'ultimate-hoodie',
    title: 'ULTIMATE HOODIE',
    categoryTag: 'PREMIUM PERFORMANCE',
    category: 'Performance',
    price: 2999,
    currency: 'Rs.',
    heroImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoMQtRvEHUp-_AdBclIMW5BSfRK3QZ2rHZZDLAFs75LnnKB3nHNANq4dNjOUCm0CGkeN3wb-6c9e0tsCfJ4cY66oOgAk9QZi_23x9I_vlQ4b6pC0kfUi9EsJc-xDx6hz1aOI5j9ALnpYhdpB0ToGAjWudAR2ymNL2CON09iXsq8UkG3scu_3N6G9wYO2uixHpdlY4mwCdKAvQj5oc6EXQ9f64Y0IJBq-7iJMmC7s9ob8bnbnxUK8LqiO3iMfqQzpv4MGLIdfRABw',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      {
        name: 'Deep Teal',
        hex: '#2B5A64',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoMQtRvEHUp-_AdBclIMW5BSfRK3QZ2rHZZDLAFs75LnnKB3nHNANq4dNjOUCm0CGkeN3wb-6c9e0tsCfJ4cY66oOgAk9QZi_23x9I_vlQ4b6pC0kfUi9EsJc-xDx6hz1aOI5j9ALnpYhdpB0ToGAjWudAR2ymNL2CON09iXsq8UkG3scu_3N6G9wYO2uixHpdlY4mwCdKAvQj5oc6EXQ9f64Y0IJBq-7iJMmC7s9ob8bnbnxUK8LqiO3iMfqQzpv4MGLIdfRABw'
      },
      {
        name: 'Charcoal Black',
        hex: '#313030',
        image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=1000'
      },
      {
        name: 'Slate Grey',
        hex: '#586061',
        image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Elevate your training and recovery with the Ultimate Hoodie. Engineered with a premium blend of four-way stretch fabric, this piece offers unmatched warmth without the bulk. Its minimalist silhouette is designed for focus, featuring concealed zip pockets and a precision-sculpted hood.',
    details: [
      '85% Nylon, 15% Elastane high-density knit',
      'Moisture-wicking and quick-dry finish',
      'Athletic tapered fit',
      'Reinforced flat-lock seams',
      'Stealth utility pockets'
    ],
    careInstructions: [
      'Machine wash cold with like colors',
      'Do not bleach or dry clean',
      'Tumble dry low or line dry',
      'Cool iron if necessary'
    ],
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 128
  },
  {
    id: 'elite-jogger',
    title: 'ELITE JOGGER',
    categoryTag: 'PERFORMANCE',
    category: 'Performance',
    price: 2499,
    currency: 'Rs.',
    heroImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6U7pTMbdZ8x2sassY9UPzHPmXbIR7gP-PRj7Z-3HCLMYPvsDZYkqZsxipTtczz6NQFCQvA_b814cUEAG4PjH4HxLtmqAUx3XP7hHau3_9KFWmI2QFo6BwGgW9mb0FSFGUVUpdGS8ZqGabhtYbOdkNNshzV0NO4MhJJr-CbmycxEDptPW9mNPKlYpSAd7KB-s2H4yK21HrFcd2nfgIOU-1_UdQRuMWyiUUyn2FtcurmpRtXm6H7P1rofBbwIblWGMChojk8t_TQg'
    ],
    colors: [
      {
        name: 'Deep Teal',
        hex: '#2B5A64',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6U7pTMbdZ8x2sassY9UPzHPmXbIR7gP-PRj7Z-3HCLMYPvsDZYkqZsxipTtczz6NQFCQvA_b814cUEAG4PjH4HxLtmqAUx3XP7hHau3_9KFWmI2QFo6BwGgW9mb0FSFGUVUpdGS8ZqGabhtYbOdkNNshzV0NO4MhJJr-CbmycxEDptPW9mNPKlYpSAd7KB-s2H4yK21HrFcd2nfgIOU-1_UdQRuMWyiUUyn2FtcurmpRtXm6H7P1rofBbwIblWGMChojk8t_TQg'
      },
      {
        name: 'Charcoal',
        hex: '#313030',
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Designed for fluid movement, the Elite Jogger provides an ergonomic tapered silhouette crafted from responsive 4-way stretch active fabric with an elastic drawstring waist and zippered cuff details.',
    details: [
      '80% Recycled Polyester, 20% Elastane',
      'Dual secure zippered side pockets',
      'Ankle cuff zippers for easy wear over shoes',
      'Reflective detail accents for low light visibility'
    ],
    careInstructions: [
      'Machine wash gentle cold',
      'Hang to dry'
    ],
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: 'core-baselayer',
    title: 'CORE BASELAYER',
    categoryTag: 'TRAINING',
    category: 'Performance',
    price: 1299,
    currency: 'Rs.',
    heroImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCa59o2azmGnNShZvnAJEe-Pr5yDBNnoYbkkeo7bUCNaKW7xfLV18jnQAD4z54lfIwiIxZfsXNvzSg0mfY2KeRDFmMPeGatmf04WKUWg0x42noXtsUULX_hbl4L0eCSjTGQIEzWNEnpSipJBDE91TupKyhGiSxz48nQJtHOg9eVTP6AWhTHfSmJ6uMmBXTu744fN24jClj-ELFpoNX6qp-NeRbQZasgecU73KDSVx98HOg3lqXaIt59bUwPOfPLyZm9_cLT4nTzOg'
    ],
    colors: [
      {
        name: 'Charcoal Grey',
        hex: '#313030',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa59o2azmGnNShZvnAJEe-Pr5yDBNnoYbkkeo7bUCNaKW7xfLV18jnQAD4z54lfIwiIxZfsXNvzSg0mfY2KeRDFmMPeGatmf04WKUWg0x42noXtsUULX_hbl4L0eCSjTGQIEzWNEnpSipJBDE91TupKyhGiSxz48nQJtHOg9eVTP6AWhTHfSmJ6uMmBXTu744fN24jClj-ELFpoNX6qp-NeRbQZasgecU73KDSVx98HOg3lqXaIt59bUwPOfPLyZm9_cLT4nTzOg'
      },
      {
        name: 'Deep Teal',
        hex: '#2B5A64',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A second-skin long-sleeve compression baselayer engineered to regulate core body temperature during intense endurance and strength training.',
    details: [
      'Targeted compression mapping',
      'Micro-mesh ventilation panels along spine and underarms',
      'Anti-odor antibacterial fabric treatment',
      'Chafe-free ergonomic flatlock construction'
    ],
    careInstructions: [
      'Wash inside out cold',
      'Do not use fabric softeners'
    ],
    rating: 4.7,
    reviewCount: 62
  },
  {
    id: 'apex-shorts',
    title: 'APEX TRAINING SHORTS',
    categoryTag: 'NEW ARRIVALS',
    category: 'New Arrivals',
    price: 1899,
    currency: 'Rs.',
    heroImages: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      {
        name: 'Teal Blue',
        hex: '#2B5A64',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=1000'
      },
      {
        name: 'Matte Black',
        hex: '#1C1B1B',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight 7-inch inseam training shorts equipped with a built-in compression liner, phone waistband pocket, and laser-cut ventilation apertures.',
    details: [
      'Ultralight outer shell fabric',
      'Moisture wicking compression inner shorts',
      'Towel loop at waistband',
      'Concealed zipper key pocket'
    ],
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 41
  },
  {
    id: 'stealth-windbreaker',
    title: 'STEALTH VEST',
    categoryTag: 'LIFESTYLE & TRAINING',
    category: 'Lifestyle',
    price: 3499,
    currency: 'Rs.',
    heroImages: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      {
        name: 'Deep Teal',
        hex: '#2B5A64',
        image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'An insulated water-resistant running vest engineered for cold morning runs and urban layering. Provides maximum warmth to the core while allowing unrestricted arm motion.',
    details: [
      'DWR water-repellent coating',
      'Eco-thermal fill insulation',
      'Dual chest utility pockets',
      'Reflective Haneeza rear graphic'
    ],
    rating: 4.9,
    reviewCount: 38
  },
  {
    id: 'recycled-duffel',
    title: 'ECO PERFORMANCE DUFFEL',
    categoryTag: 'ACCESSORIES & SUSTAINABILITY',
    category: 'Accessories',
    price: 3999,
    currency: 'Rs.',
    heroImages: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      {
        name: 'Charcoal Slate',
        hex: '#313030',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    sizes: ['One Size'],
    description: 'Crafted from 100% ocean-bound recycled plastics, this 35L gym duffel bag features a ventilated shoe compartment, padded tablet sleeve, and water bottle harness.',
    details: [
      '100% Recycled Cordura polyester',
      'Isolated shoe tunnel with breathability eyelets',
      'Waterproof zippers',
      'Ergonomic padded shoulder strap'
    ],
    rating: 5.0,
    reviewCount: 52
  }
];
