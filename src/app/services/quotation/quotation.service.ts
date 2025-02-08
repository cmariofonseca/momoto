import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from '@angular/fire/firestore';

import { Quotation } from '../../interfaces/quotation';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private firestore!: Firestore;
  private isBrowser: boolean;
  private _collection: any;

  one = signal<boolean>(true);
  two = signal<boolean>(false);
  three = signal<boolean>(false);
  quotation = signal<Quotation>({ status: 'active' });

  path = 'quotations';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.firestore = inject(Firestore);

      this._collection = collection(this.firestore, this.path);
    }
  }

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
    if (!this.firestore) return;

    const newQuotation = {
      ...this.quotation(),
      createdAt: Timestamp.now(),
    };

    addDoc(this._collection, newQuotation);
  }

  async getQuotations(): Promise<Quotation[]> {
    if (!this.firestore) return [];

    try {
      const q = query(this._collection, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const quotations: Quotation[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Quotation;
        quotations.push({ id: doc.id, ...data });
      });
      return quotations;
    } catch (error) {
      console.error('Error al obtener cotizaciones:', error);
      return [];
    }
  }

  async updateQuotationById(
    id: string,
    updatedData: Partial<Quotation>
  ): Promise<void> {
    if (!this.firestore) return;

    try {
      const documentRef = doc(this.firestore, `${this.path}/${id}`);
      await updateDoc(documentRef, updatedData);
    } catch (error) {
      console.error('Error al actualizar cotización:', error);
    }
  }

  async deleteQuotationById(id: string): Promise<void> {
    if (!this.firestore) return;

    try {
      const documentRef = doc(this.firestore, `${this.path}/${id}`);
      await deleteDoc(documentRef);
    } catch (error) {
      console.error('Error al eliminar cotización:', error);
    }
  }
}
