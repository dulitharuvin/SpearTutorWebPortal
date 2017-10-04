import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerPageComponent } from './lecturer-page.component';
import { LecturerPageRoutingModule } from './lecturer-page-routing.module';
import { LecturerSaveFormComponent } from './lecturer-save-form/lecturer-save-form.component';
import { PageHeaderModule } from './../../shared';

import { LecturerService } from './../../../services/lecturer.service';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';

@NgModule({
  imports: [
    CommonModule,
    LecturerPageRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    LecturerPageComponent,
    LecturerSaveFormComponent,
    LecturerListComponent
  ],
  providers: [
    LecturerService
  ]
})
export class LecturerPageModule { }
