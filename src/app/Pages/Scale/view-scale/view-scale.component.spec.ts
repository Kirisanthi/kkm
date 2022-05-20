import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScaleComponent } from './view-scale.component';

describe('ViewScaleComponent', () => {
  let component: ViewScaleComponent;
  let fixture: ComponentFixture<ViewScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
