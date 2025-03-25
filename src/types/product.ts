export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
  inStock?: boolean;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}
