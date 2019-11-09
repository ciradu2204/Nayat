import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeOtptextboxComponent } from './ce-otptextbox.component';

describe('CeOtptextboxComponent', () => {
  let component: CeOtptextboxComponent;
  let fixture: ComponentFixture<CeOtptextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeOtptextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeOtptextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
