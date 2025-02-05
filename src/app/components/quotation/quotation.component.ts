import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { QuotationService } from '../../services/quotation/quotation.service';

import { QuotationHeaderTextComponent } from '../quotation-header-text/quotation-header-text.component';
import { QuotationStepperComponent } from '../quotation-stepper/quotation-stepper.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { TerrainFeaturesComponent } from '../terrain-features/terrain-features.component';
import { PreQuotationComponent } from '../pre-quotation/pre-quotation.component';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [
    NgIf,
    UserInfoComponent,
    TerrainFeaturesComponent,
    PreQuotationComponent,
    QuotationStepperComponent,
    QuotationHeaderTextComponent,
  ],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css',
})
export class QuotationComponent {
  constructor(public quotation: QuotationService) {}
}
