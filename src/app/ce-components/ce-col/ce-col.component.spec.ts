import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeColComponent } from './ce-col.component';

describe('CeColComponent', () => {
  let component: CeColComponent;
  let fixture: ComponentFixture<CeColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
