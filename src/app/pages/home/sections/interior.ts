import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INTERIOR_FEATURES } from '../../../data/landing';
import { Icon } from '../../../components/icon';
import { Landscape } from '../../../components/landscape';
import { CarArt } from '../../../components/car-art';

@Component({
  selector: 'app-interior',
  imports: [Icon, Landscape, CarArt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="dark">
      <app-landscape tone="dusk" />
      <div class="cabin" aria-hidden="true">
        <div class="roof"></div>
        <div class="pillar"></div>
        <div class="dash"></div>
        <div class="wheel"><span></span></div>
        <div class="screen">
          <div class="menu">@for (m of menu; track m) { <span>{{ m }}</span> }</div>
          <div class="main">
            <p class="clock">20:24 &nbsp; 19°C</p>
            <p class="hello">Good evening</p>
            <app-car-art class="mini" view="side" [dark]="true" />
            <p class="range">402 mi</p>
          </div>
        </div>
      </div>

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
    .cabin { position: absolute; inset: 0; pointer-events: none; }
    .roof { position: absolute; inset: 0 0 auto 0; height: 9%; background: #050506; border-bottom-left-radius: 50% 40%; border-bottom-right-radius: 50% 40%; }
    .pillar { position: absolute; top: 0; left: 30%; width: 22%; height: 72%; background: linear-gradient(100deg, transparent 49%, #060607 50%); }
    .dash { position: absolute; left: 0; right: 0; bottom: 0; height: 40%; background: radial-gradient(120% 90% at 60% 0%, #2a2522 0%, #0d0d0e 45%, #050506 70%); border-top: 1px solid rgba(255,170,110,.35); }
    .wheel { position: absolute; left: 39%; bottom: 20%; width: 23%; aspect-ratio: 1; border-radius: 50%; border: 22px solid #0a0a0b; box-shadow: 0 0 0 1px #2c2c2e inset, 0 -2px 0 rgba(255,180,120,.25); }
    .wheel span { position: absolute; left: 50%; top: 50%; width: 30%; height: 22%; transform: translate(-50%, -50%); background: #121214; border-radius: 40% 40% 50% 50%; }
    .screen { position: absolute; right: 4%; bottom: 22%; width: 31%; aspect-ratio: 1.6; border-radius: 14px; background: #121316; border: 6px solid #050506; transform: perspective(900px) rotateY(-14deg); display: grid; grid-template-columns: 26% 1fr; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,.6); }
    .menu { display: flex; flex-direction: column; gap: 10px; padding: 18% 10%; font-size: 8px; color: #9da1a8; border-right: 1px solid #23252a; }
    .main { position: relative; padding: 12px; background: linear-gradient(180deg, #1c2026, #2d3036); }
    .clock { text-align: right; font-size: 8px; color: #c6c9ce; }
    .hello { font-size: 10px; font-style: italic; margin-top: 4px; }
    .mini { width: 78%; margin: 6% 0 0 18%; }
    .range { position: absolute; right: 12px; bottom: 10px; font-size: 9px; border-bottom: 1px solid #fff; padding-bottom: 2px; }

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
      .screen { width: 78%; right: 6%; top: 330px; bottom: auto; transform: none; }
      .wheel, .pillar { display: none; }
      .dash { height: auto; top: 300px; }
      .vertical { display: none; }
      .feats { margin-top: 260px; }
      .feats li { background: rgba(5,5,6,.75); padding: 14px; border-radius: 12px; }
    }
  `,
})
export class Interior {
  features = INTERIOR_FEATURES;
  menu = ['Drive', 'Navigation', 'Charging', 'Climate', 'Settings'];
}
