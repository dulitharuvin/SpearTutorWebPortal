import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator
} from '@angular/forms';
import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';

@Component({
  selector: 'app-user-save-form',
  templateUrl: './user-save-form.component.html'
})

export class UserSaveFormComponent implements OnInit {

  @ViewChild('userSaveForm') userSignUpForm: any;

  user: User;  

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.user = new User();
  }

  registerUser() {
    this.userService.registerUser(this.user);
  }

}

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
    this.validator = emailValidator();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
}

function emailValidator() : ValidatorFn {
  return (c: FormControl) => {
    
    let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
    
    if(isValid) {
      return null;
    } else {
      return {
        emailvalidator : {
          valid: false
        }
      };
    }

  }
}
