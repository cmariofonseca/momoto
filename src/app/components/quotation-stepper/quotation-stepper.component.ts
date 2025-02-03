import { Component } from '@angular/core';
import { QuotationService } from '../../services/quotation/quotation.service';

@Component({
  selector: 'app-quotation-stepper',
  standalone: true,
  imports: [],
  templateUrl: './quotation-stepper.component.html',
  styleUrl: './quotation-stepper.component.css',
})
export class QuotationStepperComponent {
  constructor(public quotation: QuotationService) {}
}
