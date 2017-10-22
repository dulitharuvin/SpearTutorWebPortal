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
      this.validator = nicValidator();
    }
    
    validate(c: FormControl) {
      return this.validator(c);
    }
  }   
  
  function nicValidator() : ValidatorFn {
    return (c: FormControl) => {
      
      let isValid = /^[0-9]{9}[vVxX]$/.test(c.value);
      
      if(isValid) {
        return null;
      } else {
        return {
          nicvalidator : {
            valid: false
          }
        };
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
      this.validator = telephoneValidator();
    }
    
    validate(c: FormControl) {
      return this.validator(c);
    }
  }   
  
  function telephoneValidator() : ValidatorFn {
    return (c: FormControl) => {
      
      let isValid = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/.test(c.value);
      
      if(isValid) {
        return null;
      } else {
        return {
          telephonevalidator : {
            valid: false
          }
        };
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
      this.validator = passwordValidator();
    }
    
    validate(c: FormControl) {
      return this.validator(c);
    }
  }   
  
  function passwordValidator() : ValidatorFn {
    return (c: FormControl) => {
      
      let isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(c.value);
      
      if(isValid) {
        return null;
      } else {
        return {
          passwordvalidator : {
            valid: false
          }
        };
      }
    }
   }

   