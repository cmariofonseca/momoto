import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

import { QuotationService } from '../../services/quotation/quotation.service';

@Component({
  selector: 'app-terrain-features',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './terrain-features.component.html',
  styleUrl: './terrain-features.component.css',
})
export class TerrainFeaturesComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private quotation: QuotationService) {
    this.createForm();
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
    this.quotation.changeState(true, false, false);
  }

  navigateToThirdStep(): void {
    if (this.form.valid) {
      this.quotation.updateQuotation(this.form.value);
      this.quotation.changeState(false, false, true);
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
