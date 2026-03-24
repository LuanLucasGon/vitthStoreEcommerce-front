import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable()
export abstract class CategoryService {
  abstract getCategories(): Observable<Category[]>;
  abstract getCategoryById(id: string): Observable<Category>;
}
