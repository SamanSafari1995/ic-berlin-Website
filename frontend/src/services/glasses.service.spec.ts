import { TestBed } from '@angular/core/testing';

import { GlassesService } from './glasses.service';

describe('GlassesService', () => {
  let service: GlassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
