import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeVerticalStepperComponent } from './ce-vertical-stepper.component';

describe('CeVerticalStepperComponent', () => {
  let component: CeVerticalStepperComponent;
  let fixture: ComponentFixture<CeVerticalStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeVerticalStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeVerticalStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
