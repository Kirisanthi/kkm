import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity222Component } from './view-activity222.component';

describe('ViewActivity222Component', () => {
  let component: ViewActivity222Component;
  let fixture: ComponentFixture<ViewActivity222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
