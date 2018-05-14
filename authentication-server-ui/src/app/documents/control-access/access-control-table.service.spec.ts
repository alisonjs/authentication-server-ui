import { TestBed, inject } from '@angular/core/testing';

import { AccessControlTableService } from './access-control-table.service';

describe('AccessControlTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlTableService]
    });
  });

  it('should be created', inject([AccessControlTableService], (service: AccessControlTableService) => {
    expect(service).toBeTruthy();
  }));
});
