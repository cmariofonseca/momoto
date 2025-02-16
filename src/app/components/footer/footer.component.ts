import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private readonly router: Router) {}

  navigateToQuotation(): void {
    this.router.navigate(['/quotation']);
  }
}
