import { Provider } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { OrderService } from '../../core/services/order.service';
import { MockProductService } from '../mock/product.mock.service';
import { MockCategoryService } from '../mock/category.mock.service';
import { MockOrderService } from '../mock/order.mock.service';

export const mockProviders: Provider[] = [
  { provide: ProductService, useClass: MockProductService },
  { provide: CategoryService, useClass: MockCategoryService },
  { provide: OrderService, useClass: MockOrderService },
];
