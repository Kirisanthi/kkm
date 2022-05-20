import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity213Component } from './view-activity213.component';

describe('ViewActivity213Component', () => {
  let component: ViewActivity213Component;
  let fixture: ComponentFixture<ViewActivity213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
