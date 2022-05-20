import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity3131Component } from './view-activity3131.component';

describe('ViewActivity3131Component', () => {
  let component: ViewActivity3131Component;
  let fixture: ComponentFixture<ViewActivity3131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity3131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity3131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
