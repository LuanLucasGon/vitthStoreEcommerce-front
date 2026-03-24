import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

import { ProductService } from '../../core/services/product.service';
import { CartStore } from '../../state/cart.store';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { Product } from '../../core/models/product.model';
import { HeroSlide } from '../../core/models/hero-slide.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, ProductCardComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly productService = inject(ProductService);
  private readonly cartStore = inject(CartStore);

  protected readonly heroSlides: HeroSlide[] = [
    {
      imageUrl: 'https://placehold.co/1920x1080/0a0a0a/333333?text=.',
      badge: 'Drop 01 — SS26',
      title: 'Seu fit.\nSuas regras.',
      subtitle: 'Peças construídas pra quem não segue o estilo de ninguém. Frete grátis acima de R$400.',
      primaryCta: { label: 'Shop the Drop', route: '/shop' },
      secondaryCta: { label: 'Ver Lookbook', route: '/lookbook' },
    },
    {
      imageUrl: 'https://placehold.co/1920x1080/111111/222222?text=.',
      badge: 'New Arrivals',
      title: 'Caps &\nAcessórios.',
      subtitle: 'Detalhes que fecham qualquer look.',
      primaryCta: { label: 'Ver Acessórios', route: '/shop' },
    },
    {
      imageUrl: 'https://placehold.co/1920x1080/0d0d0d/1a1a1a?text=.',
      badge: 'Footwear',
      title: 'Pisando\nForte.',
      subtitle: 'Tênis que não passam despercebidos.',
      primaryCta: { label: 'Ver Tênis', route: '/shop' },
      secondaryCta: { label: 'Ver Tudo', route: '/shop' },
    },
  ];

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
