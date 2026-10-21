import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND, FEATURED, HERO_STATS } from '../../../data/landing';
import { Icon } from '../../../components/icon';
import { CarArt } from '../../../components/car-art';

@Component({
  selector: 'app-hero',
  imports: [Icon, CarArt, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="backdrop" aria-hidden="true"></div>
      <div class="copy wrap">
        <h1 class="title">Electric power,<br />made effortless.</h1>
        <p class="lead">{{ brand.short }} brings the full electric lineup under one roof, with honest prices, same-week delivery and test drives on your schedule.</p>
        <a routerLink="/test-drive" class="btn">Book a test drive <app-icon name="arrow" [size]="16" /></a>
        <a [routerLink]="['/models', featured.id]" class="link-arrow">Explore {{ featured.name }} <app-icon name="arrow" [size]="14" /></a>
      </div>
      <app-car-art class="car" view="side" />
      <ul class="stats">
        @for (s of stats; track s.label) {
          <li>
            <app-icon [name]="s.icon" [size]="34" [stroke]="1.5" />
            <div><span>{{ s.label }}</span><strong>{{ s.value }}</strong></div>
          </li>
        }
      </ul>
    </section>
  `,
  styles: `
    :host { display: block; position: relative; background: var(--tint); overflow: hidden; }
    .hero { position: relative; display: grid; grid-template-columns: minmax(0, 5.6fr) minmax(0, 6.4fr); max-width: var(--frame); margin: 0 auto; min-height: 600px; padding: 24px 0 40px; }
    .backdrop {
      position: absolute; inset: -120px -40vw 90px 32%; z-index: 0;
      background: linear-gradient(180deg, #e3e6ea, #eef0f2 70%, rgba(238,240,242,0));
      border-top-left-radius: 120px 160px;
      clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%, 0 82%);
    }
    .copy { position: relative; z-index: 2; padding-top: 36px; display: flex; flex-direction: column; align-items: flex-start; width: 100%; }
    .title { font-size: clamp(40px, 4.4vw, 64px); font-weight: 600; letter-spacing: -0.045em; line-height: 1.02; }
    .copy .lead { margin: 26px 0 34px; max-width: 380px; }
    .copy .link-arrow { margin-top: 26px; }
    .car { position: relative; z-index: 1; align-self: center; margin: 40px -2% 0 -18%; filter: drop-shadow(0 30px 40px rgba(20,25,35,.12)); }

    .stats { grid-column: 1 / -1; position: relative; z-index: 2; list-style: none; margin: 10px auto 0; padding: 0;
             display: grid; grid-template-columns: repeat(3, auto); }
    .stats li { display: flex; align-items: center; gap: 22px; padding: 6px clamp(28px, 5vw, 76px); border-left: 1px solid var(--line); }
    .stats li:first-child { border-left: 0; }
    .stats span { display: block; font-size: 12px; color: var(--muted); }
    .stats strong { display: block; font-size: clamp(24px, 2.4vw, 34px); font-weight: 500; letter-spacing: -0.03em; line-height: 1.2; }

    @media (max-width: 1020px) {
      .hero { grid-template-columns: 1fr; min-height: 0; }
      .backdrop { inset: 46% 0 22% 18%; }
      .car { margin: 24px var(--gutter) 0; }
      .stats { width: 100%; margin-top: 24px; padding-inline: var(--gutter); grid-template-columns: repeat(3, 1fr); }
      .stats li { flex-direction: column; text-align: center; gap: 8px; padding: 4px 8px; }
      .stats li > div { display: flex; flex-direction: column-reverse; }
      .stats strong { font-size: 20px; }
      .stats span { font-size: 11px; }
    }
  `,
})
export class Hero {
  brand = BRAND;
  featured = FEATURED;
  stats = HERO_STATS;
}
