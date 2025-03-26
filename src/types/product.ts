export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
  inStock?: boolean;
  rating?: number;
  originalPrice?: number;
  reviewCount?: number;
  tag?: string;
  unit?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}
