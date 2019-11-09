import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeBadgeComponent } from './ce-badge.component';

describe('CeBadgeComponent', () => {
  let component: CeBadgeComponent;
  let fixture: ComponentFixture<CeBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
