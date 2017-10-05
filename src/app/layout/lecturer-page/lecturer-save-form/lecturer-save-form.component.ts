import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LecturerService } from './../../../../services/lecturer.service';
import { Lecturer } from './../../../../models/Lecturer';

import { EMAIL_REGEX } from './../../../shared/constants/constants';
@Component({
  selector: 'app-lecturer-save-form',
  templateUrl: './lecturer-save-form.component.html'
})
export class LecturerSaveFormComponent implements OnInit {

  private lecturerSaveForm: FormGroup;

  private firstName: FormControl;
  private lastName: FormControl;
  private nic: FormControl;
  private email: FormControl;
  private address: FormControl;

  constructor(private lecturerService: LecturerService) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createFormControls() {
    this.firstName = new FormControl(
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ]
    );

    this.lastName = new FormControl(
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(150),
        Validators.required
      ]
    );

    this.nic = new FormControl(
      '', [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required
      ]
    );

    this.email = new FormControl(
      '', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ]
    );

    this.address = new FormControl(
      '', [
        Validators.required,
        Validators.minLength(10)
      ]
    );
  }

  private createForm() {
    this.lecturerSaveForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      nic: this.nic,
      email: this.email,
      address: this.address
    });
  }

  private saveLecturer() {

  }

}
