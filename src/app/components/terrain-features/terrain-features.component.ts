import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terrain-features',
  standalone: true,
  imports: [],
  templateUrl: './terrain-features.component.html',
  styleUrl: './terrain-features.component.css',
})
export class TerrainFeaturesComponent {
  @Output() toFirstStep = new EventEmitter<boolean>();
  @Output() toThirdStep = new EventEmitter<boolean>();

  navigateToFirstStep(): void {
    console.log('navigateToFirstStep');
    this.toFirstStep.emit(true);
  }

  navigateToThirdStep(): void {
    this.toThirdStep.emit(true);
  }
}
