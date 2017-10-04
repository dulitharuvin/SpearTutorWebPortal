import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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

  public saveLecturer(){
    var lecturers = this.fireDb.list('/lecturer')
  }

}
