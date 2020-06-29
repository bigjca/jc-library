import { TestBed } from '@angular/core/testing';

import { JcLibraryService } from './jc-library.service';

describe('JcLibraryService', () => {
  let service: JcLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JcLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
