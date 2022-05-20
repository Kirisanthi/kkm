import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity112Component } from './view-activity112.component';

describe('ViewActivity112Component', () => {
  let component: ViewActivity112Component;
  let fixture: ComponentFixture<ViewActivity112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
