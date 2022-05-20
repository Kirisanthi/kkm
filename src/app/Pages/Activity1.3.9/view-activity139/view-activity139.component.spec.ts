import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity139Component } from './view-activity139.component';

describe('ViewActivity139Component', () => {
  let component: ViewActivity139Component;
  let fixture: ComponentFixture<ViewActivity139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
