import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeModalComponent } from './ce-modal.component';

describe('CeModalComponent', () => {
  let component: CeModalComponent;
  let fixture: ComponentFixture<CeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
