import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZeeTimeTableComponent } from './ng-zee-timetable.component';

describe('TimeTableComponent', () => {
  let component: NgZeeTimeTableComponent;
  let fixture: ComponentFixture<NgZeeTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgZeeTimeTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZeeTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
