import { Component, OnInit, ViewChild } from '@angular/core';

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
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.registerUser(this.user);
  }

}
