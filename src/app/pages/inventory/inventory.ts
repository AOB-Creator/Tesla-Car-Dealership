import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarIllustration } from '../../components/car-illustration/car-illustration';
import { CARS, findCar } from '../../data/cars';
import { INVENTORY, InventoryVehicle } from '../../data/inventory';

type SortKey = 'price-asc' | 'price-desc' | 'mileage' | 'year';

@Component({
  selector: 'app-inventory',
  imports: [RouterLink, CurrencyPipe, DecimalPipe, CarIllustration],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inventory {
  protected readonly cars = CARS;
  protected readonly maxPriceLimit =
    Math.ceil(Math.max(...INVENTORY.map((v) => v.price)) / 5000) * 5000;

  protected readonly model = signal('all');
  protected readonly condition = signal<'all' | 'new' | 'used'>('all');
  protected readonly maxPrice = signal(this.maxPriceLimit);
  protected readonly sort = signal<SortKey>('price-asc');

  protected readonly results = computed(() => {
    const filtered = INVENTORY.filter(
      (v) =>
        (this.model() === 'all' || v.carId === this.model()) &&
        (this.condition() === 'all' || v.condition === this.condition()) &&
        v.price <= this.maxPrice(),
    );
    return filtered.sort(this.comparator(this.sort()));
  });

  protected carName(vehicle: InventoryVehicle): string {
    return findCar(vehicle.carId)?.name ?? vehicle.carId;
  }

  protected carBody(vehicle: InventoryVehicle) {
    return findCar(vehicle.carId)?.body ?? 'sedan';
  }

  protected paintHex(vehicle: InventoryVehicle): string {
    return findCar(vehicle.carId)?.paints.find((p) => p.name === vehicle.paint)?.hex ?? '#ccc';
  }

  protected reset(): void {
    this.model.set('all');
    this.condition.set('all');
    this.maxPrice.set(this.maxPriceLimit);
    this.sort.set('price-asc');
  }

  private comparator(key: SortKey): (a: InventoryVehicle, b: InventoryVehicle) => number {
    switch (key) {
      case 'price-desc':
        return (a, b) => b.price - a.price;
      case 'mileage':
        return (a, b) => a.mileage - b.mileage;
      case 'year':
        return (a, b) => b.year - a.year;
      default:
        return (a, b) => a.price - b.price;
    }
  }
}
