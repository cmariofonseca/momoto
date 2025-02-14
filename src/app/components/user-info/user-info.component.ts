import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isPlatformBrowser, NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { QuotationService } from '../../services/quotation/quotation.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly quotation: QuotationService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedQuotation = JSON.parse(
        localStorage.getItem('quotation') || '{}'
      );
      const { name, lastName, phone, email, town } = storedQuotation;
      if (name && lastName && phone && email && town) {
        this.form.patchValue(storedQuotation);
      }
    }
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      town: ['', [Validators.required]],
      termsAndConditions: [true, [Validators.requiredTrue]],
    });
  }

  navigateGoBack(): void {
    this.router.navigate(['/']);
  }

  navigateToSecondStep(): void {
    if (this.form.valid) {
      const { name, lastName, phone, email, town } = this.form.value;
      const phoneValue = phone.toString();
      this.quotation.updateQuotation({
        name,
        lastName,
        phone: phoneValue,
        email,
        town,
      });
      this.quotation.changeState(false, true, false);
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
