import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeToggleButtonComponent } from './ce-toggle-button.component';

describe('CeToggleButtonComponent', () => {
  let component: CeToggleButtonComponent;
  let fixture: ComponentFixture<CeToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
