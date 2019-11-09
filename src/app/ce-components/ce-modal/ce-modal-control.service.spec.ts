import { TestBed } from '@angular/core/testing';

import { CeModalControlService } from './ce-modal-control.service';

describe('CeModalControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeModalControlService = TestBed.get(CeModalControlService);
    expect(service).toBeTruthy();
  });
});
