import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentValidationComponent } from './add-student-validation.component';

describe('AddStudentValidationComponent', () => {
  let component: AddStudentValidationComponent;
  let fixture: ComponentFixture<AddStudentValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
