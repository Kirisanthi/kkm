import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity211Component } from './view-activity211.component';

describe('ViewActivity211Component', () => {
  let component: ViewActivity211Component;
  let fixture: ComponentFixture<ViewActivity211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
