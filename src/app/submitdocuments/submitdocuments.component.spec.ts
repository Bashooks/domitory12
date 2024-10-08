import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitdocumentsComponent } from './submitdocuments.component';

describe('SubmitdocumentsComponent', () => {
  let component: SubmitdocumentsComponent;
  let fixture: ComponentFixture<SubmitdocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitdocumentsComponent]
    });
    fixture = TestBed.createComponent(SubmitdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
