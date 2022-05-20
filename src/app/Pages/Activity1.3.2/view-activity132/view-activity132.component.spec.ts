import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity132Component } from './view-activity132.component';

describe('ViewActivity132Component', () => {
  let component: ViewActivity132Component;
  let fixture: ComponentFixture<ViewActivity132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
