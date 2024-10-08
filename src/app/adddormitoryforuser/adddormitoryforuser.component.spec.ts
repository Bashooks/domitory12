import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddormitoryforuserComponent } from './adddormitoryforuser.component';

describe('AdddormitoryforuserComponent', () => {
  let component: AdddormitoryforuserComponent;
  let fixture: ComponentFixture<AdddormitoryforuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddormitoryforuserComponent]
    });
    fixture = TestBed.createComponent(AdddormitoryforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
