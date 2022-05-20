import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecompareComponent } from './scorecompare.component';

describe('ScorecompareComponent', () => {
  let component: ScorecompareComponent;
  let fixture: ComponentFixture<ScorecompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
