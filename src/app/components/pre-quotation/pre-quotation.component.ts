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

  phoneNumber = '573117290060';
  message = 'Hola, quiero más información';

  navigateToSecondStep(): void {
    this.toSecondStep.emit(true);
  }

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
