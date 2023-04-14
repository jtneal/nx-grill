import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-grill-nx-welcome',
  template: `
    <h2>Menu</h2>
    <ul>
      <li><a routerLink="breakfast">Breakfast</a></li>
      <li><a routerLink="lunch">Lunch</a></li>
      <li><a routerLink="dinner">Dinner</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
