import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

// Simple stroke icons (24x24 grid). Each entry is a list of SVG path "d" strings.
const ICONS: Record<string, string[]> = {
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  search: ['M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14z', 'M20 20l-4-4'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6L6 18'],
  gauge: ['M4.5 17a8.5 8.5 0 1 1 15 0', 'M12 13l3.5-4', 'M7 10.5l.8.6', 'M12 7v1', 'M17 10.5l-.8.6'],
  battery: ['M9 3h6', 'M8 5h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'M10 10h4', 'M10 13.5h4', 'M10 17h4'],
  bolt: ['M13 2L5 13.5h6L10 22l8-11.5h-6L13 2z'],
  pin: ['M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z', 'M12 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z'],
  phone: ['M8.5 2.5h7a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20V4a1.5 1.5 0 0 1 1.5-1.5z', 'M11 18h2'],
  plug: ['M9 3v5', 'M15 3v5', 'M6.5 8h11v3a5.5 5.5 0 0 1-11 0V8z', 'M12 16.5V21'],
  nav: ['M21 3L3 10.5l7.5 3 3 7.5L21 3z'],
  awd: ['M6 4h3', 'M15 4h3', 'M6 20h3', 'M15 20h3', 'M7.5 4v2.5', 'M16.5 4v2.5', 'M7.5 20v-2.5', 'M16.5 20v-2.5', 'M7.5 6.5l9 11', 'M16.5 6.5l-9 11'],
  road: ['M8 4L4 20', 'M16 4l4 16', 'M12 5v3', 'M12 11v3', 'M12 17v3'],
  square: ['M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z'],
  user: ['M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8z', 'M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5'],
  grid: ['M4 4h6v6H4z', 'M14 4h6v6h-6z', 'M4 14h6v6H4z', 'M14 14h6v6h-6z'],
  tag: ['M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-9 9-9-9z', 'M7.5 7.5h.01'],
  card: ['M4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5z', 'M2.5 10h19', 'M6 15h4'],
  shield: ['M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z'],
};

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" [attr.stroke-width]="stroke()" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      @for (d of paths(); track $index) { <path [attr.d]="d" /> }
    </svg>
  `,
  styles: [':host{display:inline-flex;line-height:0}'],
})
export class Icon {
  name = input.required<string>();
  size = input(20);
  stroke = input(1.6);
  paths = computed(() => ICONS[this.name()] ?? []);
}
