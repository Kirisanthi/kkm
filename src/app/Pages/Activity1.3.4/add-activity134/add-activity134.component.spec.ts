import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity134Component } from './add-activity134.component';

describe('AddActivity134Component', () => {
  let component: AddActivity134Component;
  let fixture: ComponentFixture<AddActivity134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
