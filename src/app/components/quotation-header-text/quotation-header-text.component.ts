import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-header-text',
  standalone: true,
  imports: [],
  templateUrl: './quotation-header-text.component.html',
  styleUrl: './quotation-header-text.component.css',
})
export class QuotationHeaderTextComponent {
  constructor(private readonly router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
