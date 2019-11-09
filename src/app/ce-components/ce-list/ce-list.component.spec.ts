import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeListComponent } from './ce-list.component';

describe('CeListComponent', () => {
  let component: CeListComponent;
  let fixture: ComponentFixture<CeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
