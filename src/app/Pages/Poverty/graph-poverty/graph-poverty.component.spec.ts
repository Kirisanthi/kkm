import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPovertyComponent } from './graph-poverty.component';

describe('GraphPovertyComponent', () => {
  let component: GraphPovertyComponent;
  let fixture: ComponentFixture<GraphPovertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPovertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPovertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
