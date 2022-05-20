import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PovertycompareComponent } from './povertycompare.component';

describe('PovertycompareComponent', () => {
  let component: PovertycompareComponent;
  let fixture: ComponentFixture<PovertycompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PovertycompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PovertycompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
