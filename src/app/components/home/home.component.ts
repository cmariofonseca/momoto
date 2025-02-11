import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToSignIn(): void {
    // this.router.navigate(['/authentication']);
    this.router.navigate(['/list-quotations']);
  }
}
