import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity135Component } from './add-activity135.component';

describe('AddActivity135Component', () => {
  let component: AddActivity135Component;
  let fixture: ComponentFixture<AddActivity135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
