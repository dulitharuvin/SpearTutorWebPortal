import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private fireDb: AngularFireDatabase,
    private userService: UserService) { 
      
    }

}
