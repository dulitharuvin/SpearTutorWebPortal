import { TestBed, inject } from '@angular/core/testing';

import { TutionService } from './tution.service';

describe('TutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutionService]
    });
  });

  it('should be created', inject([TutionService], (service: TutionService) => {
    expect(service).toBeTruthy();
  }));
});
