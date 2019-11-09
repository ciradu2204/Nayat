import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextareaComponent } from './ce-textarea.component';

describe('CeTextareaComponent', () => {
  let component: CeTextareaComponent;
  let fixture: ComponentFixture<CeTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
