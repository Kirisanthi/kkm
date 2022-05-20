import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity126Component } from './add-activity126.component';

describe('AddActivity126Component', () => {
  let component: AddActivity126Component;
  let fixture: ComponentFixture<AddActivity126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
