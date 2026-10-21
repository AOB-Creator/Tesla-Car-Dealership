import { CARS } from './cars';
import { carPhoto } from './car-photos';
import { INVENTORY } from './inventory';

describe('carPhoto', () => {
  it('returns the photo in the requested paint when one exists', () => {
    const match = carPhoto('model-3', 'Ultra Red');
    expect(match?.exact).toBe(true);
    expect(match?.photo.src).toContain('model-3-ultra-red');
  });

  it('falls back to the default photo and reports the paint it shows', () => {
    const match = carPhoto('model-s', 'Ultra Red');
    expect(match?.exact).toBe(false);
    expect(match?.paint).toBe('Pearl White');
  });

  it('has a photo for every model', () => {
    for (const car of CARS) {
      expect(carPhoto(car.id)?.photo.src, car.id).toBeTruthy();
    }
  });

  it('shows every in-stock vehicle in its actual paint', () => {
    for (const vehicle of INVENTORY) {
      expect(carPhoto(vehicle.carId, vehicle.paint)?.exact, vehicle.vin).toBe(true);
    }
  });
});
