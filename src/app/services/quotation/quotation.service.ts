import { inject, Injectable, signal } from '@angular/core';
import { Quotation } from '../../interfaces/quotation';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private firestore = inject(Firestore);

  one = signal<boolean>(true);
  two = signal<boolean>(false);
  three = signal<boolean>(false);
  quotation = signal<Quotation>({ status: 'active' });

  path = 'quotations';

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

  async getQuotations(): Promise<Array<Quotation>> {
    try {
      const querySnapshot = await getDocs(this._collection);
      const quotations: Array<Quotation> = [];
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
    try {
      const documentRef = doc(this.firestore, `${this.path}/${id}`);
      await updateDoc(documentRef, updatedData);
      console.log('Cotización actualizada exitosamente');
    } catch (error) {
      console.error('Error al actualizar cotización:', error);
    }
  }

  async deleteQuotationById(id: string): Promise<void> {
    try {
      const documentRef = doc(this.firestore, `${this.path}/${id}`);
      await deleteDoc(documentRef);
      console.log('Cotización eliminada exitosamente');
    } catch (error) {
      console.error('Error al eliminar cotización:', error);
    }
  }
}
