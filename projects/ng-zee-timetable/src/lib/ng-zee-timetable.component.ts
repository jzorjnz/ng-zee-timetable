import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgZeeTimeTableData, NgZeeTimeTableDataElement, NgZeeTimeTableOptions } from './ng-zee-timetable-types';

@Component({
  selector: 'ng-zee-timetable',
  templateUrl: './ng-zee-timetable.component.html',
  styleUrls: ['./ng-zee-timetable.component.scss']
})
export class NgZeeTimeTableComponent implements OnInit, OnChanges {

  // -----------------------------------------------------------------------------------------------
  getFormattedTime(v) {
    if (parseInt("" + v) > 9) {
      return "" + v;
    }
    else {
      return "0" + v;
    }
  }

  getHour(v: string) {
    return parseInt("" + v.split(":")[0]);
  }

  getFormattedHour(v: string) {
    return this.getFormattedTime(this.getHour(v));
  }

  getMinute(v) {
    let m = parseInt("" + v.split(":")[1]);
    let offset = m % 5;

    if (offset) {
      // console.log(`m:${m}, offset:${offset}`);
      m += offset > 2 ? (5 - offset) : -offset;
    }

    return parseInt("" + m);
  }

  getFormattedMinute(v) {
    return this.getFormattedTime(this.getMinute(v));
  }

  getTimeInMinutes(v) {
    return this.getHour(v) * 60 + this.getMinute(v);
  }

  fixTime(v) {
    let m = this.getMinute(v);
    let h = this.getHour(v);
    if (m == 60) {
      h++;
      m = 0;
    }
    return `${this.getFormattedTime(h)}:${this.getFormattedTime(m)}`
  }

  getDuration(row: string, slot: string) {
    let startTime: string = slot;
    let endTime: string = this.data[row][slot].endTime;
    return Math.floor((((this.getHour(endTime) - this.getHour(startTime)) * 60) + (this.getMinute(endTime) - this.getMinute(startTime))) / 5)
  }
  // -----------------------------------------------------------------------------------------------


  timeDividers: any[] = null;
  @Input('rows') rows = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  @Input('data') data: NgZeeTimeTableData = null;
  @Input('options') options: NgZeeTimeTableOptions = {
    element: {
      background: '#f97c7c',
      titleColor: 'white',
      subTitleColor: '#862424'
    },
    rowLabel: {
      background: '#d83d3d',
      labelColor: 'white'
    }
  };

  initTimeDividers(data: NgZeeTimeTableData) {
    let minTime = 480;
    let maxTime = 780;

    let startHours = 8;
    let endHours = 13;

    Object.keys(data).forEach(day => {
      Object.keys(data[day]).forEach(slot => {
        minTime = Math.min(minTime, this.getTimeInMinutes(slot));
        maxTime = Math.max(maxTime, this.getTimeInMinutes(data[day][slot].endTime))
      })
    })

    startHours = Math.floor(minTime / 60);
    endHours = Math.ceil(maxTime / 60);

    //console.log(`maxTime:${maxTime} hours:${hours}`);

    this.timeDividers = [];
    for (let i = startHours; i < endHours; i++) {
      for (let j = 0; j < 60; j += 5) {
        this.timeDividers.push(`${this.getFormattedTime(i)}:${this.getFormattedTime(j)}`);
      }
    }
    this.timeDividers.push(endHours + ":00");
  }



  getDataAtSlot(row, slot): NgZeeTimeTableDataElement {
    if (this.data[row] && this.data[row][slot]) {
      return this.data[row][slot];
    }
    else {
      return null;
    }
  }

  // ------------------------------------------------------------------------------------------------------


  constructor() {
  }

  ngOnChanges(params) {
    // if (params && params.rows && params.rows.currentValue) {
    //   console.table(params.rows.currentValue);
    // }

    if (params && params.data && params.data.currentValue) {
      // console.table(params.data.currentValue);
      this.initTimeDividers(params.data.currentValue);
    }

  }

  ngOnInit() {
    // this.data = this.authService.getStudent()
    // console.log(this.data)

    // this.prepareTimeTable(this.dummyData);
  }

}
