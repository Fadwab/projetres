import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEventWeekComponent } from './reservation-event-week.component';

describe('ReservationEventWeekComponent', () => {
  let component: ReservationEventWeekComponent;
  let fixture: ComponentFixture<ReservationEventWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationEventWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationEventWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
