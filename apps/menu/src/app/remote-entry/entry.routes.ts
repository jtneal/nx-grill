import { Route } from '@angular/router';

import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { RemoteEntryComponent } from './entry.component';
import { LunchComponent } from './lunch/lunch.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'breakfast',
        component: BreakfastComponent,
      },
      {
        path: 'lunch',
        component: LunchComponent,
      },
      {
        path: 'dinner',
        component: DinnerComponent,
      },
    ],
  },
];
