import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity311Component } from './view-activity311.component';

describe('ViewActivity311Component', () => {
  let component: ViewActivity311Component;
  let fixture: ComponentFixture<ViewActivity311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
