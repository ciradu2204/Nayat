import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeButtonComponent } from './ce-button.component';

describe('CeButtonComponent', () => {
  let component: CeButtonComponent;
  let fixture: ComponentFixture<CeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
