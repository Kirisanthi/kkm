import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivity222Component } from './add-activity222.component';

describe('AddActivity222Component', () => {
  let component: AddActivity222Component;
  let fixture: ComponentFixture<AddActivity222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivity222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivity222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
