import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pre-quotation',
  standalone: true,
  imports: [],
  templateUrl: './pre-quotation.component.html',
  styleUrl: './pre-quotation.component.css',
})
export class PreQuotationComponent {
  @Output() toSecondStep = new EventEmitter<boolean>();

  navigateToSecondStep(): void {
    this.toSecondStep.emit(true);
  }

  calledToWhatsapp(): void {
    console.log('calledToWhatsapp');
  }
}
