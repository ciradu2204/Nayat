import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRadioTabButtonComponent } from './ce-radio-tab-button.component';

describe('CeRadioTabButtonComponent', () => {
  let component: CeRadioTabButtonComponent;
  let fixture: ComponentFixture<CeRadioTabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeRadioTabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeRadioTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
