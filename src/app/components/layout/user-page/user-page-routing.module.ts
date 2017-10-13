import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSaveFormComponent } from './user-save-form/user-save-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'save', component: UserSaveFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
