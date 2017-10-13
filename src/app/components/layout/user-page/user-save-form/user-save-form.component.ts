import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';

@Component({
  selector: 'app-user-save-form',
  templateUrl: './user-save-form.component.html'
})
export class UserSaveFormComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

}
