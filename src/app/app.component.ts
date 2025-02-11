import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FlowbiteService } from './services/flowbite/flowbite.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'momoto';

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.initialize();
  }
}
