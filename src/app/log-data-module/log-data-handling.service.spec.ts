import { TestBed } from '@angular/core/testing';

import { LogDataHandlingService } from './log-data-handling.service';

describe('LogDataHandlingService', () => {
  let service: LogDataHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogDataHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
