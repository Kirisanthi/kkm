import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity134Component } from './view-activity134.component';

describe('ViewActivity134Component', () => {
  let component: ViewActivity134Component;
  let fixture: ComponentFixture<ViewActivity134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
