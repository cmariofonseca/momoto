import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Output() toSecondStep = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  navigateGoBack(): void {
    this.router.navigate(['/']);
  }

  navigateToSecondStep(): void {
    console.log('navigateToSecondStep');
    this.toSecondStep.emit(true);
  }
}
