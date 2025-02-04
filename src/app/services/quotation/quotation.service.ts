import { inject, Injectable, signal } from '@angular/core';
import { Quotation } from '../../interfaces/quotation';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private firestore = inject(Firestore);

  one = signal<boolean>(true);
  two = signal<boolean>(false);
  three = signal<boolean>(false);
  quotation = signal<Quotation>({});

  path = 'quotation';

  private _collection = collection(this.firestore, this.path);

  changeState(
    firstStep: boolean,
    secondStep: boolean,
    thirdStep: boolean
  ): void {
    this.one.set(firstStep);
    this.two.set(secondStep);
    this.three.set(thirdStep);
  }

  updateQuotation(partialData: Quotation): void {
    console.log(partialData);
    this.quotation.update((currentData) => ({
      ...currentData,
      ...partialData,
    }));
    localStorage.setItem('quotation', JSON.stringify(this.getData()));
    if (this.two()) {
      this.createQuotation();
    }
  }

  getData(): Quotation {
    return this.quotation();
  }

  createQuotation(): void {
    addDoc(this._collection, this.quotation());
  }
}
