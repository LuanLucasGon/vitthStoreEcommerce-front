import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, ShoppingCart, Shirt } from 'lucide-angular';

import { CartStore } from '../../state/cart.store';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ButtonModule, LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  readonly ShoppingCart = ShoppingCart;
  readonly Shirt = Shirt;

  protected readonly cartStore = inject(CartStore);
}
