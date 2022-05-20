import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity125Component } from './view-activity125.component';

describe('ViewActivity125Component', () => {
  let component: ViewActivity125Component;
  let fixture: ComponentFixture<ViewActivity125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
