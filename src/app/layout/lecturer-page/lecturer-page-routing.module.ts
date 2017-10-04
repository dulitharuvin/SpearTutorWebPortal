import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerPageComponent } from './lecturer-page.component';
import { LecturerSaveFormComponent } from './lecturer-save-form/lecturer-save-form.component';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';

const routes: Routes = [
  {
    path: '',
    component: LecturerPageComponent,
    children: [
      { path: '', component: LecturerListComponent },
      { path: 'save', component: LecturerSaveFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerPageRoutingModule { }
