import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFooterComponent } from './ce-footer.component';

describe('CeFooterComponent', () => {
  let component: CeFooterComponent;
  let fixture: ComponentFixture<CeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
