import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity123Component } from './view-activity123.component';

describe('ViewActivity123Component', () => {
  let component: ViewActivity123Component;
  let fixture: ComponentFixture<ViewActivity123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
