import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { LecturerService } from './../../../../services/lecturer.service';
import { Lecturer } from './../../../../models/Lecturer';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html'
})
export class LecturerListComponent implements OnInit {

  private lecturers: FirebaseListObservable<Lecturer[]>;

  constructor(private lecturerService: LecturerService) {
    this.getAllTheActiveLecturers();
  }

  ngOnInit() {
  }


  private getAllTheActiveLecturers() {
    this.lecturers = this.lecturerService.getAllTheActiveLecturers();
  }
}
