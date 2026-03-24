import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/models/category.model';
import { CATEGORIES_FIXTURE } from '../fixtures/categories.fixture';

const SIMULATED_DELAY_MS = 300;

@Injectable()
export class MockCategoryService extends CategoryService {
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES_FIXTURE).pipe(delay(SIMULATED_DELAY_MS));
  }

  getCategoryById(id: string): Observable<Category> {
    const category = CATEGORIES_FIXTURE.find((c) => c.id === id)!;
    return of(category).pipe(delay(SIMULATED_DELAY_MS));
  }
}
