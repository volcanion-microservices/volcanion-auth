import { Component } from '@angular/core';
import { inject } from '@angular/core';
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

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginObject = new LoginModel(
        this.loginForm.value.email,
        this.loginForm.value.password,
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
