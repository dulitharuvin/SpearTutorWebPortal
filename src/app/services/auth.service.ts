import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash'

import { UserService } from './user.service';

@Injectable()
export class AuthService {

  userRoles: Array<string>;

  constructor(private fireDb: AngularFireDatabase,
    private userService: UserService) {
    if (this.userService.authenticated) {
      userService.userRefLogedIn.valueChanges().map(user => {
        return this.userRoles = _.keys(_.get(user, 'roles'))
      })
        .subscribe();
    }
  }

  ///// Authorization Logic /////
  get hasAdminAccess(): boolean {
    const allowed = ['admin']
    return this.matchingRole(allowed)
  }
  get hassModeratorAccess(): boolean {
    const allowed = ['moderator']
    return this.matchingRole(allowed)
  }
  get hasLecturerAccess(): boolean {
    const allowed = ['lecturer']
    return this.matchingRole(allowed)
  }
  /// Helper to determine if any matching roles exist
  private matchingRole(allowedRoles): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }

}
