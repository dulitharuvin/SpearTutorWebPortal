import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { AuthService } from './../../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignupRoutingModule
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    AuthService
  ]
})
export class SignupModule { }
