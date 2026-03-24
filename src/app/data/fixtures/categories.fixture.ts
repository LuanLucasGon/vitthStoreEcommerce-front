import { Category } from '../../core/models/category.model';

export const CATEGORIES_FIXTURE: Category[] = [
  {
    id: 'cat-1',
    name: 'Hoodies & Crewnecks',
    slug: 'hoodies-crewnecks',
    description: 'Fleece pesado, dropped shoulder e acabamento premium',
    icon: 'pi-star',
    productCount: 3,
  },
  {
    id: 'cat-2',
    name: 'T-Shirts & Tops',
    slug: 'tshirts-tops',
    description: 'Oversized, heavyweight e graphic prints exclusivos',
    icon: 'pi-tag',
    productCount: 3,
  },
  {
    id: 'cat-3',
    name: 'Bottoms',
    slug: 'bottoms',
    description: 'Cargo, wide leg denim e track pants de nylon',
    icon: 'pi-minus',
    productCount: 2,
  },
  {
    id: 'cat-4',
    name: 'Footwear',
    slug: 'footwear',
    description: 'Tênis skate vulcanizado e chunky soles',
    icon: 'pi-send',
    productCount: 2,
  },
  {
    id: 'cat-5',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Caps, bags e tudo que completa o fit',
    icon: 'pi-shopping-bag',
    productCount: 2,
  },
];
