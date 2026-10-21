import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRAND } from '../../../data/landing';
import { Icon } from '../../../components/icon';
import { CarArt } from '../../../components/car-art';

@Component({
  selector: 'app-cta',
  imports: [RouterLink, Icon, CarArt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap" id="book">
      <p class="wordmark">{{ brand.name }}</p>
      <h2>Ready for your<br />first drive?</h2>
      <p class="lead">See any model up close, at the dealership or at your door.</p>
      <a routerLink="/test-drive" class="btn">Book a test drive <app-icon name="arrow" [size]="16" /></a>
      <div class="stage">
        <p class="side l">Quieter<br />streets for<br />a cleaner<br />tomorrow.<span></span></p>
        <app-car-art class="car" view="rear" />
        <p class="side r">Efficient<br />motion.<br />Lasting<br />value.<span></span></p>
      </div>
      <div class="base"><span>{{ brand.short }}</span><span>Cleaner miles start here</span></div>
    </section>
  `,
  styles: `
    :host { display: block; background: radial-gradient(80% 60% at 50% 70%, #fff, #e9ebee); }
    section { text-align: center; padding-block: 34px 22px; display: flex; flex-direction: column; align-items: center; }
    .wordmark { font-size: 16px; letter-spacing: .42em; padding-left: .42em; }
    h2 { margin-top: 44px; font-size: clamp(40px, 5.2vw, 72px); font-weight: 500; letter-spacing: -.04em; line-height: 1.02; }
    .lead { margin: 14px 0 22px; font-size: 15px; }
    .stage { width: 100%; display: grid; grid-template-columns: 1fr minmax(0, 560px) 1fr; align-items: center; margin-top: 30px; }
    .car { width: 100%; }
    .side { font-size: 9.5px; letter-spacing: .24em; text-transform: uppercase; line-height: 2; color: var(--ink-2); text-align: left; justify-self: start; padding-left: 4%; }
    .side.r { justify-self: end; padding: 0 4% 0 0; }
    .side span { display: block; width: 28px; height: 1px; background: var(--muted); margin-top: 18px; }
    .base { width: 100%; display: flex; justify-content: space-between; border-top: 1px solid #cfd3d8; margin-top: 20px; padding-top: 10px; font-size: 9px; letter-spacing: .24em; text-transform: uppercase; color: var(--muted); }
    @media (max-width: 720px) {
      .stage { grid-template-columns: 1fr; }
      .side { display: none; }
    }
  `,
})
export class Cta {
  brand = BRAND;
}
