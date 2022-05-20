import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity211Component } from './add-activity211.component';

describe('AddActivity211Component', () => {
  let component: AddActivity211Component;
  let fixture: ComponentFixture<AddActivity211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
