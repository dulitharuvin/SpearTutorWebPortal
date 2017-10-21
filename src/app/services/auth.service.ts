import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import * as _ from 'lodash'
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class AuthService {

  userRoles: Array<string>;
  authState: firebase.User = null;

  constructor(private fireDb: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private userService: UserService) {
    fireAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  emailLogin(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem('authenticated', JSON.stringify(this.authenticated));
        return this.authState;
      })
      .catch(function(error){
        throw error;
      });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user observable
  get currentUserObservable(): Observable<any> {
    return this.fireAuth.authState
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
