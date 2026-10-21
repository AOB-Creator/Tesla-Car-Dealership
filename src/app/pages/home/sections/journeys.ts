import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JOURNEYS } from '../../../data/landing';
import { Icon } from '../../../components/icon';
import { Landscape } from '../../../components/landscape';
import { CarArt } from '../../../components/car-art';

@Component({
  selector: 'app-journeys',
  imports: [RouterLink, Landscape, CarArt, Icon],
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
        <app-landscape tone="light" />
        <div class="road"></div>
        <app-car-art class="car" view="side" [dark]="true" />
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
    .scenery { position: relative; height: clamp(220px, 24vw, 330px); overflow: hidden; }
    .scenery::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 40%; z-index: 1; background: linear-gradient(180deg, #f4f5f6, rgba(244,245,246,0)); }
    .road { position: absolute; left: 0; right: 0; bottom: 0; height: 22%; background: linear-gradient(180deg, #2c2f33, #121417); }
    .car { position: absolute; z-index: 2; right: -6%; bottom: 6%; width: min(560px, 55%); }
  `,
})
export class Journeys {
  items = JOURNEYS;
}
