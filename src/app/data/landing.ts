// Copy for the home page. Figures are derived from the dealership data in cars.ts,
// so the home page always agrees with the configurator and inventory pages.
import { CARS, startingPrice } from './cars';
import { monthlyPayment } from '../pages/car-detail/car-detail';

const allTrims = CARS.flatMap((car) => car.trims);
const lowestPrice = Math.min(...CARS.map(startingPrice));
const usd = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

export const BRAND = {
  name: 'VOLT MOTORS',
  short: 'Volt Motors',
  tagline: 'Electric driving, without the guesswork.',
};

/** The model featured in the hero and section illustrations. */
export const FEATURED = CARS[0];

export const HERO_STATS = [
  { icon: 'gauge', label: '0 – 60 mph from', value: Math.min(...allTrims.map((t) => t.acceleration)) + ' s' },
  { icon: 'battery', label: 'Range up to', value: Math.max(...allTrims.map((t) => t.range)) + ' mi' },
  { icon: 'bolt', label: 'Top speed up to', value: Math.max(...allTrims.map((t) => t.topSpeed)) + ' mph' },
];

export const CHARGING_FEATURES = [
  { icon: 'plug', title: 'Home charging setup', text: 'Certified installers fit a wall connector at your home, so you wake up full.' },
  { icon: 'pin', title: 'Fast charging on the road', text: 'DC fast chargers along major routes top you up during a coffee stop.' },
  { icon: 'phone', title: 'Smart route planning', text: 'The car plans charging stops for you from destination, traffic and battery level.' },
];

export const CHARGING_STATS = [
  { icon: 'battery', value: 'Up to ' + Math.max(...allTrims.map((t) => t.range)) + ' mi', label: 'on a single charge' },
  { icon: 'plug', value: 'Wall connector', label: 'installed at home' },
  { icon: 'nav', value: 'Live', label: 'route planning' },
];

export const DRIVE_MODES = [
  { id: 'comfort', label: 'Comfort', front: 40, rear: 60 },
  { id: 'sport', label: 'Sport', front: 30, rear: 70 },
  { id: 'track', label: 'Track', front: 25, rear: 75 },
  { id: 'individual', label: 'Individual', front: 50, rear: 50 },
];

export const PERFORMANCE_FEATURES = [
  { icon: 'bolt', title: 'Instant response', text: 'Electric torque arrives the moment you ask for it, for a direct, connected feel.' },
  { icon: 'awd', title: 'Dual-motor AWD', text: 'Available on every model. Power is shared between the axles for grip in any weather.' },
  { icon: 'road', title: 'Adaptive suspension', text: 'Ride and handling adjust to the surface and to the way you drive.' },
];

export const INTERIOR_FEATURES = [
  { icon: 'square', title: 'Simple controls', text: 'The essentials stay visible and within easy reach.' },
  { icon: 'user', title: 'Driver profiles', text: 'Seat, mirror and climate settings follow the driver.' },
  { icon: 'grid', title: 'Over-the-air updates', text: 'New features arrive while the car sits in your driveway.' },
];

export const OWNERSHIP_FEATURES = [
  { icon: 'shield', title: 'Same-week delivery', text: 'Most in-stock vehicles are ready within five business days.' },
  { icon: 'tag', title: 'Trade-in valuation', text: 'Get an instant estimate for your current car, applied at checkout.' },
  { icon: 'card', title: 'Flexible financing', text: 'Loan terms up to 72 months, with the monthly estimate shown as you configure.' },
];

export const OWNERSHIP_PRICES = [
  { label: 'Starting price', value: usd(lowestPrice), suffix: '' },
  { label: 'Financing', value: 'From ' + usd(monthlyPayment(lowestPrice)), suffix: '/ month' },
  { label: 'Delivery', value: '5 days', suffix: 'in stock' },
];

export const JOURNEYS = [
  { n: '01', title: 'New to electric', text: 'Curious about EVs and want to understand charging, range and everyday use first.', link: '/models/' + CARS[1].id, cta: 'Start with ' + CARS[1].name },
  { n: '02', title: 'Weighing options', text: 'Comparing trims, range and the real monthly cost before deciding.', link: '/inventory', cta: 'Browse inventory' },
  { n: '03', title: 'Ready to buy', text: 'Know what you want. Book a drive, pick a car from stock and get it this week.', link: '/test-drive', cta: 'Book a test drive' },
];
