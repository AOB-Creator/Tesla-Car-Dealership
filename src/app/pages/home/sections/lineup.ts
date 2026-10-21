import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CARS, startingPrice } from '../../../data/cars';
import { MODEL_PHOTOS } from '../../../data/landing';
import { Icon } from '../../../components/icon';

/** The dealership's model range, in the landing-page style. */
@Component({
  selector: 'app-lineup',
  imports: [RouterLink, CurrencyPipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap" id="models">
      <div class="head">
        <div>
          <p class="eyebrow">01 / The lineup</p>
          <h2 class="display">Pick your electric.</h2>
        </div>
        <a routerLink="/inventory" class="link-arrow">See what's in stock <app-icon name="arrow" [size]="14" /></a>
      </div>
      <ul class="grid">
        @for (car of cars; track car.id) {
          <li class="card">
            <a [routerLink]="['/models', car.id]" class="art" [attr.aria-label]="'Configure ' + car.name">
              <img [src]="photos[car.id].src" [alt]="photos[car.id].alt" width="900" height="600" loading="lazy" />
            </a>
            <div class="info">
              <h3>{{ car.name }}</h3>
              <p class="tag">{{ car.tagline }}</p>
              <dl>
                <div><dt>From</dt><dd>{{ startingPrice(car) | currency: 'USD' : 'symbol' : '1.0-0' }}</dd></div>
                <div><dt>Range</dt><dd>{{ car.trims[0].range }} mi</dd></div>
                <div><dt>Seats</dt><dd>{{ car.seats }}</dd></div>
              </dl>
              <div class="actions">
                <a class="btn small" [routerLink]="['/models', car.id]">Configure</a>
                <a class="btn small light" routerLink="/test-drive" [queryParams]="{ model: car.id }">Test drive</a>
              </div>
            </div>
          </li>
        }
      </ul>
    </section>
  `,
  styles: `
    :host { display: block; background: var(--tint); }
    section { padding-block: 80px 40px; }
    .head { display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; flex-wrap: wrap; margin-bottom: 36px; }
    .display { font-size: clamp(36px, 4vw, 56px); margin-top: 18px; }
    .grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 18px; }
    .card { background: var(--card); border: 1px solid #eceef1; border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; }
    .art { display: block; aspect-ratio: 3 / 2; overflow: hidden; background: #e9ebee; }
    .art img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
    .card:hover .art img { transform: scale(1.04); }
    .info { padding: 18px 22px 22px; display: flex; flex-direction: column; flex: 1; }
    h3 { font-size: 22px; font-weight: 600; letter-spacing: -.02em; }
    .tag { font-size: 13px; color: var(--muted); margin-top: 4px; }
    dl { display: grid; grid-template-columns: repeat(3, 1fr); margin: 18px 0; padding: 14px 0; border-block: 1px solid var(--line); }
    dl div + div { border-left: 1px solid var(--line); padding-left: 12px; }
    dt { font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
    dd { margin: 4px 0 0; font-size: 15px; font-weight: 600; }
    .actions { display: flex; gap: 8px; margin-top: auto; }
    .btn.small { height: 38px; padding: 0 18px; font-size: 13px; flex: 1; justify-content: center; }
    .btn.light { background: var(--surface-2); color: var(--ink); border-color: var(--surface-2); }
    .btn.light:hover { background: #e2e5e8; }
    @media (min-width: 1280px) { .grid { grid-template-columns: repeat(5, 1fr); gap: 14px; } .info { padding-inline: 18px; } }
  `,
})
export class Lineup {
  cars = CARS;
  startingPrice = startingPrice;
  photos = MODEL_PHOTOS;
}
