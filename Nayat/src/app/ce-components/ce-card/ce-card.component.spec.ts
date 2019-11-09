import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeCardComponent } from './ce-card.component';

describe('CeCardComponent', () => {
  let component: CeCardComponent;
  let fixture: ComponentFixture<CeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
