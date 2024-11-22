import { FormControl, ɵValue } from '@angular/forms';

export class LoginModel {
  email: ɵValue<FormControl<string | null>> | undefined;
  password: ɵValue<FormControl<string | null>> | undefined;

  constructor(email: ɵValue<FormControl<string | null>> | undefined, password: ɵValue<FormControl<string | null>> | undefined) {
    this.email = email;
    this.password = password;
  }
}
