import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity133Component } from './add-activity133.component';

describe('AddActivity133Component', () => {
  let component: AddActivity133Component;
  let fixture: ComponentFixture<AddActivity133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
