import { TestBed } from '@angular/core/testing';

import { TratedService } from './trated.service';

describe('TratedService', () => {
  let service: TratedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TratedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
