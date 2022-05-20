import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity225Component } from './add-activity225.component';

describe('AddActivity225Component', () => {
  let component: AddActivity225Component;
  let fixture: ComponentFixture<AddActivity225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
