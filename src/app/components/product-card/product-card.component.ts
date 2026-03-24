import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, Star } from 'lucide-angular';

import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonModule, LucideAngularModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly Star = Star;

  readonly product = input.required<Product>();
  readonly addToCart = output<Product>();
}
