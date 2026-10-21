import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { INVENTORY } from '../../data/inventory';
import { Inventory } from './inventory';

describe('Inventory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [Inventory], providers: [provideRouter([])] });
  });

  it('lists all vehicles sorted by price, then filters by model and condition', async () => {
    const fixture = TestBed.createComponent(Inventory);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const cards = () => el.querySelectorAll('.card');
    expect(cards().length).toBe(INVENTORY.length);

    const select = el.querySelector<HTMLSelectElement>('#model')!;
    select.value = 'model-3';
    select.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(cards().length).toBe(3);
    expect(cards()[0].textContent).toContain('$38,900');

    (el.querySelectorAll('.segmented button')[1] as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(cards().length).toBe(2);
  });
});
