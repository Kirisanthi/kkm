import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity112Component } from './add-activity112.component';

describe('AddActivity112Component', () => {
  let component: AddActivity112Component;
  let fixture: ComponentFixture<AddActivity112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
