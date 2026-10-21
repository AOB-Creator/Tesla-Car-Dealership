import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CHARGING_FEATURES, CHARGING_STATS, PHOTOS } from '../../../data/landing';
import { Icon } from '../../../components/icon';

@Component({
  selector: 'app-charging',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap grid" id="charging">
      <div class="intro">
        <p class="eyebrow">02 / Charging &amp; everyday life</p>
        <h2 class="display">Go further,<br />worry less.</h2>
        <p class="lead">Quick charging, smart trip planning and a network that is there wherever the road takes you.</p>
        <ul class="features">
          @for (f of features; track f.title) {
            <li>
              <span class="icon-tile"><app-icon [name]="f.icon" /></span>
              <div><h3>{{ f.title }}</h3><p>{{ f.text }}</p></div>
            </li>
          }
        </ul>
        <a routerLink="/test-drive" class="btn">Book a test drive <app-icon name="arrow" [size]="16" /></a>
      </div>

      <figure class="photo">
        <img [src]="photos.charging.src" [alt]="photos.charging.alt" width="1400" height="935" loading="lazy" />
        <figcaption class="vertical">Charge<br />at home<br />wake up<br />full<span class="rule"></span></figcaption>
      </figure>

      <aside class="side">
        <div class="card map">
          <svg viewBox="0 0 300 220" aria-hidden="true">
            <path d="M0 60C60 40 90 90 150 70S260 20 300 40M0 160C70 150 120 190 190 170S280 150 300 160M90 0C100 70 70 140 110 220M220 0C200 80 240 150 210 220" fill="none" stroke="#e1e4e8" stroke-width="10" />
            <path d="M32 186C70 150 80 150 102 138S140 140 160 120S200 104 214 92 238 70 252 60" fill="none" stroke="#111" stroke-width="2.4" />
            @for (p of [[102,138],[160,120]]; track $index) {
              <circle [attr.cx]="p[0]" [attr.cy]="p[1]" r="7" fill="#fff" stroke="#111" stroke-width="2" />
            }
            <rect x="26" y="180" width="12" height="12" transform="rotate(45 32 186)" fill="#111" />
            <circle cx="252" cy="60" r="13" fill="#111" />
            <path d="M254 52l-6 9h5l-2 8 6-9h-5z" fill="#fff" />
          </svg>
          <div class="pill">Find charging stops<br />along your route <app-icon name="arrow" [size]="14" /></div>
        </div>
        <div class="card trip">
          <div class="thumb"><img [src]="photos.trip.src" [alt]="photos.trip.alt" width="400" height="600" loading="lazy" /></div>
          <div><h4>Road trips, simplified</h4><p>Plan with confidence. We take care of the charging stops.</p></div>
          <app-icon name="arrow" [size]="14" />
        </div>
        <ul class="card list">
          @for (s of stats; track s.value) {
            <li>
              <app-icon [name]="s.icon" [size]="22" />
              <div><strong>{{ s.value }}</strong><span>{{ s.label }}</span></div>
              <span class="go"><app-icon name="arrow" [size]="14" /></span>
            </li>
          }
        </ul>
      </aside>
    </section>
  `,
  styles: `
    :host { display: block; background: var(--tint); }
    .grid { display: grid; grid-template-columns: 1fr 1.25fr .8fr; gap: clamp(20px, 2.4vw, 34px); padding-block: 90px 110px; align-items: stretch; }
    .intro { display: flex; flex-direction: column; align-items: flex-start; }
    .intro .display { font-size: clamp(40px, 4.4vw, 60px); margin: 18px 0 22px; }
    .features { list-style: none; padding: 0; margin: 34px 0 30px; display: grid; gap: 26px; }
    .features li { display: flex; gap: 20px; }
    .features h3 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
    .features p { font-size: 13px; color: var(--muted); max-width: 240px; }

    .photo { position: relative; margin: 0; border-radius: var(--radius-lg); overflow: hidden; min-height: 520px; background: #dcdfe3; }
    .photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 30% 60%; }
    .photo::after { content: ''; position: absolute; inset: 0; background: linear-gradient(200deg, rgba(0,0,0,.45), rgba(0,0,0,0) 45%); }
    .vertical { position: absolute; z-index: 1; top: 8%; right: 9%; font-size: 10px; letter-spacing: .32em; text-transform: uppercase; line-height: 2.1; color: #fff; }
    .rule { display: block; margin-top: 18px; width: 22px; height: 1px; background: #fff; }

    .side { display: grid; gap: 14px; grid-template-rows: 1.2fr auto auto; }
    .card { background: var(--card); border-radius: 14px; border: 1px solid #eceef1; }
    .map { position: relative; overflow: hidden; min-height: 190px; }
    .map svg { position: absolute; inset: 0; width: 100%; height: 100%; }
    .pill { position: absolute; top: 14px; right: 14px; display: flex; align-items: center; gap: 12px; font-size: 10.5px; line-height: 1.35; background: #fff; padding: 10px 12px; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,.06); }
    .trip { display: grid; grid-template-columns: 76px 1fr auto; gap: 12px; align-items: center; padding: 10px; }
    .thumb { position: relative; height: 62px; border-radius: 8px; overflow: hidden; }
    .thumb img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 80%; display: block; }
    .trip h4 { font-size: 12px; font-weight: 600; }
    .trip p { font-size: 10.5px; color: var(--muted); line-height: 1.4; margin-top: 2px; }
    .list { list-style: none; margin: 0; padding: 4px 14px; }
    .list li { display: grid; grid-template-columns: 30px 1fr auto; align-items: center; gap: 10px; padding: 12px 0; border-top: 1px solid #eef0f2; }
    .list li:first-child { border-top: 0; }
    .list strong { display: block; font-size: 15px; font-weight: 600; }
    .list span { font-size: 10.5px; color: var(--muted); }
    .go { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: var(--surface-2); color: var(--ink); }

    @media (max-width: 1100px) {
      .grid { grid-template-columns: 1fr 1fr; }
      .side { grid-column: 1 / -1; grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
      .map { grid-row: span 2; }
    }
    @media (max-width: 720px) {
      .grid { grid-template-columns: 1fr; padding-block: 64px; }
      .photo { min-height: 380px; }
      .side { grid-template-columns: 1fr; }
      .map { grid-row: auto; }
    }
  `,
})
export class Charging {
  features = CHARGING_FEATURES;
  stats = CHARGING_STATS;
  photos = PHOTOS;
}
