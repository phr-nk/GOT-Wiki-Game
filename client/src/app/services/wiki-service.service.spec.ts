import { TestBed } from '@angular/core/testing';

import { WikiServiceService } from './wiki-service.service';

describe('WikiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiServiceService = TestBed.get(WikiServiceService);
    expect(service).toBeTruthy();
  });
});
