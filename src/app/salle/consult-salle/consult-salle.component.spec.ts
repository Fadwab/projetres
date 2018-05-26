import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSalleComponent } from './consult-salle.component';

describe('ConsultSalleComponent', () => {
  let component: ConsultSalleComponent;
  let fixture: ComponentFixture<ConsultSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
