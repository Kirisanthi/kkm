import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity212Component } from './view-activity212.component';

describe('ViewActivity212Component', () => {
  let component: ViewActivity212Component;
  let fixture: ComponentFixture<ViewActivity212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
