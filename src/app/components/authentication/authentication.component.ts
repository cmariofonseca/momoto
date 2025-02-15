import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
  form!: FormGroup;
  inputType: string = 'password';
  inputIcon: string = 'icons/eye.svg';

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  changeInputType(): void {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.inputIcon = 'icons/eye-slash.svg';
    } else {
      this.inputType = 'password';
      this.inputIcon = 'icons/eye.svg';
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      try {
        await this.authService.login(email, password);
        this.router.navigate(['/list-quotations']);
      } catch (error: any) {
        console.log('Error al registrar: ' + error.message);
      }
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
