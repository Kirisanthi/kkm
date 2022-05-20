import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity124Component } from './add-activity124.component';

describe('AddActivity124Component', () => {
  let component: AddActivity124Component;
  let fixture: ComponentFixture<AddActivity124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
