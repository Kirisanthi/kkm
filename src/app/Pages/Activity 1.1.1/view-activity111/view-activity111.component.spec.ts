import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity111Component } from './view-activity111.component';

describe('ViewActivity111Component', () => {
  let component: ViewActivity111Component;
  let fixture: ComponentFixture<ViewActivity111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
