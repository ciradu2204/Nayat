import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CePercentageDonutComponent } from './ce-percentage-donut.component';

describe('CePercentageDonutComponent', () => {
  let component: CePercentageDonutComponent;
  let fixture: ComponentFixture<CePercentageDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CePercentageDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CePercentageDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
