import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity212Component } from './add-activity212.component';

describe('AddActivity212Component', () => {
  let component: AddActivity212Component;
  let fixture: ComponentFixture<AddActivity212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
