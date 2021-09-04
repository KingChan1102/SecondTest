import { TestBed } from '@angular/core/testing';

import { Extras2Service } from './extras2.service';

describe('Extras2Service', () => {
  let service: Extras2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Extras2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
