import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainDescriptionComponent } from '../main-description/main-description.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, MainDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
