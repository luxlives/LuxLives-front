import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
<<<<<<< HEAD
    const service: BaseService<any> = TestBed.get(BaseService);
=======
    const service: BaseService = TestBed.get(BaseService);
>>>>>>> 1cd384a6f19cab91602e56ada9ea7e8faa344fab
    expect(service).toBeTruthy();
  });
});
