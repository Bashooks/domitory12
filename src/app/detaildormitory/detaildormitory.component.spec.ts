import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildormitoryComponent } from './detaildormitory.component';

describe('DetaildormitoryComponent', () => {
  let component: DetaildormitoryComponent;
  let fixture: ComponentFixture<DetaildormitoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaildormitoryComponent]
    });
    fixture = TestBed.createComponent(DetaildormitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
