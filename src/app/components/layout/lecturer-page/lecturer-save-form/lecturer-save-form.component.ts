import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LecturerService } from './../../../../services/lecturer.service';
import { Lecturer } from './../../../../models/lecturer';

@Component({
  selector: 'app-lecturer-save-form',
  templateUrl: './lecturer-save-form.component.html'
})
export class LecturerSaveFormComponent implements OnInit {

  lecturer: Lecturer;
  @ViewChild('lecturerSaveForm') lecturerSaveForm: any;

  constructor(private lecturerService: LecturerService,
    private router: Router) {
    this.lecturer = new Lecturer();
  }

  ngOnInit() {

  }

  saveLecturer() {
    if (this.lecturerSaveForm.valid) {
      const lecturerSavePromise = this.lecturerService.saveLecturer(this.lecturer);
      lecturerSavePromise
        .then(_ => {
          console.log('success');
          this.lecturerSaveForm.reset();
          this.router.navigate(['lecturer']);
        });
    }
  }

}
