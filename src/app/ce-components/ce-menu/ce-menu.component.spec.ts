import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeMenuComponent } from './ce-menu.component';

describe('CeMenuComponent', () => {
  let component: CeMenuComponent;
  let fixture: ComponentFixture<CeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
