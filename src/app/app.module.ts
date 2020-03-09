import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZeeTimeTableModule } from 'projects/ng-zee-timetable/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZeeTimeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
