import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isPlatformBrowser, NgClass, NgIf } from '@angular/common';

import { QuotationService } from '../../services/quotation/quotation.service';
import { Quotation } from '../../interfaces/quotation';

@Component({
  selector: 'app-terrain-features',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './terrain-features.component.html',
})
export class TerrainFeaturesComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly quotationService: QuotationService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedQuotation = JSON.parse(
        localStorage.getItem('quotation') || '{}'
      );
      const { area, lastDateGrassCutting, topographyTerrain, soilType } =
        storedQuotation;
      if (area && lastDateGrassCutting && topographyTerrain && soilType) {
        this.form.patchValue(storedQuotation);
      }
    }
  }

  createForm(): void {
    this.form = this.fb.group({
      area: ['', [Validators.required, Validators.min(0)]],
      lastDateGrassCutting: ['', [Validators.required]],
      topographyTerrain: [''],
      soilType: [''],
    });
  }

  navigateToFirstStep(): void {
    this.quotationService.changeState(true, false, false);
  }

  navigateToThirdStep(): void {
    if (this.form.valid) {
      const { area, lastDateGrassCutting, ...rest } = this.form.value;
      let value = (area || 0) * 100;

      if (lastDateGrassCutting == 'Entre 2 y 6 meses') value = value * 1.2;
      if (lastDateGrassCutting == 'Más de 6 meses') value = value * 1.5;

      if (area <= 1000) value = 100000;

      const updatedQuotation: Quotation = {
        area,
        lastDateGrassCutting,
        price: value,
        ...rest,
      };

      this.quotationService.updateQuotation(updatedQuotation);
      this.quotationService.changeState(false, false, true);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
