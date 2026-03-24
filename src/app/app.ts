import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LucideAngularModule, ShoppingCart, Star, Shirt } from 'lucide-angular';
import { CurrencyPipe } from '@angular/common';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

import { ProductService } from './core/services/product.service';
import { CartStore } from './state/cart.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CardModule, LucideAngularModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'VitthStore';

  readonly ShoppingCart = ShoppingCart;
  readonly Star = Star;
  readonly Shirt = Shirt;

  private readonly productService = inject(ProductService);
  protected readonly cartStore = inject(CartStore);

  protected readonly featuredQuery = injectQuery(() => ({
    queryKey: ['products', 'featured'],
    queryFn: () => firstValueFrom(this.productService.getFeaturedProducts()),
  }));
}
