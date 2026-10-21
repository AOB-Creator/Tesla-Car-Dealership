import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JOURNEYS, PHOTOS } from '../../../data/landing';
import { Icon } from '../../../components/icon';

@Component({
  selector: 'app-journeys',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="wrap copy" id="journeys">
        <p class="eyebrow">06 / Who it's for</p>
        <h2 class="display">Every driver starts somewhere.<br /><span class="soft">We meet you there.</span></h2>
        <p class="lead">Whether you are just curious or ready to sign, we give you the right answers at the right moment.</p>
        <ol class="ruled list">
          @for (j of items; track j.n) {
            <li><span class="n">{{ j.n }}</span><h3>{{ j.title }}</h3><p>{{ j.text }}</p><a class="link-arrow" [routerLink]="j.link">{{ j.cta }} <app-icon name="arrow" [size]="14" /></a></li>
          }
        </ol>
      </div>
      <div class="scenery">
        <img [src]="photo.src" [alt]="photo.alt" width="2200" height="1467" loading="lazy" />
      </div>
    </section>
  `,
  styles: `
    :host { display: block; background: linear-gradient(180deg, var(--tint), #f4f5f6); }
    .copy { padding-block: 70px 30px; }
    .display { font-size: clamp(34px, 4.6vw, 64px); margin: 26px 0 22px; }
    .lead { max-width: 560px; font-size: 14px; }
    .list { list-style: none; padding: 0; margin: 40px 0 0; }
    .n { font-size: 10px; letter-spacing: .2em; color: var(--muted); }
    .list h3 { font-size: clamp(20px, 1.8vw, 24px); font-weight: 500; letter-spacing: -.02em; margin: 8px 0 14px; }
    .list p { font-size: 13px; color: var(--muted); max-width: 280px; margin-bottom: 18px; }
    .scenery { position: relative; height: clamp(260px, 30vw, 440px); overflow: hidden; background: #111; }
    .scenery img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 48%; display: block; }
  `,
})
export class Journeys {
  items = JOURNEYS;
  photo = PHOTOS.road;
}
