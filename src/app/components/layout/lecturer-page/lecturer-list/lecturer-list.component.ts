import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { LecturerService } from './../../../../services/lecturer.service';
import { Lecturer } from './../../../../models/lecturer';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html'
})
export class LecturerListComponent implements OnInit {

  lecturers: Observable<any[]>;

  constructor(private lecturerService: LecturerService) {
    this.getAllTheActiveLecturers();
  }

  ngOnInit() {
  }


  private getAllTheActiveLecturers() {
    this.lecturers = this.lecturerService.getAllTheActiveLecturers();
  }
}
