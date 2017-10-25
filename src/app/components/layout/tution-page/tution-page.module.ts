import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
import { TutionPageRoutingModule } from './tution-page-routing.module';

import { TutionPageComponent } from './tution-page.component';
import { TutionListComponent } from './tution-list/tution-list.component';
import { TutionSaveFormComponent } from './tution-save-form/tution-save-form.component';
import { TutionService } from './../../../services/tution.service';

@NgModule({
  imports: [
    CommonModule,
    TutionPageRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [
    TutionPageComponent,
    TutionListComponent,
    TutionSaveFormComponent
  ],
  providers: [
    TutionService
  ]
})
export class TutionPageModule { }
