import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'order',
    loadChildren: () => import('order/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('menu/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('locations/Module').then((m) => m.RemoteEntryModule),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
];
