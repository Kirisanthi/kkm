import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity121Component } from './view-activity121.component';

describe('ViewActivity121Component', () => {
  let component: ViewActivity121Component;
  let fixture: ComponentFixture<ViewActivity121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
