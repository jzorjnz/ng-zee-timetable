# NgZeeTimeTable

Angular 2+ Timetable Library

## Live demo
* [Stackblitz](https://angular-ng-zee-timetable.stackblitz.io)
* [Github.io](https://jzorjnz.github.io/ng-zee-timetable.github.io)

## Installation
```bash
npm i ng-zee-timetable --save
```

## Import
Import NgZeeTimeTableModule in your app.module like this:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZeeTimeTableModule } from 'ng-zee-timetable';

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
```

## Usage

* Create data in the following format in a Angular component where used:

```typescript
import { Component } from '@angular/core';
import { NgZeeTimeTableData, NgZeeTimeTableOptions } from 'ng-zee-timetable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: NgZeeTimeTableData = {
    "Monday": {
      "08:00": {
        title: "English",
        subTitle: "Part 1",
        endTime: "09:00"
      },
      "09:00": {
        title: "Physics",
        subTitle: "Compulsory",
        endTime: "10:00"
      }
    },
    "Tuesday": {
      "09:00": {
        title: "English",
        subTitle: "Part 2",
        endTime: "10:00"
      },
      "10:00": {
        title: "Chemistry",
        subTitle: "Compulsory",
        endTime: "11:00"
      },
    },
    "Wednesday": {
      "08:00": {
        title: "Maths",
        subTitle: "Compulsory",
        endTime: "9:00"
      },
      "10:00": {
        title: "Biology",
        subTitle: "Compulsory",
        endTime: "11:00"
      }
    },
    "Thursday": {
      "08:00": {
        title: "Arabic",
        subTitle: "Optional",
        endTime: "9:00"
      },
      "11:00": {
        title: "Computer",
        subTitle: "Compulsory",
        endTime: "12:00"
      }
    },
    "Friday": {
      "09:30": {
        title: "Arts",
        subTitle: "Optional",
        endTime: "11:30"
      }
    }
  };

  options: NgZeeTimeTableOptions = {
    element: {
      background: '#f97c7c', titleColor: 'white', subTitleColor: '#862424'
    },
    rowLabel: {
      background: '#d83d3d',
      labelColor: 'white'
    }
  };

  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}

```

* Use in Component HTML:
```html
<ng-zee-timetable [data]="data" [rows]="days" [options]="options"></ng-zee-timetable>
```

## Note:
* This library is built and tested using Angular Cli version 8.3.25 so I can't guarantee if this will work with older versions.
* Use at your own risk.
