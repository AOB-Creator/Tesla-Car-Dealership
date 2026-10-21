import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FEATURED, DRIVE_MODES, PERFORMANCE_FEATURES } from '../../../data/landing';
import { Icon } from '../../../components/icon';

@Component({
  selector: 'app-performance',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap" id="performance">
      <div class="top">
        <div class="intro">
          <p class="eyebrow">03 / Performance &amp; control</p>
          <h2 class="display">Power you can feel.<br />Grip you can trust.</h2>
          <p class="lead">Fast response, clever traction and adaptive driving work together, so every model feels precise and relaxed on any road, in any weather.</p>
        </div>

        <div class="panel">
          <div class="panel-head">
            <p class="caps">Smart<br /><span>torque split</span></p>
            <div class="tabs" role="tablist" aria-label="Drive mode">
              @for (m of modes; track m.id) {
                <button role="tab" [attr.aria-selected]="m.id === mode()" [class.on]="m.id === mode()" (click)="mode.set(m.id)">{{ m.label }}</button>
              }
            </div>
          </div>

          <div class="diagram">
            <div class="pct"><span>Front</span><strong>{{ current().front }}%</strong></div>
            <svg viewBox="0 0 520 240" aria-label="Top-down chassis showing torque split">
              <g stroke="#c4c8ce" stroke-dasharray="3 5" fill="none">
                <path d="M20 30H500M20 210H500M40 10V230M480 10V230" />
              </g>
              @for (c of [[40,30],[480,30],[40,210],[480,210]]; track $index) {
                <circle [attr.cx]="c[0]" [attr.cy]="c[1]" r="4" fill="none" stroke="#b8bcc3" />
              }
              <path d="M78 120C78 66 96 44 150 40H372C440 40 472 70 476 120C472 170 440 200 372 200H150C96 196 78 174 78 120Z" fill="#fafbfc" stroke="#6e737b" stroke-width="1.4" />
              <path d="M190 58H340C370 58 390 80 392 120C390 160 370 182 340 182H190C172 182 166 160 166 120S172 58 190 58Z" fill="none" stroke="#a4a9b0" />
              <path d="M134 120H420M140 92V148M396 92V148" stroke="#6e737b" stroke-width="1.2" />
              @for (w of [[118,30],[118,190],[388,30],[388,190]]; track $index) {
                <rect [attr.x]="w[0]" [attr.y]="w[1] - 12" width="46" height="24" rx="5" fill="#2b2d31" />
              }
              <path [attr.d]="'M141 120H' + splitX()" stroke="#c9ccd1" stroke-width="3" />
              <path [attr.d]="'M' + splitX() + ' 120H411M411 92V148'" stroke="var(--red)" stroke-width="3" />
              <circle [attr.cx]="splitX()" cy="120" r="7" fill="var(--red)" />
              <circle [attr.cx]="splitX()" cy="120" r="13" fill="var(--red)" opacity=".15" />
            </svg>
            <div class="pct"><span>Rear</span><strong>{{ current().rear }}%</strong></div>
          </div>

          <div class="legend">
            <p class="caps small">{{ featured.name }}<br /><span>Dual-motor AWD</span></p>
            <p class="keys"><i class="k red"></i>Torque path <i class="k dash"></i>Centreline</p>
          </div>
        </div>
      </div>

      <ul class="ruled feats">
        @for (f of features; track f.title) {
          <li>
            <span class="icon-round"><app-icon [name]="f.icon" [size]="24" /></span>
            <div><h3>{{ f.title }}</h3><p>{{ f.text }}</p></div>
          </li>
        }
      </ul>
    </section>
  `,
  styles: `
    :host { display: block; background: var(--tint); }
    section { padding-block: 40px 100px; }
    .top { display: grid; grid-template-columns: 1fr 1.25fr; gap: clamp(28px, 4vw, 60px); align-items: start; }
    .intro .display { font-size: clamp(36px, 4vw, 56px); margin: 18px 0 24px; }
    .intro .lead { max-width: 440px; }
    .panel { background: #eef0f3; border-radius: 22px; padding: 26px 30px 22px; }
    .panel-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
    .caps { font-size: 11px; letter-spacing: .26em; text-transform: uppercase; line-height: 1.7; }
    .caps span { color: var(--muted); }
    .caps.small { font-size: 10px; }
    .tabs { display: flex; gap: 4px; background: #fff; border-radius: 999px; padding: 4px; }
    .tabs button { border: 0; background: none; padding: 8px 16px; border-radius: 999px; font-size: 12px; transition: background .2s, color .2s; }
    .tabs button.on { background: var(--ink); color: #fff; }
    .diagram { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; margin: 18px 0 8px; }
    .diagram svg { width: 100%; height: auto; }
    .diagram svg path, .diagram svg circle { transition: d .4s ease, cx .4s ease; }
    .pct span { display: block; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-2); }
    .pct strong { font-size: 20px; font-weight: 600; }
    .legend { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; padding-left: 30%; }
    .keys { font-size: 9px; letter-spacing: .14em; text-transform: uppercase; display: grid; grid-template-columns: auto auto; align-items: center; gap: 6px 10px; color: var(--ink-2); }
    .k { display: block; width: 28px; height: 0; border-top: 2px solid var(--red); }
    .k.dash { border-top: 1px dashed #8a8f97; }
    .feats { list-style: none; margin: 56px 0 0; padding: 0; }
    .feats li { display: flex; gap: 20px; align-items: flex-start; }
    .feats h3 { font-size: 17px; font-weight: 500; letter-spacing: -.01em; margin: 4px 0 8px; }
    .feats p { font-size: 13px; color: var(--muted); max-width: 250px; }
    @media (max-width: 960px) {
      .top { grid-template-columns: 1fr; }
      .legend { padding-left: 0; }
    }
    @media (max-width: 520px) {
      .panel { padding: 20px 16px; }
      .tabs { width: 100%; justify-content: space-between; }
      .tabs button { padding: 8px 10px; }
      .diagram { grid-template-columns: 1fr 1fr; }
      .diagram svg { grid-column: 1 / -1; order: -1; }
      .diagram .pct:last-child { text-align: right; }
    }
  `,
})
export class Performance {
  featured = FEATURED;
  modes = DRIVE_MODES;
  features = PERFORMANCE_FEATURES;
  mode = signal('comfort');
  current = computed(() => this.modes.find(m => m.id === this.mode())!);
  // Position of the torque split marker between the axles (front = 141, rear = 411).
  splitX = computed(() => Math.round(141 + (270 * this.current().rear) / 100));
}
