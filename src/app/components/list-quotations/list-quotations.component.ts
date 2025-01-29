import { Component } from '@angular/core';

@Component({
  selector: 'app-list-quotations',
  imports: [],
  templateUrl: './list-quotations.component.html',
  styleUrl: './list-quotations.component.css',
})
export class ListQuotationsComponent {
  listAlerts = [
    { id: 1, message: 'Este es un mensaje de información 1' },
    { id: 2, message: 'Este es un mensaje de información 2' },
    { id: 3, message: 'Este es un mensaje de información 3' },
    { id: 4, message: 'Este es un mensaje de información 4' },
    { id: 5, message: 'Este es un mensaje de información 5' },
    { id: 6, message: 'Este es un mensaje de información 6' },
    { id: 7, message: 'Este es un mensaje de información 7' },
    { id: 8, message: 'Este es un mensaje de información 8' },
    { id: 9, message: 'Este es un mensaje de información 9' },
    { id: 10, message: 'Este es un mensaje de información 10' },
    { id: 11, message: 'Este es un mensaje de información 11' },
    { id: 12, message: 'Este es un mensaje de información 12' },
  ];

  removeAlert(id: number) {
    this.listAlerts = this.listAlerts.filter((alert) => alert.id !== id);
  }
}
