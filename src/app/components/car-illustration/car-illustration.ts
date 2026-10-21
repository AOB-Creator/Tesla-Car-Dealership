import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BodyType } from '../../data/cars';

/** Side-profile vector car, tinted with the selected paint colour. */
@Component({
  selector: 'app-car-illustration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'img', '[attr.aria-label]': 'label()' },
  template: `
    <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="200" cy="138" rx="170" ry="8" fill="rgba(0,0,0,0.18)" />
      <path [attr.d]="bodyPath()" [attr.fill]="color()" stroke="rgba(0,0,0,0.25)" />
      <path [attr.d]="glassPath()" fill="#1d2430" opacity="0.85" />
      @for (x of wheelX(); track x) {
        <circle [attr.cx]="x" cy="122" [attr.r]="wheelRadius()" fill="#121316" />
        <circle [attr.cx]="x" cy="122" [attr.r]="wheelRadius() * 0.55" fill="#8a8f96" />
        <circle [attr.cx]="x" cy="122" [attr.r]="wheelRadius() * 0.15" fill="#2a2d32" />
      }
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
    svg {
      width: 100%;
      height: auto;
      display: block;
    }
  `,
})
export class CarIllustration {
  readonly body = input<BodyType>('sedan');
  readonly color = input('#e9eaec');
  readonly label = input('Car illustration');

  protected readonly bodyPath = computed(() => {
    switch (this.body()) {
      case 'suv':
        return 'M30 122 L34 92 Q40 78 70 74 L120 70 Q150 40 190 36 L270 36 Q310 38 335 70 L362 80 Q376 86 374 104 L372 122 Z';
      case 'truck':
        return 'M24 122 L26 90 L60 80 L200 34 L376 78 L378 122 Z';
      default:
        return 'M24 122 L28 98 Q34 84 66 80 L130 74 Q170 44 220 42 Q280 42 318 74 L360 82 Q378 88 378 106 L376 122 Z';
    }
  });

  protected readonly glassPath = computed(() => {
    switch (this.body()) {
      case 'suv':
        return 'M132 70 Q156 46 192 44 L268 44 Q298 46 318 70 Z';
      case 'truck':
        return 'M120 66 L200 42 L262 58 L236 72 Z';
      default:
        return 'M142 74 Q174 50 220 50 Q268 50 300 74 Z';
    }
  });

  protected readonly wheelX = computed(() => (this.body() === 'truck' ? [96, 310] : [90, 306]));

  protected readonly wheelRadius = computed(() => (this.body() === 'sedan' ? 22 : 25));
}
