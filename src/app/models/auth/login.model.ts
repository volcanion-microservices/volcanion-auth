import { FormControl, ɵValue } from '@angular/forms';

export class LoginModel {
  phoneNumber: ɵValue<FormControl<string | null>> | undefined;
  password: ɵValue<FormControl<string | null>> | undefined;
  issuer: ɵValue<FormControl<string | null>> | undefined;
  rememberMe: ɵValue<FormControl<boolean | null>> | undefined;

  constructor(phoneNumber: ɵValue<FormControl<string | null>> | undefined, password: ɵValue<FormControl<string | null>> | undefined, rememberMe: ɵValue<FormControl<boolean | null>> | undefined) {
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.issuer = 'Volcanion-Issuer';
    this.rememberMe = rememberMe;
  }
}
