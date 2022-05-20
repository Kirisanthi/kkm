import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalecompareComponent } from './scalecompare.component';

describe('ScalecompareComponent', () => {
  let component: ScalecompareComponent;
  let fixture: ComponentFixture<ScalecompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalecompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalecompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
