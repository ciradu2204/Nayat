import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeHorizontalStepperComponent } from './ce-horizontal-stepper.component';

describe('CeHorizontalStepperComponent', () => {
  let component: CeHorizontalStepperComponent;
  let fixture: ComponentFixture<CeHorizontalStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeHorizontalStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeHorizontalStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
