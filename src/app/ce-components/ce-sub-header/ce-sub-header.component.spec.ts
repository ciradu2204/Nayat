import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeSubHeaderComponent } from './ce-sub-header.component';

describe('CeSubHeaderComponent', () => {
  let component: CeSubHeaderComponent;
  let fixture: ComponentFixture<CeSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeSubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
