import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CARS, findCar } from '../../data/cars';

export interface TestDriveRequest {
  model: string;
  vin: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

function toDateInput(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

@Component({
  selector: 'app-test-drive',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './test-drive.html',
  styleUrl: './test-drive.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestDrive implements OnInit {
  /** Optional `?model=` and `?vin=` query params, pre-filled from other pages. */
  readonly model = input<string>();
  readonly vin = input<string>();

  protected readonly cars = CARS;
  protected readonly minDate = toDateInput(new Date());
  protected readonly times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];
  protected readonly submitted = signal<TestDriveRequest | null>(null);

  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly form = this.fb.group({
    model: ['', Validators.required],
    vin: [''],
    date: ['', Validators.required],
    time: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+()\d\s-]{7,20}$/)]],
    notes: [''],
  });

  ngOnInit(): void {
    if (findCar(this.model())) {
      this.form.patchValue({ model: this.model(), vin: this.vin() ?? '' });
    }
  }

  protected carName(id: string): string {
    return findCar(id)?.name ?? id;
  }

  protected invalid(name: keyof TestDriveRequest): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(this.form.getRawValue());
  }

  protected bookAnother(): void {
    this.form.reset();
    this.submitted.set(null);
  }
}
