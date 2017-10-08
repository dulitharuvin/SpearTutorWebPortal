import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Lecturer } from './../models/Lecturer';


@Injectable()
export class LecturerService {

  constructor(private fireDb: AngularFireDatabase) {

  }

  public getAllTheActiveLecturers() {
    var lecturers = this.fireDb.list('/lecturer', {
      query: {
        orderByChild: 'expired',
        equalTo: 0
      }
    });

    return lecturers;
  }

  public saveLecturer(lecturer: Lecturer){
    return this.fireDb.list('/lecturer').push(lecturer);
  }

}
