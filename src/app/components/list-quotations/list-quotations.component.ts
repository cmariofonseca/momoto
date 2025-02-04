import { Component } from '@angular/core';
import { QuotationService } from '../../services/quotation/quotation.service';

import { Quotation } from '../../interfaces/quotation';

@Component({
  selector: 'app-list-quotations',
  standalone: true,
  imports: [],
  templateUrl: './list-quotations.component.html',
  styleUrl: './list-quotations.component.css',
})
export class ListQuotationsComponent {
  quotations: Array<Quotation> = [];

  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {
    this.loadQuotations();
  }

  async loadQuotations() {
    this.quotations = await this.quotationService.getQuotations();
    console.log(this.quotations);
  }
}
