import { TestBed } from '@angular/core/testing';

import { NgZeeTimeTableService } from './ng-zee-timetable.service';

describe('NgZeeTimeTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgZeeTimeTableService = TestBed.get(NgZeeTimeTableService);
    expect(service).toBeTruthy();
  });
});
