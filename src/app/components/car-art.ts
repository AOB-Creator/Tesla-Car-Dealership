import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Original placeholder illustrations of a generic electric sedan.
 * Swap them for your own photography: see README ("Using real photos").
 */
@Component({
  selector: 'app-car-art',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @switch (view()) {
      @case ('side') {
        <svg viewBox="0 0 800 300" role="img" aria-label="Electric sedan, side view">
          <defs>
            <linearGradient [attr.id]="uid + 'body'" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" [attr.stop-color]="dark() ? '#3a3d42' : '#ffffff'" />
              <stop offset=".55" [attr.stop-color]="dark() ? '#1d1f22' : '#e9ebee'" />
              <stop offset="1" [attr.stop-color]="dark() ? '#0d0e10' : '#c9cdd3'" />
            </linearGradient>
            <linearGradient [attr.id]="uid + 'glass'" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#2b2e33" />
              <stop offset=".6" stop-color="#14161a" />
              <stop offset="1" stop-color="#2b2e33" />
            </linearGradient>
            <radialGradient [attr.id]="uid + 'shadow'">
              <stop offset="0" stop-color="#000" stop-opacity=".35" />
              <stop offset="1" stop-color="#000" stop-opacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="410" cy="272" rx="380" ry="22" [attr.fill]="'url(#' + uid + 'shadow)'" />
          <path [attr.fill]="'url(#' + uid + 'body)'" stroke="#9aa0a8" stroke-width="1"
            d="M60 214C60 188 76 174 112 168L236 152C286 113 344 93 424 91C504 89 566 102 616 132L704 152C744 160 762 178 764 202V224C764 233 757 238 747 238H692A62 62 0 0 0 568 238H244A62 62 0 0 0 120 238H80C67 238 60 230 60 220Z" />
          <path [attr.fill]="'url(#' + uid + 'glass)'"
            d="M262 151C306 120 354 106 424 104C494 103 548 114 596 140L606 151Z" />
          <path d="M432 104V151" stroke="#5c6168" stroke-width="3" />
          <path d="M120 200C300 186 520 184 760 196" fill="none" stroke="#a9aeb5" stroke-width="1.2" />
          <path d="M70 188L128 180" stroke="#cfe3ff" stroke-width="3" stroke-linecap="round" />
          <path d="M740 168L764 174" stroke="#e32b23" stroke-width="4" stroke-linecap="round" />
          @for (x of [182, 630]; track x) {
            <g [attr.transform]="'translate(' + x + ' 238)'">
              <circle r="52" fill="#151618" />
              <circle r="38" fill="#2a2c30" stroke="#6d7179" stroke-width="2" />
              @for (a of [0, 72, 144, 216, 288]; track a) {
                <path [attr.transform]="'rotate(' + a + ')'" d="M0-8L-5-34H5Z" fill="#8a8f97" />
              }
              <path d="M-27-20A34 34 0 0 1 -12-31" stroke="#e32b23" stroke-width="6" fill="none" />
              <circle r="7" fill="#c4c8ce" />
            </g>
          }
        </svg>
      }
      @case ('rear') {
        <svg viewBox="0 0 600 360" role="img" aria-label="Electric sedan, rear view">
          <defs>
            <linearGradient [attr.id]="uid + 'rb'" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#ffffff" />
              <stop offset=".6" stop-color="#eceef1" />
              <stop offset="1" stop-color="#c8ccd2" />
            </linearGradient>
            <radialGradient [attr.id]="uid + 'rs'">
              <stop offset="0" stop-color="#000" stop-opacity=".35" />
              <stop offset="1" stop-color="#000" stop-opacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="300" cy="338" rx="280" ry="18" [attr.fill]="'url(#' + uid + 'rs)'" />
          <rect x="66" y="250" width="70" height="90" rx="14" fill="#141517" />
          <rect x="464" y="250" width="70" height="90" rx="14" fill="#141517" />
          <path [attr.fill]="'url(#' + uid + 'rb)'" stroke="#9aa0a8"
            d="M150 92C190 60 410 60 450 92L500 150C540 160 560 176 562 200L566 278C566 296 554 306 536 306H64C46 306 34 296 34 278L38 200C40 176 60 160 100 150Z" />
          <path fill="#17191c" d="M168 96C206 72 394 72 432 96L466 146H134Z" />
          <path d="M70 176H530" stroke="#e32b23" stroke-width="7" stroke-linecap="round" />
          <path d="M70 176H530" stroke="#ff8a80" stroke-width="2" stroke-linecap="round" opacity=".7" />
          <rect x="246" y="214" width="108" height="34" rx="4" fill="#f4f5f7" stroke="#b9bec5" />
          <path fill="#1c1e21" d="M90 266H510L496 300H104Z" />
          <rect x="294" y="270" width="12" height="22" rx="2" fill="#e32b23" />
        </svg>
      }
    }
  `,
  styles: [':host{display:block} svg{display:block;width:100%;height:auto}'],
})
export class CarArt {
  view = input<'side' | 'rear'>('side');
  dark = input(false);
  protected uid = 'car' + Math.random().toString(36).slice(2, 8);
}
