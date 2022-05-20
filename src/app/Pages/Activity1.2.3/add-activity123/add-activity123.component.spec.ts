import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity123Component } from './add-activity123.component';

describe('AddActivity123Component', () => {
  let component: AddActivity123Component;
  let fixture: ComponentFixture<AddActivity123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
