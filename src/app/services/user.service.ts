import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './../models/user';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { } from 'rxjs/observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserService {

  user: User = null;
  authState: firebase.User = null;
  userRef: AngularFireObject<any>;

  constructor(private firebaseAuth: AngularFireAuth,
    private fireDb: AngularFireDatabase,
    private router: Router) {

    this.firebaseAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.firebaseAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }


  registerUser(user: User) {
    this.user = user;
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error))
  }

  signOut(): void {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/'])
  }

  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features

    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const userRef: AngularFireObject<any> = this.fireDb.object(path);

    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    }

    userRef.update(this.user)
      .catch(error => console.log(error));
  }
}
