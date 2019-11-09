import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeCollapseComponent } from './ce-collapse.component';

describe('CeCollapseComponent', () => {
  let component: CeCollapseComponent;
  let fixture: ComponentFixture<CeCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
