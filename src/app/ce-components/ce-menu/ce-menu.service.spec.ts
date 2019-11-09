import { TestBed } from '@angular/core/testing';

import { CeMenuService } from './ce-menu.service';

describe('CeMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeMenuService = TestBed.get(CeMenuService);
    expect(service).toBeTruthy();
  });
});
