import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoginModel } from '../../models/auth/login.model';
import { RegisterModel } from '../../models/auth/register.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  authService = inject(AuthService);
  router = inject(Router);
  registerObject: RegisterModel | undefined;

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public onSubmit() {
    if (this.signupForm.valid) {
      this.registerObject = new RegisterModel(
        this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password
      );

      console.log(this.registerObject);
      this.authService.signup(this.registerObject)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err),
        });
    }
  }
}
