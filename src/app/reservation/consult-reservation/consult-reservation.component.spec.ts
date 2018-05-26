import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReservationComponent } from './consult-reservation.component';

describe('ConsultReservationComponent', () => {
  let component: ConsultReservationComponent;
  let fixture: ComponentFixture<ConsultReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
