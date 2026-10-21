import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CarDetail, DESTINATION_FEE, monthlyPayment } from './car-detail';

describe('CarDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [CarDetail], providers: [provideRouter([])] });
  });

  it('totals trim, paint, wheels and destination fee', async () => {
    const fixture = TestBed.createComponent(CarDetail);
    fixture.componentRef.setInput('id', 'model-3');
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    const total = () => el.querySelector('.total span:last-child')?.textContent?.trim();
    expect(total()).toBe('$' + (42490 + DESTINATION_FEE).toLocaleString('en-US'));

    // Performance trim + Ultra Red paint + 19" wheels
    (el.querySelectorAll('.options')[0].querySelectorAll('button')[2] as HTMLButtonElement).click();
    (el.querySelectorAll('.swatch')[4] as HTMLButtonElement).click();
    (el.querySelectorAll('.options')[1].querySelectorAll('button')[1] as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(total()).toBe('$' + (54990 + 2500 + 1500 + DESTINATION_FEE).toLocaleString('en-US'));
  });

  it('shows a not-found message for unknown models', async () => {
    const fixture = TestBed.createComponent(CarDetail);
    fixture.componentRef.setInput('id', 'model-z');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Model not found');
  });

  it('computes an amortised monthly payment', () => {
    expect(monthlyPayment(5000)).toBe(0);
    expect(monthlyPayment(17000, 0, 12)).toBe(1000);
    expect(monthlyPayment(45000)).toBeCloseTo(672.4, 0);
  });
});
