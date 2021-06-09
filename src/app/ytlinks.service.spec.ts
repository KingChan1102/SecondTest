import { TestBed } from '@angular/core/testing';

import { YtlinksService } from './ytlinks.service';

describe('YtlinksService', () => {
  let service: YtlinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtlinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
