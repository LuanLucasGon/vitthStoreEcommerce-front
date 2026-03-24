import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, ShoppingCart, Shirt } from 'lucide-angular';

import { CartStore } from './state/cart.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'VitthStore';

  readonly ShoppingCart = ShoppingCart;
  readonly Shirt = Shirt;

  protected readonly cartStore = inject(CartStore);
}
