import { Category } from '../../core/models/category.model';

export const CATEGORIES_FIXTURE: Category[] = [
  {
    id: 'cat-1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and tech accessories',
    icon: 'pi-desktop',
    productCount: 4,
  },
  {
    id: 'cat-2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion for every style and occasion',
    icon: 'pi-tag',
    productCount: 3,
  },
  {
    id: 'cat-3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and outdoor spaces',
    icon: 'pi-home',
    productCount: 2,
  },
  {
    id: 'cat-4',
    name: 'Food & Beverage',
    slug: 'food-beverage',
    description: 'Gourmet foods and premium beverages',
    icon: 'pi-shopping-bag',
    productCount: 3,
  },
];
