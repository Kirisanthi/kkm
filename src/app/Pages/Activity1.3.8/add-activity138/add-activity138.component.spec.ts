import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity138Component } from './add-activity138.component';

describe('AddActivity138Component', () => {
  let component: AddActivity138Component;
  let fixture: ComponentFixture<AddActivity138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
