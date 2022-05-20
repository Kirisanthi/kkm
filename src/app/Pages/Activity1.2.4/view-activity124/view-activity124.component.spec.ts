import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity124Component } from './view-activity124.component';

describe('ViewActivity124Component', () => {
  let component: ViewActivity124Component;
  let fixture: ComponentFixture<ViewActivity124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
