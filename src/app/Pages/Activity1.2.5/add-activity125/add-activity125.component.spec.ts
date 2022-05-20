import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity125Component } from './add-activity125.component';

describe('AddActivity125Component', () => {
  let component: AddActivity125Component;
  let fixture: ComponentFixture<AddActivity125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
