import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity213Component } from './add-activity213.component';

describe('AddActivity213Component', () => {
  let component: AddActivity213Component;
  let fixture: ComponentFixture<AddActivity213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
