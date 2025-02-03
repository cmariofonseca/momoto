import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  one = signal(true);
  two = signal(false);
  three = signal(false);

  changeState(firstStep: boolean, secondStep: boolean, thirdStep: boolean) {
    this.one.set(firstStep);
    this.two.set(secondStep);
    this.three.set(thirdStep);
  }
}
