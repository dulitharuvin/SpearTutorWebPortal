import { TestBed, inject } from '@angular/core/testing';

import { AttendenceRecordService } from './attendence-record.service';

describe('AttendenceRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendenceRecordService]
    });
  });

  it('should be created', inject([AttendenceRecordService], (service: AttendenceRecordService) => {
    expect(service).toBeTruthy();
  }));
});
