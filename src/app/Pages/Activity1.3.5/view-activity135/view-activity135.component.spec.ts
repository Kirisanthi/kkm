import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity135Component } from './view-activity135.component';

describe('ViewActivity135Component', () => {
  let component: ViewActivity135Component;
  let fixture: ComponentFixture<ViewActivity135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
