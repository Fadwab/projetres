import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReservationComponent } from './reservation/reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ConsultReservationComponent } from './consult-reservation/consult-reservation.component';
import { ReservationEventComponent } from './reservation-event/reservation-event.component'
import {AjoutReservationComponent} from './ajout-reservation/ajout-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { ReservationEventDayComponent } from './reservation-event-day/reservation-event-day.component'
import { ReservationEventWeekComponent } from './reservation-event-week/reservation-event-week.component'

import { UsertableComponent} from './usertable/usertable.component';
import { SharedModule } from "../shared/shared.module";
import { ChatModule } from "../chat/chat.module";
import { AddSalleComponent } from './add-salle/add-salle.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChatModule
        
    ],
    declarations: [
       
        ReservationComponent,
        ConsultReservationComponent,
        DeleteReservationComponent,
        ReservationEventComponent,
        ReservationEventDayComponent,
         ReservationEventWeekComponent,
        AjoutReservationComponent,
        EditReservationComponent,
        UsertableComponent,
        AddSalleComponent,
        
        
    ],
    entryComponents: [
        EditReservationComponent,
        ConsultReservationComponent,
        DeleteReservationComponent,
        AjoutReservationComponent,
    ],
})
export class ReservationModule { }
