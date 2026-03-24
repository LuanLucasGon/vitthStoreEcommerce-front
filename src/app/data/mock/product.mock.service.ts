import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductService } from '../../core/services/product.service';
import { Product, ProductFilters } from '../../core/models/product.model';
import { PaginatedResponse } from '../../core/models/pagination.model';
import { PRODUCTS_FIXTURE } from '../fixtures/products.fixture';

const SIMULATED_DELAY_MS = 400;

@Injectable()
export class MockProductService extends ProductService {
  getProducts(filters?: ProductFilters): Observable<PaginatedResponse<Product>> {
    const page = filters?.page ?? 1;
    const limit = filters?.limit ?? 12;

    let result = [...PRODUCTS_FIXTURE];

    if (filters?.categoryId) {
      result = result.filter((p) => p.categoryId === filters.categoryId);
    }

    if (filters?.featured !== undefined) {
      result = result.filter((p) => p.featured === filters.featured);
    }

    if (filters?.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters?.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }

    if (filters?.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(query) || p.tags.some((t) => t.includes(query))
      );
    }

    if (filters?.sortBy) {
      result.sort((a, b) => {
        const order = filters.sortOrder === 'desc' ? -1 : 1;
        return a[filters.sortBy!] > b[filters.sortBy!] ? order : -order;
      });
    }

    const total = result.length;
    const start = (page - 1) * limit;
    const data = result.slice(start, start + limit);

    return of({
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }).pipe(delay(SIMULATED_DELAY_MS));
  }

  getProductById(id: string): Observable<Product> {
    const product = PRODUCTS_FIXTURE.find((p) => p.id === id)!;
    return of(product).pipe(delay(SIMULATED_DELAY_MS));
  }

  getFeaturedProducts(): Observable<Product[]> {
    const featured = PRODUCTS_FIXTURE.filter((p) => p.featured);
    return of(featured).pipe(delay(SIMULATED_DELAY_MS));
  }

  getProductsByCategory(categoryId: string, page = 1): Observable<PaginatedResponse<Product>> {
    return this.getProducts({ categoryId, page });
  }

  searchProducts(query: string, page = 1): Observable<PaginatedResponse<Product>> {
    return this.getProducts({ search: query, page });
  }
}
