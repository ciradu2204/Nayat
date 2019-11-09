import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeContentComponent } from './ce-content.component';

describe('CeContentComponent', () => {
  let component: CeContentComponent;
  let fixture: ComponentFixture<CeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
