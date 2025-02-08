import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';

import { QuotationService } from '../../services/quotation/quotation.service';

import { Quotation } from '../../interfaces/quotation';

@Component({
  selector: 'app-list-quotations',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './list-quotations.component.html',
  styleUrl: './list-quotations.component.css',
})
export class ListQuotationsComponent implements OnInit {
  quotations: Array<Quotation> = [];
  expandedRow: string | null = null;

  constructor(
    private router: Router,
    private quotationService: QuotationService
  ) {}

  ngOnInit(): void {
    this.loadQuotations();
  }

  async loadQuotations() {
    this.quotations = await this.quotationService.getQuotations();
    console.log(this.quotations);
  }

  toggleDetails(id: string): void {
    if (this.expandedRow === id) {
      this.expandedRow = null;
    } else {
      this.expandedRow = id;
    }
  }

  formatDate(timestamp: any): string {
    if (!timestamp) return 'Fecha no disponible';
    const date = timestamp.toDate();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  trackById(index: number, quotation: any): string {
    return quotation.id;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
