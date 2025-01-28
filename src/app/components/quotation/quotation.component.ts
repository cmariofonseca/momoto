import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { UserInfoComponent } from '../user-info/user-info.component';
import { TerrainFeaturesComponent } from '../terrain-features/terrain-features.component';
import { PreQuotationComponent } from '../pre-quotation/pre-quotation.component';

@Component({
  selector: 'app-quotation',
  imports: [
    NgIf,
    UserInfoComponent,
    TerrainFeaturesComponent,
    PreQuotationComponent,
  ],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css',
})
export class QuotationComponent {
  stepOne = true;
  stepTwo = false;
  stepThree = false;

  navigateToFirstStep(event: any): void {
    console.log('navigateToSecondStep');
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
  }

  navigateToSecondStep(event: any): void {
    console.log('navigateToSecondStep');
    this.stepOne = false;
    this.stepTwo = true;
    this.stepThree = false;
  }

  navigateToThirdStep(event: any): void {
    console.log('navigateToThirdStep');
    this.stepTwo = false;
    this.stepThree = false;
    this.stepThree = true;
  }
}
