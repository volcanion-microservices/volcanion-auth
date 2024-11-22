import { FormControl, ɵValue } from '@angular/forms';

export class RegisterModel {
  name: ɵValue<FormControl<string | null>> | undefined;
  email: ɵValue<FormControl<string | null>> | undefined;
  password: ɵValue<FormControl<string | null>> | undefined;

  constructor(name: ɵValue<FormControl<string | null>> | undefined, email: ɵValue<FormControl<string | null>> | undefined, password: ɵValue<FormControl<string | null>> | undefined) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
