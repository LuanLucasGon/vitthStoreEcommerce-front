export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  categoryId: string;
  categoryName: string;
  thumbnail: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export interface ProductFilters {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'rating' | 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}
