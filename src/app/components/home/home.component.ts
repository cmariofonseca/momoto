import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { MainVideoComponent } from '../main-video/main-video.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, MainVideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
