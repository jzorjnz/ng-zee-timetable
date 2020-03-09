export interface NgZeeTimeTableDataElement {
  title: string;
  subTitle: string,
  endTime: string;
}

export interface NgZeeTimeTableData {
  [day: string]: {
    [row: string]: NgZeeTimeTableDataElement
  }
}

// var map: { [email: string]: Customer; } = {};

export interface NgZeeTimeTableOptions {
  element: {
    background: string;
    titleColor: string;
    subTitleColor: string;
  },
  rowLabel: {
    background: string;
    labelColor: string;
  }

}



var data: NgZeeTimeTableData = {
  "Monday": {
    "08:00": {
      title: "start",
      subTitle: "start2",
      endTime: "09:00"
    },
  }
  ,
  "Tuesday": {
    "09:00": {
      title: "start4",
      subTitle: "start42",
      endTime: "10:00"
    },
  }
};

console.log(data.monday)

