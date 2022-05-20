import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity324Component } from './view-activity324.component';

describe('ViewActivity324Component', () => {
  let component: ViewActivity324Component;
  let fixture: ComponentFixture<ViewActivity324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
