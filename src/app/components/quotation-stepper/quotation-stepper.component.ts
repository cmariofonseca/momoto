import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotation-stepper',
  standalone: true,
  imports: [],
  templateUrl: './quotation-stepper.component.html',
  styleUrl: './quotation-stepper.component.css',
})
export class QuotationStepperComponent {
  @Input() one: boolean = false;
  @Input() two: boolean = false;
  @Input() three: boolean = false;
}
