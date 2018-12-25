import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFatwaComponent } from './add-fatwa.component';

describe('AddFatwaComponent', () => {
  let component: AddFatwaComponent;
  let fixture: ComponentFixture<AddFatwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFatwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFatwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
