import { TestBed } from '@angular/core/testing';

import { InvokeErrorService } from './invoke-error.service';

describe('InvokeErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvokeErrorService = TestBed.get(InvokeErrorService);
    expect(service).toBeTruthy();
  });
});
