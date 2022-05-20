import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPovertyComponent } from './add-poverty.component';

describe('AddPovertyComponent', () => {
  let component: AddPovertyComponent;
  let fixture: ComponentFixture<AddPovertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPovertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPovertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
