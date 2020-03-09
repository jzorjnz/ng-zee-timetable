import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgZeeTimetableComponent } from './ng-zee-timetable.component';

@NgModule({
  declarations: [
    NgZeeTimetableComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [NgZeeTimetableComponent]
})
export class NgZeeTimeTableModule { }
