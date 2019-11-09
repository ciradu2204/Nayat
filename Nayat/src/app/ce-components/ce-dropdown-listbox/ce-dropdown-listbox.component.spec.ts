import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDropdownListboxComponent } from './ce-dropdown-listbox.component';

describe('CeDropdownListboxComponent', () => {
  let component: CeDropdownListboxComponent;
  let fixture: ComponentFixture<CeDropdownListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeDropdownListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeDropdownListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
