import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, Star, Shirt } from 'lucide-angular';
import { CurrencyPipe } from '@angular/common';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, LucideAngularModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly Star = Star;
  readonly Shirt = Shirt;

  private readonly productService = inject(ProductService);

  protected readonly featuredQuery = injectQuery(() => ({
    queryKey: ['products', 'featured'],
    queryFn: () => firstValueFrom(this.productService.getFeaturedProducts()),
  }));
}
