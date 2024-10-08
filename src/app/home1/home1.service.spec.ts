import { TestBed } from '@angular/core/testing';

import { Home1Service } from './home1.service';

describe('Home1Service', () => {
  let service: Home1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
