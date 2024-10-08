import { TestBed } from '@angular/core/testing';

import { DocumenttrackingService } from './documenttracking.service';

describe('DocumenttrackingService', () => {
  let service: DocumenttrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumenttrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
