import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator
} from '@angular/forms';
import { Directive } from '@angular/core';
import { EMAIL_REGEX, NIC_REGEX, PASSWORD_REGEX, TELEPHONE_REGEX } from './../components/shared/constants/constants';

@Directive({
  selector: '[emailvalidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidator,
      multi: true
    }
  ]
})
export class EmailValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.emailValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  emailValidator(): ValidatorFn {
    return (c: FormControl) => {

      let isValid = EMAIL_REGEX.test(c.value);

      if (isValid) {
        return null;
      } else {
        return {
          emailvalidator: {
            valid: false
          }
        };
      }
    }
  }
}




@Directive({
  selector: '[nicvalidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NicValidator,
      multi: true
    }
  ]
})
export class NicValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.nicValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  nicValidator(): ValidatorFn {
    return (c: FormControl) => {

      let isValid = NIC_REGEX.test(c.value);

      if (isValid) {
        return null;
      } else {
        return {
          nicvalidator: {
            valid: false
          }
        };
      }
    }
  }
}



@Directive({
  selector: '[telephonevalidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TelephoneValidator,
      multi: true
    }
  ]
})

export class TelephoneValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.telephoneValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  telephoneValidator(): ValidatorFn {
    return (c: FormControl) => {

      let isValid = TELEPHONE_REGEX.test(c.value);

      if (isValid) {
        return null;
      } else {
        return {
          telephonevalidator: {
            valid: false
          }
        };
      }
    }
  }
}



@Directive({
  selector: '[passwordvalidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidator,
      multi: true
    }
  ]
})

export class PasswordValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.passwordValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  passwordValidator(): ValidatorFn {
    return (c: FormControl) => {

      let isValid = PASSWORD_REGEX.test(c.value);

      if (isValid) {
        return null;
      } else {
        return {
          passwordvalidator: {
            valid: false
          }
        };
      }
    }
  }
}

