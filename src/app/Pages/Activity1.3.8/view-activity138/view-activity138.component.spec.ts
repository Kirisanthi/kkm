import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity138Component } from './view-activity138.component';

describe('ViewActivity138Component', () => {
  let component: ViewActivity138Component;
  let fixture: ComponentFixture<ViewActivity138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
