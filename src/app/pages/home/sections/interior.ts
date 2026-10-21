import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INTERIOR_FEATURES, PHOTOS } from '../../../data/landing';
import { Icon } from '../../../components/icon';

@Component({
  selector: 'app-interior',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="dark">
      <img class="bg" [src]="photo.src" [alt]="photo.alt" width="2200" height="1467" loading="lazy" />
      <div class="shade" aria-hidden="true"></div>

      <div class="content wrap">
        <div class="head">
          <div>
            <p class="eyebrow">04 / Interior &amp; technology</p>
            <h2>All you need.<br /><span>Nothing in the way.</span></h2>
            <p class="sub">Clear technology, a quiet cabin and<br />full attention on the road.</p>
          </div>
          <p class="eyebrow vertical">Shaped<br />around<br />you</p>
        </div>
        <ul class="ruled feats">
          @for (f of features; track f.title) {
            <li>
              <span class="tile"><app-icon [name]="f.icon" [size]="20" /></span>
              <div><h3>{{ f.title }}</h3><p>{{ f.text }}</p></div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; background: var(--dark); }
    section { position: relative; color: #fff; overflow: hidden; min-height: 680px; display: flex; }
    .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 45%; }
    .shade { position: absolute; inset: 0; background:
      linear-gradient(90deg, rgba(5,5,6,.92) 0%, rgba(5,5,6,.7) 38%, rgba(5,5,6,.25) 70%, rgba(5,5,6,.45) 100%),
      linear-gradient(0deg, rgba(5,5,6,.95) 0%, rgba(5,5,6,0) 40%); }

    .content { position: relative; z-index: 2; width: 100%; display: flex; flex-direction: column; justify-content: space-between; padding-block: 70px 40px; }
    .head { display: flex; justify-content: space-between; }
    h2 { font-size: clamp(34px, 3.8vw, 52px); font-weight: 400; letter-spacing: -.03em; line-height: 1.08; margin: 54px 0 16px; }
    h2 span { color: #b3b6bb; }
    .sub { font-size: 14px; color: #d6d8dc; }
    .vertical { line-height: 2; text-align: left; }
    .feats { list-style: none; margin: 220px 0 0; padding: 0; }
    .feats li { display: flex; gap: 22px; }
    .tile { flex: none; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 10px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); }
    .feats h3 { font-size: 14px; font-weight: 500; }
    .feats p { font-size: 12px; color: #b6b9be; margin-top: 4px; max-width: 220px; }

    @media (max-width: 900px) {
      section { min-height: 0; }
      .bg { object-position: 40% 50%; }
      .shade { background: linear-gradient(180deg, rgba(5,5,6,.9) 0%, rgba(5,5,6,.55) 45%, rgba(5,5,6,.95) 100%); }
      .vertical { display: none; }
      .feats { margin-top: 220px; }
      .feats li { background: rgba(5,5,6,.7); padding: 14px; border-radius: 12px; }
    }
  `,
})
export class Interior {
  features = INTERIOR_FEATURES;
  photo = PHOTOS.interior;
}
