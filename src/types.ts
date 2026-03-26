export interface Product {
  id: string;
  name: string;
  category: 'Organic' | 'NPK' | 'Micronutrients' | 'Specialty';
  description: string;
  benefits: string[];
  composition: string;
  usage: string;
  crops: string[];
  image: string;
}

export interface CropSolution {
  id: string;
  name: string;
  stages: {
    stage: string;
    recommendation: string;
    timing: string;
  }[];
  benefits: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}
