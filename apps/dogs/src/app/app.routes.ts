import { Route } from '@angular/router';
import { LabradorComponent } from './dogs/labrador.component';
import { DogsComponent } from './dogs/dogs.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dogs',
    pathMatch: 'full',
  },
  {
    path: 'dogs',
    component: DogsComponent,
  },
  {
    path: 'dogs/labrador',
    component: LabradorComponent,
  },
  {
    path: '**',
    children: [],
  },
];
