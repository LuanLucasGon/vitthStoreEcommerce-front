import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule, ShoppingCart, Shirt, Search, User } from 'lucide-angular';

import { CartStore } from '../../state/cart.store';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  readonly ShoppingCart = ShoppingCart;
  readonly Shirt = Shirt;
  readonly Search = Search;
  readonly User = User;

  protected readonly cartStore = inject(CartStore);
  protected readonly searchQuery = signal('');
}
