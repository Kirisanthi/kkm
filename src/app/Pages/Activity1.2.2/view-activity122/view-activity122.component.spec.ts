import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity122Component } from './view-activity122.component';

describe('ViewActivity122Component', () => {
  let component: ViewActivity122Component;
  let fixture: ComponentFixture<ViewActivity122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
