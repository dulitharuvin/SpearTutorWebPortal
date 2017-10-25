import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { Router } from '@angular/router';

import { TutionService } from './../../../../services/tution.service';
import { Tution } from './../../../../models/Tution';
import { Day, TimeOfTheDay, TutionSize, TutionType } from './../../../../models/enums';
import { EnumEx } from './../../../../Helpers/EnumEx';

@Component({
  selector: 'app-tution-save-form',
  templateUrl: './tution-save-form.component.html'
})
export class TutionSaveFormComponent implements OnInit {

  @ViewChild('userSaveForm') userSignUpForm: any;
  tution: Tution;
  tutionTypes: Array<any>;
  tutionSizes: Array<any>;
  days: Array<any>;
  timesOfThDay: Array<any>;

  constructor() { }

  ngOnInit() {
    this.tution = new Tution();
    this.tutionTypes = EnumEx.getNamesAndValues(TutionType);
    this.tutionSizes = EnumEx.getNamesAndValues(TutionSize);
    this.days = EnumEx.getNamesAndValues(Day);
    this.timesOfThDay = EnumEx.getNamesAndValues(TimeOfTheDay);
  }

  saveTution() {
    console.log(this.tution);
  }

}
