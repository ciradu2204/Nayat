import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeGridComponent } from './ce-grid.component';

describe('CeGridComponent', () => {
  let component: CeGridComponent;
  let fixture: ComponentFixture<CeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
