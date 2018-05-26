import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEventDayComponent } from './reservation-event-day.component';

describe('ReservationEventComponent', () => {
  let component: ReservationEventDayComponent;
  let fixture: ComponentFixture<ReservationEventDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationEventDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationEventDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
