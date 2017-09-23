import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerPageComponent } from './lecturer-page.component';

const routes: Routes = [
  { path: '', component: LecturerPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerPageRoutingModule { }
