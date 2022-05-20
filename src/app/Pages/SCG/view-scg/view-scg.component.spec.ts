import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScgComponent } from './view-scg.component';

describe('ViewScgComponent', () => {
  let component: ViewScgComponent;
  let fixture: ComponentFixture<ViewScgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
