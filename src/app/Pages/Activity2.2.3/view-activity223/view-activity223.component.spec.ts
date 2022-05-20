import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity223Component } from './view-activity223.component';

describe('ViewActivity223Component', () => {
  let component: ViewActivity223Component;
  let fixture: ComponentFixture<ViewActivity223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
