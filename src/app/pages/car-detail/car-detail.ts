import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarIllustration } from '../../components/car-illustration/car-illustration';
import { findCar } from '../../data/cars';

export const DESTINATION_FEE = 1390;
const APR = 0.0649;
const TERM_MONTHS = 72;
const DOWN_PAYMENT = 5000;

/** Standard amortised monthly payment. */
export function monthlyPayment(
  total: number,
  apr = APR,
  months = TERM_MONTHS,
  down = DOWN_PAYMENT,
): number {
  const principal = Math.max(total - down, 0);
  const rate = apr / 12;
  return rate === 0 ? principal / months : (principal * rate) / (1 - Math.pow(1 + rate, -months));
}

@Component({
  selector: 'app-car-detail',
  imports: [RouterLink, CurrencyPipe, CarIllustration],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetail {
  /** Bound from the `:id` route param. */
  readonly id = input<string>();

  protected readonly car = computed(() => findCar(this.id()));
  protected readonly trimIndex = signal(0);
  protected readonly paintIndex = signal(0);
  protected readonly wheelIndex = signal(0);
  protected readonly destinationFee = DESTINATION_FEE;
  protected readonly termMonths = TERM_MONTHS;
  protected readonly downPayment = DOWN_PAYMENT;

  protected readonly trim = computed(() => this.car()?.trims[this.trimIndex()]);
  protected readonly paint = computed(() => this.car()?.paints[this.paintIndex()]);
  protected readonly wheel = computed(() => this.car()?.wheels[this.wheelIndex()]);

  protected readonly total = computed(
    () =>
      (this.trim()?.price ?? 0) +
      (this.paint()?.price ?? 0) +
      (this.wheel()?.price ?? 0) +
      DESTINATION_FEE,
  );

  protected readonly monthly = computed(() => monthlyPayment(this.total()));

  constructor() {
    // Reset the configuration when navigating between models.
    effect(() => {
      this.id();
      this.trimIndex.set(0);
      this.paintIndex.set(0);
      this.wheelIndex.set(0);
    });
  }
}
