import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAcceeComponent } from './gestion-accee.component';

describe('GestionAcceeComponent', () => {
  let component: GestionAcceeComponent;
  let fixture: ComponentFixture<GestionAcceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAcceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAcceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
