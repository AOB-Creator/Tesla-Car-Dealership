import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Original placeholder scenery (mountains + lake). Replace with photography when you have it. */
@Component({
  selector: 'app-landscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient [attr.id]="uid + 'sky'" x1="0" y1="0" x2="0" y2="1">
          @if (tone() === 'dusk') {
            <stop offset="0" stop-color="#0d1016" /><stop offset=".55" stop-color="#3a3530" /><stop offset=".72" stop-color="#c98f5a" />
          } @else if (tone() === 'night') {
            <stop offset="0" stop-color="#030304" /><stop offset="1" stop-color="#16181c" />
          } @else {
            <stop offset="0" stop-color="#f4f5f6" /><stop offset="1" stop-color="#dfe3e7" />
          }
        </linearGradient>
      </defs>
      <rect width="1200" height="600" [attr.fill]="'url(#' + uid + 'sky)'" />
      @if (tone() === 'night') {
        @for (s of stars; track $index) { <circle [attr.cx]="s[0]" [attr.cy]="s[1]" [attr.r]="s[2]" fill="#fff" opacity=".7" /> }
      }
      <path [attr.fill]="far()" d="M0 360L120 260L210 300L330 190L430 280L520 230L640 300L760 200L880 280L980 220L1100 290L1200 240V600H0Z" />
      @if (tone() !== 'dusk') { <path [attr.fill]="snow()" d="M330 190L300 220L320 216L340 230L360 214ZM760 200L732 228L752 224L770 236L790 222ZM980 220L958 242L976 240L994 250L1008 238Z" /> }
      <path [attr.fill]="near()" d="M0 420L160 330L280 390L420 320L560 400L700 350L860 410L1000 340L1200 400V600H0Z" />
      <rect y="440" width="1200" height="160" [attr.fill]="water()" />
      <path d="M0 440H1200" [attr.stroke]="snow()" stroke-opacity=".35" />
    </svg>
  `,
  styles: [':host{display:block;position:absolute;inset:0} svg{width:100%;height:100%;display:block}'],
})
export class Landscape {
  tone = input<'light' | 'dusk' | 'night'>('light');
  protected uid = 'ls' + Math.random().toString(36).slice(2, 8);
  protected stars = Array.from({ length: 90 }, (_, i) => [(i * 137) % 1200, (i * 59) % 300, (i % 3) * 0.4 + 0.4]);
  protected far = () => ({ light: '#b8bec5', dusk: '#2a2a2c', night: '#1e2024' })[this.tone()];
  protected near = () => ({ light: '#7f868e', dusk: '#141416', night: '#0b0c0e' })[this.tone()];
  protected snow = () => ({ light: '#ffffff', dusk: '#d9c7b4', night: '#c9ccd1' })[this.tone()];
  protected water = () => ({ light: '#cfd5db', dusk: '#2e2a27', night: '#08090a' })[this.tone()];
}
