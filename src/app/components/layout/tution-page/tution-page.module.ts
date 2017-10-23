import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutionPageComponent } from './tution-page.component';
import { TutionPageRoutingModule } from './tution-page-routing.module';
import { TutionListComponent } from './tution-list/tution-list.component';
import { TutionSaveFormComponent } from './tution-save-form/tution-save-form.component';

@NgModule({
  imports: [
    CommonModule,
    TutionPageRoutingModule
  ],
  declarations: [
    TutionPageComponent,
    TutionListComponent,
    TutionSaveFormComponent
  ]
})
export class TutionPageModule { }
