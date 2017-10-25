import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { Router } from '@angular/router';

import { TutionService } from './../../../../services/tution.service';
import { Tution } from './../../../../models/Tution';


@Component({
  selector: 'app-tution-save-form',
  templateUrl: './tution-save-form.component.html'
})
export class TutionSaveFormComponent implements OnInit {

  @ViewChild('userSaveForm') userSignUpForm: any;
  tution: Tution; 
  
  constructor() { }

  ngOnInit() {
    this.tution = new Tution();
  }

}
