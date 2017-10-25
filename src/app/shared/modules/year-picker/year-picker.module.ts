import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { YearPickerComponent } from './year-picker.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [YearPickerComponent],
    exports: [YearPickerComponent]
})
export class YearPickerModule { }