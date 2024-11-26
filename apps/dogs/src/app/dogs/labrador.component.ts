import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AssetUrlPipe } from '@single-spa-angular-esm/shared-ng';

@Component({
  selector: 'dogs-labrador',
  standalone: true,
  imports: [NgOptimizedImage, AssetUrlPipe],
  template: `
    <div>
      <img class="rounded-xl" [ngSrc]="'dogs/labrador-retriever.jpg' | assetUrl" width="800" height="600" priority />
    </div>
  `,
  styles: ``,
})
export class LabradorComponent {}
