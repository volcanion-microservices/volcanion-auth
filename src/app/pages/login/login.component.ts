import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoginModel } from '../../models/auth/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  loginObject: LoginModel | undefined;
  isRememberMe = false;

  protected loginForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  onCheckboxChange(event: Event) {
    this.isRememberMe = (event.target as HTMLInputElement).checked
  }

  onSubmit() {
    console.log(this.loginObject);
    if (this.loginForm.valid) {
      this.loginObject = new LoginModel(
        this.loginForm.value.phoneNumber,
        this.loginForm.value.password,
        this.loginForm.value.rememberMe,
      );

      console.log(this.loginObject);
      this.authService.login(this.loginObject)
        .subscribe((data: any) => {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/admin']).then(r => console.log(r));
          }
          console.log(data);
        });
    }
  }
}
