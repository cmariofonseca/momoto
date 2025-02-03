import { Component } from '@angular/core';

import { QuotationService } from '../../services/quotation/quotation.service';

@Component({
  selector: 'app-pre-quotation',
  standalone: true,
  imports: [],
  templateUrl: './pre-quotation.component.html',
  styleUrl: './pre-quotation.component.css',
})
export class PreQuotationComponent {
  phoneNumber = '573117290060';
  message = 'Hola, quiero más información';

  constructor(private quotation: QuotationService) {}

  navigateToSecondStep(): void {
    this.quotation.changeState(false, true, false);
  }

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
