import { Product } from '@/types/product';
import leatherJacket from '@/assets/products/leather-jacket.jpg';
import oxfordShoes from '@/assets/products/oxford-shoes.jpg';
import tweedBlazer from '@/assets/products/tweed-blazer.jpg';
import denimJeans from '@/assets/products/denim-jeans.jpg';
import ankleBoots from '@/assets/products/ankle-boots.jpg';
import cashmereCardigan from '@/assets/products/cashmere-cardigan.jpg';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Vintage Leather Jacket',
    description: 'Authentic 1970s brown leather motorcycle jacket. Well-maintained with beautiful patina. Classic biker style that never goes out of fashion.',
    price: 189,
    category: 'clothes',
    size: 'M',
    condition: 'excellent',
    images: [leatherJacket],
    featured: true,
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Classic Oxford Shoes',
    description: 'Handcrafted Italian leather oxford shoes from the 1960s. Timeless elegance with modern comfort. Perfect for formal occasions.',
    price: 145,
    category: 'shoes',
    size: '42',
    condition: 'good',
    images: [oxfordShoes],
    featured: true,
    createdAt: '2024-01-14T10:00:00Z',
  },
  {
    id: '3',
    name: 'Wool Tweed Blazer',
    description: 'English tweed blazer from the 1980s. Harris Tweed fabric with leather elbow patches. Sophisticated country gentleman style.',
    price: 125,
    category: 'clothes',
    size: 'L',
    condition: 'excellent',
    images: [tweedBlazer],
    featured: true,
    createdAt: '2024-01-13T10:00:00Z',
  },
  {
    id: '4',
    name: 'Retro Denim Jeans',
    description: 'Original Levi\'s 501 from the 1990s. Perfect fade and character. High-waisted straight leg cut.',
    price: 85,
    category: 'clothes',
    size: '32',
    condition: 'good',
    images: [denimJeans],
    featured: false,
    createdAt: '2024-01-12T10:00:00Z',
  },
  {
    id: '5',
    name: 'Victorian Ankle Boots',
    description: 'Stunning Victorian-style ankle boots with button details. Black leather, beautifully restored.',
    price: 165,
    category: 'shoes',
    size: '38',
    condition: 'excellent',
    images: [ankleBoots],
    featured: true,
    createdAt: '2024-01-11T10:00:00Z',
  },
  {
    id: '6',
    name: 'Cashmere Cardigan',
    description: 'Soft Scottish cashmere cardigan in cream. 1960s classic style with pearl buttons.',
    price: 110,
    category: 'clothes',
    size: 'S',
    condition: 'fair',
    images: [cashmereCardigan],
    featured: false,
    createdAt: '2024-01-10T10:00:00Z',
  },
];
