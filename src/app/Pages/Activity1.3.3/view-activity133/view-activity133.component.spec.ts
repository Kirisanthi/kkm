import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity133Component } from './view-activity133.component';

describe('ViewActivity133Component', () => {
  let component: ViewActivity133Component;
  let fixture: ComponentFixture<ViewActivity133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
