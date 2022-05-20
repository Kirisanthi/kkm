import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity121Component } from './add-activity121.component';

describe('AddActivity121Component', () => {
  let component: AddActivity121Component;
  let fixture: ComponentFixture<AddActivity121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
