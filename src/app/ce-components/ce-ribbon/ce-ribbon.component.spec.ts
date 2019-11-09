import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRibbonComponent } from './ce-ribbon.component';

describe('CeRibbonComponent', () => {
  let component: CeRibbonComponent;
  let fixture: ComponentFixture<CeRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
