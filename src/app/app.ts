import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LucideAngularModule, ShoppingCart, Star, Box } from 'lucide-angular';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CardModule, LucideAngularModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('VitthStore');
  readonly ShoppingCart = ShoppingCart;
  readonly Star = Star;
  readonly Box = Box;

  featuredProducts = signal([
    { id: '1', name: 'Premium Coffee Beans', price: 29.90, rating: 4.8 },
    { id: '2', name: 'Eco-Friendly Bottle', price: 15.00, rating: 4.5 },
    { id: '3', name: 'Wireless Headphones', price: 199.99, rating: 4.9 }
  ]);
}
