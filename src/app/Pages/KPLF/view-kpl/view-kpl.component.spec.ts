import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKplComponent } from './view-kpl.component';

describe('ViewKplComponent', () => {
  let component: ViewKplComponent;
  let fixture: ComponentFixture<ViewKplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewKplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
