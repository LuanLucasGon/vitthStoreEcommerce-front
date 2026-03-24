import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, Shirt } from 'lucide-angular';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

import { ProductService } from '../../core/services/product.service';
import { CartStore } from '../../state/cart.store';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, LucideAngularModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly Shirt = Shirt;

  private readonly productService = inject(ProductService);
  private readonly cartStore = inject(CartStore);

  protected readonly featuredQuery = injectQuery(() => ({
    queryKey: ['products', 'featured'],
    queryFn: () => firstValueFrom(this.productService.getFeaturedProducts()),
  }));

  protected onAddToCart(product: Product): void {
    this.cartStore.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }
}
