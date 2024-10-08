import { TestBed } from '@angular/core/testing';

import { AdddormitoryforuserService } from './adddormitoryforuser.service';

describe('AdddormitoryforuserService', () => {
  let service: AdddormitoryforuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdddormitoryforuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
