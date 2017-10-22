import { EmailValidator , NicValidator , TelephoneValidator , PasswordValidator} from './form-validators';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        EmailValidator,
        NicValidator,
        TelephoneValidator,
        PasswordValidator
    ],
    exports : [
        EmailValidator,
        NicValidator,
        TelephoneValidator,
        PasswordValidator
    ],
  })
  export class FormValidatorModule { }
  