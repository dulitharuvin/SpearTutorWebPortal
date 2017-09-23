import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerPageRoutingModule } from './lecturer-page-routing.module';
import { LecturerPageComponent } from './lecturer-page.component';

@NgModule({
  imports: [
    CommonModule,
    LecturerPageRoutingModule
  ],
  declarations: [LecturerPageComponent]
})
export class LecturerPageModule { }
