import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScgComponent } from './add-scg.component';

describe('AddScgComponent', () => {
  let component: AddScgComponent;
  let fixture: ComponentFixture<AddScgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
