import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaListComponent } from './fatwa-list.component';

describe('FatwaListComponent', () => {
  let component: FatwaListComponent;
  let fixture: ComponentFixture<FatwaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatwaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatwaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
