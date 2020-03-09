import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZeeTimeTableComponent } from './ng-zee-timetable.component';

@NgModule({
  declarations: [
    NgZeeTimeTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NgZeeTimeTableComponent]
})
export class NgZeeTimeTableModule { }
