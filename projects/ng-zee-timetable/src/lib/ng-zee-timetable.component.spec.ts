import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZeeTimetableComponent } from './ng-zee-timetable.component';

describe('TimeTableComponent', () => {
  let component: NgZeeTimetableComponent;
  let fixture: ComponentFixture<NgZeeTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgZeeTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZeeTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
