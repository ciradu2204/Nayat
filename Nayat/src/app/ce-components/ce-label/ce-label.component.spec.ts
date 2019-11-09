import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeLabelComponent } from './ce-label.component';

describe('CeLabelComponent', () => {
  let component: CeLabelComponent;
  let fixture: ComponentFixture<CeLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
