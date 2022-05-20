import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphScaleComponent } from './graph-scale.component';

describe('GraphScaleComponent', () => {
  let component: GraphScaleComponent;
  let fixture: ComponentFixture<GraphScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
