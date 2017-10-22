import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../shared';
import { LecturerPageRoutingModule } from './lecturer-page-routing.module';

import { LecturerPageComponent } from './lecturer-page.component';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';
import { LecturerSaveFormComponent } from './lecturer-save-form/lecturer-save-form.component';
import { EmailValidator , NicValidator , TelephoneValidator , PasswordValidator} from './../../../Helpers/form-validators';
import { LecturerService } from './../../../services/lecturer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LecturerPageRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    LecturerPageComponent,
    LecturerSaveFormComponent,
    LecturerListComponent,
    EmailValidator,
    NicValidator,
    TelephoneValidator,
    PasswordValidator
  ],
  providers: [
    LecturerService
  ]
})
export class LecturerPageModule { }
