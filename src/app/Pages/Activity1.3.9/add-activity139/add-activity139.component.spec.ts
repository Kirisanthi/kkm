import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity139Component } from './add-activity139.component';

describe('AddActivity139Component', () => {
  let component: AddActivity139Component;
  let fixture: ComponentFixture<AddActivity139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
