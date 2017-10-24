import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Tution, TutionList } from './../models/Tution'

@Injectable()
export class TutionService {

  constructor(private fireDb: AngularFireDatabase) {

  }

  public getAllTutions() {
    var tutions = this.fireDb.list<any>('/tutions',
      ref => ref.orderByChild('expired').equalTo(0)).valueChanges();
    return tutions;
  }

  public saveTution(lecturer: Tution) {
    return this.fireDb.list('/tutions').push(lecturer);
  }

  public getStudentCountForATution(){

  }
}
