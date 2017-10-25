import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
import { UserPageRoutingModule } from './user-page-routing.module';
import { FormValidatorModule } from './../../../Helpers/form-validator.module';

import { UserPageComponent } from './user-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSaveFormComponent } from './user-save-form/user-save-form.component';
import { UserService } from './../../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
    PageHeaderModule,
    FormsModule,
    FormValidatorModule
  ],
  declarations: [
    UserPageComponent,
    UserListComponent,
    UserSaveFormComponent
  ],
  providers: [
    UserService
  ]
})
export class UserPageModule { }
