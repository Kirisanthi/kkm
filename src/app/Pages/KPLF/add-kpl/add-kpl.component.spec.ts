import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKplComponent } from './add-kpl.component';

describe('AddKplComponent', () => {
  let component: AddKplComponent;
  let fixture: ComponentFixture<AddKplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
