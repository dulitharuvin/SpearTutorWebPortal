import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutionPageComponent } from './tution-page.component'
import { TutionListComponent } from './tution-list/tution-list.component';
import { TutionSaveFormComponent } from './tution-save-form/tution-save-form.component';

const routes: Routes = [
  {
    path: '',
    component: TutionPageComponent,
    children: [
      { path: '', component: TutionListComponent },
      { path: 'save', component: TutionSaveFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutionPageRoutingModule { }
