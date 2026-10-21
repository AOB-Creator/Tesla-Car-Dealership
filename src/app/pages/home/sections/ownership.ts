import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OWNERSHIP_FEATURES, OWNERSHIP_PRICES } from '../../../data/landing';
import { Icon } from '../../../components/icon';

@Component({
  selector: 'app-ownership',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap" id="ownership">
      <p class="eyebrow">05 / Ownership</p>
      <div class="head">
        <h2>Owning one<br />is simple.</h2>
        <p class="lead">Straightforward terms, flexible plans and support that lasts, so you can enjoy driving without the paperwork.</p>
      </div>
      <ul class="ruled feats">
        @for (f of features; track f.title) {
          <li>
            <app-icon [name]="f.icon" [size]="32" [stroke]="1.4" />
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </li>
        }
      </ul>
      <div class="prices">
        @for (p of prices; track p.label) {
          <div class="price"><span class="eyebrow">{{ p.label }}</span><strong>{{ p.value }} @if (p.suffix) {<small>{{ p.suffix }}</small>}</strong></div>
        }
        <a routerLink="/inventory" class="btn">Browse inventory <app-icon name="arrow" [size]="16" /></a>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; background: var(--tint); }
    section { padding-block: 80px 70px; }
    .head { display: flex; justify-content: space-between; align-items: flex-end; gap: 40px; margin: 44px 0 50px; }
    h2 { font-size: clamp(48px, 7vw, 100px); font-weight: 400; letter-spacing: -.05em; line-height: .98; }
    .head .lead { max-width: 340px; margin-bottom: 10px; }
    .feats { list-style: none; padding: 0; margin: 0 0 40px; }
    .feats h3 { font-size: clamp(18px, 1.6vw, 22px); font-weight: 400; margin: 18px 0 10px; }
    .feats p { font-size: 13px; color: var(--muted); max-width: 260px; }
    .prices { display: grid; grid-template-columns: repeat(3, auto) 1fr; align-items: center; border-top: 1px solid var(--line); padding-top: 30px; }
    .price { padding: 0 clamp(20px, 3.4vw, 48px); border-left: 1px solid var(--line); }
    .price:first-child { padding-left: 0; border-left: 0; }
    .price strong { display: block; margin-top: 10px; font-size: clamp(26px, 2.6vw, 36px); font-weight: 400; letter-spacing: -.03em; }
    .price small { font-size: 16px; color: var(--ink-2); letter-spacing: 0; }
    .prices .btn { justify-self: end; }
    @media (max-width: 900px) {
      .head { flex-direction: column; align-items: flex-start; gap: 18px; }
      .prices { grid-template-columns: 1fr; gap: 22px; }
      .price { padding: 0; border: 0; }
      .prices .btn { justify-self: stretch; justify-content: space-between; }
    }
  `,
})
export class Ownership {
  features = OWNERSHIP_FEATURES;
  prices = OWNERSHIP_PRICES;
}
