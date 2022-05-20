import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPovertyComponent } from './view-poverty.component';

describe('ViewPovertyComponent', () => {
  let component: ViewPovertyComponent;
  let fixture: ComponentFixture<ViewPovertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPovertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPovertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
