import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumenttrackingComponent } from './documenttracking.component';

describe('DocumenttrackingComponent', () => {
  let component: DocumenttrackingComponent;
  let fixture: ComponentFixture<DocumenttrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumenttrackingComponent]
    });
    fixture = TestBed.createComponent(DocumenttrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
