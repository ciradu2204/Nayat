import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeMoodSelectComponent } from './ce-mood-select.component';

describe('CeMoodSelectComponent', () => {
  let component: CeMoodSelectComponent;
  let fixture: ComponentFixture<CeMoodSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeMoodSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeMoodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
