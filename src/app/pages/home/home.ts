import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './sections/hero';
import { Lineup } from './sections/lineup';
import { Charging } from './sections/charging';
import { Performance } from './sections/performance';
import { Interior } from './sections/interior';
import { Ownership } from './sections/ownership';
import { Journeys } from './sections/journeys';
import { Cta } from './sections/cta';

/** Landing page: the long-scroll showcase, followed by the model lineup. */
@Component({
  selector: 'app-home',
  imports: [Hero, Lineup, Charging, Performance, Interior, Ownership, Journeys, Cta],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-lineup />
    <app-charging />
    <app-performance />
    <app-interior />
    <app-ownership />
    <app-journeys />
    <app-cta />
  `,
})
export class Home {}
