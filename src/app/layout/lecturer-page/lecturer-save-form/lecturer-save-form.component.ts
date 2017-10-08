import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LecturerService } from './../../../../services/lecturer.service';
import { Lecturer } from './../../../../models/Lecturer';

import { EMAIL_REGEX } from './../../../shared/constants/constants';
@Component({
  selector: 'app-lecturer-save-form',
  templateUrl: './lecturer-save-form.component.html'
})
export class LecturerSaveFormComponent implements OnInit {

  lecturer: Lecturer;
  private EMAIL_REGEX: string;

  @ViewChild('lecturerSaveForm') lecturerSaveForm: any;

  constructor(private lecturerService: LecturerService,
    private router: Router) {
    this.lecturer = new Lecturer();
    this.EMAIL_REGEX = EMAIL_REGEX;
  }

  ngOnInit() {

  }

  saveLecturer() {
    if (this.lecturerSaveForm.valid) {
      var lecturerSavePromise = this.lecturerService.saveLecturer(this.lecturer);
      lecturerSavePromise
        .then(_ => {
          console.log('success');
          this.lecturerSaveForm.reset();
          this.router.navigate(['lecturer']);
        })
        .catch(err => console.log(err, 'something went wrong!!'));
    }
  }

}