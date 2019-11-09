import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeCardHeaderComponent } from './ce-card-header.component';

describe('CeCardHeaderComponent', () => {
  let component: CeCardHeaderComponent;
  let fixture: ComponentFixture<CeCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
