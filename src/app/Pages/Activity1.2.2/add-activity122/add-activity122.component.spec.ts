import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity122Component } from './add-activity122.component';

describe('AddActivity122Component', () => {
  let component: AddActivity122Component;
  let fixture: ComponentFixture<AddActivity122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
