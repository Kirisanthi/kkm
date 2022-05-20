import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomecompareComponent } from './incomecompare.component';

describe('IncomecompareComponent', () => {
  let component: IncomecompareComponent;
  let fixture: ComponentFixture<IncomecompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomecompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomecompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
