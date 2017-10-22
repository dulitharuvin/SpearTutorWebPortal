import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../shared';
import { UserPageRoutingModule } from './user-page-routing.module';

import { UserPageComponent } from './user-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSaveFormComponent , EmailValidator } from './user-save-form/user-save-form.component';

import { UserService } from './../../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [
    UserPageComponent,
    UserListComponent,
    UserSaveFormComponent,
    EmailValidator
  ],
  providers: [
    UserService
  ]
})
export class UserPageModule { }
