import { TestBed } from '@angular/core/testing';

import { DetaildormitoryService } from './detaildormitory.service';

describe('DetaildormitoryService', () => {
  let service: DetaildormitoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaildormitoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
