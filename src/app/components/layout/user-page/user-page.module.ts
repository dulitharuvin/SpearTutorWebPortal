import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { UserPageRoutingModule } from './user-page-routing.module';

import { UserPageComponent } from './user-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSaveFormComponent } from './user-save-form/user-save-form.component';

@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    UserPageComponent, 
    UserListComponent, 
    UserSaveFormComponent
  ]
})
export class UserPageModule { }
