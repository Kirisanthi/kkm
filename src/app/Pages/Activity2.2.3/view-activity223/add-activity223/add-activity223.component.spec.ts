import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity223Component } from './add-activity223.component';

describe('AddActivity223Component', () => {
  let component: AddActivity223Component;
  let fixture: ComponentFixture<AddActivity223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
