# Nx Grill

This is a micro frontend architecture demo using Module Federation to create a
website for a fictitious restaurant.

If you want to follow along, here is the software I already have installed:

| Software    | Version |
| ----------- | ------- |
| Node        | 18.16.0 |
| NPM         | 9.6.4   |

## Architecture

Here is a super high level architecture for what we're about to build.

![NG Grill Architecture](./architecture.png)

Each of these is a fully-featured Angular application. Locations, Menu, and
Order are our micro frontends, and of course shell will be our shell that
composes everything together.

## Generate Shell and Micro Frontends

I start off by generating an Nx workspace.  
I then add my applications for the shell and micro frontends.

```sh
npx create-nx-workspace@latest --name nx-grill --preset empty --nx-cloud false
cd nx-grill
npm install --save-dev @nrwl/angular
npx nx g @nrwl/angular:host shell --style scss
npx nx generate @nrwl/angular:remote locations --port 4201 --host shell --style scss
npx nx generate @nrwl/angular:remote menu --port 4202 --host shell --style scss
npx nx generate @nrwl/angular:remote order --port 4203 --host shell --style scss
```

## Generate Menu Components

Next, I generate some menu components to show how we can include multiple pages
within a micro frontend.

```sh
npx nx generate @nrwl/angular:component --project menu remote-entry/breakfast
npx nx generate @nrwl/angular:component --project menu remote-entry/lunch
npx nx generate @nrwl/angular:component --project menu remote-entry/dinner
```

## Update apps/locations/src/app/remote-entry/nx-welcome.component.ts

```html
<h2>Locations</h2>
<p>Our locations system is currently undergoing scheduled maintenance.</p>
```

## Update apps/menu/src/app/remote-entry/nx-welcome.component.ts

```html
<h2>Menu</h2>
<ul>
  <li><a routerLink="breakfast">Breakfast</a></li>
  <li><a routerLink="lunch">Lunch</a></li>
  <li><a routerLink="dinner">Dinner</a></li>
</ul>
<router-outlet></router-outlet>
```

## Update apps/order/src/app/remote-entry/nx-welcome.component.ts

```html
<h2>Order</h2>
<p>Our online order system is currently undergoing scheduled maintenance.</p>
```

## Update apps/menu/src/app/remote-entry/entry.routes.ts

```ts
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
```

## Update apps/menu/src/app/remote-entry/entry.module.ts

```ts
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
```

## Update apps/shell/src/app/app.routes.ts

```ts
// {
//   path: '',
//   component: NxWelcomeComponent,
// },
```

## Run Everything

```sh
npx nx serve shell --devRemotes locations,menu,order
```

## Voilà!

Visit http://localhost:4200 to see the micro frontend architecture in action.
