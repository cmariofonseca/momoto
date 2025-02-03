import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-terrain-features',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './terrain-features.component.html',
  styleUrl: './terrain-features.component.css',
})
export class TerrainFeaturesComponent {
  @Output() toFirstStep = new EventEmitter<boolean>();
  @Output() toThirdStep = new EventEmitter<boolean>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      area: ['', [Validators.required, Validators.min(0)]],
      inclination: ['', [Validators.required]],
      rocky_soil: ['', [Validators.required]],
    });
  }

  navigateToFirstStep(): void {
    this.toFirstStep.emit(true);
  }

  navigateToThirdStep(): void {
    if (this.form.valid) {
      this.toThirdStep.emit(true);
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
