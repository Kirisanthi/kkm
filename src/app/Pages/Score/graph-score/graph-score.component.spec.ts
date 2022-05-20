import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphScoreComponent } from './graph-score.component';

describe('GraphScoreComponent', () => {
  let component: GraphScoreComponent;
  let fixture: ComponentFixture<GraphScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
