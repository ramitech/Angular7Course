import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopClickComponent } from './for-loop-click.component';

describe('ForLoopClickComponent', () => {
  let component: ForLoopClickComponent;
  let fixture: ComponentFixture<ForLoopClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLoopClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
