import { Product, CropSolution, BlogPost, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'bharath-gold-npk',
    name: 'Bharath Gold NPK 19:19:19',
    category: 'NPK',
    description: 'A balanced water-soluble fertilizer for all stages of crop growth.',
    benefits: ['Promotes vigorous growth', 'Improves root development', 'Enhances flowering and fruiting'],
    composition: 'N: 19%, P: 19%, K: 19%',
    usage: 'Foliar spray or Fertigation: 5g per liter of water.',
    crops: ['Rice', 'Wheat', 'Vegetables', 'Fruits'],
    image: 'https://picsum.photos/seed/fertilizer1/600/400'
  },
  {
    id: 'organic-shakti',
    name: 'Organic Shakti Bio-Fertilizer',
    category: 'Organic',
    description: 'Enriched organic manure that improves soil health and microbial activity.',
    benefits: ['Improves soil structure', 'Increases water retention', 'Natural nutrient release'],
    composition: 'Organic Matter: 40%, NPK: 3%, Micronutrients: Trace',
    usage: 'Soil application: 200-500kg per acre depending on crop.',
    crops: ['Sugarcane', 'Cotton', 'Pulses', 'Oilseeds'],
    image: 'https://picsum.photos/seed/organic/600/400'
  },
  {
    id: 'micro-grow-plus',
    name: 'Micro-Grow Plus',
    category: 'Micronutrients',
    description: 'A comprehensive blend of essential micronutrients to prevent deficiencies.',
    benefits: ['Corrects yellowing of leaves', 'Boosts enzyme activity', 'Increases resistance to pests'],
    composition: 'Zn: 5%, Fe: 2%, Mn: 1%, B: 0.5%, Cu: 0.2%',
    usage: 'Foliar spray: 2.5ml per liter of water.',
    crops: ['Citrus', 'Grapes', 'Tomato', 'Chilli'],
    image: 'https://picsum.photos/seed/micro/600/400'
  }
];

export const CROP_SOLUTIONS: CropSolution[] = [
  {
    id: 'paddy-rice',
    name: 'Paddy (Rice)',
    stages: [
      { stage: 'Nursery', recommendation: 'Organic Shakti + DAP', timing: '0-20 Days' },
      { stage: 'Tillering', recommendation: 'Bharath Gold NPK + Zinc', timing: '25-45 Days' },
      { stage: 'Panicle Initiation', recommendation: 'Potash + Micro-Grow', timing: '60-75 Days' }
    ],
    benefits: ['Higher grain weight', 'Uniform ripening', 'Sturdy stalks'],
    image: 'https://picsum.photos/seed/paddy/600/400'
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    stages: [
      { stage: 'Planting', recommendation: 'Organic Shakti + Phosphate', timing: 'Basal Dose' },
      { stage: 'Tillering', recommendation: 'Urea + NPK 10:26:26', timing: '60-90 Days' },
      { stage: 'Grand Growth', recommendation: 'Potash + Micronutrients', timing: '120-180 Days' }
    ],
    benefits: ['Increased sugar recovery', 'Thicker canes', 'Drought resistance'],
    image: 'https://picsum.photos/seed/sugarcane/600/400'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Improve Soil Fertility Naturally',
    excerpt: 'Discover practical ways to boost your soil health using organic methods and crop rotation.',
    category: 'Soil Health',
    date: 'March 15, 2026',
    image: 'https://picsum.photos/seed/soil/600/400',
    author: 'Dr. Ramesh Kumar'
  },
  {
    id: '2',
    title: 'Best Fertilizer Schedule for Paddy',
    excerpt: 'A step-by-step guide to maximizing your rice yield with the right nutrient timing.',
    category: 'Crop Guide',
    date: 'March 10, 2026',
    image: 'https://picsum.photos/seed/ricefield/600/400',
    author: 'Agri Expert Team'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Patil',
    role: 'Farmer',
    location: 'Maharashtra',
    quote: 'Since using Bharath Gold NPK, my sugarcane yield has increased by 20%. The canes are thicker and healthier.',
    image: 'https://picsum.photos/seed/farmer1/200/200'
  },
  {
    id: 't2',
    name: 'Anil Gupta',
    role: 'Agro Dealer',
    location: 'Punjab',
    quote: 'Bharath Fertilizers products are in high demand. Farmers trust the quality, and the support from the company is excellent.',
    image: 'https://picsum.photos/seed/dealer1/200/200'
  }
];
