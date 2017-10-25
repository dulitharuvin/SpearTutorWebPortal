import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';

@Component({
  selector: 'app-user-save-form',
  templateUrl: './user-save-form.component.html'
})

export class UserSaveFormComponent implements OnInit {

  @ViewChild('userSaveForm') userSignUpForm: any;
  user: User;  

  constructor(private userService: UserService, private router: Router) {
    
  }

  ngOnInit() {
    this.user = new User();
  }

  registerUser() {
    const userSavePromise = this.userService.registerUser(this.user);
    userSavePromise
    .then(_ => {
      console.log('success');
      this.userSignUpForm.reset();
      this.router.navigate(['user']);
    });
  }

}


