import { TestBed } from '@angular/core/testing';

import { SubmitdocumentsService } from './submitdocuments.service';

describe('SubmitdocumentsService', () => {
  let service: SubmitdocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitdocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
