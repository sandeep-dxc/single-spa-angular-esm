import { Component } from '@angular/core';
import { DogsComponent } from './dogs/dogs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'dogs-app-main',
  template: `
    <section class="h-full p-7 bg-[hsl(198,23%,43%)]">
      <router-outlet></router-outlet>
    </section>
  `,
})
export class DogsAppComponent {}
