import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity132Component } from './add-activity132.component';

describe('AddActivity132Component', () => {
  let component: AddActivity132Component;
  let fixture: ComponentFixture<AddActivity132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
