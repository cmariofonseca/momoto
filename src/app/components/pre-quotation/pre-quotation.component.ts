import { Component, OnInit } from '@angular/core';

import { QuotationService } from '../../services/quotation/quotation.service';
import { Quotation } from '../../interfaces/quotation';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pre-quotation',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './pre-quotation.component.html',
})
export class PreQuotationComponent implements OnInit {
  quotation: Quotation = {};

  phoneNumber = '573117290060';
  message = 'Hola, quiero más información';

  constructor(private readonly quotationService: QuotationService) {}

  ngOnInit(): void {
    this.quotation = this.quotationService.quotation();
  }

  navigateToSecondStep(): void {
    this.quotationService.changeState(false, true, false);
  }

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
