import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginModel } from '../models/auth/login.model';
import { RegisterModel } from '../models/auth/register.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient: HttpClient;
  baseUrl: string = environment.envVar.apiEndpointUrl;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  signup(data: RegisterModel) {
    return this.httpClient.post(`${this.baseUrl}/auth/register`, data);
  }

  login(data: LoginModel) {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  logout() {
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
