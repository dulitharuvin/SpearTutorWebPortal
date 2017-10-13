import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './../models/user';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserService {

  user: BehaviorSubject<User> = new BehaviorSubject(null)

  constructor(private afAuth: AngularFireAuth,
    private fireDb: AngularFireDatabase) {

  }

}
