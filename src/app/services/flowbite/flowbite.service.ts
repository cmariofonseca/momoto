import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initialize(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(() => {
        console.log('Flowbite inicializado');
      });
    }
  }
}
