import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TestDrive } from './test-drive';

describe('TestDrive', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestDrive], providers: [provideRouter([])] });
  });

  it('pre-fills the model from the query param and blocks invalid submits', async () => {
    const fixture = TestBed.createComponent(TestDrive);
    fixture.componentRef.setInput('model', 'model-y');
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector<HTMLSelectElement>('#td-model')!.value).toBe('model-y');

    el.querySelector<HTMLButtonElement>('button[type=submit]')!.click();
    await fixture.whenStable();
    expect(el.querySelectorAll('.error').length).toBeGreaterThan(0);
    expect(el.querySelector('.confirmation')).toBeNull();
  });
});
