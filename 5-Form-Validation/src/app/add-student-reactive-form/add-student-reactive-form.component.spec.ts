import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentReactiveFormComponent } from './add-student-reactive-form.component';

describe('AddStudentReactiveFormComponent', () => {
  let component: AddStudentReactiveFormComponent;
  let fixture: ComponentFixture<AddStudentReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
