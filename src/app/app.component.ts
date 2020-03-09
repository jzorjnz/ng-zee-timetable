import { Component } from '@angular/core';
import { NgZeeTimetableData, NgZeeTimetableOptions } from 'projects/ng-zee-timetable/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: NgZeeTimetableData = {
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

  options: NgZeeTimetableOptions = {
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
