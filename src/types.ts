export interface ColorOption {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  categoryTag: string;
  category: 'Performance' | 'New Arrivals' | 'Lifestyle' | 'Accessories' | 'Sustainability';
  price: number;
  currency: string;
  colors: ColorOption[];
  sizes: string[];
  description: string;
  details: string[];
  careInstructions?: string[];
  heroImages: string[];
  isNewArrival?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  selectedColor: ColorOption;
  selectedSize: string;
  quantity: number;
}
