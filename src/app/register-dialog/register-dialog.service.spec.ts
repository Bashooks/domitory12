import { TestBed } from '@angular/core/testing';

import { RegisterDialogService } from './register-dialog.service';

describe('RegisterDialogService', () => {
  let service: RegisterDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
