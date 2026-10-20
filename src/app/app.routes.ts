import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Volt Motors | Electric Vehicle Dealership',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'inventory',
    title: 'Inventory | Volt Motors',
    loadComponent: () => import('./pages/inventory/inventory').then((m) => m.Inventory),
  },
  {
    path: 'models/:id',
    title: 'Design Your Car | Volt Motors',
    loadComponent: () => import('./pages/car-detail/car-detail').then((m) => m.CarDetail),
  },
  {
    path: 'test-drive',
    title: 'Schedule a Test Drive | Volt Motors',
    loadComponent: () => import('./pages/test-drive/test-drive').then((m) => m.TestDrive),
  },
  {
    path: '**',
    title: 'Page Not Found | Volt Motors',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
