export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'clothes' | 'shoes';
  size: string;
  condition: 'excellent' | 'good' | 'fair';
  images: string[];
  featured: boolean;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
