import { TestBed } from '@angular/core/testing';

import { FatwaService } from './fatwa.service';

describe('FatwaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FatwaService = TestBed.get(FatwaService);
    expect(service).toBeTruthy();
  });
});
