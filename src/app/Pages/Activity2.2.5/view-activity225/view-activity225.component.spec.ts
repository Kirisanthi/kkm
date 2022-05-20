import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity225Component } from './view-activity225.component';

describe('ViewActivity225Component', () => {
  let component: ViewActivity225Component;
  let fixture: ComponentFixture<ViewActivity225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
