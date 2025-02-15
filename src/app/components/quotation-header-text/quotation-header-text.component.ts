import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-header-text',
  standalone: true,
  imports: [],
  templateUrl: './quotation-header-text.component.html',
})
export class QuotationHeaderTextComponent {
  constructor(private readonly router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
