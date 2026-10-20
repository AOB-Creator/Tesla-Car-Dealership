import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarIllustration } from '../../components/car-illustration/car-illustration';
import { CARS, startingPrice } from '../../data/cars';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe, CarIllustration],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly cars = CARS;
  protected readonly startingPrice = startingPrice;
  protected readonly heroColors = ['#e9eaec', '#1b1c1f', '#24407a', '#a3141c', '#b9bcc0'];

  protected readonly perks = [
    {
      title: 'Same-week delivery',
      text: 'Most in-stock vehicles are ready within five business days.',
    },
    {
      title: 'Trade-in valuation',
      text: 'Get an instant estimate for your current car, applied at checkout.',
    },
    {
      title: 'Home charging setup',
      text: 'Certified installers fit a wall connector at your home.',
    },
  ];
}
