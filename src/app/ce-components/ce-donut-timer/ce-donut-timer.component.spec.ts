import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDonutTimerComponent } from './ce-donut-timer.component';

describe('CeDonutTimerComponent', () => {
  let component: CeDonutTimerComponent;
  let fixture: ComponentFixture<CeDonutTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeDonutTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeDonutTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
