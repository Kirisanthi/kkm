import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity111Component } from './add-activity111.component';

describe('AddActivity111Component', () => {
  let component: AddActivity111Component;
  let fixture: ComponentFixture<AddActivity111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
