import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeCardFooterComponent } from './ce-card-footer.component';

describe('CeCardFooterComponent', () => {
  let component: CeCardFooterComponent;
  let fixture: ComponentFixture<CeCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
