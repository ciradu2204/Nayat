import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRatingComponent } from './ce-rating.component';

describe('CeRatingComponent', () => {
  let component: CeRatingComponent;
  let fixture: ComponentFixture<CeRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
