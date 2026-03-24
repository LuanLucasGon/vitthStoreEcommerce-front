export interface HeroCta {
  label: string;
  route: string;
}

export interface HeroSlide {
  imageUrl: string;
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
}
