export type BodyType = 'sedan' | 'suv' | 'truck';

export interface PaintOption {
  name: string;
  hex: string;
  price: number;
}

export interface WheelOption {
  name: string;
  size: number;
  price: number;
}

export interface TrimOption {
  name: string;
  price: number;
  range: number;
  topSpeed: number;
  acceleration: number;
}

export interface Car {
  id: string;
  name: string;
  tagline: string;
  body: BodyType;
  seats: number;
  description: string;
  trims: TrimOption[];
  paints: PaintOption[];
  wheels: WheelOption[];
}

const PAINTS: PaintOption[] = [
  { name: 'Pearl White', hex: '#e9eaec', price: 0 },
  { name: 'Solid Black', hex: '#1b1c1f', price: 1500 },
  { name: 'Stealth Grey', hex: '#55595e', price: 1500 },
  { name: 'Deep Blue', hex: '#24407a', price: 1500 },
  { name: 'Ultra Red', hex: '#a3141c', price: 2500 },
];

export const CARS: Car[] = [
  {
    id: 'model-s',
    name: 'Model S',
    tagline: 'Plaid performance, everyday comfort',
    body: 'sedan',
    seats: 5,
    description:
      'The flagship sedan with tri-motor all-wheel drive, a yoke-ready cabin and the longest range in the lineup.',
    trims: [
      { name: 'All-Wheel Drive', price: 79990, range: 402, topSpeed: 149, acceleration: 3.1 },
      { name: 'Plaid', price: 94990, range: 359, topSpeed: 200, acceleration: 1.99 },
    ],
    paints: PAINTS,
    wheels: [
      { name: 'Tempest', size: 19, price: 0 },
      { name: 'Arachnid', size: 21, price: 4500 },
    ],
  },
  {
    id: 'model-3',
    name: 'Model 3',
    tagline: 'The everyday electric sedan',
    body: 'sedan',
    seats: 5,
    description:
      'Efficient, quick and minimalist. A refreshed interior, quieter cabin and up to 363 miles of range.',
    trims: [
      { name: 'Rear-Wheel Drive', price: 42490, range: 363, topSpeed: 125, acceleration: 4.9 },
      { name: 'Long Range AWD', price: 47490, range: 346, topSpeed: 125, acceleration: 4.2 },
      { name: 'Performance', price: 54990, range: 303, topSpeed: 163, acceleration: 2.9 },
    ],
    paints: PAINTS,
    wheels: [
      { name: 'Photon', size: 18, price: 0 },
      { name: 'Nova', size: 19, price: 1500 },
    ],
  },
  {
    id: 'model-x',
    name: 'Model X',
    tagline: 'Falcon wing doors, seating for seven',
    body: 'suv',
    seats: 7,
    description:
      'The family SUV with falcon wing doors, a panoramic windshield and towing capacity up to 5,000 lbs.',
    trims: [
      { name: 'All-Wheel Drive', price: 84990, range: 329, topSpeed: 149, acceleration: 3.8 },
      { name: 'Plaid', price: 99990, range: 314, topSpeed: 163, acceleration: 2.5 },
    ],
    paints: PAINTS,
    wheels: [
      { name: 'Cyberstream', size: 20, price: 0 },
      { name: 'Turbine', size: 22, price: 5500 },
    ],
  },
  {
    id: 'model-y',
    name: 'Model Y',
    tagline: 'The best-selling electric SUV',
    body: 'suv',
    seats: 5,
    description:
      'Versatile crossover with generous cargo space, optional third row and dual-motor all-wheel drive.',
    trims: [
      { name: 'Rear-Wheel Drive', price: 44990, range: 337, topSpeed: 125, acceleration: 6.5 },
      { name: 'Long Range AWD', price: 49990, range: 311, topSpeed: 125, acceleration: 4.6 },
    ],
    paints: PAINTS,
    wheels: [
      { name: 'Gemini', size: 19, price: 0 },
      { name: 'Induction', size: 20, price: 2000 },
    ],
  },
  {
    id: 'cybertruck',
    name: 'Cybertruck',
    tagline: 'Built for any planet',
    body: 'truck',
    seats: 5,
    description:
      'Stainless-steel exoskeleton, adaptive air suspension and an 11,000 lb towing capacity.',
    trims: [
      { name: 'All-Wheel Drive', price: 79990, range: 325, topSpeed: 112, acceleration: 4.1 },
      { name: 'Cyberbeast', price: 99990, range: 301, topSpeed: 130, acceleration: 2.6 },
    ],
    paints: [
      { name: 'Stainless Steel', hex: '#b9bcc0', price: 0 },
      { name: 'Satin Black Wrap', hex: '#26272a', price: 6500 },
    ],
    wheels: [
      { name: 'All-Terrain', size: 20, price: 0 },
      { name: 'Aero Cover', size: 20, price: 1000 },
    ],
  },
];

export function findCar(id: string | null | undefined): Car | undefined {
  return CARS.find((car) => car.id === id);
}

export function startingPrice(car: Car): number {
  return Math.min(...car.trims.map((trim) => trim.price));
}
