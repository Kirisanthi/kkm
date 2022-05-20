import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivity323Component } from './view-activity323.component';

describe('ViewActivity323Component', () => {
  let component: ViewActivity323Component;
  let fixture: ComponentFixture<ViewActivity323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivity323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivity323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
