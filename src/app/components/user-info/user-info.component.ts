import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Output() toSecondStep = new EventEmitter<boolean>();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      town: ['', [Validators.required]],
      termsAndConditions: [false, [Validators.requiredTrue]],
    });
  }

  navigateGoBack(): void {
    this.router.navigate(['/']);
  }

  navigateToSecondStep(): void {
    if (this.form.valid) {
      this.toSecondStep.emit(true);
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
