import { TestBed } from '@angular/core/testing';

import { CeModalService } from './ce-modal-service.service';

describe('CeModalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeModalService = TestBed.get(CeModalService);
    expect(service).toBeTruthy();
  });
});
