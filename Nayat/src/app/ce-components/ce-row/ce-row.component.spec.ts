import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRowComponent } from './ce-row.component';

describe('CeRowComponent', () => {
  let component: CeRowComponent;
  let fixture: ComponentFixture<CeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
