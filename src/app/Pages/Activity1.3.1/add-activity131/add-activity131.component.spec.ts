import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity131Component } from './add-activity131.component';

describe('AddActivity131Component', () => {
  let component: AddActivity131Component;
  let fixture: ComponentFixture<AddActivity131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
