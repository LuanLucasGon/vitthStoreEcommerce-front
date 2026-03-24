import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductFilters } from '../models/product.model';
import { PaginatedResponse } from '../models/pagination.model';

@Injectable()
export abstract class ProductService {
  abstract getProducts(filters?: ProductFilters): Observable<PaginatedResponse<Product>>;
  abstract getProductById(id: string): Observable<Product>;
  abstract getFeaturedProducts(): Observable<Product[]>;
  abstract getProductsByCategory(categoryId: string, page?: number): Observable<PaginatedResponse<Product>>;
  abstract searchProducts(query: string, page?: number): Observable<PaginatedResponse<Product>>;
}
