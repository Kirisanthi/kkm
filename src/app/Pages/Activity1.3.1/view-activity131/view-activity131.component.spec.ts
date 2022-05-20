import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity131Component } from './view-activity131.component';

describe('ViewActivity131Component', () => {
  let component: ViewActivity131Component;
  let fixture: ComponentFixture<ViewActivity131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
