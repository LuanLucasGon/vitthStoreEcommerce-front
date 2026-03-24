import { Component, OnDestroy, OnInit, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

import { HeroSlide } from '../../core/models/hero-slide.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, LucideAngularModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly slides = input.required<HeroSlide[]>();

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  protected readonly currentIndex = signal(0);
  protected readonly activeSlide = computed(() => this.slides()[this.currentIndex()]);

  private autoPlayInterval?: ReturnType<typeof setInterval>;
  private readonly AUTO_PLAY_DELAY_MS = 5000;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  protected goTo(index: number): void {
    this.currentIndex.set(index);
    this.restartAutoPlay();
  }

  protected next(): void {
    this.currentIndex.update(i => (i + 1) % this.slides().length);
    this.restartAutoPlay();
  }

  protected prev(): void {
    this.currentIndex.update(i => (i - 1 + this.slides().length) % this.slides().length);
    this.restartAutoPlay();
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(
      () => this.currentIndex.update(i => (i + 1) % this.slides().length),
      this.AUTO_PLAY_DELAY_MS,
    );
  }

  private stopAutoPlay(): void {
    clearInterval(this.autoPlayInterval);
  }

  private restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
