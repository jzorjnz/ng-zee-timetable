import { TestBed } from '@angular/core/testing';

import { NgZeeTimetableService } from './ng-zee-timetable.service';

describe('NgZeeTimetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgZeeTimetableService = TestBed.get(NgZeeTimetableService);
    expect(service).toBeTruthy();
  });
});
