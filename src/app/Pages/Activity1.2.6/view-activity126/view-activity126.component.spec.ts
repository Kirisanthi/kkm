import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity126Component } from './view-activity126.component';

describe('ViewActivity126Component', () => {
  let component: ViewActivity126Component;
  let fixture: ComponentFixture<ViewActivity126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
