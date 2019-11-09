import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeCheckboxComponent } from './ce-checkbox.component';

describe('CeCheckboxComponent', () => {
  let component: CeCheckboxComponent;
  let fixture: ComponentFixture<CeCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
